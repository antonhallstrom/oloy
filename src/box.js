import styled from '@emotion/styled'
import {
  border,
  position,
  grid,
  typography,
  flexbox,
  space,
  color,
  layout,
  shadow,
} from 'styled-system'

export const Box = styled.div`
  box-sizing: border-box;
  ${border}
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${typography}
  ${grid}
  ${position}
  ${shadow}
`
