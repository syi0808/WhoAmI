import { fontFamily, fontWeight } from '@/shared/styles/tokens.stylex';
import * as sx from '@stylexjs/stylex';

const styles = sx.create({
  container: {
    width: '100svw',
    height: '100svh',
    background: 'rgb(32, 32, 32)',
  },
  header: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    padding: '6px 5px',
  },
  headerButtonWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: '0 15px',
  },
  headerButton: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: 'rgb(107, 107, 107)',
    ':nth-child(4n + 1)': {
      background: 'rgb(237, 106, 94) !important',
    },
    ':nth-child(4n + 2)': {
      background: 'rgb(245, 191, 79) !important',
    },
    ':nth-child(4n + 3)': {
      background: 'rgb(98, 197, 84) !important',
    },
  },
  pageContainerStyle: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    background: 'rgb(60, 60, 60)',
    padding: '8px 4px',
  },
});

export const containerStyle = sx.props(styles.container);

export const headerStyle = sx.props(styles.header);

export const buttonWrapperStyle = sx.props(styles.headerButtonWrapper);

export const buttonStyle = sx.props(styles.headerButton);

export const pageContainerStyle = sx.props(styles.pageContainerStyle);
