import { NextResponse } from 'next/server';

export async function GET(_request: Request) {
  return NextResponse.json({ email: 'syi9397@naver.com', phone: '010-7271-4690' });
}
