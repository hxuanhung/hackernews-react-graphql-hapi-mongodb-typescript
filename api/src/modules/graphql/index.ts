import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';
const executableSchema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

export default executableSchema;
