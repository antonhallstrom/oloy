import React from 'react'

import { Global, css as emotionCss } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import * as t from './theme'
import { Provider, createClient } from 'urql'
import styledSystemCss from '@styled-system/css'
import { Backdrop } from './backdrop/backdrop'
import { Box } from './box'
import { Content } from './content'
import { SideMenu } from './side-menu'
import { GlobalUiState } from './global-ui-state'
import { Drawer } from './drawer'
import { Portfolio } from './portfolio'

import { BrowserRouter as Router } from 'react-router-dom'
import { useLayout } from './use-layout'

function CssReset() {
  return (
    <Global
      styles={emotionCss`
        *,
        ::before,
        ::after {
          box-sizing: border-box;
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
  const layout = useLayout()

  // TODO: create containers for small, medium, and large bp.
  // Since the content will changed based on that.

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
              <Box
                minHeight={['calc(100vh - 50px)', '100vh']}
                flexGrow="1"
                flexShrink="1"
                flexBasis="0"
                display="flex"
                flexDirection={['row', 'column']}
              >
                {/* Mobile layout */}
                <Backdrop menu />
                {/* Desktop layout */}
                <Box display={['none', 'flex']} flexDirection="row">
                  <SideMenu />
                  <Content />
                  <Portfolio />
                </Box>
              </Box>
              <Drawer />
            </Box>
          </Router>
        </GlobalUiState.Provider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
