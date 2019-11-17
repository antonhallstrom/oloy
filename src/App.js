import React from 'react'

import { Switch } from './switch'

import { Global, } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import * as t from './theme'
import { Box } from './box'
import { Provider, createClient } from 'urql'
import css from '@styled-system/css'

function GlobalStyles(props) {
  return (
    <Global
    styles={css({
      body: {
        color: 'text',
        bg: 'background',
        transition: 'bg 200ms linear'
      }
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
        <GlobalStyles/>
        <Switch 
          labels={['Light', 'Dark']}
          values={['light', 'dark']} 
          onChange={setMode}
        />
        <Box
          color="text"
        >Mode {mode}</Box>
      </ThemeProvider>
    </Provider>
  )
}

export default App
