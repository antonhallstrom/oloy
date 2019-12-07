import * as R from 'ramda'

const breakpoints = ['500px', '800px', '1000px']
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]

export function getTheme(theme, mode) {
  return R.equals(mode, 'light')
    ? theme
    : R.merge(theme, {
        colors: R.path(['colors', 'modes', mode], theme),
      })
}

export const theme = {
  breakpoints,
  colors: {
    text: '#000000',
    textInverted: '#ffffff',
    backdropBackground: '#363640',
    background: '#ffffff',
    drawerBackground: '#ffffff',
    frontLayerBackground: '#ffffff',
    switchBackground: '#8E99AB',
    switchBackgroundChecked: '#48a999',
    switchKnob: '#ffffff',
    switchKnobChecked: '#00796b',
    backLayerBackground: '#363640',
    modes: {
      dark: {
        text: '#ffffff',
        background: '#111111',
        frontLayerBackground: '#292929',
        backLayerBackground: '#1E1E1E',
        switchKnob: '#EC8CFF',
        switchBackground: '#4F3B55',
        switchBackgroundChecked: '#4F3B55',
        switchKnobChecked: '#EC8CFF',
      },
    },
  },
  fontSizes: [14, 16, 18, 20, 24, 32, 48],
  space: [8, 16, 24, 32, 40, 64, 80, 112, 160],
  radii: [4, 8, 16],
  shadows: ['0 2px 4px rgba(0,0,0,.5)'],
}

export function getColor(color, props) {
  return R.path(['colors', color], props.theme)
}
