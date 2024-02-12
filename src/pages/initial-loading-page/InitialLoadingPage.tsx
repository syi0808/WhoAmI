import { getIsBot } from '@/shared/utils/header';

export default function InitialLoadingPage() {
  const isBot = getIsBot();

  if (isBot) return null;

  return <div></div>;
}
