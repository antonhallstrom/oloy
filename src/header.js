import PropTypes from 'prop-types'
import React from 'react'
import { Box } from './box'
import styled from '@emotion/styled'
import css from '@styled-system/css'

import { Navigation } from './navigation'

export const HeaderNavigationItem = styled.div`
  ${css({
    display: ['flex', 'flex', 'none'],
    fontSize: 4,
  })}
`

export const HeaderActionItem = styled.div`
  ${css({
    display: ['flex', 'none'],
    fontSize: 4,
  })}
`

export function Header(props) {
  return (
    <Box display="flex" justifyContent="space-between" px={2}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Box display="flex" alignItems="center">
          {props.navigationItem}
          <Box pl={2} lineHeight="64px">
            Header
          </Box>
        </Box>

        {props.actionItems}
      </Box>
      <Box display={['none', 'none', 'flex']}>
        <Navigation />
      </Box>
    </Box>
  )
}

Header.propTypes = {
  navigationItem: PropTypes.func,
  actionItems: PropTypes.array,
  onNavigationCloseClick: PropTypes.func,
  onNavigationClick: PropTypes.func,
  onActionClick: PropTypes.func,
}
