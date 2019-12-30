import * as R from 'ramda'
import React from 'react'
import styled from '@emotion/styled'

import { Box } from '../box'
import { NavLink } from 'react-router-dom'

/**
 * Used for desktop navigation
 */
const navigationItems = [
  {
    to: '/portfolio',
    label: 'Portfolio',
  },
  {
    to: '/biography',
    label: 'Biography',
  },
]

/**
 * Used for desktop navigation
 */
const RowLink = styled(NavLink)`
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
export function Row() {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(2, max-content)"
      gridGap={4}
      pr={4}
    >
      {R.map(
        item => (
          <RowLink key={item.to} to={item.to} activeClassName="selected">
            {item.label}
          </RowLink>
        ),
        navigationItems
      )}
    </Box>
  )
}
