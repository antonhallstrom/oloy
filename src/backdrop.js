import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { Box } from './box'

const Base = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  transition: ease-in-out 0.2s;

  ${props =>
    !props.expand &&
    `
    bottom: 0;
    height: auto;
  `};
  ${css({
    bg: 'backdropBackground',
    p: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    display: ['block', 'none'],
  })}
`
const Content = styled.div``

export function Backdrop(props) {
  return (
    <Base expand={props.expand} onClick={props.onExpand}>
      <Box>Subheading</Box>
      {props.expand && (
        <React.Fragment>
          <hr />
          <Content>Frick i'm content</Content>
        </React.Fragment>
      )}
    </Base>
  )
}

Backdrop.propTyps = {
  expand: PropTypes.bool,
  onExpand: PropTypes.func,
}
