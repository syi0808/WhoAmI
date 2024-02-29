'use client';

import { useEffect } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

export default function TextAnimation({ text, onAnimationEnd }: { text: string; onAnimationEnd?: () => void }) {
  const count = useMotionValue(0);
  const displayText = useTransform(count, (latest) => text.slice(0, Math.round(latest)));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: 'tween',
      duration: 1,
      ease: 'easeInOut',
      delay: 1.5,
    });

    onAnimationEnd && controls.then(onAnimationEnd);

    return controls.stop;
  }, []);

  return <motion.span>{displayText}</motion.span>;
}
