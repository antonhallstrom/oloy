import * as R from 'ramda'

export function getTheme(theme, mode) {
  return R.equals(mode, 'light')
    ? theme
    : R.merge(theme, {
        colors: R.path(['colors', 'modes', mode], theme),
      })
}

export const theme = {
  colors: {
    text: '#000000',
    background: '#E5E5E5',
    switchBackground: '#8E99AB',
    switchBackgroundChecked: '#A472EA',
    switchKnob: '#ffffff',
    switchKnobChecked: '#6200EE',
    modes: {
      dark: {
        text: '#ffffff',
        background: '#202124',
        switchBackground: '#4F3B55',
        switchBackgroundChecked: '#4F3B55',
        switchKnobChecked: '#EC8CFF',
      },
    },
  },
  fontSizes: [14, 16, 18, 20, 24, 32, 48],
  space: [8, 16, 24, 32, 40, 64, 80, 112, 160],
  radii: [9999],
}

export function getColor(color, props) {
  return R.path(['colors', color], props.theme)
}
