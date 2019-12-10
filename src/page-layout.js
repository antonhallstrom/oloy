import React from 'react'
import { Route } from 'react-router-dom'
import { Box } from './box'

// Layout the content
// It maps a certain data structure into predefined layout
// e.g. showing the correct headings and such.
// or look how the portfolio feature should look like and work.

export function PageLayout() {
  return <Box py={['0px', 8, 8, 8]} px={['0px', 7, 8, 8]}></Box>
}
