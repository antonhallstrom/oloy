import PropTypes from 'prop-types'
import React from 'react'
import { Box } from './box'
import styled from '@emotion/styled'
import css from '@styled-system/css'

export const HeaderNavigationItem = styled.div`
  ${css({
    display: 'flex',
    fontSize: 6,
  })}
`

export const HeaderActionItem = styled.div`
  ${css({
    display: 'flex',
    fontSize: 6,
  })}
`

export function Header(props) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      px={2}
      bg="headerBackground"
      color="textInverted"
    >
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
      {props.navigationTabs}
    </Box>
  )
}

Header.propTypes = {
  navigationTabs: PropTypes.object,
  navigationItem: PropTypes.array,
  actionItems: PropTypes.array,
  onNavigationCloseClick: PropTypes.func,
  onNavigationClick: PropTypes.func,
  onActionClick: PropTypes.func,
}
