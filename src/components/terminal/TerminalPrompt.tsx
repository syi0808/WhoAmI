'use client';

import { promptStyle } from './styles';
import TextAnimation from '../text-animation/TextAnimation';
import { ReactNode, useEffect, useState } from 'react';
import { ResultTexts, useTerminalResult } from './hooks/useTerminalResults';
import { useMissionControl } from '../mission-control/state-manager/useMissionControl';

export default function TerminalPrompt({ formattedDate }: { formattedDate: string }) {
  const { changeActiveIndex } = useMissionControl();
  const [animationEnded, setAnimationEnded] = useState(false);

  return (
    <div {...promptStyle}>
      <p>Last login: {formattedDate} on ttys001</p>
      <TerminalPromptLine>
        <TextAnimation text="yarn dev" onAnimationEnd={() => setAnimationEnded(true)} />
      </TerminalPromptLine>
      {animationEnded && (
        <TerminalPromptResult texts={PROMPT_RESULT_TEXTS} onAnimationEnd={() => changeActiveIndex(1)} />
      )}
    </div>
  );
}

function TerminalPromptLine({ children }: { children: ReactNode }) {
  return <p>sung-yein@Yeins-MacBook-Pro ~ % {children}</p>;
}

function TerminalPromptResult({ texts, onAnimationEnd }: { texts: ResultTexts; onAnimationEnd?: () => void }) {
  const [displayTexts, isEnded] = useTerminalResult(texts);

  useEffect(() => {
    if (isEnded) onAnimationEnd?.();
  }, [isEnded]);

  return (
    <>
      {displayTexts.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </>
  );
}

const PROMPT_RESULT_TEXTS: ResultTexts = [
  {
    text: 'yarn run v1.22.19',
    delay: 500,
  },
  {
    text: '$ next dev',
    delay: 500,
  },
  {
    text: `    ▲ Next.js 14.1.0
    - Local:        http://localhost:3000
    - Environments: .env
    `,
    delay: 1000,
  },
  {
    text: `======================
Count: 1
Build ID: development
Server: true
Env: dev
GETTING WEBPACK CONFIG
======================
Count: 2
Build ID: development
Server: true
Env: dev
GETTING WEBPACK CONFIG
======================
Count: 3
Build ID: development
Server: false
Env: dev`,
    delay: 1200,
  },
  {
    text: ' ✓ Ready in 1384ms',
    delay: 800,
  },
];
