import React from 'react'
import * as icons from './icons'
import { Box } from './box'

export function Header() {
  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" fontSize={4}>
        <icons.Menu />
      </Box>
      <Box pl={2}>Header</Box>
    </Box>
  )
}
