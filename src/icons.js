import React from 'react'

import styled from '@emotion/styled'

export const SvgIcon = styled.svg`
  margin-top: -0.105em;
  margin-bottom: -0.145em;
  height: 1.25em;
  width: 1.25em;
  vertical-align: -0.185em;
`

/**
 * Source [Google Material Design Icons]{@link https://material.io/resources/icons/?style=baseline}
 */
export function Close() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        fill="currentColor"
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  )
}

/**
 * Source [Google Material Design Icons]{@link https://material.io/resources/icons/?style=baseline}
 */
export function Menu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
        fill="currentColor"
      />
    </svg>
  )
}

/**
 * Source [Google Material Design Icons]{@link https://material.io/resources/icons/?style=baseline}
 */
export function MoreVertically() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="currentColor"
      />
    </svg>
  )
}

/**
 * Source [Google Material Design Icons]{@link https://material.io/resources/icons/?style=baseline}
 */
export function KeyboardBackSpace() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
        fill="currentColor"
      />
    </svg>
  )
}

/**
 * Source [Google Material Design Icons]{@link https://material.io/resources/icons/?style=baseline}
 */
export function KeyboardArrowDown() {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
        fill="currentColor"
      />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </SvgIcon>
  )
}

/**
 * Source [Google Material Design Icons]{@link https://material.io/resources/icons/?style=baseline}
 */
export function KeyboardArrowUp() {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
        fill="currentColor"
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </SvgIcon>
  )
}

/**
 * Source [Google Material Design Icons]{@link https://material.io/resources/icons/?style=baseline}
 */
export function Share() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
        fill="currentColor"
      />
    </svg>
  )
}
