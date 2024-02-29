'use client';

import { useEffect, useState } from 'react';

export type ResultTexts = { text: string; delay: number }[];

export const useTerminalResult = (texts: ResultTexts, onAnimationEnd?: () => void): [string[], boolean] => {
  const [displayTexts, setDisplayTexts] = useState<string[]>([]);
  const isEnded = texts.length === displayTexts.length;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const addToDisplayTexts = (texts: ResultTexts, index: number) => {
      if (index >= texts.length) return onAnimationEnd?.();

      timer = setTimeout(() => {
        setDisplayTexts(texts.slice(0, index + 1).map(({ text }) => text));

        addToDisplayTexts(texts, index + 1);
      }, texts[index].delay);
    };

    addToDisplayTexts(texts, 0);

    return () => clearTimeout(timer);
  }, [texts]);

  return [displayTexts, isEnded];
};
