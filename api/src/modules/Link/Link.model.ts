import * as mongoose from 'mongoose';
import updatedAt from '../../util/updatedAt';
const linkSchema = new mongoose.Schema({
	url: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	},
	postedById: {
		type: Number,
		ref: 'User',
		require: true
	}
}, { versionKey: false });

linkSchema.plugin(updatedAt, { index: true });

export const LinkModel = mongoose.model('Link', linkSchema);

