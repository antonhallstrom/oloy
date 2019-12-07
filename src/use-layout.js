import * as R from 'ramda'
import { useMediaQuery } from './use-media-query'
import * as t from './theme'

export function useLayout() {
  const lookup = ['sm', 'md', 'lg']

  const isBreakpointSmall = useMediaQuery(
    `(max-width: ${t.theme.breakpoints.sm})`
  )
  const isBreakpointMedium = useMediaQuery(
    `(max-width: ${t.theme.breakpoints.md})`
  )
  const isBreakpointLarge = useMediaQuery(
    `(max-width: ${t.theme.breakpoints.lg})`
  )

  const breakpoints = [isBreakpointSmall, isBreakpointMedium, isBreakpointLarge]

  const result = R.reduce(
    (acc, item) =>
      item ? R.reduced(lookup[R.indexOf(item, breakpoints)]) : acc,
    'lg',
    breakpoints
  )

  return result
}
