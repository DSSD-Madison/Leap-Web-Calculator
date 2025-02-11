import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: false
    }),
    prerender: {
      entries: ['*']
    },
    paths: {
      base: process.env.NODE_ENV === "production" ? "/Leap-Web-Calculator" : "",
    }
  }
};

export default config;