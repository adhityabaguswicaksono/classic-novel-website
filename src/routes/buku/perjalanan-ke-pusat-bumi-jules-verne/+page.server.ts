import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function load() {
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

	return {
		chapters: chapters.sort((a, b) => a.slug.localeCompare(b.slug))
	};
}
