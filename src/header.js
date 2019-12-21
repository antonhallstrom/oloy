import PropTypes from 'prop-types'
import React from 'react'
import { Box } from './box'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { ZIndex, ComponentHeights } from './constants'

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

/**
 * Used to display current page, navigation links, and application logo.
 */
export function Header(props) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      px={2}
      bg="headerBackground"
      color="textInverted"
      position="fixed"
      width="100%"
      zIndex={ZIndex.header}
      boxShadow={[null, 0]}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Box display="flex" alignItems="center">
          {props.navigationItem}
          <Box pl={2} lineHeight={`${ComponentHeights.header}px`}>
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
