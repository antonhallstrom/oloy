import React from 'react'
import { Route } from 'react-router-dom'

import { Box } from './box'

export function Home() {
  return (
    <Route path="/">
      <Box py={['0px', 8, 8, 8]} px={['0px', 7, 8, 8]}></Box>
    </Route>
  )
}
