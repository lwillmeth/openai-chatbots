export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface ChatRequest {
  messages: Pick<Message, 'role' | 'content'>[];
}

export interface ChatResponse {
  message: string;
  error?: string;
}
