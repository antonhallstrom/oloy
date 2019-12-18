import * as R from 'ramda'
import React from 'react'
import { Route, useLocation, NavLink } from 'react-router-dom'
import { Box } from './box'
import { Header, HeaderActionItem, HeaderNavigationItem } from './header'
import { Backdrop } from './backdrop'
import * as icons from './icons'
import * as portfolio from './portfolio'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { noneOf } from './none-of'

const reduceIndexed = R.addIndex(R.reduce)

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function insertBetween(value, list) {
  return reduceIndexed(
    (acc, v, idx) => {
      if (R.length(list) - 1 !== idx) {
        return R.pipe(
          R.prepend(v),
          R.prepend(value)
        )(acc)
      }
      return R.prepend(v, acc)
    },
    [],
    list
  )
}

function SubHeader() {
  const location = useLocation()
  const paths = R.pipe(
    R.map(capitalize),
    list => insertBetween('>', list)
  )(R.filter(R.length, R.split('/', location.pathname)))

  return (
    <Box
      display="grid"
      height="20px"
      gridGap={0}
      gridTemplateColumns={`repeat(${R.length(paths)}, max-content)`}
    >
      {R.map(
        path => (
          <Box key={path} onClick={() => {}}>
            {path}
          </Box>
        ),
        R.reverse(paths)
      )}
    </Box>
  )
}

function MenuItem(props) {
  const [state, setState] = React.useState('openMenu')

  if (state === 'openMenu') {
    return (
      <div
        onClick={() => {
          props.onClose()
          setState('closeMenu')
        }}
      >
        <HeaderNavigationItem>
          <icons.Menu />
        </HeaderNavigationItem>
      </div>
    )
  } else {
    return (
      <div
        onClick={() => {
          props.onOpen()
          setState('openMenu')
        }}
      >
        <HeaderNavigationItem>
          <icons.Close />
        </HeaderNavigationItem>
      </div>
    )
  }
}

// function NavigateBackItem(props) {
//   return (
//     <HeaderNavigationItem>
//       <icons.KeyboardBackSpace />
//     </HeaderNavigationItem>
//   )
// }

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

function NavigationList(props) {
  const location = useLocation()

  return (
    <Box
      position="fixed"
      overflowY="auto"
      height="calc(100vh - 124px)"
      px={1}
      pb={1}
      left="0px"
      right="0px"
      top="64px"
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

export function AppLayoutSmall(props) {
  const [openBackdropFrontLayer, setOpenBackdropFrontLayer] = React.useState(
    false
  )

  const actions = [
    <HeaderActionItem
      key="action-items-1"
      onClick={() => setOpenBackdropFrontLayer(false)}
    >
      <icons.MoreVertically />
    </HeaderActionItem>,
  ]

  const navigationItem = [
    <MenuItem
      key="menu-item"
      onClose={() => setOpenBackdropFrontLayer(false)}
      onOpen={() => setOpenBackdropFrontLayer(true)}
    />,
  ]

  return (
    <Box
      minHeight="calc(100vh - 50px)"
      flexGrow="1"
      flexShrink="1"
      flexBasis="0"
      display="flex"
      flexDirection="row"
    >
      <Backdrop
        backLayerComponents={[
          <Header
            key="header"
            actionItems={actions}
            navigationItem={navigationItem}
          />,
          <NavigationList
            key="navigation-list"
            items={portfolio.navigationItems}
          />,
        ]}
        frontLayerComponents={[
          <Box pb={0} key="sub-header">
            <SubHeader />
          </Box>,
          <Box
            key="portfolio"
            display={openBackdropFrontLayer ? 'block' : 'none'}
            position="fixed"
            overflowY="auto"
            height="calc(100vh - 107px)"
            px={1}
            pb={1}
            left="0px"
            right="0px"
          >
            <portfolio.Portfolio />
          </Box>,
        ]}
        frontLayerExpand={openBackdropFrontLayer}
        onExpandFrontLayer={() => setOpenBackdropFrontLayer(true)}
      />
    </Box>
  )
}
