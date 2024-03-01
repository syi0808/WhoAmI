import { ReactElement, RefObject } from 'react';

export type TabElemenet = {
  element: ReactElement<{ desktopItemRef?: RefObject<HTMLElement>; index: number } & Record<PropertyKey, any>>;
  label: string;
};
