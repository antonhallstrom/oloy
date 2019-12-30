import React from 'react'

import { Route } from 'react-router-dom'

import { Box } from './box'
import { Header, HeaderNavigationItem } from './header'
import * as Portfolio from './portfolio'
import * as icons from './icons'
import { Drawer } from './drawer'
import * as Navigation from './navigation'
import * as Biography from './biography'

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
          <Portfolio.Portfolio />
        </Box>
        <Biography.Biography />
      </Box>
      <Drawer drawerOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Route path="/portfolio">
          <Navigation.List
            header="Portfolio"
            items={Portfolio.navigationItems}
          />
        </Route>
        <Route path="/biography">
          <Navigation.List
            header="Biography"
            items={Biography.navigationItems}
          />
        </Route>
      </Drawer>
    </React.Fragment>
  )
}
