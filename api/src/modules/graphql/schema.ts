const typeDefs = `
type User {
    id: ID!
    name: String!
    email: String
  }

type Link {
    id: ID!
    url: String!
    description: String!
  }

type Query {
    allLinks(filter: LinkFilter, skip: Int, first: Int): [Link!]!
  }

  type Mutation {
    addLink(url: String!, description: String!): Link
    createUser(name: String!, email: String!): User
  }
  input LinkFilter {
    OR: [LinkFilter!]
    description_contains: String
    url_contains: String
  }
`;
export default typeDefs;
