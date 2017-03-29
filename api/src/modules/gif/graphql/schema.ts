import { Gif } from '../Gif';
const gif = new Gif();

export const schema = [`
type Gif {
	_id: String
	title: String!
	url: String!
}

type Query {
	getOne (
		_id: String!
	): Gif

	getAll: [Gif]
}

type Mutation {
	addGif(
		title: String!
		url: String!
	): Gif
}
`
];

export const resolvers = {
	Query: {
		getOne(root, { _id }) {
			return gif.getGifById(_id);
		},
		getAll(root, { }) {
			return gif.getAllGifs();
		},
	},
	Mutation: {
		addGif(root, { title, url }) {
			return gif.create(title, url);

		}
	}
};
