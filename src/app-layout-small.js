import * as R from 'ramda'
import React from 'react'
import { Route } from 'react-router-dom'

import { useLocation } from 'react-router-dom'
import { Box } from './box'
import { Header, HeaderActionItem, HeaderNavigationItem } from './header'
import { HeaderNavigationList } from './header-navigation-list'
import { Backdrop } from './backdrop'
import { Tabs } from './tabs'
import * as icons from './icons'
import * as Portfolio from './portfolio'
import { ComponentHeights } from './constants'
import * as Biography from './biography'

import styled from '@emotion/styled'
import css from '@styled-system/css'
import { motion } from 'framer-motion'

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

const Layout = styled.div`
  left: 0px;
  right: 0px;
  height: calc(
    100vh - ${ComponentHeights.header + ComponentHeights.backdrop}px
  );
  overflow-y: auto;
  position: fixed;
  display: ${props => (props.visible ? 'block' : 'none')};
  ${css({
    px: 1,
    pb: 1,
  })}
`

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

const variants = {
  open: {
    rotate: [-180, 0],
    opacity: [0, 1],
    transition: { duration: 0.15 },
  },
  closed: {
    rotate: [180, 0],
    opacity: [0, 1],
    transition: { duration: 0.15 },
  },
}

function MenuItem(props) {
  return (
    <motion.div
      initial="closed"
      animate={props.isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      {props.isOpen ? (
        <div onClick={() => props.onClose()}>
          <HeaderNavigationItem>
            <icons.Menu />
          </HeaderNavigationItem>
        </div>
      ) : (
        <div onClick={() => props.onOpen()}>
          <HeaderNavigationItem>
            <icons.Close />
          </HeaderNavigationItem>
        </div>
      )}
    </motion.div>
  )
}

// function NavigateBackItem(props) {
//   return (
//     <HeaderNavigationItem>
//       <icons.KeyboardBackSpace />
//     </HeaderNavigationItem>
//   )
// }

/**
 * Composed of the front layer that shows content, and the backlayer showing
 * the navigation and any additional actions relevant to the front layer.
 */
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
    <Box key="menu-item" pr={2}>
      <MenuItem
        isOpen={openBackdropFrontLayer}
        onClose={() => setOpenBackdropFrontLayer(false)}
        onOpen={() => setOpenBackdropFrontLayer(true)}
      />
    </Box>,
  ]

  return (
    <Box
      minHeight="100vh"
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
            navigationTabs={<Tabs key="tabs" />}
          />,
          <Route path="/portfolio" key="portfolio-navigation-list">
            <HeaderNavigationList items={Portfolio.navigationItems} />
          </Route>,
          <Route path="/biography" key="biography-navigation-list">
            <HeaderNavigationList items={Biography.navigationItems} />
          </Route>,
        ]}
        frontLayerComponents={[
          <Box pb={openBackdropFrontLayer ? 1 : null} key="sub-header">
            <SubHeader />
          </Box>,
          <Layout key="portfolio" visible={openBackdropFrontLayer}>
            <Portfolio.Portfolio />
          </Layout>,
          <Layout key="biography" visible={openBackdropFrontLayer}>
            <Biography.Biography />
          </Layout>,
        ]}
        frontLayerExpand={openBackdropFrontLayer}
        onExpandFrontLayer={() => setOpenBackdropFrontLayer(true)}
      />
    </Box>
  )
}
