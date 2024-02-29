'use client';

import { useAnimationFrame } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { addResizeListener } from '../utils/dom';

export const useResize = (callback: () => void) => {
  const isResized = useRef<boolean>(false);

  useEffect(() => {
    const unmountHandler = addResizeListener(() => (isResized.current = true));

    return unmountHandler;
  }, []);

  useAnimationFrame(() => {
    if (isResized.current) {
      callback();

      isResized.current = false;
    }
  });
};
