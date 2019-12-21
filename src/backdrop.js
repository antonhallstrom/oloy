import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { motion } from 'framer-motion'
import { ComponentHeights } from './constants'

import { Box } from './box'

export const BackLayer = styled.div`
  ${css({
    color: 'textInverted',
    bg: 'backLayerBackground',
    boxShadow: 0,
  })}
`

const Base = styled.div`
  height: 100%;
  ${css({
    bg: 'frontLayerBackground',
    p: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    display: 'block',
  })}
`

export function FrontLayer(props) {
  const variants = {
    more: {
      bottom: 0,
      height: `calc(100vh - ${ComponentHeights.header}px)`,
      transition: { type: 'spring', damping: 500, stiffness: 500 },
    },
    less: {
      bottom: 0,
      height: 'auto',
      top: 'auto',
      transition: { type: 'spring', damping: 500, stiffness: 500 },
    },
  }

  return (
    <motion.div
      initial={{
        position: 'absolute',
        bottom: 0,
        height: 'auto',
        width: '100%',
      }}
      animate={props.expand ? 'more' : 'less'}
      variants={variants}
    >
      <Box width="100%" height="100%" bg="backLayerBackground">
        <Base expand={props.expand} onClick={props.onExpand}>
          {props.children}
        </Base>
      </Box>
    </motion.div>
  )
}

FrontLayer.propTypes = {
  children: PropTypes.node,
  expand: PropTypes.bool,
  onExpand: PropTypes.func,
}

/**
 * Used to on small screens; composed of two surfaces: a back layer
 * and a front layer. The back layer displays actions and context,
 * and these control and inform the front layer’s content.
 */
export function Backdrop(props) {
  return (
    <Box width="100%" bg="backLayerBackground">
      <BackLayer>{props.backLayerComponents}</BackLayer>
      <FrontLayer
        expand={props.frontLayerExpand}
        onExpand={props.onExpandFrontLayer}
      >
        {props.frontLayerComponents}
      </FrontLayer>
    </Box>
  )
}

Backdrop.propTypes = {
  backLayerComponents: PropTypes.node,
  frontLayerComponents: PropTypes.node,
  frontLayerExpand: PropTypes.bool,
  onExpandFrontLayer: PropTypes.func,
}
