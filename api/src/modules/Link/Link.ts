import { LinkModel } from './Link.model';

export class Link {
  getAllLinks() {
    const res = LinkModel.find().exec();
    return res ? res : [];
  }
  create(name: string, email: string, password: string) {
    return new LinkModel({ name, email, password }).save((err, doc) => {
      console.log(err, doc);
      if (err) {
        console.log('Something wrong when create data!');
        return err;
      }

      return doc;
    });
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
