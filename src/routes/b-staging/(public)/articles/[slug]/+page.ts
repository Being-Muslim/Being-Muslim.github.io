import type { PageLoad } from './$types';
import { articles } from '$lib/data/mock';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const article = articles.find((a) => a.slug === params.slug);
	if (!article) error(404, 'Not found');

	const relatedArticles = articles
		.filter((a) => a.slug !== article.slug)
		.filter((a) => a.category === article.category || a.author === article.author)
		.slice(0, 3);

	// If we don't have enough related, fill with other articles
	const related =
		relatedArticles.length >= 3
			? relatedArticles
			: [
					...relatedArticles,
					...articles
						.filter(
							(a) => a.slug !== article.slug && !relatedArticles.some((r) => r.slug === a.slug)
						)
						.slice(0, 3 - relatedArticles.length)
				];

	return { article, relatedArticles: related };
};
