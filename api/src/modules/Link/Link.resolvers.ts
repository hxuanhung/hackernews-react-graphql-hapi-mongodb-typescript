import { Link } from './Link';
const link = new Link();

export const resolvers = {
  Query: {
	getAllLinks(root, { }) {
		return link.getAllLinks();
	},
  },
  Mutation: {
  }
};
