import * as R from 'ramda'
import React from 'react'
import { useQuery } from 'urql'
import gql from 'graphql-tag'

const getRestaurants = gql`
  query {
    restaurants {
      name
      location {
        address
      }
      drinkSizes
    }
  }
`

export function Restaurants() {
  const [result] = useQuery({ query: getRestaurants })

  if (result.fetching) return <p>Loading ...</p>

  const restaurants = R.reject(
    R.isNil,
    R.pathOr([], ['data', 'restaurants'], result)
  )

  return (
    <div>
      <hr />
      <h2>Restaurants</h2>
      {R.map(
        resturant => (
          <React.Fragment key={resturant.name}>
            <p>-</p>
            <h3>{resturant.name}</h3>
            <p>{resturant.location.address}</p>
            {R.map(
              size => (
                <h4 key={size}>{size}</h4>
              ),
              resturant.drinkSizes
            )}
          </React.Fragment>
        ),
        restaurants
      )}
    </div>
  )
}
