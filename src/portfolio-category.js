import * as R from 'ramda'
import React from 'react'
import { PortfolioProjectLayout } from './portfolio-project-layout'
import { useLocation } from 'react-router-dom'

import { categories } from './db/portfolio'

import { Box } from './box'

import { useScrollIntoViewObserver } from './use-scroll-into-view-observer'

const mapIndexed = R.addIndex(R.map)

export function PortfolioCategory() {
  const location = useLocation()
  const categoryId = R.last(R.filter(R.length, R.split('/', location.pathname)))
  const category = categories[categoryId] || []

  const currentProject = R.findIndex(
    R.propEq('key', R.replace('#', '', location.hash))
  )(category)

  const projectsRef = useScrollIntoViewObserver(currentProject, category)

  return (
    <Box display="grid" gridGap={4}>
      {mapIndexed(
        (project, index) => (
          <Box key={project.key} ref={el => (projectsRef[index] = el)}>
            <PortfolioProjectLayout
              name={project.name}
              description={project.description}
              images={project.images}
              specification={project.specification}
              tables={project.tables}
            />
          </Box>
        ),
        category
      )}
    </Box>
  )
}
