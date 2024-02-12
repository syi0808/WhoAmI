import { NextRequest, NextResponse, userAgent } from 'next/server';

export const IS_BOT_HEADER = 'x-is-bot';

export default function middleware(request: NextRequest) {
  const { isBot } = userAgent(request);

  request.headers.set('x-is-bot', `${isBot}`);

  return NextResponse.next({ request });
}
