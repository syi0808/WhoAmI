'use client';

import { motion } from 'framer-motion';
import { ReactNode, RefObject } from 'react';
import * as sx from '@stylexjs/stylex';
import { useMissionControl } from '../mission-control/state-manager/useMissionControl';
import { useTabAnimation } from './hooks/useTabAnimation';

export default function TabContainer({
  children,
  desktopItemRef,
  index,
}: {
  children?: ReactNode;
  desktopItemRef?: RefObject<HTMLElement>;
  index: number;
}) {
  const { activeIndex } = useMissionControl();
  const isActive = index === activeIndex;
  const scope = useTabAnimation({ desktopItemRef, isActive });

  return (
    <motion.div
      initial={{
        originX: 0,
        originY: 0,
        x: 0,
        y: 0,
        scale: isActive ? 1 : 0.076,
        position: isActive ? 'fixed' : 'absolute',
        zIndex: isActive ? 100 : 'auto',
      }}
      ref={scope}
      {...sx.props(styles.container)}
    >
      <div {...sx.props(styles.styledContainer)}>{children}</div>
    </motion.div>
  );
}

const styles = sx.create({
  styledContainer: {
    border: '1px solid rgba(0, 0, 0, 0.4)',
    borderRadius: '8px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
    overflow: 'hidden',
    position: 'relative',
    '::after': {
      content: '',
      borderRadius: '8px',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      pointerEvents: 'none',
    },
  },
  container: {
    top: 0,
    left: 0,
    position: 'absolute',
  },
});
