import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
      // this will match a file
      'my-file': 'path/to/my-file.js',
 
      // this will match a directory and its contents
      // (`my-directory/x` resolves to `path/to/my-directory/x`)
      'components': './src/components',
 
      // an alias ending /* will only match
      // the contents of a directory, not the directory itself
      'static/*': './static/*'
    }
	},
};

export default config;
