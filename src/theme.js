import * as R from 'ramda'

const breakpoints = ['500px', '1200px', '1600px']
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]

const fonts = [
  'Gilroy, Helvetica, Arial, sans-serif',
  'Gilroy, Helvetica, Arial, sans-serif',
]
fonts.head = fonts[0]
fonts.body = fonts[1]

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
    tableColor: '#616161',
    tableHeaderBackground: '#fafafa',
    tableHeadingBorderColor: '#e5e5e5',
    tableDataBorderColor: '#e5e5e5',
    tableRowBorderColor: '#e5e5e5',
    tableBodyBorderColor: '#e5e5e5',
    headerBackground: '#363640',
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
  fonts,
  fontSizes: [10, 12, 14, 16, 18, 20, 24, 32, 48],
  space: [8, 16, 24, 32, 40, 64, 80, 112, 200],
  radii: [4, 8, 16],
  shadows: ['0 2px 4px rgba(0,0,0,.5)'],
}

export function getColor(color, props) {
  return R.path(['colors', color], props.theme)
}
