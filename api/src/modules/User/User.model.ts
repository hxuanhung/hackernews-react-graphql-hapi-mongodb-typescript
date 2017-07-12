import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true
	},
}, { versionKey: false });

export const UserModel = mongoose.model('User', userSchema);

