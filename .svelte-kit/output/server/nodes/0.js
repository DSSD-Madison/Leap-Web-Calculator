

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BkJdVOvH.js","_app/immutable/chunks/CnVJiNRs.js","_app/immutable/chunks/B1ilbWz5.js"];
export const stylesheets = [];
export const fonts = [];
