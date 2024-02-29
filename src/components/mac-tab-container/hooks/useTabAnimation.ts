'use client';

import { useResize } from '@/shared/hooks/useResize';
import { useAnimate } from 'framer-motion';
import { RefObject, useEffect, useRef } from 'react';

export const useTabAnimation = ({
  desktopItemRef,
  isActive,
}: {
  desktopItemRef?: RefObject<HTMLElement>;
  isActive: boolean;
}) => {
  const isFirstAnimation = useRef(true);
  const isActiveRef = useRef(isActive);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    isActiveRef.current = isActive;

    if (isFirstAnimation.current) {
      if (isActive) {
        const { x = 0, y = 0 } = desktopItemRef?.current?.getBoundingClientRect() ?? {};
        animate(scope.current, { x: -x, y: -y, scale: 1, zIndex: 100, position: 'absolute' }, { duration: 0 });
      }

      isFirstAnimation.current = false;
    } else {
      if (isActive) {
        const { x = 0, y = 0 } = desktopItemRef?.current?.getBoundingClientRect() ?? {};
        animate(
          scope.current,
          { x: -x, y: -y, scale: 1, zIndex: 100 },
          { duration: 0.25, type: 'tween', ease: 'easeInOut', delay: 0.8 }
        );
      } else {
        animate(scope.current, { x: 0, y: 0, scale: 0.076 }, { duration: 0.25, delay: 0.4 });
      }
    }
  }, [isActive]);

  useResize(() => {
    if (isActiveRef.current) {
      const { x = 0, y = 0 } = desktopItemRef?.current?.getBoundingClientRect() ?? {};

      animate(scope.current, { x: -x, y: -y, scale: 1, zIndex: 100 }, { duration: 0 });
    }
  });

  return scope;
};
