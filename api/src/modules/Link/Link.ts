import { LinkModel } from './Link.model';

export class Link {
	getAllEntries() {
		const res = LinkModel.find().exec();
		return res ? res : [];
	}

	getEntryById(id: string) {
		return LinkModel.findById(id, (err, doc) => {
			console.log(err, doc);
			if (err) {
				console.log("Something wrong when get data!");
				return err;
			}

			return doc;
		});
	}

	create(description: string, url: string) {
		return new LinkModel({ description, url }).save((err, doc) => {
			console.log(err, doc);
			if (err) {
				console.log("Something wrong when create data!");
				return err;
			}

			return doc;
		});
	}

	modify(id: string, text: string) {
		return LinkModel.findByIdAndUpdate(id, { text: text }, { new: true }, (err, doc) => {
			if (err) {
				console.log("Something wrong when updating data!");
				return err;
			}

			return doc;
		});
	}

	delete(id: string) {
		return LinkModel.findByIdAndRemove(id, (err, doc) => {
			if (err) {
				console.log("Something wrong when delete data!");
				return err;
			}
			return 'Deleted';
		});
	}
}
