import React from 'react'
import { Route } from 'react-router-dom'

import { Box } from './box'
import { ComponentHeights } from './constants'

import { motion } from 'framer-motion'
import styled from '@emotion/styled'

// box-shadow:
// 0 0 60px 30px #fff,  /* inner white */
// 0 0 100px 60px #f0f, /* middle magenta */
// 0 0 140px 90px #0ff; /* outer cyan */

// box-shadow: 0 0 30px 15px #fff, /* inner white */ 0 0 50px 30px #f0f,
// /* middle magenta */ 0 0 70px 45px #0ff; /* outer cyan */

const Diamond = styled(Box)`
  width: 32px;
  height: 32px;
  background-color: white;
  transform: rotate(45deg);
  position: absolute;
`

const DiamondMotion = styled(motion.div)`
  width: 32px;
  height: 32px;
  background-color: white;
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
            <DiamondMotion
              initial={{
                left: '-22px',
                bottom: '-58px',
                scale: 1,
              }}
              animate={{
                rotate: [45, 45, 90, 225, 225],
                left: '-22px',
                bottom: '-58px',
                opacity: [1, 0.5, 1, 1, 1],
                scale: [0.25, 0.5, 0.8, 1.2, 1],
                x: [0, -50, -100, -50, 0],
                y: [0, -50, -100, -50, 0],
                borderRadius: ['0px', '50%', '50%', '0px', '0px'],
                boxShadow: [
                  '0 0 0 0 #fff, 0 0 0 0 #f0f, 0 0 0 0 #0ff',
                  '0 0 0 0 #fff, 0 0 0 0 #f0f, 0 0 0 0 #0ff',
                  '0 0 15px 7px #fff, 0 0 25px 15px #f0f, 0 0 45px 22px #0ff',
                  '0 0 30px 15px #fff, 0 0 50px 30px #f0f, 0 0 70px 45px #0ff',
                  '0 0 0px 0px #fff, 0 0 0px 0px #f0f, 0 0 0px 0px #0ff',
                ],
              }}
              transition={{
                delay: 2,
                duration: 4,
                ease: 'easeInOut',
              }}
            />
            <DiamondMotion
              initial={{
                top: '48px',
                scale: 1,
              }}
              animate={{
                rotate: [45, 45, 90, 225, 225],
                top: '48px',
                opacity: [1, 0.5, 1, 1, 1],
                scale: [0.25, 0.5, 0.8, 1.2, 1],
                x: [0, -50, -100, -50, 0],
                y: [0, 50, 100, 50, 0],
                borderRadius: ['0px', '50%', '50%', '0px', '0px'],
                boxShadow: [
                  '0 0 0 0 #fff, 0 0 0 0 #f0f, 0 0 0 0 #0ff',
                  '0 0 0 0 #fff, 0 0 0 0 #f0f, 0 0 0 0 #0ff',
                  '0 0 15px 7px #fff, 0 0 25px 15px #f0f, 0 0 45px 22px #0ff',
                  '0 0 30px 15px #fff, 0 0 50px 30px #f0f, 0 0 70px 45px #0ff',
                  '0 0 0px 0px #fff, 0 0 0px 0px #f0f, 0 0 0px 0px #0ff',
                ],
              }}
              transition={{
                delay: 2,
                duration: 4,
                ease: 'easeInOut',
              }}
            />
            <DiamondMotion
              initial={{
                left: '22px',
                bottom: '-58px',
                scale: 1,
              }}
              animate={{
                rotate: [45, 45, 90, 225, 225],
                left: '22px',
                bottom: '-58px',
                opacity: [1, 0.5, 1, 1, 1],
                scale: [0.25, 0.5, 0.8, 1.2, 1],
                x: [0, 50, 100, 50, 0],
                y: [0, 50, 100, 50, 0],
                borderRadius: ['0px', '50%', '50%', '0px', '0px'],
                boxShadow: [
                  '0 0 0 0 #fff, 0 0 0 0 #f0f, 0 0 0 0 #0ff',
                  '0 0 0 0 #fff, 0 0 0 0 #f0f, 0 0 0 0 #0ff',
                  '0 0 15px 7px #fff, 0 0 25px 15px #f0f, 0 0 45px 22px #0ff',
                  '0 0 30px 15px #fff, 0 0 50px 30px #f0f, 0 0 70px 45px #0ff',
                  '0 0 0px 0px #fff, 0 0 0px 0px #f0f, 0 0 0px 0px #0ff',
                ],
              }}
              transition={{
                delay: 2,
                duration: 4,
                ease: 'easeInOut',
              }}
            />
            <DiamondMotion
              initial={{
                top: '0px',
                scale: 1,
              }}
              animate={{
                rotate: [45, 45, 90, 225, 225],
                opacity: [1, 0.5, 1, 1, 1],
                scale: [0.25, 0.5, 0.8, 1.2, 1],
                x: [0, 50, 100, 50, 0],
                y: [0, -50, -100, -50, 0],
                borderRadius: ['0px', '50%', '50%', '0px', '0px'],
                boxShadow: [
                  '0 0 0 0 #fff, 0 0 0 0 #f0f, 0 0 0 0 #0ff',
                  '0 0 0 0 #fff, 0 0 0 0 #f0f, 0 0 0 0 #0ff',
                  '0 0 15px 7px #fff, 0 0 25px 15px #f0f, 0 0 45px 22px #0ff',
                  '0 0 30px 15px #fff, 0 0 50px 30px #f0f, 0 0 70px 45px #0ff',
                  '0 0 0px 0px #fff, 0 0 0px 0px #f0f, 0 0 0px 0px #0ff',
                ],
              }}
              transition={{
                delay: 2,
                duration: 4,
                ease: 'easeInOut',
              }}
            />
          </Box>
          {/* <Box
            as="img"
            alt="logo"
            src="logo.svg"
            height={ComponentHeights.header}
          /> */}
          {/* </motion.div> */}

          {/* <Box
            bg="white"
            color="textInverted"
            fontSize={6}
            pt={4}
          >
            Anton Hallström
          </Box> */}
        </Box>
      </Box>
      <Box py={['0px', 8, 8, 8]} px={['0px', 7, 8, 8]}></Box>
    </Route>
  )
}
