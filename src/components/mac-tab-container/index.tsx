import { ComponentType, ReactElement, RefObject } from 'react';
import TabContainer from './TabContainer';

export type TabElemenet = {
  element: ReactElement<{ desktopItemRef?: RefObject<HTMLElement>; index: number } & Record<PropertyKey, any>>;
  label: string;
};

export const withTabContainer = <P extends object>(Component: ComponentType<P>) => {
  function WrappedComponent({
    desktopItemRef,
    index,
    ...props
  }: { desktopItemRef?: RefObject<HTMLElement>; index: number } & P) {
    return (
      <TabContainer index={index} desktopItemRef={desktopItemRef}>
        <Component {...(props as P)} />
      </TabContainer>
    );
  }

  return WrappedComponent;
};
