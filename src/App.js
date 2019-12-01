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
  const theme = {
    ...t.getTheme(t.theme, mode),
    setTheme: setMode,
    mode,
  }

  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
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
            <Box display={['none', 'flex']} flexDirection="column" padding={1}>
              <Subheader />
              <Content />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Provider>
  )
}

export default App
