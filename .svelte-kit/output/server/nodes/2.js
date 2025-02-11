import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DebWiBc7.js","_app/immutable/chunks/DNuZYaZi.js","_app/immutable/chunks/DJz_nA-S.js","_app/immutable/chunks/BiTbvvgn.js","_app/immutable/chunks/BHeu0ckw.js","_app/immutable/chunks/BQ1mSrGW.js","_app/immutable/chunks/qqyLOWvM.js"];
export const stylesheets = ["_app/immutable/assets/2.Cit6JvtO.css"];
export const fonts = [];
