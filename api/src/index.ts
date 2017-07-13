import * as hapi from 'hapi';
import { graphqlHapi, graphiqlHapi } from 'graphql-server-hapi';
import executableSchema from './schema';
import * as mongoose from 'mongoose';
import { secret } from './config';
import { authenticate } from './util/authenticate';
const server: hapi.Server = new hapi.Server();

server.connection({
  port: 8765,
  routes: { cors: true }
});

const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const db = mongoose.connect(`mongodb://${MONGO_HOST}/emogii-v2`);

server.route({
  method: 'GET',
  path: '/',
  handler: (request: hapi.Request, reply: hapi.IReply) => {
    reply('Hello World');
  }
});
// const user = await authenticate();

server.register({
  register: graphiqlHapi,
  options: {
    path: '/graphiql',
    graphiqlOptions: {
      endpointURL: '/graphql'
		},
		route: {
			auth: false
		},
  }
});


const validate = (decoded, request, callback) => {
  // do your checks to see if the person is valid
  console.log(`come here man`);
  const user = {
    email: 'hung@test.com'
  };
  if (user.email !== decoded.email) {
    return callback(null, false);
  } else {

    return callback(null, true);
  }
};

server.register(require('hapi-auth-jwt2'), err => {
  if (err) {
    console.log(err);
  }
  server.auth.strategy('jwt', 'jwt', 'required', {
    key: secret,
    validateFunc: validate,
    verifyOptions: { algorithms: ['HS256'] }
	});

	server.register({
		register: graphqlHapi,
		options: {
			path: '/graphql',
			graphqlOptions: {
				schema: executableSchema,
				// context: { user }
			},
			route: {
				auth: false,
				cors: true
			}
		}
	});
});
server.start((err: any) => {
  if (err) {
    throw err;
  }
  console.log('server running at 8765');
});
