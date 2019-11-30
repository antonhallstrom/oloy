import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { Backdrop } from './backdrop'
import { Box } from './box'

const Base = styled.div`
  ${css({
    color: 'textInverted',
    bg: 'topBarBackground',
    p: 1,
  })};
`

export function TopBar() {
  const [expand, setExpand] = React.useState(false)

  return (
    <Box>
      <Base onClick={() => setExpand(false)}>Heading</Base>
      <Backdrop expand={expand} onExpand={() => setExpand(true)} />
    </Box>
  )
}

TopBar.propTypes = {
  onOpen: PropTypes.func,
}
