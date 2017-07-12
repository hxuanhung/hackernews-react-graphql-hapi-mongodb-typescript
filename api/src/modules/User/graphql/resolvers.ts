import { User } from '../User';
const link = new User();

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
		createUser(root, { name, email }) {
			return link.create(name, email);
		}
	}
};
