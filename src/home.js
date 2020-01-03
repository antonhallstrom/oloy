import React from 'react'
import { Route } from 'react-router-dom'

import { Box } from './box'

import { motion } from 'framer-motion'
import styled from '@emotion/styled'

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
    stroke: ['#fff', '#fff', '#fff', 'none'],
    strokeOpacity: [1, 1, 1, 1, 0],
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
    strokeOpacity: [1, 1, 1, 1, 0],
    stroke: ['#fff', '#fff', '#fff', 'none'],
  },
}

function DimondLineMotion(props) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      position="absolute"
      height="93px"
      mt="41px"
      ml="16px"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        initial={{
          width: '56%',
          overflow: 'visible',
          stroke: '#fff',
          strokeWidth: '2',
          strokeLinejoin: 'round',
          strokeLinecap: 'round',
        }}
      >
        <defs>
          <motion.path
            id="a"
            d="M160.15 160.51l159.51 158.82-159.51 160.19 159.51 159.51"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            onAnimationComplete={props.onAnimationComplete}
          />
          <motion.path
            id="b"
            d="M479.17 160.51L319.66 320.02l159.51 159.5-159.51 158.14"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
          <motion.path
            id="c"
            d="M160.15 479.52L1.34 320.02l158.81-159.51L319.66 0"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
          <motion.path
            id="d"
            d="M479.17 479.52L638 319.33 479.17 160.51 319.66 0"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
        </defs>
        <use fillOpacity="0" stroke="#fff" xlinkHref="#a"></use>
        <use fillOpacity="0" stroke="#fff" xlinkHref="#b"></use>
        <use fillOpacity="0" stroke="#fff" xlinkHref="#a"></use>
        <use fillOpacity="0" stroke="#fff" xlinkHref="#b"></use>
        <use fillOpacity="0" stroke="#fff" xlinkHref="#c"></use>
        <use fillOpacity="0" stroke="#fff" xlinkHref="#d"></use>
      </motion.svg>
    </Box>
  )
}

const DiamondMotion = styled(motion.div)`
  width: 32px;
  height: 32px;
  position: absolute;
`

// #363540
const Background = styled(motion.div)`
  height: 500px;
  width: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.8) 18%,
    rgba(0, 255, 255, 0.8) 52%,
    rgba(255, 0, 255, 1) 100%
  );
`

const background = {
  hidden: {
    background: [
      `radial-gradient(
      circle,
      #363540 18%,
      #363540 52%,
      #363540 100%
    )`,
      `radial-gradient(
      circle,
      #363540 18%,
      #363540 52%,
      #363540 100%
    )`,
      `radial-gradient(
      circle,
      #363540 18%,
      #363540 52%,
      #363540 100%
    )`,
      `radial-gradient(
      circle,
      #363540 18%,
      #363540 52%,
      #363540 100%
    )`,
      `radial-gradient(
      circle,
      #363540 18%,
      #363540 52%,
      #363540 100%
    )`,
    ],
  },
  visible: {
    background: [
      `radial-gradient(
      circle,
      #363540 18%,
      #363540 52%,
      #363540 100%
    )`,
      `radial-gradient(
      circle,
      rgba(0, 0, 0, 0.8) 18%,
      rgba(0, 0, 0, 0.8) 52%,
      rgba(0, 0, 0, 1) 100%
    )`,
      `radial-gradient(
      circle,
      rgba(0, 0, 0, 0.2) 9%,
      rgba(0, 0, 0, 0.2) 21%,
      rgba(0, 0, 0, 0.2) 50%
    )`,
      `radial-gradient(
      circle,
      rgba(255, 255, 255, 0.8) 18%,
      rgba(0, 255, 255, 0.8) 52%,
      rgba(255, 0, 255, 1) 100%
    )`,
      `radial-gradient(
      circle,
      rgba(255, 255, 255, 0) 9%,
      rgba(0, 255, 255, 0) 21%,
      rgba(255, 0, 255, 0) 50%
    )`,
    ],
    transition: {
      delay: 0.2,
      duration: 4,
      ease: 'easeInOut',
    },
  },
}

const AnimationSteps = {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
}

export function Home() {
  const [step, setStep] = React.useState(AnimationSteps.FIRST)

  function handleStep(_step) {
    if (_step === AnimationSteps.FIRST) {
      setStep(AnimationSteps.SECOND)
    }
  }

  return (
    <Route exact path="/">
      <Box
        bg="#363540"
        height="500px"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Background
          variants={background}
          animate={step === AnimationSteps.THIRD ? 'visible' : 'hidden'}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
            position="relative"
          >
            {step === AnimationSteps.FIRST && (
              <React.Fragment>
                <Box position="relative">
                  <DiamondMotion
                    initial={{
                      left: '-22px',
                      bottom: '-58px',
                      rotate: 45,
                      opacity: 0,
                      scale: 0.8,
                      background: 'white',
                    }}
                    animate={{
                      opacity: 1,
                      scale: [1, 0],
                      background: ['white', 'none'],
                    }}
                    transition={{
                      delay: 1,
                      duration: 2,
                      ease: 'easeInOut',
                    }}
                    onAnimationComplete={() => handleStep(AnimationSteps.FIRST)}
                  />
                  <DiamondMotion
                    initial={{
                      top: '48px',
                      rotate: 45,
                      opacity: 0,
                      scale: 1,
                      background: 'white',
                    }}
                    animate={{
                      opacity: 1,
                      scale: [1, 0],
                      background: ['white', 'none'],
                    }}
                    transition={{
                      delay: 1,
                      duration: 2,
                      ease: 'easeInOut',
                    }}
                  />
                  <DiamondMotion
                    initial={{
                      left: '22px',
                      bottom: '-58px',
                      rotate: 45,
                      opacity: 0,
                      scale: 1,
                      background: 'white',
                    }}
                    animate={{
                      opacity: 1,
                      scale: [1, 0],
                      background: ['white', 'none'],
                    }}
                    transition={{
                      delay: 1,
                      duration: 2,
                      ease: 'easeInOut',
                    }}
                  />
                  <DiamondMotion
                    initial={{
                      top: '4px',
                      rotate: 45,
                      opacity: 0,
                      scale: 1,
                      background: 'white',
                    }}
                    animate={{
                      opacity: 1,
                      scale: [1, 0],
                      background: ['white', 'none'],
                    }}
                    transition={{
                      delay: 1,
                      duration: 2,
                      ease: 'easeInOut',
                    }}
                  />
                </Box>
                <DimondLineMotion />
              </React.Fragment>
            )}
            {step === AnimationSteps.SECOND && (
              <Box position="relative">
                <DiamondMotion
                  initial={{
                    left: '-22px',
                    bottom: '-58px',
                    scale: 1,
                    background: 'white',
                  }}
                  animate={{
                    filter: [
                      'blur(0px)',
                      'blur(0px)',
                      'blur(5px)',
                      'blur(0px)',
                      'blur(0px)',
                    ],
                    rotate: [45, 45, 90, 225, 225],
                    left: '-22px',
                    bottom: '-58px',
                    opacity: [0, 0.5, 1, 1, 1],
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
                    delay: 0.2,
                    duration: 3.7,
                    ease: 'easeInOut',
                  }}
                />
                <DiamondMotion
                  initial={{
                    top: '48px',
                    scale: 1,
                    background: 'white',
                  }}
                  animate={{
                    filter: [
                      'blur(0px)',
                      'blur(0px)',
                      'blur(5px)',
                      'blur(0px)',
                      'blur(0px)',
                    ],
                    rotate: [45, 45, 90, 225, 225],
                    top: '48px',
                    opacity: [0, 0.5, 1, 1, 1],
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
                    delay: 0.2,
                    duration: 3.8,
                    ease: 'easeInOut',
                  }}
                />
                <DiamondMotion
                  initial={{
                    left: '22px',
                    bottom: '-58px',
                    scale: 1,
                    background: 'white',
                  }}
                  animate={{
                    filter: [
                      'blur(0px)',
                      'blur(0px)',
                      'blur(5px)',
                      'blur(0px)',
                      'blur(0px)',
                    ],
                    rotate: [45, 45, 90, 225, 225],
                    left: '22px',
                    bottom: '-58px',
                    opacity: [0, 0.5, 1, 1, 1],
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
                    delay: 0.2,
                    duration: 3.9,
                    ease: 'easeInOut',
                  }}
                />
                <DiamondMotion
                  initial={{
                    top: '0px',
                    scale: 1,
                    background: 'white',
                  }}
                  animate={{
                    filter: [
                      'blur(0px)',
                      'blur(0px)',
                      'blur(5px)',
                      'blur(0px)',
                      'blur(0px)',
                    ],
                    rotate: [45, 45, 90, 225, 225],
                    opacity: [0, 0.5, 1, 1, 1],
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
                    delay: 0.2,
                    duration: 4,
                    ease: 'easeInOut',
                  }}
                />
              </Box>
            )}
          </Box>
        </Background>
      </Box>
      <Box py={['0px', 8, 8, 8]} px={['0px', 7, 8, 8]}></Box>
    </Route>
  )
}
