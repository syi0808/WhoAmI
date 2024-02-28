'use client';

import { throttle } from './optimization';

export const addResizeListener = (() => {
  type ResizeListener = (event: UIEvent) => void;

  let resizeListeners: ResizeListener[] = [];
  const [globalResizeListener, _cancel] = throttle((event) => {
    resizeListeners.forEach((listner) => void listner(event));
  }, 100);

  window.addEventListener('resize', globalResizeListener);

  return function addResizeListener(listner: ResizeListener) {
    resizeListeners = [...resizeListeners, listner];

    return () => void (resizeListeners = resizeListeners.filter((resizeListener) => resizeListener !== listner));
  };
})();
