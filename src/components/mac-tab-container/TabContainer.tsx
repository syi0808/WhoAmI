'use client';

import { motion, useAnimate } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import * as sx from '@stylexjs/stylex';
import { useMissionControl } from '../mission-control/state-manager/useMissionControl';
import { getSizeDiffToScale } from '@/shared/utils/math';
import { addResizeListener } from '@/shared/utils/dom';

export default function TabContainer({ children, index }: { children?: ReactNode; index?: number }) {
  const { getBoundingClientRect } = useMissionControl();
  const [ref, animate] = useAnimate();

  useEffect(() => {
    const containerDomRect = ref.current?.getBoundingClientRect();
    const domRect = getBoundingClientRect(0);
    const [scaleX, scaleY] = getSizeDiffToScale(
      [containerDomRect.width, containerDomRect.height],
      [domRect?.width ?? 0, domRect?.height ?? 0]
    );

    animate(
      ref.current,
      { x: domRect?.x, y: domRect?.y, scaleX, scaleY },
      { type: 'tween', ease: 'easeInOut', duration: 0.2 }
    );

    const resizeHandler = () => {
      const domRect = getBoundingClientRect(0);

      animate(ref.current, { x: domRect?.x, y: domRect?.y, scaleX, scaleY }, { duration: 0 });
    };

    const unmountHandler = addResizeListener(resizeHandler);

    return unmountHandler;
  }, []);

  return (
    <motion.div initial={{ originX: 0, originY: 0, x: 0, y: 0, scale: 1 }} ref={ref} {...sx.props(styles.container)}>
      <div {...sx.props(styles.styledContainer)}>{children}</div>
    </motion.div>
  );
}

export const styles = sx.create({
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
    position: 'absolute',
  },
});
