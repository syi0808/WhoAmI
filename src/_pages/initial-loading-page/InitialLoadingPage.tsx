import Terminal from '@/components/terminal/Terminal';
import { getIsBot } from '@/shared/utils/header';

export default function InitialLoadingPage() {
  const isBot = getIsBot();

  if (isBot) return null;

  return <Terminal />;
}
