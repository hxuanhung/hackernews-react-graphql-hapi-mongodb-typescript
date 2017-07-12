import * as hapi from "hapi";
import { graphqlHapi, graphiqlHapi } from "graphql-server-hapi";
import executableSchema from "./modules/graphql";
import * as mongoose from "mongoose";
import {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET
} from "./modules/auth/githubkeys";
const server: hapi.Server = new hapi.Server();
server.connection({
  port: 8765,
  routes: { cors: true }
});

const MONGO_HOST = process.env.MONGO_HOST || "localhost";
const db = mongoose.connect(`mongodb://${MONGO_HOST}/emogii-v2`);

server.route({
  method: "GET",
  path: "/",
  handler: (request: hapi.Request, reply: hapi.IReply) => {
    reply("Hello World");
  }
});

server.register({
  register: graphqlHapi,
  options: {
    path: "/graphql",
    graphqlOptions: { schema: executableSchema }
  }
});

server.register({
  register: graphiqlHapi,
  options: {
    path: "/graphiql",
    graphiqlOptions: {
      endpointURL: "/graphql"
    }
  }
});
server.register(require("bell"), function(err) {
  server.auth.strategy("github", "bell", {
    provider: "github",
    password: "cookie_encryption_password_secure",
    clientId: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    isSecure: false // Terrible idea but required if not using HTTPS especially if developing locally
  });
  server.route({
    method: ["GET", "POST"], // Must handle both GET and POST
    path: "/login/github", // The callback endpoint registered with the provider
    config: {
      auth: "github",
      handler: (request, reply) => {
		  console.log(`come here request`);
	  }
    }
  });
  server.route({
    method: ["GET"], // Must handle both GET and POST
    path: "/login/github/callback", // The callback endpoint registered with the provider
    config: {
      auth: "github",
      handler: function(request, reply) {
        if (!request.auth.isAuthenticated) {
          return reply(
            "Authentication failed due to: " + request.auth.error.message
          );
        }
        console.log(`login/github/callback`, request.auth);
		return reply(request.auth);
      }
    }
  });
  server.route({
    method: ["GET"], // Must handle both GET and POST
    path: "/logout", // The callback endpoint registered with the provider
    config: {
      auth: "github",
      handler: function(request, reply) {
        return reply.redirect("/");
      }
    }
  });
});


server.start((err: any) => {
  if (err) {
    throw err;
  }
  console.log("server running at 8765");
});
