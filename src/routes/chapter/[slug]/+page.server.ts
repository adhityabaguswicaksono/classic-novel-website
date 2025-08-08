import matter from 'gray-matter';
import { marked } from 'marked';

interface ChapterData {
	content: string;
	slug: string;
	slugs: string[];
	chapter: string | number;
	title: string;
}

function extractAndReplaceFootnotes(markdown: string): {
	markdownWithoutFootnotes: string;
	footnotesHtml: string;
} {
	const footnoteRegex = /^\[\^(\d+)\]: (.*)$/gm;
	const footnotes: Record<string, string> = {};
	let match: RegExpExecArray | null;

	while ((match = footnoteRegex.exec(markdown)) !== null) {
		const number = match[1];
		const text = match[2];
		footnotes[number] = text;
	}

	const markdownWithoutFootnotes = markdown.replace(footnoteRegex, '');

	let footnotesHtml = '';
	Object.entries(footnotes).forEach(([number, text]) => {
		footnotesHtml += `
			<div id="note${number}" class="mb-2 text-sm leading-relaxed scroll-mt-[250px]">
				<span class="font-semibold">[${number}]</span> ${String(marked.parseInline(text)).trim()}
				<a href="javascript:void(0);" data-scroll-target="ref${number}" class="ml-1 text-xs no-underline">↩</a>
			</div>`;
	});

	return { markdownWithoutFootnotes, footnotesHtml };
}

function replaceFootnoteRefs(html: string): string {
	return html.replace(/\[\^(\d+)\]/g, (_, number) => {
		return `<sup id="ref${number}" class="scroll-mt-[250px]">
			<a href="javascript:void(0);" data-scroll-target="note${number}" class="no-underline cursor-pointer">[${number}]</a>
		</sup>`;
	});
}

export async function load({ params, fetch, url }): Promise<ChapterData> {
	const slug = params.slug;

	try {
		const baseUrl = url.origin; // Dapat origin, misal https://namasite.vercel.app

		// Ambil daftar file dari static
		const listRes = await fetch(`${baseUrl}/chapters/index.json`);
		if (!listRes.ok) throw new Error('Gagal ambil index.json');
		const files: string[] = await listRes.json();
		const slugs = files.map((f) => f.replace('.md', '')).sort();

		// Ambil markdown dari static
		const fileRes = await fetch(`${baseUrl}/chapters/${slug}.md`);
		if (!fileRes.ok) {
			return { content: '<h1>Not Found</h1>', slug, slugs, chapter: '', title: 'Tanpa Judul' };
		}

		const file = await fileRes.text();
		const { content, data } = matter(file);

		// Proses footnote
		const { markdownWithoutFootnotes, footnotesHtml } = extractAndReplaceFootnotes(content);
		const rendered = marked(markdownWithoutFootnotes);
		const renderedWithRefs = replaceFootnoteRefs(String(rendered));

		return {
			content: renderedWithRefs + footnotesHtml,
			slug,
			slugs,
			chapter: data.chapter ?? '',
			title: data.title ?? 'Tanpa Judul'
		};
	} catch (err) {
		console.error(err);
		return { content: '<h1>Not Found</h1>', slug, slugs: [], chapter: '', title: 'Tanpa Judul' };
	}
}
