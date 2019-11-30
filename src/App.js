import React from 'react'

import { Global, css as emotionCss } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import * as t from './theme'
import { Provider, createClient } from 'urql'
import styledSystemCss from '@styled-system/css'
import { TopBar } from './top-bar'

function CssReset() {
  return (
    <Global
      styles={emotionCss`
        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }
      `}
    />
  )
}
function CssBase() {
  return (
    <Global
      styles={styledSystemCss({
        body: {
          color: 'text',
          bg: 'background',
          transition: 'bg 200ms linear',
        },
      })}
    />
  )
}

const client = createClient({
  url: 'http://localhost:4000/graphql',
})

function App() {
  const [mode, setMode] = React.useState('light')
  const theme = t.getTheme(t.theme, mode)

  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <CssReset />
        <CssBase />
        <TopBar />
        {/* <Switch
            labels={['Light', 'Dark']}
            values={['light', 'dark']}
            onChange={setMode}
          /> */}
      </ThemeProvider>
    </Provider>
  )
}

export default App
