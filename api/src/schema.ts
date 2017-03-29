import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

import { schema as gifSchema, resolvers as gifResolvers } from './modules/gif/graphql/schema';

// const rootSchema = [`
// type Query {
// 	getGif(
// 		_id: String!
// 	): Gif
// }
// `]

// const rootResolvers = {
// 	Query: {
// 		getGif
// 	}
// }
const schema = [...gifSchema];
const resolvers = merge(gifResolvers);

const executableSchema = makeExecutableSchema({
	typeDefs: schema,
	resolvers,
});

export default executableSchema;
