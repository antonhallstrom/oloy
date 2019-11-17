import React from 'react'

import { Books } from './books'
import { Restaurants } from './restaurants'
import { User } from './user'

import { Switch } from './switch'

import { Global, css } from '@emotion/core'


import { Provider, createClient } from 'urql'

function GlobalStyles(props) {
  return (
    <Global
    styles={css`
      body {
        background-color: ${props.mode 
        ? 'black'
        : 'white'
        };
        color: ${props.mode ? 'white' : 'black' };
        transition: background-color 200ms linear;
      }
    `}
    />
  )
}

const client = createClient({
  url: 'http://localhost:4000/graphql',
})

function useCountInterval(ms) {
  const [count, setCount] = React.useState(0)
  let timer = window.setTimeout(() => setCount(count + 1), ms)

  return { count, timer }
}



function App() {
  const { count, timer } = useCountInterval(1000)
  const [mode, setMode] = React.useState(false)
  function handleStopTimer(timerId) {
    window.clearTimeout(timerId)
  }

  function handleColorMode(value) {
    setMode(value)
  }

  return (
    <Provider value={client}>
      <GlobalStyles mode={mode}/>
      <Switch value={mode} onChange={handleColorMode}/>
      <p>{mode ? 'light' : 'dark'}</p>
      <button onClick={() => handleStopTimer(timer)}>Clear timer</button>
      <Books />
      <Restaurants />
      <User />
    </Provider>
  )
}

export default App
