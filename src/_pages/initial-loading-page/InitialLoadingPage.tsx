import Terminal from '@/components/terminal/Terminal';
import { getIsBot } from '@/shared/utils/header';
import { RefObject } from 'react';

export default function InitialLoadingPage(props: { index: number; desktopItemRef?: RefObject<HTMLElement> }) {
  const isBot = getIsBot();

  if (isBot) return null;

  return <Terminal {...props} />;
}

InitialLoadingPage.displayName = 'Terminal';
