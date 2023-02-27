import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-b1eb8f35.js","imports":["_app/immutable/start-b1eb8f35.js","_app/immutable/chunks/index-7231a5b4.js","_app/immutable/chunks/singletons-452f17e7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/create",
				pattern: /^\/api\/create\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/create/_server.ts.js')
			},
			{
				id: "/api/destroy",
				pattern: /^\/api\/destroy\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/destroy/_server.ts.js')
			},
			{
				id: "/api/read",
				pattern: /^\/api\/read\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/read/_server.ts.js')
			},
			{
				id: "/api/update",
				pattern: /^\/api\/update\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/update/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
