import * as hapi from 'hapi';
import { graphqlHapi, graphiqlHapi } from 'graphql-server-hapi';
import executableSchema from './schema';
import * as mongoose from 'mongoose';
import { ROUTES } from './routes';

const server: hapi.Server = new hapi.Server();

server.connection({
    port: 8765,
    routes: { cors: true }
});

const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const db = mongoose.connect(`mongodb://${MONGO_HOST}/emogii-v2`);

server.route({
    method: "GET",
    path: "/",
    handler: (request: hapi.Request, reply: hapi.IReply) => {
        reply("Hello World");
    }

});

server.route(ROUTES);

server.register({
    register: graphqlHapi,
    options: {
        path: '/graphql',
        graphqlOptions: { schema: executableSchema }
    },
});

server.register({
    register: graphiqlHapi,
    options: {
        path: '/graphiql',
        graphiqlOptions: {
            endpointURL: '/graphql',
        },
    },
});

server.start((err: any) => {
    if (err) {
        throw err;
    }
    console.log("server running at 8765");
});
