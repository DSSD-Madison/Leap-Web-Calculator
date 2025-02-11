export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Leap-Web-Calculator/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CqglUHgY.js",app:"_app/immutable/entry/app.DTmrDL4r.js",imports:["_app/immutable/entry/start.CqglUHgY.js","_app/immutable/chunks/Hhui7ebO.js","_app/immutable/chunks/DJz_nA-S.js","_app/immutable/chunks/BHeu0ckw.js","_app/immutable/chunks/DJcnwnoh.js","_app/immutable/entry/app.DTmrDL4r.js","_app/immutable/chunks/DJz_nA-S.js","_app/immutable/chunks/BQ1mSrGW.js","_app/immutable/chunks/DNuZYaZi.js","_app/immutable/chunks/qqyLOWvM.js","_app/immutable/chunks/DJcnwnoh.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
