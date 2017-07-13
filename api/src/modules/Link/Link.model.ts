import * as mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
	url: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	},
}, { versionKey: false });

export const LinkModel = mongoose.model('Link', linkSchema);

