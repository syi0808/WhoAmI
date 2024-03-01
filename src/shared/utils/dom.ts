'use client';

import { getFps } from './fps';
import { throttle } from './optimization';

export const addResizeListener = (() => {
  if (typeof window === 'undefined') return () => {};

  type ResizeListener = (event: UIEvent) => void;

  let resizeListeners: ResizeListener[] = [];
  let frameRate = 60;

  const [globalResizeListener, _cancel, options] = throttle((event) => {
    resizeListeners.forEach((listner) => void listner(event));
  }, 1000 / frameRate);

  getFps().then((fps) => {
    const fallbackFps = Math.max(fps, 60);

    (frameRate = fallbackFps), (options.delay = 1000 / fallbackFps);
  });

  window.addEventListener('resize', globalResizeListener);

  return function addResizeListener(listner: ResizeListener) {
    resizeListeners = [...resizeListeners, listner];

    return function removeResizeListener() {
      resizeListeners = resizeListeners.filter((resizeListener) => resizeListener !== listner);
    };
  };
})();
