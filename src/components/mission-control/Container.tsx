import * as sx from '@stylexjs/stylex';
import DesktopItem from './DesktopItem';
import { ReactElement } from 'react';

type ChildrenProp = Array<ReactElement<any>>;

export default function MissionControl({ children }: { children: ChildrenProp }) {
  return (
    <>
      <div {...sx.props(styles.container)}>
        <DesktopItem label="Desktop" index={0} />
      </div>
      {children}
    </>
  );
}

const styles = sx.create({
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    background: 'rgba(0, 0, 0, 0.2)',
    padding: '16px 0 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px',
    backdropFilter: 'blur(40px)',
  },
});
