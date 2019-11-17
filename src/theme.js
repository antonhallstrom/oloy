import * as R from 'ramda'

export function getTheme(theme, mode) {
  return R.equals(mode, 'light') ? theme : R.merge(theme, {
    colors: R.merge(R.path(['colors'], theme), R.path(['colors', 'modes', mode], theme)),
  })
}

export const theme = {
  colors: {
    text: '#000000',
    background: '#ffffff',
    switchBackground: '#8E99AB',
    switchBackgroundChecked: '#AB70E6',
    switchKnob: '#ffffff',
    switchKnobChecked: '#fafafa',
    modes: {
      dark: {
        text: '#ffffff',
        background: '#000000',
      }
    }
  },
  fontSizes: [14, 16, 18, 20, 24, 32, 48],
  space: [8, 16, 24, 32, 40, 64, 80, 112, 160],
  radii: [9999]
}

export function getColor(color) {
  return R.path(['colors', color], theme)
}