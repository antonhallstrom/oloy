import React from 'react'
import { useLayout } from './use-layout'

import { AppLayoutSmall } from './app-layout-small'
import { AppLayoutMedium } from './app-layout-medium'
import { AppLayoutLarge } from './app-layout-large'

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
