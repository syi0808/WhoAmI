import * as sx from '@stylexjs/stylex';
import DesktopItem from './DesktopItem';
import { ReactElement } from 'react';
import { MissionControlProvider } from './MissionControlContext';

interface Window {
  component: ReactElement<any & { style: sx.StyleXStyles }>;
}

export default function MissionControl({ windows }: { windows: Window[] }) {
  return (
    <MissionControlProvider>
      <div {...sx.props(styles.container)}>
        <DesktopItem />
      </div>
      {windows.map(({ component }) => component)}
    </MissionControlProvider>
  );
}

const styles = sx.create({
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    background: 'rgba(0, 0, 0, 0.2)',
    padding: '16px 0 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px',
    backdropFilter: 'blur(40px)',
  },
});
