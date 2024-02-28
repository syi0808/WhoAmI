import Terminal from '@/components/terminal/Terminal';
import { getIsBot } from '@/shared/utils/header';
import { StyleXStyles } from '@stylexjs/stylex';

export default function InitialLoadingPage({ style }: { style?: StyleXStyles }) {
  const isBot = getIsBot();

  if (isBot) return null;

  return <Terminal style={style} />;
}
