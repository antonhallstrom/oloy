import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'

import { Box } from '../box'

const Base = styled.div`
  width: 100%;
  height: 100%;

  ${props =>
    !props.expand &&
    `
    height: auto;
  `};
  ${css({
    bg: 'frontLayerBackground',
    p: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    display: ['block', 'none'],
  })}
`

export function FrontLayer(props) {
  return (
    <Box
      width="100%"
      height={!props.expand ? 'auto' : '100%'}
      bg="backLayerBackground"
    >
      <Base expand={props.expand} onClick={props.onExpand}>
        {props.children}
      </Base>
    </Box>
  )
}

FrontLayer.propTyps = {
  children: PropTypes.node,
  expand: PropTypes.bool,
  onExpand: PropTypes.func,
}
