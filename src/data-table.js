import styled from '@emotion/styled'
import css from '@styled-system/css'

export const Name = styled.div`
  ${css({
    fontSize: 6,
    pt: 3,
  })}
`

export const Table = styled.table`
  width: 100%;
  ${css({
    my: 2,
    color: 'tableColor',
  })}
`

export const Header = styled.thead`
  font-weight: 500;
  ${css({
    bg: 'tableHeaderBackground',
  })}
`

export const Row = styled.tr`
  text-align: left;
  ${css({
    p: 0,
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: 'tableRowBorderColor',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: 'tableRowBorderColor',
  })}
`

export const Heading = styled.th`
  font-weight: bold;
  ${css({
    p: 1,
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: 'tableHeadingBorderColor',
  })}
`

export const Body = styled.tbody`
  ${css({
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'tableBodyBorderColor',
  })}
`

export const Data = styled.td`
  ${css({
    color: 'tableColor',
    p: 1,
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: 'tableDataBorderColor',
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: 'tableDataBorderColor',
  })}
`

export const LinkStyle = styled.div`
  font-weight: bold;
  text-decoration: underline;
  ${css({
    color: 'tableColor',
  })}
`
