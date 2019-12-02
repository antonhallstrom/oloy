import React from 'react'
import * as icons from './icons'
import { Box } from './box'

import { GlobalUiState } from './global-ui-state'

export function Header() {
  const uiState = React.useContext(GlobalUiState)

  return (
    <Box display="flex" alignItems="center">
      <Box
        display="flex"
        fontSize={4}
        onClick={() => uiState.setDrawerOpen(!uiState.drawerOpen)}
      >
        <icons.Menu />
      </Box>
      <Box pl={2}>Header</Box>
    </Box>
  )
}
