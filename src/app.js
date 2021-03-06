import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import * as t from './theme'

import { Provider, createClient } from 'urql'

import { AppLayout } from './app-layout'
import { Box } from './box'
import { BrowserRouter as Router } from 'react-router-dom'
import { CssBase, CssReset, CssFontFaces } from './global-styles'
import { GlobalUiState } from './global-ui-state'
import gql from 'graphql-tag'

import * as urql from 'urql'

const getBooks = gql`
  query Books {
    books {
      title
    }
  }
`

const client = createClient({
  url: 'http://localhost:3001/graphql',
})

function App() {
  const [mode, setMode] = React.useState('light')
  const [preventBodyScroll, setPreventBodyScroll] = React.useState(false)
  const [response] = urql.useQuery({ query: getBooks })

  console.log(response)

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
          <CssFontFaces />
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
