'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import * as sx from '@stylexjs/stylex';
import { useTabAnimation } from './hooks/useTabAnimation';
import { useMissionControl } from '../mission-control/state-manager/useMissionControl';

export default function TabContainer({ children, index }: { children?: ReactNode; index: number }) {
  const { activeIndex } = useMissionControl();
  const ref = useTabAnimation(index);

  return (
    <motion.div
      initial={{ originX: 0, originY: 0, x: 0, y: 0, scale: 1 }}
      ref={ref}
      {...sx.props(styles.container(index === activeIndex))}
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
    },
  },
  container: (isActive: boolean) => ({
    top: 0,
    left: 0,
    position: 'fixed',
    zIndex: isActive ? 100 : 'auto',
  }),
});
