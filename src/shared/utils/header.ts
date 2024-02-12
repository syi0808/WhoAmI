import { IS_BOT_HEADER } from '@/middleware';
import { headers } from 'next/headers';

export const getIsBot = () => headers().get(IS_BOT_HEADER) === 'true';
