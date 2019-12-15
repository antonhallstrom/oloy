import * as R from 'ramda'
import PropTypes from 'prop-types'
import React from 'react'
import { Box } from './box'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import * as icons from './icons'

const Base = styled.div`
  ${css({
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'tableDataBorderColor',
  })}
`

const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-weight: bold;

  ${props =>
    props.hover &&
    `&:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: ease-in 0.1s;
  }`}

  ${css({
    color: 'tableColor',
  })}
`

export function List(props) {
  const [expandItem, setExpandItem] = React.useState(null)

  function handleExpandItem(item) {
    if (R.equals(expandItem, item)) {
      setExpandItem(null)
    } else {
      setExpandItem(item)
    }
  }

  return (
    <Base>
      {R.map(
        item => (
          <Item
            key={item.label}
            onClick={() => handleExpandItem(item.label)}
            hover={R.not(R.equals(expandItem, item.label))}
          >
            <Box
              p={1}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              bg={
                R.equals(expandItem, item.label)
                  ? 'rgba(0, 0, 0, 0.05)'
                  : 'transparent'
              }
            >
              {item.label}
              <Box fontSize={6}>
                {R.equals(expandItem, item.label) ? (
                  <icons.KeyboardArrowUp />
                ) : (
                  <icons.KeyboardArrowDown />
                )}
              </Box>
            </Box>
            {R.equals(expandItem, item.label) && (
              <Box p={1}>{item.content}</Box>
            )}
          </Item>
        ),
        props.items
      )}
    </Base>
  )
}

List.propTypes = {
  items: PropTypes.array,
}
