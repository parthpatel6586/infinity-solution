import { NextResponse } from 'next/server';

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

export const rateLimit = (ip: string, limit: number = 5, windowMs: number = 60000) => {
  const now = Date.now();
  const windowStart = now - windowMs;

  const requestData = rateLimitMap.get(ip);

  if (!requestData || requestData.lastReset < windowStart) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return null;
  }

  if (requestData.count >= limit) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  requestData.count += 1;
  rateLimitMap.set(ip, requestData);

  return null;
};
