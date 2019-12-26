import React from 'react'
import { useLayout } from './use-layout'

import { AppLayoutSmall } from './app-layout-small'
import { AppLayoutMedium } from './app-layout-medium'
import { AppLayoutLarge } from './app-layout-large'

/**
 * Seperating the layouts since their feature differences
 * would get messy to control within a single tree.
 */

// TODO: Can't be code split; should be converted into one layout,
// using the built in styled system media queries but still keep
// the readability intact.
export function AppLayout() {
  const layout = useLayout()

  if (layout === 'sm') {
    return <AppLayoutSmall />
  }

  if (layout === 'md') {
    return <AppLayoutMedium />
  }

  if (layout === 'lg') {
    return <AppLayoutLarge />
  }
}
