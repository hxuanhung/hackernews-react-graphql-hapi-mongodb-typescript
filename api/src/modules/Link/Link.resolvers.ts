import { Link } from './Link';
import { assertValidLink } from '../../util/url';

export const resolvers = {
  Query: {
    getAllLinks(root, {}) {
      return Link.getAllLinks();
    }
  },
  Mutation: {
    addLink: async (root, data, user) => {
      console.log(`user`, data, user);
      assertValidLink({ url: data.url });
      let newLink = {
        postedById: user && user._id,
        ...data
      };
      return await Link.create(newLink);
    }
  }
};
