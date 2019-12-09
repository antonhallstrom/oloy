import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { motion, AnimatePresence } from 'framer-motion'
import { GlobalUiState } from './global-ui-state'

const BackLayer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: hidden;
  height: 100vh;
`

const FrontLayer = styled(motion.div)`
  position: fixed;
  top: 0;
  overflow-y: auto;
  height: 100vh;
  ${css({
    pt: 7,
    pb: 3,
  })}
  /* box-shadow: 3px 0px 19px 4px rgba(0, 0, 0, 0.5); */
  width: 300px;
  ${css({
    bg: 'drawerBackground',
  })}
`

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
