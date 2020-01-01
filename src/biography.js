import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Box } from './box'
import { BiographyCategory } from './biography-category'

export const navigationItems = [
  {
    to: '/biography/summary',
    label: 'Summary',
  },
  {
    to: '/biography/persona',
    label: 'Persona',
  },
  {
    to: '/biography/future',
    label: 'Future',
  },
  {
    to: '/biography/education',
    label: 'Education',
  },
  {
    to: '/biography/work-history',
    label: 'Work History',
    subItems: [
      {
        to: '/biography/work-history/#recent',
        label: 'Recent',
      },
      {
        to: '/biography/work-history/#past',
        label: 'Past',
      },
    ],
  },
  {
    to: '/biography/experience',
    label: 'Experience',
    subItems: [
      {
        to: '/biography/experience/#programming',
        label: 'Programming',
      },
      {
        to: '/biography/experience/#design',
        label: 'Design',
      },
      {
        to: '/biography/experience/#art',
        label: 'Art',
      },
      {
        to: '/biography/experience/#serving-the-public',
        label: 'Serving the public',
      },
    ],
  },
  {
    to: '/biography/contact',
    label: 'Contact',
  },
]

export function Biography() {
  return (
    <Route path="/biography">
      <Box py={['0px', 8, 8, 8]} px={['0px', 7, 8, 8]}>
        <Switch>
          <Route path="/biography/:category">
            <BiographyCategory />
          </Route>
        </Switch>
      </Box>
    </Route>
  )
}
