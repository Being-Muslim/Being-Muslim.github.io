import { courses, courseModules, testimonials } from '$lib/data/mock.js';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';

export const load: PageLoad = ({ params }) => {
	const course = courses.find((c) => c.slug === params.slug);

	if (!course) {
		error(404, { message: 'Course not found' });
	}

	return {
		course,
		modules: courseModules,
		testimonials: testimonials.slice(0, 3)
	};
};
