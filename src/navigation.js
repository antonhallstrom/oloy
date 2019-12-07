import * as R from 'ramda'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'
import { Box } from './box'

const navigationItems = [
  {
    to: '/portfolio',
    label: 'Portfolio',
  },
  {
    to: '/about',
    label: 'About',
  },
]

const NavigationLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    color: white;
    transition: ease-in 0.1s;
  }

  &.selected {
    color: white;
    box-shadow: inset 0px -4px 0px 0px white;
    transition: ease-in 0.2s;
  }

  line-height: 64px;
`

/**
 * Used for desktop navigation
 */
export function Navigation() {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(2, max-content)"
      gridGap={4}
      pr={4}
    >
      {R.map(
        item => (
          <NavigationLink key={item.to} to={item.to} activeClassName="selected">
            {item.label}
          </NavigationLink>
        ),
        navigationItems
      )}
    </Box>
  )
}
