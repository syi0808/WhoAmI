import { ReactNode } from 'react';
import { containerStyle } from './styles';

export default function TabContainer({ children }: { children?: ReactNode }) {
  return <div {...containerStyle}>{children}</div>;
}
