import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ChatRequest, ChatResponse } from '@/types/chat';
import LocalData from '@/lib/localdata';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const allowedOrigin = "http://localhost:3001";

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, x-chat-service-api-key",
      },
    }
  );
}

export async function POST(request: NextRequest): Promise<NextResponse<ChatResponse>> {
  const corsHeaders = {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, x-chat-service-api-key",
  };

  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { message: '', error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const apiKey = request.headers.get("x-chat-service-api-key");
    if (!apiKey) {
      return NextResponse.json(
        { message: '', error: 'Missing x-chat-service-api-key header.' },
        { status: 400 }
      );
    }

    const body: ChatRequest = await request.json();

    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json(
        { message: '', error: 'Invalid request format.' },
        { status: 400 }
      );
    }

    // Get business context using the apiKey from the header
    const businessRecord = LocalData.get(apiKey);
    if (!businessRecord) {
      console.log({ localData: LocalData.getAll() });
      console.log({ apiKey, businessRecord });
      return NextResponse.json(
        { message: '', error: 'Invalid API key.  Please check your x-chat-service-api-key header.' },
        { status: 404 }
      );
    }

    const businessInfo = typeof businessRecord.context === "string"
      ? businessRecord.context
      : JSON.stringify(businessRecord.context, null, 2);

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a helpful customer service assistant for our bakery. Here is the business information:\n\n${businessInfo}\n\nAlways provide accurate information about our business. If someone asks about something not covered, politely let them know you can connect them with a team member for more details.`
        },
        ...body.messages.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const message = completion.choices[0]?.message?.content || '';

    return NextResponse.json({ message }, { headers: corsHeaders });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { message: '', error: 'Failed to get response from AI' },
      { status: 500, headers: corsHeaders }
    );
  }
}
