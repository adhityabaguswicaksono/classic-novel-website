// import { readFileSync, readdirSync } from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

// export async function load() {
// 	const folder = 'src/lib/chapters';
// 	const files = readdirSync(folder).filter((f) => f.endsWith('.md'));

// 	const chapters = files.map((filename) => {
// 		const slug = filename.replace('.md', '');
// 		const fullPath = path.resolve(folder, filename);
// 		const content = readFileSync(fullPath, 'utf-8');
// 		const { data } = matter(content);

// 		return {
// 			slug,
// 			chapter: data.chapter ?? '',
// 			title: data.title ?? 'Tanpa Judul'
// 		};
// 	});

// 	return {
// 		chapters: chapters.sort((a, b) => a.slug.localeCompare(b.slug))
// 	};
// }

import matter from 'gray-matter';

export async function load({ fetch }) {
	const res = await fetch('/chapters/index.json');
	const files = await res.json();

	const chapters = [];

	for (const filename of files) {
		const fileRes = await fetch(`/chapters/${filename}`);
		const content = await fileRes.text();
		const { data } = matter(content);

		chapters.push({
			slug: filename.replace('.md', ''),
			chapter: data.chapter ?? '',
			title: data.title ?? 'Tanpa Judul'
		});
	}

	return {
		chapters: chapters.sort((a, b) => a.slug.localeCompare(b.slug))
	};
}
