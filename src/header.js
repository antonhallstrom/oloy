import PropTypes from 'prop-types'
import React from 'react'
import { Box } from './box'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { ZIndex, ComponentHeights } from './constants'

export const HeaderNavigationItem = styled.div`
  ${css({
    display: 'flex',
    alignItems: 'center',
    fontSize: 6,
    height: `${ComponentHeights.header}px`,
  })}
`

export const HeaderActionItem = styled.div`
  ${css({
    display: 'flex',
    alignItems: 'center',
    fontSize: 6,
    height: `${ComponentHeights.header}px`,
  })}
`

/**
 * Used to display current page, navigation links, and application logo.
 */
export function Header(props) {
  return (
    <Box
      display="flex"
      flexDirection={['column', 'row']}
      justifyContent="space-between"
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
        <Box display="flex" alignItems="center" px={2}>
          {props.navigationItem}
          <Box
            as="img"
            alt="logo"
            src="logo.svg"
            height={ComponentHeights.header / 2}
          />
          <Box
            display={['none']}
            pl={2}
            lineHeight={`${ComponentHeights.header}px`}
          >
            Anton Hallström
          </Box>
        </Box>
        <Box px={2}>{props.actionItems}</Box>
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
