import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PortfolioCategory } from './portfolio-category'

export const navigationItems = [
  {
    to: '/portfolio/numbers',
    label: 'Numbers',
    subItems: [
      {
        to: '/portfolio/numbers/#find-pi-to-the-nth-digit',
        label: 'Find PI to the Nth Digit',
      },
      {
        to: '/portfolio/numbers/#fibonacci-sequence',
        label: 'Fibonacci Sequence',
      },
      {
        to: '/portfolio/numbers/#prime-factorization',
        label: 'Prime Factorization',
      },
    ],
  },
  {
    to: '/portfolio/classic-algorithms',
    label: 'Classic Algorithms',
    subItems: [
      {
        to: '/portfolio/classic-algorithms/#collatz-conjecture',
        label: 'Collatz Conjecture',
      },
      {
        to: '/portfolio/classic-algorithms/#sorting',
        label: 'Sorting',
      },
      {
        to: '/portfolio/classic-algorithms/#closest-pair-problem',
        label: 'Closest pair problem',
      },
      {
        to: '/portfolio/classic-algorithms/#sieve-of-Eratosthenes',
        label: 'Sieve of Eratosthenes',
      },
    ],
  },
  {
    to: '/portfolio/graph',
    label: 'Graph',
    subItems: [],
  },
  {
    to: '/portfolio/data-structures',
    label: 'Data Structures',
    subItems: [],
  },
  {
    to: '/portfolio/text',
    label: 'Text',
    subItems: [],
  },
  {
    to: '/portfolio/networking',
    label: 'Networking',
    subItems: [],
  },
  {
    to: '/portfolio/classes',
    label: 'Classes',
    subItems: [],
  },
  {
    to: '/portfolio/threading',
    label: 'Threading',
    subItems: [],
  },
  {
    to: '/portfolio/web',
    label: 'Web',
    subItems: [],
  },
  {
    to: '/portfolio/files',
    label: 'Files',
    subItems: [],
  },
  {
    to: '/portfolio/databases',
    label: 'Databases',
    subItems: [],
  },
  {
    to: '/portfolio/graphics-and-multimedia',
    label: 'Graphics and Multimedia',
    subItems: [],
  },
  {
    to: '/portfolio/security',
    label: 'Security',
    subItems: [],
  },
]

export function Portfolio() {
  return (
    <React.Fragment>
      <Route path="/portfolio" />
      <Switch>
        <Route path="/portfolio/:category">
          <PortfolioCategory />
        </Route>
      </Switch>
    </React.Fragment>
  )
}
