import { UserModel } from './User.model';

export class User {
  static create(name: string, email: string, password: string) {
    return new UserModel({ name, email, password }).save();
  }

  static getUser(email: string) {
    return UserModel.findOne({ email }).exec();
  }
  static modify(id: string, text: string) {
    return UserModel.findByIdAndUpdate(
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

  static delete(id: string) {
    return UserModel.findByIdAndRemove(id, (err, doc) => {
      if (err) {
        console.log('Something wrong when delete data!');
        return err;
      }
      return 'Deleted';
    });
  }
}
