import React from 'react'

import { Box } from './box'
import * as Navigation from './navigation'
import { Header } from './header'
import * as portfolio from './portfolio'

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
      <Header navigationTabs={<Navigation.Row />} />
      <Box display="flex" flexDirection="row">
        <Navigation.Container>
          <Navigation.List
            header="Portfolio"
            items={portfolio.navigationItems}
          />
        </Navigation.Container>
        <Box overflow="visible" height="100%" pl="320px">
          <portfolio.Portfolio />
        </Box>
      </Box>
    </Box>
  )
}
