import React from 'react'
import { Route } from 'react-router-dom'
import { Box } from './box'

export function Portfolio() {
  return (
    <Route path="/portfolio">
      <Box p={[4, 8]}>Hello i'm portfolio</Box>
    </Route>
  )
}
