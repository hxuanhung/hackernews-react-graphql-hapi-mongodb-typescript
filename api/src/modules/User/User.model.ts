import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, index: { unique: true } },
	name: { type: String, required: true, index: { unique: true } },
	password: {
		type: String,
		require: true
	},
}, { versionKey: false });

export const UserModel = mongoose.model('User', userSchema);

