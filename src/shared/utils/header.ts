import { IS_BOT_HEADER } from '@/middleware';
import { headers } from 'next/headers';

export async function getIsBot() {
  'use server';

  return headers().get(IS_BOT_HEADER) === 'true';
}
