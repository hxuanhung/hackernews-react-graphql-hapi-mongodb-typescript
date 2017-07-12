import * as hapi from "hapi";
const handlers = {
  auth: (request: hapi.Request, reply: hapi.IReply) => {
    if (!request.auth.isAuthenticated) {
      return reply(
        "Authentication failed due to: " + request.auth.error.message
      );
    }

    // Perform any account lookup or registration, setup local session,
    // and redirect to the application. The third-party credentials are
    // stored in request.auth.credentials. Any query parameters from
    // the initial request are passed back via request.auth.credentials.query.
    return reply.redirect("/feed");
  }
};

export const routes: hapi.IRouteConfiguration[] = [
  {
    method: ["GET", "POST"],
    path: "/login",
    config: {
      auth: "twitter",
      handler: handlers.auth
    }
  }
];
