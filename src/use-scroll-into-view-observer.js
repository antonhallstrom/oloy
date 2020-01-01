import React from 'react'
import * as R from 'ramda'

/**
 * Scroll into view of a element in the provided list
 * @param {number} activeIndex
 * @param {Array} list
 */
export function useScrollIntoViewObserver(activeIndex, list) {
  const ref = R.map(() => React.createRef(), list)

  React.useEffect(() => {
    if (ref) {
      if (ref[activeIndex]) {
        ref[activeIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }
  }, [ref, list, activeIndex])

  return ref
}
