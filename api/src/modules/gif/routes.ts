import * as hapi from 'hapi';
import { Gif } from './Gif';
const gif = new Gif();

const handlers = {
	getAll: (request: hapi.Request, reply: hapi.IReply) => {
		//curl http://localhost:3000/gif
		reply(gif.getAllGifs());
	},

	getOne: (request: hapi.Request, reply: hapi.IReply) => {
		//curl http://localhost:3000/gif/58b456a613e6a668e092c953
		const id = request.params.id;
		reply(gif.getGifById(id));
	},

	post: (request: hapi.Request, reply: hapi.IReply) => {
		//curl http://localhost:3000/gif -X POST -H 'Content-Type: application/json' -d '{"title":"rainbow dash", "url": "https://media.giphy.com/media/3oKIPwAaNhSKv0cfLy/giphy.gif"}'
		try {
			const title = request.payload.title;
			const url = request.payload.url;
			reply(new Gif().create(title, url));
		} catch (e) {
			reply({
				"statusCode": 404,
				"error": "Not Found",
				"gif": e
			});
		}
	},

	put: (request: hapi.Request, reply: hapi.IReply) => {
		// curl http://localhost:3000/gif/58b456a613e6a668e092c953 -X PUT -H 'Content-Type: application/json' -d '{"text":"rainbow black"}'
		try {
			const id = request.params.id;
			const text = request.payload.text;
			new Gif().modify(id, text);
			reply('Modified');
		} catch (e) {
			reply({
				"statusCode": 404,
				"error": "Not Found",
				"gif": e
			});
		}
	},

	delete: (request: hapi.Request, reply: hapi.IReply) => {
		//curl -X DELETE localhost:3000/gif/58b458334b46b86d8a4f555c
		try {
			const id = request.params.id;
			new Gif().delete(id);
			reply('Deleted');
		} catch (e) {
			reply({
				"statusCode": 404,
				"error": "Not Found",
				"gif": e
			});
		}
	}
};

export const routes: hapi.IRouteConfiguration[] = [
	{ method: "GET", path: "/gif", handler: handlers.getAll },
	{ method: "GET", path: "/gif/{id}", handler: handlers.getOne },
	{ method: "POST", path: "/gif", handler: handlers.post },
	{ method: "PUT", path: "/gif/{id}", handler: handlers.put },
	{ method: "DELETE", path: "/gif/{id}", handler: handlers.delete }];
