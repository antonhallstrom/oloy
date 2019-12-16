import * as R from 'ramda'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Box } from './box'
import { Header, HeaderActionItem, HeaderNavigationItem } from './header'
import { Backdrop } from './backdrop'
import * as icons from './icons'
import * as portfolio from './portfolio'

const mapIndexed = R.addIndex(R.map)
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
        paths
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
