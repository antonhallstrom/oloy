import * as R from 'ramda'
import React from 'react'
import { useLocation } from 'react-router-dom'

import { categories } from './db/biography'

import { Box } from './box'

import { useScrollIntoViewObserver } from './use-scroll-into-view-observer'

const mapIndexed = R.addIndex(R.map)

export function BiographyCategory() {
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
          <div key={index} ref={el => (projectsRef[index] = el)}>
            category
          </div>
        ),
        category
      )}
    </Box>
  )
}
