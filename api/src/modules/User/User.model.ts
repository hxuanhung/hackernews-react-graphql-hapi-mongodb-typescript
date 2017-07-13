import * as mongoose from 'mongoose';
import updatedAt from '../../util/updatedAt';
const userSchema = new mongoose.Schema({
	email: { type: String, required: true, index: { unique: true } },
	name: { type: String, required: true, index: { unique: true } },
	password: {
		type: String,
		require: true
	},
	links: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Link' }]
}, { versionKey: false });

userSchema.plugin(updatedAt, { index: true });

export const UserModel = mongoose.model('User', userSchema);

