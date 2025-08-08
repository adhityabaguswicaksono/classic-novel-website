import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

function extractAndReplaceFootnotes(markdown: string): {
	markdownWithoutFootnotes: string;
	footnotesHtml: string;
} {
	const footnoteRegex = /^\[\^(\d+)\]: (.*)$/gm;
	const footnotes: Record<string, string> = {};
	let match;

	// Ambil semua definisi footnote
	while ((match = footnoteRegex.exec(markdown)) !== null) {
		const number = match[1];
		const text = match[2];
		footnotes[number] = text;
	}

	// Hapus footnote dari markdown mentah
	const markdownWithoutFootnotes = markdown.replace(footnoteRegex, '');

	// Siapkan HTML footnote
	let footnotesHtml = '';
	Object.entries(footnotes).forEach(([number, text]) => {
		footnotesHtml += `
			<div id="note${number}" class="mb-2 text-sm leading-relaxed scroll-mt-[250px]">
				<span class="font-semibold">[${number}]</span> ${String(marked.parseInline(text)).trim()}
				<a href="javascript:void(0);" data-scroll-target="ref${number}" class="ml-1 text-xs no-underline">↩</a>
			</div>`;
	});

	return {
		markdownWithoutFootnotes,
		footnotesHtml
	};
}

function replaceFootnoteRefs(html: string): string {
	return html.replace(/\[\^(\d+)\]/g, (_, number) => {
		return `<sup id="ref${number}" class="scroll-mt-[250px]"><a href="javascript:void(0);" data-scroll-target="note${number}" class="no-underline cursor-pointer">[${number}]</a></sup>`;
	});
}

// export async function load({ params }) {
// 	const slug = params.slug;
// 	const filePath = path.resolve('src/lib/chapters', `${slug}.md`);

// 	try {
// 		const file = fs.readFileSync(filePath, 'utf-8');
// 		const { content, data } = matter(file);

// 		// Proses footnote sebelum markdown dirender
// 		const { markdownWithoutFootnotes, footnotesHtml } = extractAndReplaceFootnotes(content);

// 		// Render markdown normal
// 		const rendered = marked(markdownWithoutFootnotes);
// 		const renderedWithRefs = replaceFootnoteRefs(String(rendered));

// 		const finalHtml = renderedWithRefs + footnotesHtml;

// 		const files = fs.readdirSync('src/lib/chapters');
// 		const slugs = files.map((f) => f.replace('.md', '')).sort();

// 		return {
// 			content: finalHtml,
// 			slug,
// 			slugs,
// 			chapter: data.chapter ?? '',
// 			title: data.title ?? 'Tanpa Judul'
// 		};
// 	} catch (err) {
// 		console.error(err);
// 		return {
// 			content: '<h1>Not Found</h1>'
// 		};
// 	}
// }

// ==== Baca semua file markdown sekali saat build ====
const folder = path.resolve('src/lib/chapters');
const allSlugs = fs
	.readdirSync(folder)
	.filter((f) => f.endsWith('.md'))
	.map((f) => f.replace('.md', ''))
	.sort();

const chapterData = Object.fromEntries(
	allSlugs.map((slug) => {
		const filePath = path.join(folder, `${slug}.md`);
		const file = fs.readFileSync(filePath, 'utf-8');
		const { content, data } = matter(file);

		const { markdownWithoutFootnotes, footnotesHtml } = extractAndReplaceFootnotes(content);
		const rendered = marked(markdownWithoutFootnotes);
		const renderedWithRefs = replaceFootnoteRefs(String(rendered));
		const finalHtml = renderedWithRefs + footnotesHtml;

		return [
			slug,
			{
				content: finalHtml,
				slug,
				chapter: data.chapter ?? '',
				title: data.title ?? 'Tanpa Judul'
			}
		];
	})
);

// ==== Loader ====
export function load({ params }) {
	const slug = params.slug;
	const found = chapterData[slug];

	if (!found) {
		return { content: '<h1>Not Found</h1>', slug, slugs: allSlugs };
	}

	return {
		...found,
		slugs: allSlugs
	};
}
