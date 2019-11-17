import React from 'react'
import styled from '@emotion/styled'

// input[type=checkbox][checked] + & {
//   background-color: #2196F3;
// }

// input[type=checkbox][focus] + & {
//   box-shadow: 0 0 1px #2196F3;
// }

// input[type=checkbox][checked] + &:before {
//   transform: translateX(26px);
// }

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
  background-color: #ccc;
  transition: .4s;
  border-radius: 9999px;

  &:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 9999px;
  }

  input[type="checkbox"]:checked + & {
    background-color: #2196F3;
  }

  input:focus + &:before {
    box-shadow: 0 0 1px #2196F3;
  }

  input[type="checkbox"]:checked + &:before {
   transform: translateX(26px);
  }
`

export function Switch(props) {
  return (
    <Label>
      <Input checked={props.value} type="checkbox" value={props.value} onChange={value => props.onChange(!props.value)}/>
      <Slider />
    </Label>
  )
}