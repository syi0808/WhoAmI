import { ComponentType, ReactElement } from 'react';
import TabContainer from './TabContainer';

export type TabElemenet = { element: ReactElement<{ index: number } & Record<PropertyKey, any>>; label: string };

export const withTabContainer = <P extends object>(Component: ComponentType<P>) => {
  function WrappedComponent({ index, ...props }: { index: number } & P) {
    return (
      <TabContainer index={index}>
        <Component {...(props as P)} />
      </TabContainer>
    );
  }

  return WrappedComponent;
};
