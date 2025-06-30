# React Chatbot with Next.js and OpenAI

A modern chatbot application built with React, Next.js 15, TypeScript, and OpenAI's GPT API. Features a clean, responsive chat interface with real-time messaging capabilities and customizable business information.

## Features

- 🤖 AI-powered conversations using OpenAI's GPT-3.5-turbo
- 🏢 Customizable business information (hours, products, contact details)
- 💬 Real-time chat interface with message bubbles
- 📱 Responsive design for mobile and desktop
- ⚡ Built with Next.js 15 App Router
- 🎨 Styled with Tailwind CSS
- 🔒 TypeScript for type safety
- 🚀 Server-side API routes for secure OpenAI integration
- 🗄️ PostgreSQL database with Prisma ORM for client context storage

## Business Configuration

The chatbot is designed to act as a customer service assistant for your business. You can customize all business information in `/src/lib/businessConfig.ts`:

### What You Can Customize:
- **Business name and description**
- **Contact information** (address, phone, email, website)
- **Hours of operation** (including special holiday hours)
- **Products and services** with descriptions and pricing
- **Business policies** (returns, shipping, payment methods)
- **Assistant personality** and behavior guidelines

### Quick Setup:
1. Edit `/src/lib/businessConfig.ts` with your business details
2. The AI will automatically use this information to answer customer questions
3. Test the chatbot by asking about your hours, products, or location

## Database Features

The application includes a PostgreSQL database with Prisma ORM for storing client context information:

### Client Context Storage:
- **Persistent conversations** - Store chat history per client
- **User preferences** - Remember customer preferences and settings
- **Custom data** - Store any additional client-specific information

### Database Schema:
- **clientContexts table** - Stores JSON context data for each client
- Includes fields for client ID, context data, created/updated timestamps
- Supports complex data structures through JSON storage

### API Endpoints:
- `GET /api/client-context?clientId=xxx` - Retrieve client context
- `POST /api/client-context` - Create/update client context  
- `DELETE /api/client-context?clientId=xxx` - Delete client context

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- OpenAI API key
- PostgreSQL database (local or hosted)

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Set up your PostgreSQL database:
   - Install PostgreSQL locally, or use a hosted service like Vercel Postgres, Supabase, or Railway
   - Create a new database (e.g., `chatbot_db`)

3. Set up environment variables:

Copy `.env.example` to `.env.local` and configure your API keys and database:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:

```bash
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Database Configuration - PostgreSQL
DATABASE_URL="postgresql://username:password@localhost:5432/chatbot_db"

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_here
```

4. Set up the database:

```bash
# Run database migrations
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate
```

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the chatbot.

## Quick Start with Docker (Recommended)

If you have Docker installed, this is the easiest way to get started:

```bash
# 1. Make sure Docker Desktop is running

# 2. Start PostgreSQL and set up the project
npm run dev:setup
```

This will automatically:
- Start a PostgreSQL container
- Run database migrations  
- Seed the database with business config
- Start the development server

For more Docker options, see [DOCKER.md](./DOCKER.md).

## Manual Setup (Without Docker)

If you prefer to use your own PostgreSQL installation:

1. Follow the [Installation](#installation) steps to set up the project
2. When configuring the database, use your local PostgreSQL instance details
3. Continue with the remaining setup steps

## Project Structure

```
src/
├── app/
│   ├── api/chat/route.ts    # OpenAI API endpoint
│   ├── layout.tsx           # Root layout
│   └── page.tsx            # Main chat page
├── components/
│   ├── ChatInterface.tsx   # Main chat component
│   ├── ChatInput.tsx       # Message input component
│   └── MessageBubble.tsx   # Individual message component
└── types/
    └── chat.ts             # TypeScript interfaces
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
