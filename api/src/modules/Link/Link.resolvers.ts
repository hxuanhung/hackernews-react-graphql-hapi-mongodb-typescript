import { Link } from './Link';

export const resolvers = {
  Query: {
	getAllLinks(root, { }) {
		return Link.getAllLinks();
	},
  },
  Mutation: {
	addLink: async (root, data) => {
		return await Link.create(data);
	}
  }
};
