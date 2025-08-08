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

export async function load({ params, fetch }) {
	const slug = params.slug;

	try {
		// Ambil daftar file dari static
		const listRes = await fetch('/chapters/index.json');
		const files = await listRes.json();
		const slugs = files.map((f) => f.replace('.md', '')).sort();

		// Ambil konten file markdown
		const fileRes = await fetch(`/chapters/${slug}.md`);
		if (!fileRes.ok) {
			return { content: '<h1>Not Found</h1>' };
		}

		const file = await fileRes.text();
		const { content, data } = matter(file);

		// Proses footnote sebelum markdown dirender
		const { markdownWithoutFootnotes, footnotesHtml } = extractAndReplaceFootnotes(content);

		// Render markdown normal
		const rendered = marked(markdownWithoutFootnotes);
		const renderedWithRefs = replaceFootnoteRefs(String(rendered));

		const finalHtml = renderedWithRefs + footnotesHtml;

		return {
			content: finalHtml,
			slug,
			slugs,
			chapter: data.chapter ?? '',
			title: data.title ?? 'Tanpa Judul'
		};
	} catch (err) {
		console.error(err);
		return {
			content: '<h1>Not Found</h1>'
		};
	}
}
