export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.DriflSJ5.js",app:"_app/immutable/entry/app.gj5UTp2d.js",imports:["_app/immutable/entry/start.DriflSJ5.js","_app/immutable/chunks/B6Uhg7hK.js","_app/immutable/chunks/B1ilbWz5.js","_app/immutable/chunks/TLGeEo_2.js","_app/immutable/chunks/BaqAp48U.js","_app/immutable/entry/app.gj5UTp2d.js","_app/immutable/chunks/B1ilbWz5.js","_app/immutable/chunks/DYCinwD4.js","_app/immutable/chunks/CnVJiNRs.js","_app/immutable/chunks/BTtPy-0W.js","_app/immutable/chunks/BaqAp48U.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
