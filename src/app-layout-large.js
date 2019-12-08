import React from 'react'

import { Box } from './box'
import { SideMenu } from './side-menu'
import { Header } from './header'
import { Portfolio } from './portfolio'
import { Navigation } from './navigation'

export function AppLayoutLarge(props) {
  return (
    <Box
      minHeight={['calc(100vh - 50px)', '100vh']}
      flexGrow="1"
      flexShrink="1"
      flexBasis="0"
      display="flex"
      flexDirection={['row', 'column']}
    >
      <Header navigationTabs={<Navigation />} />
      <Box display="flex" flexDirection="row">
        <SideMenu />
        <Box overflow="visible" height="100%" pl="320px">
          <Portfolio />
        </Box>
      </Box>
    </Box>
  )
}
