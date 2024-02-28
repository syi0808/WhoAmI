import * as sx from '@stylexjs/stylex';

export default function DesktopItem({}: {}) {
  return (
    <div {...sx.props(styles.container)}>
      <div {...sx.props(styles.preview)}></div>
      <span {...sx.props(styles.desktopName)}>Desktop</span>
    </div>
  );
}

const styles = sx.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  preview: {
    width: '150px',
    // height: '82px',
    aspectRatio: '16 / 10',
    background: 'black',
  },
  desktopName: {
    fontSize: '12px',
    color: 'white',
  },
});

// 30.2 : 2.3 = 1920 :
// 19.6 : 1.5 = 1200 :
