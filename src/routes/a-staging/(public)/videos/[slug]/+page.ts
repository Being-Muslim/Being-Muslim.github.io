import type { PageLoad } from './$types';
import { videos } from '$lib/data/mock';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const video = videos.find((v) => v.slug === params.slug);
	if (!video) error(404, 'Not found');

	const relatedVideos = videos
		.filter((v) => v.slug !== video.slug)
		.filter((v) => v.category === video.category)
		.slice(0, 3);

	// If we don't have enough related in the same category, fill with others
	const related =
		relatedVideos.length >= 3
			? relatedVideos
			: [
					...relatedVideos,
					...videos
						.filter(
							(v) => v.slug !== video.slug && !relatedVideos.some((r) => r.slug === v.slug)
						)
						.slice(0, 3 - relatedVideos.length)
				];

	return { video, relatedVideos: related };
};
