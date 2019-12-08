import React from 'react'

import { Global, css as emotionCss } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import * as t from './theme'
import { Provider, createClient } from 'urql'
import styledSystemCss from '@styled-system/css'
import { Box } from './box'
import { GlobalUiState } from './global-ui-state'
import emotionReset from 'emotion-reset'

import { BrowserRouter as Router } from 'react-router-dom'
import { AppLayout } from './app-layout'

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
function CssBase() {
  return (
    <Global
      styles={styledSystemCss({
        body: {
          color: 'text',
          bg: 'background',
          fontFamily: 'body',
          transition: 'bg 200ms linear',
        },

        a: {
          color: 'textInverted',
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
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const theme = {
    ...t.getTheme(t.theme, mode),
    setTheme: setMode,
    mode,
  }

  const uiState = {
    drawerOpen,
    setDrawerOpen,
  }

  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <GlobalUiState.Provider value={uiState}>
          <CssReset />
          <CssBase />
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
