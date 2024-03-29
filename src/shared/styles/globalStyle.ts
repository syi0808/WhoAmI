import * as sx from '@stylexjs/stylex';
import { fontFamily } from './tokens.stylex';

const styles = sx.create({
  body: {
    fontFamily: fontFamily.global,
  },
  wallpaper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    overflow: 'hidden',
  },
  wallpaperImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

export const bodyStyle = sx.props(styles.body);

export const wallpaperStyle = sx.props(styles.wallpaper);

export const wallpaperImageStyle = sx.props(styles.wallpaperImage);
