// Mock OpenAI
jest.mock('openai', () => {
  return jest.fn().mockImplementation(() => ({
      chat: {
        completions: {
          create: jest.fn().mockResolvedValue({
            choices: [
                { message: { content: 'Mocked AI reply' } }
            ]
          })
        }
      }
  }))
})

// Mock LocalData
jest.mock('@/lib/localdata', () => ({
  __esModule: true,
  default: {
    get: jest.fn().mockImplementation((apiKey: string) => {
      if (apiKey === 'valid-key') {
        return { context: 'Business context' }
      }
      return null
    })
  }
}))

import { NextRequest } from 'next/server';
import { POST } from './route'

describe('POST /api/chat', () => {
  beforeAll(() => {
    process.env.OPENAI_API_KEY = 'test-key';
  })

  it('returns 400 if x-chat-service-api-key is missing', async () => {
    const req = {
      headers: { get: () => undefined },
      json: async () => ({})
    } as unknown as NextRequest

    const res = await POST(req)
    expect(res.status).toBe(400)
    const data = await res.json()
    expect(data).toHaveProperty('error')
    expect(data.error).toBe('Missing x-chat-service-api-key header.')
  })

  it('returns 404 for an invalid api key', async () => {
    const req = {
      headers: { get: () => 'not-valid-key' },
      json: async () => ({ messages: ['test'] })
    } as unknown as NextRequest

    const res = await POST(req)
    expect(res.status).toBe(404)
    const data = await res.json()
    expect(data).toHaveProperty('error')
    expect(data.error).toBe('Invalid API key.  Please check your x-chat-service-api-key header.')
  })

    it('returns 200 for a valid chat request', async () => {
    const req = {
      headers: { get: () => 'valid-key' },
      json: async () => ({ messages: ['test'] })
    } as unknown as NextRequest

    const res = await POST(req)
    expect(res.status).toBe(200)
    const data = await res.json()
    expect(data).not.toHaveProperty('error')
    expect(data).toHaveProperty('message')
    expect(data.message).toBe('Mocked AI reply')
  })
})