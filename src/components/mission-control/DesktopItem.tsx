'use client';

import * as sx from '@stylexjs/stylex';
import { useMissionControl } from './state-manager/useMissionControl';

interface Props {
  label: string;
  index: number;
}

export default function DesktopItem({ label, index }: Props) {
  const { setRef } = useMissionControl();

  return (
    <div {...sx.props(styles.container)}>
      <div ref={setRef(index)} {...sx.props(styles.preview)}></div>
      <span {...sx.props(styles.desktopName)}>{label}</span>
    </div>
  );
}

const styles = sx.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  preview: {
    // For aspect-ratio current view
    // Calculrate ratio in real macbook
    width: '7.61svw',
    height: '7.65svh',
    background: 'black',
  },
  desktopName: {
    fontSize: '12px',
    color: 'white',
  },
});
