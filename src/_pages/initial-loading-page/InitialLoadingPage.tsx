import Terminal from '@/components/terminal/Terminal';
import { getIsBot } from '@/shared/utils/header';

export default function InitialLoadingPage(props: { index: number }) {
  const isBot = getIsBot();

  if (isBot) return null;

  return <Terminal {...props} />;
}

InitialLoadingPage.displayName = 'Terminal';
