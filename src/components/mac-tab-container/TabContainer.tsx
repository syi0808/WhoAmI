'use client';

import { motion, useAnimate } from 'framer-motion';
import { ComponentType, ReactNode, useEffect } from 'react';
import * as sx from '@stylexjs/stylex';
import { useMissionControl } from '../mission-control/state-manager/useMissionControl';
import { getSizeDiffToScale } from '@/shared/utils/math';
import { useResize } from '@/shared/hooks/useResize';

export default function TabContainer({ children, index }: { children?: ReactNode; index: number }) {
  const { getBoundingClientRect } = useMissionControl();
  const [ref, animate] = useAnimate();

  useEffect(() => {
    const { offsetWidth = 0, offsetHeight = 0 } = ref.current;
    const { width = 0, height = 0, x, y } = getBoundingClientRect(0) ?? {};
    const [scaleX, scaleY] = getSizeDiffToScale([offsetWidth, offsetHeight], [width ?? 0, height ?? 0]);

    animate(ref.current, { x, y, scaleX, scaleY }, { type: 'tween', ease: 'easeInOut', duration: 0.2 });
  }, []);

  useResize(() => {
    const { offsetWidth = 0, offsetHeight = 0 } = ref.current;
    const { width = 0, height = 0, x = 0, y = 0 } = getBoundingClientRect(0) ?? {};
    const [scaleX, scaleY] = getSizeDiffToScale([offsetWidth, offsetHeight], [width ?? 0, height ?? 0]);

    animate(ref.current, { x, y, scaleX, scaleY }, { duration: 0 });
  });

  return (
    <motion.div initial={{ originX: 0, originY: 0, x: 0, y: 0, scale: 1 }} ref={ref} {...sx.props(styles.container)}>
      <div {...sx.props(styles.styledContainer)}>{children}</div>
    </motion.div>
  );
}

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
  container: {
    top: 0,
    left: 0,
    position: 'fixed',
  },
});
