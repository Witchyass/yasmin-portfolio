import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import { portfolioData, systemPrompt } from '@/lib/portfolio-data';

// Rate limiting storage (in production, use Redis or a database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Rate limit configuration
const RATE_LIMIT = {
  maxRequests: 20, // Max messages per session
  windowMs: 60 * 60 * 1000, // 1 hour
  cooldownMs: 3000, // 3 seconds between messages
};

function getRateLimitKey(req: NextRequest): string {
  // Use IP address and user agent for rate limiting
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
  return `${ip}`;
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  // Clean up old entries
  if (record && now > record.resetTime) {
    rateLimitMap.delete(key);
  }

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT.windowMs });
    return { allowed: true, remaining: RATE_LIMIT.maxRequests - 1 };
  }

  if (record.count >= RATE_LIMIT.maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT.maxRequests - record.count };
}

export async function POST(req: NextRequest) {
  try {
    // Check rate limit
    const rateLimitKey = getRateLimitKey(req);
    const { allowed, remaining } = checkRateLimit(rateLimitKey);

    if (!allowed) {
      return NextResponse.json(
        { 
          error: "Rate limit exceeded. Please try again later! 😊",
          remaining: 0
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(Date.now() + RATE_LIMIT.windowMs),
          }
        }
      );
    }

    const { message, conversationHistory = [] } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Initialize Gemini
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GOOGLE_GEMINI_API_KEY is not set');
      return NextResponse.json(
        { error: 'AI service is not configured. Please add your Gemini API key.' },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Build context with portfolio data
    const context = `${systemPrompt}

YASMIN'S PORTFOLIO DATA:
${JSON.stringify(portfolioData, null, 2)}

Use this information to answer questions about Yasmin accurately and engagingly.`;

    // Build conversation history
    const history = conversationHistory.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: context }],
        },
        {
          role: 'model',
          parts: [{ text: 'I understand! I\'m ready to represent Yasmin\'s portfolio and answer questions about her background, skills, projects, and experiences. I\'ll be warm, engaging, and accurate! 🌟' }],
        },
        ...history,
      ],
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.8,
      },
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return NextResponse.json(
      { 
        response,
        remaining 
      },
      {
        headers: {
          'X-RateLimit-Remaining': String(remaining),
        }
      }
    );
  } catch (error: any) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate response' },
      { status: 500 }
    );
  }
}
