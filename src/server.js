const R = require('ramda')
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const user = {
  name: 'Carl',
  age: 14,
}

const books = [
  {
    id: 1,
    title: 'Harry Potter and the Chamber of Secrets',
    author: {
      name: 'J.K. Rowling',
    },
  },
  {
    id: 2,
    title: 'Jurassic Park',
    author: {
      name: 'Michael Crichton',
    },
  },
]

const restaurants = [
  {
    name: "McDonald's",
    location: {
      address: '55 Example Street, San Francisco, CA',
    },
    drinkSizes: ['small', 'medium', 'large'],
  },
  {
    name: 'Spoonery',
    location: {
      address: 'Sankt Knuts väg 7, 211 58 Malmö',
    },
    drinkSizes: ['small', 'medium', 'large'],
  },
  {
    name: null,
    location: {
      address: 'Sankt Knuts väg 7, 211 58 Malmö',
    },
    drinkSizes: ['small', 'medium', 'large'],
  },
]

const authors = [
  {
    id: '1',
    name: 'Michael Crichton',
  },
  {
    id: '2',
    name: 'J.K. Rowling',
  },
]

const typeDefs = gql`
  # All these types are just temporary.

  type Restaurant {
    name: String!
    rating: Int!
    location: Location!
    drinkSizes: [String!]!
  }

  type Location {
    address: String!
  }

  type Book {
    id: Int!
    title: String
    author: Author
  }

  type Author {
    id: Int!
    name: String
    books: [Book]
  }

  type Query {
    author: Author
    books: [Book]
    book(id: Int!): Book
    user: User
    restaurants: [Restaurant]
  }

  type Mutation {
    user(name: String, age: Int): User
  }

  type User {
    name: String
    age: Int
  }
`

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args, context, info) =>
      R.find(book => R.propEq('id', args.id, book), books),
    user: () => user,
    restaurants: () => restaurants,
  },
  Mutation: {
    user: (parent, args, context, info) => {
      // .. yeah I don't have a real DB, so I can do this.
      args.name && (user.name = args.name)
      args.age && (user.age = args.age)
      return user
    },
  },
  Book: {
    id: parent => parent.id,
    title: parent => parent.title,
    author: parent => parent.author,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log('Server is running on http://localhost:4000' + server.graphqlPath)
)
