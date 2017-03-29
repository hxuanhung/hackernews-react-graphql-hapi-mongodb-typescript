import * as mongoose from 'mongoose';

const gifSchema = new mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	url: {
		type: String,
		require: true
	},
}, { versionKey: false });

export const GifModel = mongoose.model('Gif', gifSchema);

