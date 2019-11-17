import PropTypes from 'prop-types'
import * as R from 'ramda'
import React from 'react'
import styled from '@emotion/styled'

import css from '@styled-system/css'
import * as t from './theme'
import { Box } from './box'

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  margin: 4px;
`

const Input = styled.input`
  display: none;
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${t.getColor('switchBackground')};
  transition: .4s;
  border-radius: 9999px;

  &:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: ${t.getColor('switchKnob')};
    transition: .4s;
    border-radius: 9999px;
  }

  ${css({
    'input[type="checkbox"]:checked + &': {
      bg: 'switchBackgroundChecked'
    },
  })}

  input:focus + &:before {
    box-shadow: 0 0 1px ${t.getColor('switchBackgroundChecked')};
  }

  input[type="checkbox"]:checked + &:before {
   transform: translateX(30px);
  }
`

export function Switch(props) {
  const [checked, setChecked] = React.useState(false)

  return (
    <Box display="flex" alignItems="center">
      {R.head(props.labels)}
      <Label>
        <Input
          checked={checked}
          type="checkbox"
          value={checked}
          onChange={() => {
            setChecked(!checked)
            return props.onChange(checked ? R.head(props.values) : R.last(props.values))
          }}
        />
        <Slider />
      </Label>
      {R.last(props.labels)}
    </Box>
  )
}

Switch.propTypes = {
  labels: PropTypes.array,
  values: PropTypes.array,
  onChange: PropTypes.func
}