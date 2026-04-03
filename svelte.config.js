import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: false
		}),
		prerender: {
			handleHttpError: 'warn',
			handleMissingId: 'warn',
			handleUnseenRoutes: 'ignore',
			crawl: true,
			entries: [
				'/',
				'/a',
				'/b',
				'/b/learn',
				'/b/shop',
				'/b/about',
				'/b/convert',
				'/b/contact',
				'/b/support',
				'/b/articles',
				'/b/courses',
				'/b/guides',
				'/b/videos',
				'/b/community',
				'/b/cart',
				'/c',
				'/c/learn',
				'/c/shop',
				'/c/about',
				'/c/convert',
				'/c/contact',
				'/c/support',
				'/c/articles',
				'/c/courses',
				'/c/guides',
				'/c/videos',
				'/c/community',
				'/c/cart',
				'/admin',
				'/admin/articles',
				'/admin/articles/new',
				'/admin/courses',
				'/admin/community',
				'/admin/media',
				'/admin/settings'
			]
		}
	}
};

export default config;
