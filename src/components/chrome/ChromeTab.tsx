import * as sx from '@stylexjs/stylex';
import favicon from './assets/favicon-32x32.png';
import { fontFamily } from '@/shared/styles/tokens.stylex';
import Image from 'next/image';

export default function ChromeTab({ label, isActive }: { label: string; isActive: boolean }) {
  return (
    <div {...sx.props(styles.tabContainer, isActive && styles.activeTabContainer)}>
      {isActive && (
        <>
          <div {...sx.props(styles.tabCorner, styles.tabCornerLeft)} />
          <div {...sx.props(styles.tabCorner, styles.tabCornerRight)} />
        </>
      )}
      <div {...sx.props(styles.tab)}>
        <Image width="14" height="14" src={favicon.src} alt={`chrome ${label} tab favicon`} />
        <span>{label}</span>
      </div>
    </div>
  );
}

const styles = sx.create({
  tabContainer: {
    width: '230px',
    maxWidth: '230px',
    padding: '7px 10px',
    fontSize: '12px',
    fontFamily: fontFamily.global,
    position: 'relative',
    zIndex: 0,
    fontWeight: '400',
    color: 'rgb(227, 227, 227)',
    transition: 'background 0.15s ease-in',
    borderRadius: '10px',
    ':hover': {
      background: 'rgb(29, 73, 115)',
    },
  },
  activeTabContainer: {
    borderRadius: '10px',
    '::before': {
      content: '',
      position: 'absolute',
      height: 'calc(100% + 10px)',
      width: '100%',
      background: 'rgb(60, 60, 60)',
      bottom: '-10px',
      left: 0,
      zIndex: 0,
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
    },
    ':hover': {
      background: 'transparent',
    },
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    gap: '9px',
    position: 'relative',
    zIndex: 1,
  },
  tabCorner: {
    position: 'absolute',
    bottom: '-6px',
    width: '10px',
    height: '100%',
    background: 'rgb(60, 60, 60)',
    zIndex: -1,
    '::before': {
      content: '',
      top: 0,
      left: 0,
      position: 'absolute',
      width: '10px',
      height: '100%',
      background: 'rgb(32, 32, 32)',
    },
  },
  tabCornerLeft: {
    right: '100%',
    '::before': {
      borderBottomRightRadius: '10px',
    },
  },
  tabCornerRight: {
    left: '100%',
    '::before': {
      borderBottomLeftRadius: '10px',
    },
  },
});
