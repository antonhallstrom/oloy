import PropTypes from 'prop-types'
import * as R from 'ramda'
import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import * as t from './theme'
import { Box } from './box'

const Slider = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 16px;
  margin: 8px;
  background-color: ${props => t.getColor('switchBackground', props)};
  border-radius: 9999px;

  ${props =>
    props.checked &&
    `
    background-color: ${t.getColor('switchBackgroundChecked', props)};
  `};
`

const Input = styled.input`
  display: none;
`

const Knob = styled(motion.div)`
  position: absolute;
  height: 20px;
  width: 20px;
  top: -2px;
  left: -2px;
  background-color: ${props => t.getColor('switchKnob', props)};
  border-radius: 9999px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  ${props =>
    props.checked &&
    `
    background-color: ${t.getColor('switchKnobChecked', props)};
  `};
`

const knobVariants = {
  checked: {
    x: '100%',
  },
  unchecked: {
    x: 0,
  },
}

export function Switch(props) {
  const [checked, setChecked] = React.useState(false)

  function handleCheck() {
    setChecked(!checked)
    return props.onChange(checked ? R.head(props.values) : R.last(props.values))
  }

  return (
    <Box display="flex" alignItems="center" style={{ cursor: 'pointer' }}>
      <Box pr="20px" onClick={() => handleCheck()}>
        {R.head(props.labels)}
      </Box>
      <Slider checked={checked}>
        <Input
          checked={checked}
          type="checkbox"
          value={checked}
          onChange={() => handleCheck()}
        />
        <Knob
          checked={checked}
          animate={checked ? 'checked' : 'unchecked'}
          variants={knobVariants}
        />
      </Slider>
      <Box pl="20px" onClick={() => handleCheck()}>
        {R.last(props.labels)}
      </Box>
    </Box>
  )
}

Switch.propTypes = {
  labels: PropTypes.array,
  values: PropTypes.array,
  onChange: PropTypes.func,
}
