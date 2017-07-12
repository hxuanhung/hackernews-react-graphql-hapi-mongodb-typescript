import { resolvers as linkResolvers } from '../../modules/Link/graphql/schema';
import { resolvers as userResolvers } from '../../modules/User/graphql/resolvers';

const resolvers = {
	Query: {
	},
	Mutation: {
		...linkResolvers.Mutation,
		...userResolvers.Mutation,
	}
}
export default resolvers;
