import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { motion, AnimatePresence } from 'framer-motion'
import { GlobalUiState } from './global-ui-state'

import { Box } from './box'
import { ComponentHeights, ZIndex } from './constants'

const Header = styled.div`
  height: ${ComponentHeights.header}px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  ${css({
    display: 'flex',
    alignItems: 'center',
    fontSize: 3,
    pl: 2,
    mb: 4,
  })}
`

const BackLayer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: hidden;
  height: 100vh;
  z-index: ${ZIndex.drawer};
`

const FrontLayer = styled(motion.div)`
  position: fixed;
  top: 0;
  overflow-y: auto;
  height: 100vh;
  z-index: ${ZIndex.drawer};
  ${css({
    pb: 3,
  })}
  width: 300px;
  ${css({
    bg: 'drawerBackground',
  })}
`

/**
 * Used in app medium layout to display navigational links;
 * composed of two layers, front and back layer, the front layer shows
 * the content, and the back layer dims the active page to give the front
 * layer focus.
 */
export function Drawer(props) {
  const uiState = React.useContext(GlobalUiState)

  React.useEffect(() => {
    if (props.drawerOpen) {
      uiState.setPreventBodyScroll(true)
    } else {
      uiState.setPreventBodyScroll(false)
    }
  }, [uiState, props.drawerOpen])

  const frontLayerVariants = {
    open: {
      left: '0px',
    },
    closed: {
      left: '-300px',
    },
  }

  const backLayerVariants = {
    open: {
      opacity: 1,
      display: 'block',
    },
    closed: {
      opacity: 0,
      transitionEnd: {
        display: 'none',
      },
    },
  }

  return (
    <div>
      <AnimatePresence>
        <BackLayer
          key="back-layer"
          variants={backLayerVariants}
          initial={{ opacity: 0, display: 'none' }}
          animate={props.drawerOpen ? 'open' : 'closed'}
          exit="closed"
          onClick={props.onClose}
        />
      </AnimatePresence>
      <AnimatePresence>
        <FrontLayer
          key="front-layer"
          variants={frontLayerVariants}
          initial={{ left: '-320px' }}
          animate={props.drawerOpen ? 'open' : 'closed'}
          transition={{
            ease: [0.31, 0.03, 0.23, 0.99],
          }}
          exit="closed"
        >
          <Header>
            <Box
              as="img"
              alt="logo"
              src="logo.svg"
              height={ComponentHeights.header / 2}
            />
          </Header>
          {props.children}
        </FrontLayer>
      </AnimatePresence>
    </div>
  )
}

Drawer.propTypes = {
  children: PropTypes.node,
  drawerOpen: PropTypes.bool,
  onClose: PropTypes.func,
}
