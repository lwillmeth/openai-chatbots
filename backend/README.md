# React Chatbot with Next.js and OpenAI

A modern chatbot application built with React, Next.js, TypeScript, and OpenAI's GPT API. Features a clean, responsive chat interface with real-time messaging capabilities and customizable business information.

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

The chatbot is designed to act as a B2B backend for customers who want an easy chatbot without much configuration.`:

### What You Can Customize for Each Business:
- **Business name and description**
- **Contact information** (address, phone, email, website)
- **Hours of operation** (including special holiday hours)
- **Products and services** with descriptions and pricing
- **Business policies** (returns, shipping, payment methods)
- **Assistant personality** and behavior guidelines

### Quick Setup:
1. Edit `/src/seeds/` with a JSON file containing a unique API key, name, and any business details
2. The AI will automatically use this information to answer customer questions
3. On the client's site, create a chat component using the backend url and their API key
4. Test the chatbot by asking about their hours, products, or location

### Client Context Storage:
- **Persistent conversations** - Store chat history per client
- **User preferences** - Remember customer preferences and settings
- **Custom data** - Store any additional client-specific information

### API Endpoints:
- `POST /api/chat` - Chat with a bot using the context of a specific customer

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- OpenAI API key

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```
2. Set up environment variables:

Copy `.env.example` to `.env.local` and configure your API keys and database:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:

```bash
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the backend service.

## Project Structure

```
src/
├── app/
│   ├── api/chat/route.ts    # OpenAI API endpoint
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # A default page for the backend
└── types/
    └── chat.ts              # TypeScript interfaces
```
