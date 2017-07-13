import { makeExecutableSchema } from 'graphql-tools';
import { resolvers as userResolvers } from './modules/User/User.resolvers';
import { resolvers as linkResolvers } from './modules/Link/Link.resolvers';
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
  type Mutation {
    addLink(url: String!, description: String!): Link
	createUser(name: String!, authProvider: AuthProviderSignupData!): User
	signinUser(email: AUTH_PROVIDER_EMAIL): SigninPayload!
  }
  input AuthProviderSignupData {
    email: AUTH_PROVIDER_EMAIL
  }
  type SigninPayload {
    token: String
    user: User
  }
  input AUTH_PROVIDER_EMAIL {
    email: String!
    password: String!
  }
	type Query {
		getAllLinks(filter: LinkFilter, skip: Int, first: Int): [Link!]!
	}
	input LinkFilter {
		OR: [LinkFilter!]
		description_contains: String
		url_contains: String
	  }
`;

const resolvers = {
  Mutation: {
    ...linkResolvers.Mutation,
    ...userResolvers.Mutation
  },
  Query: {
    ...linkResolvers.Query
  }
};

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default executableSchema;
