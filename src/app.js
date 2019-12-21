import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import * as t from './theme'

import { Provider, createClient } from 'urql'

import { AppLayout } from './app-layout'
import { Box } from './box'
import { BrowserRouter as Router } from 'react-router-dom'
import { CssBase, CssReset } from './global-styles'
import { GlobalUiState } from './global-ui-state'

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

  console.log(uiState)

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
