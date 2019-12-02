import React from 'react'

import { Global, css as emotionCss } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import * as t from './theme'
import { Provider, createClient } from 'urql'
import styledSystemCss from '@styled-system/css'
import { Backdrop } from './backdrop/backdrop'
import { Box } from './box'
import { Subheader } from './subheader'
import { Content } from './content'
import { SideMenu } from './side-menu'
import { GlobalUiState } from './global-ui-state'
import { Drawer } from './drawer'

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
          <Box minHeight="100vh">
            <Box
              minHeight={['calc(100vh - 50px)', '100vh']}
              flexGrow="1"
              flexShrink="1"
              flexBasis="0"
              display="flex"
              flexDirection={['row', 'column']}
            >
              <Backdrop />
              <Box display={['none', 'flex']} flexDirection="row">
                <SideMenu />
                <Subheader />
                <Content />
              </Box>
            </Box>
            <Drawer />
          </Box>
        </GlobalUiState.Provider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
