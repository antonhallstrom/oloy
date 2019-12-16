import React from 'react'
import { Route } from 'react-router-dom'
import { ProjectLayout } from './project-layout'
import logo from './logo.svg'

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
    subItems: [],
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

// Get data via GraphQL

export function Portfolio() {
  return (
    <Route path="/portfolio">
      <ProjectLayout
        description="Enter a number and have the program generate PI up to that many decimal places. Keep a limit to how far the program will go"
        name="Find PI to the Nth Digit"
        specification="spec content bontent"
        retrospective="retro fun ass blast"
        imgUrl={logo}
        videoUrl="/videoUrl"
        projectUrl="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
      />
    </Route>
  )
}
