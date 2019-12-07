import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { motion } from 'framer-motion'
import { Box } from '../box'

const Base = styled.div`
  height: 100%;
  ${css({
    bg: 'frontLayerBackground',
    p: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    display: ['block', 'none'],
  })}
`

export function FrontLayer(props) {
  const variants = {
    more: {
      bottom: 0,
      height: 'calc(100vh - 68px)',
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

FrontLayer.propTyps = {
  children: PropTypes.node,
  expand: PropTypes.bool,
  onExpand: PropTypes.func,
}
