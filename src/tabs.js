import * as R from 'ramda'
import React from 'react'
import styled from '@emotion/styled'

import { Box } from './box'
import { NavLink } from 'react-router-dom'
import { ComponentHeights } from './constants'

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
  text-align: center;
  line-height: ${ComponentHeights.header - 16}px;

  &:hover {
    color: white;
    transition: ease-in 0.1s;
  }

  &.selected {
    color: white;
    box-shadow: inset 0px -2px 0px 0px white;
    transition: ease-in 0.2s;
  }
`

const Base = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export function Tabs() {
  return (
    <Base>
      <Box mx={4} display="grid" gridTemplateColumns="repeat(2, 1fr)">
        {R.map(
          item => (
            <RowLink key={item.to} to={item.to} activeClassName="selected">
              {item.label}
            </RowLink>
          ),
          navigationItems
        )}
      </Box>
    </Base>
  )
}
