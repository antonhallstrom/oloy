import React from 'react'

import { Box } from './box'
import { Subheader } from './subheader'
import { Header, HeaderNavigationItem } from './header'
import { Portfolio } from './portfolio'
import * as icons from './icons'
import { Drawer } from './drawer'
import * as Navigation from './navigation'

export function AppLayoutMedium(props) {
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const navigationItem = [
    <HeaderNavigationItem
      key="navigation-item"
      onClick={() => {
        setDrawerOpen(true)
      }}
    >
      <icons.Menu />
    </HeaderNavigationItem>,
  ]

  return (
    <React.Fragment>
      <Box
        minHeight={['calc(100vh - 50px)', '100vh']}
        flexGrow="1"
        flexShrink="1"
        flexBasis="0"
        display="flex"
        flexDirection={['row', 'column']}
      >
        <Header navigationItem={navigationItem} />
        <Box flexDirection="row">
          <Subheader />
          <Portfolio />
        </Box>
      </Box>
      <Drawer drawerOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Navigation.List />
      </Drawer>
    </React.Fragment>
  )
}
