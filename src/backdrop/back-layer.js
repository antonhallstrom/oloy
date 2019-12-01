import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { motion } from 'framer-motion'
import { Header } from '../header'

const Base = styled.div`
  ${css({
    color: 'textInverted',
    bg: 'backLayerBackground',
    p: 1,
  })};
`

const variants = {
  more: { height: '100%' },
  less: { height: '50px' },
}

export function BackLayer(props) {
  return (
    <motion.div
      initial={{ height: '100%' }}
      animate={props.expand ? 'more' : 'less'}
      variants={variants}
    >
      <Base onClick={props.onExpand}>
        <Header />
      </Base>
    </motion.div>
  )
}

BackLayer.propTypes = {
  expand: PropTypes.bool,
  onExpand: PropTypes.func,
}
