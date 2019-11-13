import React from 'react'
import { useMutation, useQuery } from 'urql'
import gql from 'graphql-tag'

const getUser = gql`
  query User {
    user {
      name
      age
    }
  }
`

const updateUser = gql`
  mutation User($name: String, $age: Int) {
    user(name: $name, age: $age) {
      name
      age
    }
  }
`

export function User(props) {
  const [result] = useQuery({ query: getUser })
  const [res, executeMutation] = useMutation(updateUser)

  if (result.error) return <p>User not found</p>

  if (result.fetching) return <p>Loading ...</p>

  return (
    <div>
      <h2>Name: {result.data.user.name}</h2>
      <h2>Age: {result.data.user.age}</h2>
      <button onClick={() => executeMutation({ name: 'Carl', age: 101 })}>
        Update User
      </button>
    </div>
  )
}
