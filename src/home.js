import React from 'react'
import { Route } from 'react-router-dom'

import { Box } from './box'
import { ComponentHeights } from './constants'

import { motion } from 'framer-motion'
import styled from '@emotion/styled'

const Diamond = styled(Box)`
  width: 32px;
  height: 32px;
  background-color: white;
  transform: rotate(45deg);
  position: absolute;
`

export function Home() {
  return (
    <Route exact path="/">
      <Box height="500px" bg="#363540" width="100%">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <Box position="relative">
            <Diamond left="-22px" bottom="-58px" />
            <Diamond />
            <Diamond top="48px" />
            <Diamond left="22px" bottom="-58px" />
          </Box>
          {/* <motion.div
            animate={{
              x: [0, 10, 100, 10, 0],
              y: [0, 10, 100, 10, 0],
              skew: [25, 50, 45, 50, 25],
            }}
            transition={{
              duration: 4,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              loop: Infinity,
            }}
          >
            <Diamond />
          </motion.div> */}
          {/* <Box
            display="flex"
            justifyContent="space-around"
            position="relative"
            height="400px"
            width="400px"
          >
            <motion.div
              animate={{
                scale: [0, 0.8, 1.2, 1.5, 1.2, 1, 0.8, 1],
                y: [100, 50, 75, 150, 250, 50, 400],
                x: [100, 50, 75, 150, 250, 50, 400],
                opacity: [0, 0.5, 1, 1, 1, 1, 0],
                // skewX: [25, 50, 45, 50, 25],
                // skewY: [-25, -50, -45, -50, -25],
              }}
              transition={{
                duration: 5,
                ease: 'easeInOut',
                loop: 1,
              }}
            >
              <Diamond />
            </motion.div>
            <motion.div
              animate={{
                scale: [0, 0.8, 1, 0.8, 1.1, 1, 0.8, 1],
                y: [100, 50, 75, 150, 250, 50, -400],
                x: [-100, -50, -75, -150, -250, -50, -400],
                opacity: [0, 0.5, 1, 1, 1, 1, 0],
                // skewX: [25, 50, 45, 50, 25],
                // skewY: [-25, -50, -45, -50, -25],
              }}
              transition={{
                duration: 7,
                ease: 'easeInOut',
                loop: 1,
              }}
            >
              <Diamond />
            </motion.div>
          </Box> */}
          {/* <Box
            as="img"
            alt="logo"
            src="logo.svg"
            height={ComponentHeights.header}
          /> */}
          {/* </motion.div> */}

          {/* <Box color="textInverted" fontSize={6} pt={4}>
            Anton Hallström
          </Box> */}
        </Box>
      </Box>
      <Box py={['0px', 8, 8, 8]} px={['0px', 7, 8, 8]}></Box>
    </Route>
  )
}
