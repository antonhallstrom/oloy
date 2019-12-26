import * as R from 'ramda'
import { useMediaQuery } from './use-media-query'

export function useLayout() {
  const lookup = ['sm', 'md', 'lg']

  // Breakpoint has to be a px less to avoid stale ui.
  const isBreakpointSmall = useMediaQuery(`(max-width: 499px)`)
  const isBreakpointMedium = useMediaQuery(`(max-width: 1199px)`)
  const isBreakpointLarge = useMediaQuery(`(max-width: 1599px)`)

  const breakpoints = [isBreakpointSmall, isBreakpointMedium, isBreakpointLarge]

  const result = R.reduce(
    (acc, item) =>
      item ? R.reduced(lookup[R.indexOf(item, breakpoints)]) : acc,
    'lg',
    breakpoints
  )

  return result
}
