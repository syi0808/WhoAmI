import * as sx from '@stylexjs/stylex';

export const fontFamily = sx.defineVars({
  global:
    '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  terminal: 'MesloLGS NF, sans-serif',
});

export const fontWeight = sx.defineVars({
  thin: '300',
  regular: '500',
  bold: '700',
});
