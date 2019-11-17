import PropTypes from 'prop-types'
import * as R from 'ramda'
import React from 'react'
import styled from '@emotion/styled'

import * as t from './theme'
import { Box } from './box'

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 16px;
  margin: 8px;
  background-color: ${props => t.getColor('switchBackground', props)};
  border-radius: 9999px;
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
  transition: 0.4s;
  border-radius: 9999px;

  &:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    top: -2px;
    left: 0px;
    background-color: ${props => t.getColor('switchKnob', props)};
    transition: 0.4s;
    border-radius: 9999px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  }

  input[type='checkbox']:checked + & {
    background-color: ${props => t.getColor('switchBackgroundChecked', props)};
  }

  input:focus + &:before {
    box-shadow: 0 0 1px ${props => t.getColor('switchKnobChecked', props)};
  }

  input[type='checkbox']:checked + &:before {
    transform: translateX(16px);
    background-color: ${props => t.getColor('switchKnobChecked', props)};
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
            return props.onChange(
              checked ? R.head(props.values) : R.last(props.values)
            )
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
  onChange: PropTypes.func,
}
