import { fontFamily, fontWeight } from '@/shared/styles/tokens.stylex';
import * as sx from '@stylexjs/stylex';

const styles = sx.create({
  container: {
    width: '100svw',
    height: '100svh',
  },
  header: {
    background: 'rgb(57, 57, 60)',
    width: '100%',
    height: '30px',
    padding: '8px',
    position: 'relative',
  },
  prompt: {
    padding: '6px 4px',
    background: 'black',
    width: '100%',
    height: '100%',
    color: 'rgb(194, 194, 194)',
    fontFamily: fontFamily.terminalFontFamily,
    fontSize: '16px',
    lineHeight: '1.5',
    whiteSpace: 'pre-wrap',
  },
  headerButtonWrapper: {
    display: 'flex',
    gap: '8px',
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
  headerTitle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '14px',
    fontWeight: fontWeight.bold,
    color: 'rgb(182, 182, 182)',
  },
});

export const containerStyle = sx.props(styles.container);

export const headerStyle = sx.props(styles.header);

export const promptStyle = sx.props(styles.prompt);

export const buttonWrapperStyle = sx.props(styles.headerButtonWrapper);

export const buttonStyle = sx.props(styles.headerButton);

export const headerTitle = sx.props(styles.headerTitle);
