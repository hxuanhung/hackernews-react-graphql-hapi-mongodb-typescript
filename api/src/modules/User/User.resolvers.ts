import { User } from './User';
import { hashPassword, comparePassword } from '../../util/hash';
import { createToken } from '../../util/token';
export const resolvers = {
  Query: {},
  Mutation: {
    createUser: async (root, data) => {
      try {
        let hash = await hashPassword(data.authProvider.email.password);
        let user = await User.create(
          data.name,
          data.authProvider.email.email,
          hash
        );
        return user;
      } catch (error) {
        return error;
      }
    },
    signinUser: async (root, data) => {
      const user = await (<any>User.getUser(data.email.email));
      if (comparePassword(data.email.password, user.password)) {
        return { token: createToken(user.email), user };
      }
    }
  }
};
