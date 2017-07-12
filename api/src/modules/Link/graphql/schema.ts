import { Link } from '../Link';
const link = new Link();

export const resolvers = {
	// Query: {
	// 	getOneEntry(root, { _id }) {
	// 		return entry.getEntryById(_id);
	// 	},
	// 	getAllEntries(root, { }) {
	// 		return entry.getAllEntries();
	// 	},
	// },
	Mutation: {
		addLink(root, { desciption, url }) {
			return link.create(desciption, url);
		}
	}
};
