export const load = async () => {
	const modules = import.meta.glob('$lib/resources/*/index.json');

	const books = await Promise.all(
		Object.entries(modules).map(async ([, resolver]) => {
			const mod = await resolver();
			return mod;
		})
	);

	return {
		books: books.filter(Boolean)
	};
};
