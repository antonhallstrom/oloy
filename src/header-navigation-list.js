import * as R from 'ramda'
import React from 'react'
import { Route, useLocation, NavLink } from 'react-router-dom'
import { Box } from './box'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { noneOf } from './none-of'
import { ComponentHeights } from './constants'

const BaseList = styled.ul`
  list-style: none;
  margin: 0;
  display: grid;
`

const ListHeading = styled(NavLink)`
  cursor: pointer;

  ${css({
    fontSize: 2,
    borderRadius: 0,
    py: 1,
    px: 2,
    '&.selected': {
      fontWeight: 'bold',
    },
  })}
`

const ListItem = styled(NavLink, { shouldForwardProp: noneOf(['active']) })`
  cursor: pointer;

  ${props =>
    !props.active &&
    `&:hover {
    background-color: rgba(255, 255, 255, 0.05),
    transition: ease-in 0.1s;
  }`}
  ${props =>
    css(
      R.mergeAll([
        {
          fontSize: 2,
          py: 1,
          pl: 5,
          borderRadius: 0,
        },
        R.defaultTo(
          {},
          props.active && {
            bg: 'rgba(255, 255, 255, 0.05)',
            fontWeight: 'bold',
            transition: 'ease-in 0.2s',
          }
        ),
      ])
    )}
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
  background: rgba(255, 255, 255, 0.5);
  height: 0px;
  top: 0;
  left: 0;
  position: absolute;
  transition: height 0.2s ease, top 0.2s ease;
  width: 100%;
  ${props =>
    R.is(Number, props.progress) &&
    `
    top: ${props.progress * 49}px;
    height: 20px;
  `}
`

function getSubItemPosition(hash, items) {
  const result = R.findIndex(
    item => R.length(hash) && R.includes(hash, R.prop('to', item)),
    items
  )
  return R.not(R.isNil(result)) && result !== -1 && result
}

export function HeaderNavigationList(props) {
  const location = useLocation()

  return (
    <Box
      position="fixed"
      overflowY="auto"
      height={[
        `calc(100vh - ${ComponentHeights.header +
          ComponentHeights.headerTabs +
          ComponentHeights.backdrop}px)`,
        `calc(100vh - ${ComponentHeights.header +
          ComponentHeights.backdrop}px)`,
      ]}
      px={1}
      pb={1}
      left="0px"
      right="0px"
      top={[
        `${ComponentHeights.header + ComponentHeights.headerTabs}px`,
        `${ComponentHeights.header}px`,
      ]}
    >
      <BaseList>
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
                      progress={getSubItemPosition(
                        location.hash,
                        item.subItems
                      )}
                    />
                  </ProgressBar>
                  {R.map(
                    subItem => (
                      <ListItem
                        key={subItem.to}
                        to={subItem.to}
                        active={
                          R.length(location.hash) &&
                          R.includes(location.hash, subItem.to)
                        }
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
          props.items
        )}
      </BaseList>
    </Box>
  )
}
