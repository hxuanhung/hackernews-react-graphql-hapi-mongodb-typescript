import * as mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	url: {
		type: String,
		require: true
	},
	description: {
		type: String,
		required: true
	},
}, { versionKey: false });

export const LinkModel = mongoose.model('Link', linkSchema);

