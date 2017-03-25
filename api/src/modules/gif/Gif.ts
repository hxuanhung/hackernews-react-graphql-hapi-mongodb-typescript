import { GifModel } from './Gif.model';

export class Gif {
	getAllGifs() {
		const res = GifModel.find().exec();
		return res ? res : [];
	}

	getGifById(id: string) {
		return GifModel.findById(id, (err, doc) => {
			console.log(err, doc);
			if (err) {
				console.log("Something wrong when get data!");
				return err;
			}

			return doc;
		});
	}

	create(text: string) {
		return new GifModel({ text: text }).save((err, doc) => {
			console.log(err, doc);
			if (err) {
				console.log("Something wrong when create data!");
				return err;
			}

			return doc;
		});
	}

	modify(id: string, text: string) {
		return GifModel.findByIdAndUpdate(id, { text: text }, { new: true }, (err, doc) => {
			if (err) {
				console.log("Something wrong when updating data!");
				return err;
			}

			return doc;
		});
	}

	delete(id: string) {
		return GifModel.findByIdAndRemove(id, (err, doc) => {
			if (err) {
				console.log("Something wrong when delete data!");
				return err;
			}
			return 'Deleted';
		});
	}
}
