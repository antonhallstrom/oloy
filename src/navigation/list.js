import PropTypes from 'prop-types'
import * as R from 'ramda'
import React from 'react'
import { Route, NavLink, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { noneOf } from '../none-of'

import { Box } from '../box'

export const SideMenu = styled.div`
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
    R.is(Number, props.progress) &&
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

const BaseList = styled.ul`
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

function getSubItemPosition(hash, items) {
  const result = R.findIndex(
    item => R.length(hash) && R.includes(hash, R.prop('to', item)),
    items
  )
  return R.not(R.isNil(result)) && result !== -1 && result
}

export function List(props) {
  const location = useLocation()

  return (
    <React.Fragment>
      <Heading>{props.header}</Heading>
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
                        R.pathOr([], ['subItems'], item)
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
                    R.pathOr([], ['subItems'], item)
                  )}
                </Box>
              </Route>
            </React.Fragment>
          ),
          props.items
        )}
      </BaseList>
    </React.Fragment>
  )
}

List.propTypes = {
  header: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}
