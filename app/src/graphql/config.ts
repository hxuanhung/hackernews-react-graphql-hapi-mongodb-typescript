import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3010/graphql',
});
networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}; // Create the header object if needed.
      }
      // get the authentication token from local storage if it exists
      // const token = localStorage.getItem(GITHUB_ACCESS_TOKEN);
      // req.options.headers.authorization = token ? `Bearer ${token}` : null;
      next();
    },
  },
]);
export const client = new ApolloClient({
  networkInterface,
});
