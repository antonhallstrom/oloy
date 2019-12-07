import React from 'react'

import styled from '@emotion/styled'
import css from '@styled-system/css'

import { Box } from '../box'
import { Content } from '../content'
import { FrontLayer } from './front-layer'
import { Subheader } from '../subheader'
import { Header, HeaderActionItem, HeaderNavigationItem } from '../header'
// import { GlobalUiState } from './global-ui-state'

import * as icons from '../icons'

const BackLayer = styled.div`
  ${css({
    color: 'textInverted',
    bg: 'backLayerBackground',
    boxShadow: 0,
  })}
`

function NavigateBackItem(props) {
  return (
    <HeaderNavigationItem>
      <icons.KeyboardBackSpace />
    </HeaderNavigationItem>
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

export function Backdrop(props) {
  const [openFrontLayer, setOpenFrontLayer] = React.useState(false)
  // const uiState = React.useContext(GlobalUiState)
  // onClick={() => uiState.setDrawerOpen(!uiState.drawerOpen)}

  const actions = [
    <HeaderActionItem
      key="action-items-1"
      onClick={() => setOpenFrontLayer(false)}
    >
      <icons.MoreVertically />
    </HeaderActionItem>,
  ]

  const navigationItem = props.menu ? (
    <MenuItem
      onClose={() => setOpenFrontLayer(false)}
      onOpen={() => setOpenFrontLayer(true)}
    />
  ) : (
    <NavigateBackItem />
  )

  return (
    <Box width="100%" bg="backLayerBackground">
      <BackLayer>
        <Header actionItems={actions} navigationItem={navigationItem} />
      </BackLayer>
      <FrontLayer
        expand={openFrontLayer}
        onExpand={() => setOpenFrontLayer(true)}
      >
        <Subheader />
        {!openFrontLayer && <Content />}
      </FrontLayer>
    </Box>
  )
}
