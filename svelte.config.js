import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import footnotes from 'remark-footnotes';

const config = {
	extensions: ['.svelte', '.svelte.md', '.md', '.svx', '.mdx'],
	preprocess: [
		mdsvex({
			extensions: ['.svelte.md', '.md', '.svx', '.mdx'],
			remarkPlugins: [[footnotes, { inlineNotes: true }]]
		})
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
