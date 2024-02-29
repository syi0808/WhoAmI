import * as sx from '@stylexjs/stylex';
import { fontWeight } from '@/shared/styles/tokens.stylex';
import { ReactElement, cloneElement, useRef } from 'react';

interface Props {
  label: string;
  index: number;
  children: ReactElement;
}

export default function DesktopItem({ label, children, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div {...sx.props(styles.container)}>
      <div ref={ref} {...sx.props(styles.preview)}>
        {cloneElement(children, { desktopItemRef: ref, index })}
      </div>
      <span {...sx.props(styles.desktopName)}>{label}</span>
    </div>
  );
}

const styles = sx.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    fontWeight: fontWeight.thin,
    letterSpacing: '0.4px',
    position: 'relative',
  },
  preview: {
    // For aspect-ratio current view
    // Calculrate ratio in real macbook
    width: '7.6svw',
    height: '7.6svh',
    background: 'black',
  },
  desktopName: {
    fontSize: '12px',
    color: 'white',
  },
});
