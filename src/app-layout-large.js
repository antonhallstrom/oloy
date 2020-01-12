import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import { Box } from './box'
import { Header } from './header'
import * as Navigation from './navigation'
import * as Portfolio from './portfolio'
import * as Biography from './biography'
import { Home } from './home'

/**
 * Composed of top header, side menu navigation and a content container.
 */
export function AppLayoutLarge(props) {
  const { pathname } = useLocation()

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
        {pathname !== '/' && (
          <Navigation.SideMenu>
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
          </Navigation.SideMenu>
        )}
        <Route path="/portfolio">
          <Box overflow="visible" height="100%" pl="320px">
            <Portfolio.Portfolio />
          </Box>
        </Route>
        <Route path="/biography">
          <Box overflow="visible" height="100%" pl="320px">
            <Biography.Biography />
          </Box>
        </Route>
      </Box>
      <Home />
    </Box>
  )
}
