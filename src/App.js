import React from 'react'

import { Books } from './books'
import { Restaurants } from './restaurants'
import { User } from './user'

import { Provider, createClient } from 'urql'

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

  function handleStopTimer(timerId) {
    window.clearTimeout(timerId)
  }

  return (
    <Provider value={client}>
      <p>Count up: {count}s</p>
      <button onClick={() => handleStopTimer(timer)}>Clear timer</button>
      <Books />
      <Restaurants />
      <User />
    </Provider>
  )
}

export default App
