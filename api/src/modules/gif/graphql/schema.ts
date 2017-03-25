import { Gif } from '../Gif';
const gif = new Gif();

export const schema = [`
type Gif {
	_id: String
	text: String!
}

type Query {
	getOne (
		_id: String!
	): Gif

	getAll: [Gif]
}
`
];

export const resolvers = {
	Query: {
		getOne(root, { _id }) {
			return gif.getGifById(_id);
		},
		getAll(root, {} ) {
			return gif.getAllGifs();
		},
	},
};
