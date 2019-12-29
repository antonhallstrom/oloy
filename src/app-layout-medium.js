import React from 'react'

import { Box } from './box'
import { Header, HeaderNavigationItem } from './header'
import * as portfolio from './portfolio'
import * as icons from './icons'
import { Drawer } from './drawer'
import * as Navigation from './navigation'

/**
 * Composed of top header, toggle navigation drawer, and content container.
 */
export function AppLayoutMedium(props) {
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const navigationItem = [
    <Box pr={2} key="navigation-item">
      <HeaderNavigationItem
        onClick={() => {
          setDrawerOpen(true)
        }}
      >
        <icons.Menu />
      </HeaderNavigationItem>
    </Box>,
  ]

  return (
    <React.Fragment>
      <Box
        minHeight="100vh"
        flexGrow="1"
        flexShrink="1"
        flexBasis="0"
        display="flex"
        flexDirection="column"
      >
        <Header
          navigationItem={navigationItem}
          navigationTabs={<Navigation.Row />}
        />
        <Box flexDirection="row">
          <portfolio.Portfolio />
        </Box>
      </Box>
      <Drawer drawerOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Navigation.List header="Portfolio" items={portfolio.navigationItems} />
      </Drawer>
    </React.Fragment>
  )
}
