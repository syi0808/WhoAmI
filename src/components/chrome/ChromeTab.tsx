import * as sx from '@stylexjs/stylex';
import favicon from './assets/favicon-16x16.png';
import { fontFamily } from '@/shared/styles/tokens.stylex';

export default function ChromeTab({ label }: { label: string }) {
  return (
    <div {...sx.props(styles.tabContainer)}>
      <div {...sx.props(styles.tabCorner, styles.tabCornerLeft)} />
      <div {...sx.props(styles.tabCorner, styles.tabCornerRight)} />
      <div {...sx.props(styles.tab)}>
        <img width="14" src={favicon.src} />
        <span>{label}</span>
      </div>
    </div>
  );
}

const styles = sx.create({
  tabContainer: {
    width: '20%',
    maxWidth: '230px',
    padding: '7px 10px',
    fontSize: '12px',
    fontFamily: fontFamily.global,
    position: 'relative',
    fontWeight: '400',
    zIndex: 1,

    color: 'rgb(227, 227, 227)',
    background: 'rgb(60, 60, 60)',
    borderRadius: '10px',
    '::before': {
      content: '',
      position: 'absolute',
      height: '20px',
      width: '100%',
      background: 'rgb(60, 60, 60)',
      bottom: '-10px',
      left: 0,
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
    zIndex: 0,
    '::after': {
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
    '::after': {
      borderBottomRightRadius: '10px',
    },
  },
  tabCornerRight: {
    left: '100%',
    '::after': {
      borderBottomLeftRadius: '10px',
    },
  },
});
