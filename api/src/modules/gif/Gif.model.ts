import * as mongoose from 'mongoose';

const gifSchema = new mongoose.Schema({
	text: {
		type: String,
		require: true
	}
});

export const GifModel = mongoose.model('Gif', gifSchema);

