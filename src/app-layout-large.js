import React from 'react'

import { Box } from './box'
import { Header } from './header'
import * as Navigation from './navigation'
import * as portfolio from './portfolio'

/**
 * Composed of top header, side menu navigation and a content container.
 */
export function AppLayoutLarge(props) {
  return (
    <Box
      minHeight="100vh"
      flexGrow="1"
      flexShrink="1"
      flexBasis="0"
      display="flex"
      flexDirection="column"
    >
      <Header navigationTabs={<Navigation.Row />} />
      <Box display="flex" flexDirection="row">
        <Navigation.SideMenu>
          <Navigation.List
            header="Portfolio"
            items={portfolio.navigationItems}
          />
        </Navigation.SideMenu>
        <Box overflow="visible" height="100%" pl="320px">
          <portfolio.Portfolio />
        </Box>
      </Box>
    </Box>
  )
}
