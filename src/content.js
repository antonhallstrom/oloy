import React from 'react'

import { useTheme } from 'emotion-theming'

import { Box } from './box'
import { Switch } from './switch'

export function Content() {
  const theme = useTheme()
  return (
    <Box display="flex" flexDirection="column">
      <div>
        <Switch
          labels={['Light', 'Dark']}
          values={['light', 'dark']}
          initialValue={theme.mode}
          onChange={theme.setTheme}
        />
      </div>
    </Box>
  )
}
