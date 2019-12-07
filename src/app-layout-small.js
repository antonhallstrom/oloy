import React from 'react'

import { Box } from './box'
import { Subheader } from './subheader'
import { Header, HeaderActionItem, HeaderNavigationItem } from './header'
import { Backdrop } from './backdrop'
import * as icons from './icons'

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
      minHeight={['calc(100vh - 50px)', '100vh']}
      flexGrow="1"
      flexShrink="1"
      flexBasis="0"
      display="flex"
      flexDirection={['row', 'column']}
    >
      <Backdrop
        backLayerComponents={[
          <Header
            key="header"
            actionItems={actions}
            navigationItem={navigationItem}
          />,
        ]}
        frontLayerComponents={[<Subheader key="subheader" />]}
        frontLayerExpand={openBackdropFrontLayer}
        onExpandFrontLayer={() => setOpenBackdropFrontLayer(true)}
      />
    </Box>
  )
}
