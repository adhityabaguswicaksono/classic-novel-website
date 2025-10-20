import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import markdownItFootnote from 'markdown-it-footnote';

async function getBookChapter() {
	const folder = 'src/lib/resources/perjalanan-ke-pusat-bumi-jules-verne';
	const items = fs.readdirSync(folder);

	let chapters = [];

	const files = items.filter((f) => f.endsWith('.md'));

	chapters = files.map((filename) => {
		const slug = filename.replace('.md', '');
		const fullPath = path.resolve(folder, filename);
		const content = fs.readFileSync(fullPath, 'utf-8');
		const { data } = matter(content);

		return {
			slug,
			chapter: data.chapter ?? '',
			title: data.title ?? 'Tanpa Judul'
		};
	});

	return chapters.sort((a, b) => a.slug.localeCompare(b.slug));
}

export async function load({ params }) {
	const slug = params.slug;
	const folder = 'src/lib/resources/perjalanan-ke-pusat-bumi-jules-verne';
	const filePath = path.resolve(folder, `${slug}.md`);

	try {
		const file = fs.readFileSync(filePath, 'utf-8');
		const { content, data } = matter(file);

		// Inisialisasi markdown-it dengan footnote plugin
		const md = new MarkdownIt({
			html: true,
			linkify: true,
			typographer: true
		}).use(markdownItFootnote);

		// Render markdown ke HTML
		const html = md.render(content);

		const allChapterBook = await getBookChapter();

		return {
			slug,
			title: data.title ?? 'Tanpa Judul',
			chapter: data.chapter ?? '',
			content: html,
			bibliography: allChapterBook ?? []
		};
	} catch (err) {
		console.error(err);
		return {
			content: '<h1>Not Found</h1>'
		};
	}
}
