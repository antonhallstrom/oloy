import React from 'react'
import * as R from 'ramda'
import { Global, css as emotionCss } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import * as t from './theme'

import emotionReset from 'emotion-reset'
import { Provider, createClient } from 'urql'

import styledSystemCss from '@styled-system/css'
import { GlobalUiState } from './global-ui-state'

import { AppLayout } from './app-layout'
import { Box } from './box'
import { BrowserRouter as Router } from 'react-router-dom'

function CssReset() {
  return (
    <Global
      styles={emotionCss`
      ${emotionReset}
        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }

        body {
          line-height: 1.2;
        }

        a {
          text-decoration: none;
        }
      `}
    />
  )
}
function CssBase(props) {
  return (
    <Global
      styles={styledSystemCss(
        R.mergeDeepRight(
          {
            body: {
              color: 'text',
              bg: 'background',
              fontFamily: 'body',
              transition: 'bg 200ms linear',
            },
            a: {
              color: 'textInverted',
            },
          },
          R.defaultTo(
            {},
            props.preventBodyScroll && { body: { overflow: 'hidden' } }
          )
        )
      )}
    />
  )
}

const client = createClient({
  url: 'http://localhost:4000/graphql',
})

function App() {
  const [mode, setMode] = React.useState('light')
  const [preventBodyScroll, setPreventBodyScroll] = React.useState(false)

  const theme = {
    ...t.getTheme(t.theme, mode),
    setTheme: setMode,
    mode,
  }

  const uiState = {
    preventBodyScroll,
    setPreventBodyScroll,
  }

  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <GlobalUiState.Provider value={uiState}>
          <CssReset />
          <CssBase preventBodyScroll={preventBodyScroll} />
          <Router>
            <Box minHeight="100vh">
              <AppLayout />
            </Box>
          </Router>
        </GlobalUiState.Provider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
