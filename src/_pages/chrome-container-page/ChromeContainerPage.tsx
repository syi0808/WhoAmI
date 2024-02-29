import Chrome from '@/components/chrome/Container';
import { RefObject } from 'react';

export default function ChromeContainerPage(props: { index: number; desktopItemRef?: RefObject<HTMLElement> }) {
  return <Chrome {...props} />;
}

ChromeContainerPage.displayName = 'Chrome';
