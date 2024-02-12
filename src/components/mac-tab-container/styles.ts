import * as sx from '@stylexjs/stylex';

export const styles = sx.create({
  container: {
    border: '1px solid rgba(0, 0, 0, 0.4)',
    borderRadius: '8px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
    overflow: 'hidden',
    position: 'relative',
    '::after': {
      content: '',
      borderRadius: '8px',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: '1px solid rgba(255, 255, 255, 0.15)',
    },
  },
});

export const containerStyle = sx.props(styles.container);
