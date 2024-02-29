'use client';

import { useMissionControl } from '@/components/mission-control/state-manager/useMissionControl';
import { useResize } from '@/shared/hooks/useResize';
import { getSizeDiffToScale } from '@/shared/utils/math';
import { ValueAnimationTransition, useAnimate } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const useTabAnimation = (index: number) => {
  const { getBoundingClientRect, activeIndex } = useMissionControl();
  const [ref, animate] = useAnimate();
  const isActive = index === activeIndex;
  const isActiveRef = useRef(isActive);

  const minimalizeTab = async (options: ValueAnimationTransition) => {
    const { offsetWidth = 0, offsetHeight = 0 } = ref.current;
    const { width = 0, height = 0, x = 0, y = 0 } = getBoundingClientRect(index) ?? {};
    const [scaleX, scaleY] = getSizeDiffToScale([offsetWidth, offsetHeight], [width ?? 0, height ?? 0]);

    return await animate(ref.current, { x, y, scaleX, scaleY }, options);
  };

  useEffect(() => {
    isActiveRef.current = isActive;

    const options: ValueAnimationTransition = { type: 'tween', ease: 'easeInOut', duration: 0.3 };

    if (isActive) {
      const delay = 800;
      setTimeout(() => (ref.current.style.zIndex = '100'), delay);
      animate(ref.current, { x: 0, y: 0, scaleX: 1, scaleY: 1, zIndex: 100 }, { ...options, delay: delay / 1000 });
    } else {
      minimalizeTab({ ...options, delay: 0.4 }).then(() => (ref.current.style.zIndex = 'auto'));
    }
  }, [isActive]);

  useResize(() => {
    if (isActiveRef.current) return;

    minimalizeTab({ duration: 0 });
  });

  return ref;
};
