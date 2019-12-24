import * as R from 'ramda'
import React from 'react'
import { PortfolioProjectLayout } from './portfolio-project-layout'
import { useLocation } from 'react-router-dom'

import { categories } from './db/portfolio'

import { Box } from './box'

export function PortfolioCategory() {
  const location = useLocation()

  const categoryId = R.last(R.filter(R.length, R.split('/', location.pathname)))

  const category = categories[categoryId] || []

  return (
    <Box display="grid" gridGap={4}>
      {R.map(
        project => (
          <PortfolioProjectLayout
            key={project.key}
            name={project.name}
            description={project.description}
            images={project.images}
            specification={project.specification}
            tables={project.tables}
          />
        ),
        category
      )}
    </Box>
  )
}
