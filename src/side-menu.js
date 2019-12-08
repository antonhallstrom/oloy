import * as R from 'ramda'
import React from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { Route, NavLink, useLocation } from 'react-router-dom'
import { Box } from './box'
import { noneOf } from './none-of'

const Base = styled.div`
  top: 0;
  position: fixed;
  overflow-y: auto;
  border-right: 1px solid #e5e5e5;
  height: 100vh;
  width: 280px;
  ${css({
    pt: 7,
    pb: 3,
  })}
`

const ProgressBar = styled.div`
  background: rgba(189, 189, 189, 0.4);
  bottom: 13px;
  display: block;
  left: 50px;
  position: absolute;
  top: 13px;
  width: 2px;
`

const ProgressCursor = styled.div`
  background: #212121;
  height: 0px;
  top: 0;
  left: 0;
  position: absolute;
  transition: height 0.2s ease, top 0.2s ease;
  width: 100%;
  ${props =>
    R.not(R.isNil(props.progress)) &&
    `
    top: ${props.progress * 49}px;
    height: 20px;
  `}
`

const Heading = styled.div`
  ${css({
    fontSize: 4,
    pb: 1,
    px: 2,
  })}
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  display: grid;
`

const ListHeading = styled(NavLink)`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: ease-in 0.1s;
  }

  ${css({
    fontSize: 2,
    py: 1,
    px: 2,
    '&.selected': {
      color: 'text',
      fontWeight: 'bold',
      transition: 'ease-in 0.2s',
    },
  })}
`

const ListItem = styled(NavLink, { shouldForwardProp: noneOf(['active']) })`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);

  ${props =>
    !props.active &&
    `&:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: ease-in 0.1s;
  }`}

  ${props =>
    css(
      R.mergeAll([
        {
          fontSize: 2,
          py: 1,
          pl: 5,
        },
        R.defaultTo(
          {},
          props.active && {
            bg: 'rgba(0, 0, 0, 0.1)',
            color: 'text',
            fontWeight: 'bold',
            transition: 'ease-in 0.2s',
          }
        ),
      ])
    )}
`

const portfolioNavigationItems = [
  {
    to: '/portfolio/number',
    label: 'Number',
    subItems: [
      {
        to: '/portfolio/number/#find-pi-to-the-nth-digit',
        label: 'Find PI to the Nth Digit',
      },
      {
        to: '/portfolio/number/#fibonacci-sequence',
        label: 'Fibonacci Sequence',
      },
      {
        to: '/portfolio/number/#prime-factorization',
        label: 'Prime Factorization',
      },
    ],
  },
  {
    to: '/portfolio/classic-algorithms',
    label: 'Classic Algorithms',
    subItems: [],
  },
  {
    to: '/portfolio/graph',
    label: 'Graph',
    subItems: [],
  },
  {
    to: '/portfolio/data-structures',
    label: 'Data Structures',
    subItems: [],
  },
  {
    to: '/portfolio/text',
    label: 'Text',
    subItems: [],
  },
  {
    to: '/portfolio/networking',
    label: 'Networking',
    subItems: [],
  },
  {
    to: '/portfolio/classes',
    label: 'Classes',
    subItems: [],
  },
  {
    to: '/portfolio/threading',
    label: 'Threading',
    subItems: [],
  },
  {
    to: '/portfolio/web',
    label: 'Web',
    subItems: [],
  },
  {
    to: '/portfolio/files',
    label: 'Files',
    subItems: [],
  },
  {
    to: '/portfolio/databases',
    label: 'Databases',
    subItems: [],
  },
  {
    to: '/portfolio/graphics-and-multimedia',
    label: 'Graphics and Multimedia',
    subItems: [],
  },
  {
    to: '/portfolio/security',
    label: 'Security',
    subItems: [],
  },
]

// Used for navigating on the selected page.
export function SideMenu() {
  const location = useLocation()

  return (
    <Base>
      <Heading>Portfolio</Heading>
      <List>
        {R.map(
          item => (
            <React.Fragment key={item.to}>
              <ListHeading to={item.to} activeClassName="selected">
                {item.label}
              </ListHeading>
              <Route path={item.to}>
                <Box display="flex" flexDirection="column" position="relative">
                  <ProgressBar>
                    <ProgressCursor
                      progress={R.findIndex(
                        item => R.includes(location.hash, R.prop('to', item)),
                        item.subItems
                      )}
                    />
                  </ProgressBar>
                  {R.map(
                    subItem => (
                      <ListItem
                        key={subItem.to}
                        to={subItem.to}
                        active={R.includes(location.hash, subItem.to)}
                      >
                        {subItem.label}
                      </ListItem>
                    ),
                    item.subItems
                  )}
                </Box>
              </Route>
            </React.Fragment>
          ),
          portfolioNavigationItems
        )}
      </List>
    </Base>
  )
}
