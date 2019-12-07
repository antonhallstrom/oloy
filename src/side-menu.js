import React from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'

const Base = styled.div`
  border-right: 1px solid #e5e5e5;
  min-height: calc(100vh - 64px);
  width: 250px;
  ${css({
    display: ['none', 'none', 'flex', 'flex'],
  })}
`

export function SideMenu() {
  return <Base />
}
