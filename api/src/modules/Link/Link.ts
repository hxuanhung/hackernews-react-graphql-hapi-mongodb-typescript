import { LinkModel } from './Link.model';

export class Link {
  static getAllLinks() {
    const res = LinkModel.find().exec();
    return res ? res : [];
  }
  static create(data: { url: string; description: string }) {
    return new LinkModel(data).save();
  }

  modify(id: string, text: string) {
    return LinkModel.findByIdAndUpdate(
      id,
      { text: text },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log('Something wrong when updating data!');
          return err;
        }

        return doc;
      }
    );
  }

  delete(id: string) {
    return LinkModel.findByIdAndRemove(id, (err, doc) => {
      if (err) {
        console.log('Something wrong when delete data!');
        return err;
      }
      return 'Deleted';
    });
  }
}
