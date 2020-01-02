import React from 'react'
import * as R from 'ramda'
import { Global, css as emotionCss } from '@emotion/core'
import emotionReset from 'emotion-reset'
import styledSystemCss from '@styled-system/css'
import { css } from '@emotion/core'

export function CssReset() {
  return (
    <Global
      styles={emotionCss`
      ${emotionReset}
        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }

        body {
          line-height: 1.2;
        }

        a {
          text-decoration: none;
        }
      `}
    />
  )
}

export function CssBase(props) {
  return (
    <Global
      styles={styledSystemCss(
        R.mergeDeepRight(
          {
            body: {
              color: 'text',
              bg: 'background',
              fontFamily: 'body',
              transition: 'bg 200ms linear',
            },
            a: {
              color: 'textInverted',
            },
          },
          R.defaultTo(
            {},
            props.preventBodyScroll && { body: { overflow: 'hidden' } }
          )
        )
      )}
    />
  )
}

export function CssFontFaces() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Press Start 2P';
          src: url('/fonts/press-start2p-regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}
    />
  )
}
