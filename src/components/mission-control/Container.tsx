'use client';

import * as sx from '@stylexjs/stylex';
import DesktopItem from './DesktopItem';
import { useServer } from '@/shared/hooks/useServer';
import { ReactNode } from 'react';
import { TabElemenet } from '../mac-tab-container';

export default function MissionControl({
  children,
  desktopItems,
}: {
  children: ReactNode;
  desktopItems: TabElemenet[];
}) {
  const isServer = useServer();

  if (isServer) children;

  return (
    <div {...sx.props(styles.container)}>
      {desktopItems.map(({ label, element }, index) => (
        <DesktopItem key={index} index={index} label={label}>
          {element}
        </DesktopItem>
      ))}
    </div>
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
