import Terminal from '@/components/terminal/Terminal';
import { RefObject } from 'react';

export default function InitialLoadingPage(props: { index: number; desktopItemRef?: RefObject<HTMLElement> }) {
  return <Terminal {...props} />;
}

InitialLoadingPage.displayName = 'Terminal';
