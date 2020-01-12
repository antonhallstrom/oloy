import React from 'react'
import { Route } from 'react-router-dom'

import { Box } from './box'
import { ComponentHeights } from './constants'

export function Home() {
  return (
    <Route exact path="/">
      <Box
        bg={[null, '#363640']}
        height="400px"
        mt={`${ComponentHeights.header}px`}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          height={[null, '100%']}
        >
          <Box as="img" key="logo" alt="logo" src="logo.svg" height="80px" />
          <Box
            mt={3}
            fontSize={[3]}
            fontFamily={2}
            color={['text', 'textInverted']}
            textAlign="center"
            lineHeight="2"
          >
            Hi, I'm Anton Hallström
            <br />
            and I make{' '}
            <span style={{ textDecoration: 'underline' }}>stuff</span>
          </Box>
        </Box>
      </Box>
      <Box py={[8, 8, 8, 8]} px={['0px', 7, 8, 8]}>
        <Box fontSize={7} color="text" lineHeight="1.5">
          Stuff
        </Box>
        <Box fontSize={3} color="text" lineHeight="2" opacity="0.5" mb={4}>
          Small selection of stuff that I made
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(240px, 1fr))"
          gridGap={1}
        >
          <Box
            height="240px"
            bg="rgba(0, 0, 0, 0.05)"
            minWidth="200px"
            borderRadius={0}
          />
          <Box
            height="240px"
            bg="rgba(0, 0, 0, 0.05)"
            minWidth="200px"
            borderRadius={0}
          />
          <Box
            height="240px"
            bg="rgba(0, 0, 0, 0.05)"
            minWidth="200px"
            borderRadius={0}
          />
          <Box
            height="240px"
            bg="rgba(0, 0, 0, 0.05)"
            minWidth="200px"
            borderRadius={0}
          />
        </Box>
      </Box>
    </Route>
  )
}
