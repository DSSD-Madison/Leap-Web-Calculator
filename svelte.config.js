import adapter from '@sveltejs/adapter-static'; // Change this line

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/Leap-Web-Calculator' : ''
        }
    }
};

export default config;