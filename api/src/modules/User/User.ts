import { UserModel } from './User.model';

export class User {
	getAllEntries() {
		const res = UserModel.find().exec();
		return res ? res : [];
	}

	getEntryById(id: string) {
		return UserModel.findById(id, (err, doc) => {
			console.log(err, doc);
			if (err) {
				console.log("Something wrong when get data!");
				return err;
			}

			return doc;
		});
	}

	create(name: string, email: string) {
		return new UserModel({ name, email }).save((err, doc) => {
			console.log(err, doc);
			if (err) {
				console.log("Something wrong when create data!");
				return err;
			}

			return doc;
		});
	}

	modify(id: string, text: string) {
		return UserModel.findByIdAndUpdate(id, { text: text }, { new: true }, (err, doc) => {
			if (err) {
				console.log("Something wrong when updating data!");
				return err;
			}

			return doc;
		});
	}

	delete(id: string) {
		return UserModel.findByIdAndRemove(id, (err, doc) => {
			if (err) {
				console.log("Something wrong when delete data!");
				return err;
			}
			return 'Deleted';
		});
	}
}
