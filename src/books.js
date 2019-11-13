import * as R from 'ramda'
import React from 'react'
import { useMutation, useQuery } from 'urql'
import gql from 'graphql-tag'

const getAuthorDetailsFragment = gql`
  fragment authorDetails on Book {
    author {
      name
    }
  }
`

const getBook = gql`
  query Book($id: Int! = 1, $withAuthorDetails: Boolean!) {
    book(id: $id) {
      title
      ...authorDetails @include(if: $withAuthorDetails)
    }
  }
  ${getAuthorDetailsFragment}
`

const getBooks = gql`
  query Books {
    books {
      author {
        name
      }
      title
    }
  }
`

export function Books(props) {
  const [result] = useQuery({ query: getBooks })
  // const [result2] = useQuery({
  //   query: getBook,
  //   variables: { id: 1, withAuthorDetails: true },
  // })

  if (result.error) return <p>Books not found</p>

  if (result.fetching) return <p>Loading ...</p>

  return (
    <div>
      {R.map(
        book => (
          <React.Fragment key={book.title}>
            <h1>{book.author.name}</h1>
            <h2>{book.title}</h2>
          </React.Fragment>
        ),
        result.data.books
      )}
    </div>
  )
}
