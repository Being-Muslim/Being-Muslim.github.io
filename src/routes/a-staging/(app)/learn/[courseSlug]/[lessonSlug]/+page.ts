import { courses, courseModules } from '$lib/data/mock.js';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';

export const load: PageLoad = ({ params }) => {
	const course = courses.find((c) => c.slug === params.courseSlug);

	if (!course) {
		error(404, { message: 'Course not found' });
	}

	let currentModuleIndex = -1;
	let currentLessonIndex = -1;
	let totalLessons = 0;
	let currentLessonNumber = 0;

	for (let mi = 0; mi < courseModules.length; mi++) {
		for (let li = 0; li < courseModules[mi].lessons.length; li++) {
			totalLessons++;
			if (courseModules[mi].lessons[li].slug === params.lessonSlug) {
				currentModuleIndex = mi;
				currentLessonIndex = li;
				currentLessonNumber = totalLessons;
			}
		}
	}

	totalLessons = courseModules.reduce((sum, m) => sum + m.lessons.length, 0);

	if (currentModuleIndex === -1) {
		error(404, { message: 'Lesson not found' });
	}

	const currentLesson = courseModules[currentModuleIndex].lessons[currentLessonIndex];
	const currentModule = courseModules[currentModuleIndex];

	let prevLesson: { slug: string; title: string } | null = null;
	let nextLesson: { slug: string; title: string } | null = null;

	if (currentLessonIndex > 0) {
		const prev = courseModules[currentModuleIndex].lessons[currentLessonIndex - 1];
		prevLesson = { slug: prev.slug, title: prev.title };
	} else if (currentModuleIndex > 0) {
		const prevModule = courseModules[currentModuleIndex - 1];
		const prev = prevModule.lessons[prevModule.lessons.length - 1];
		prevLesson = { slug: prev.slug, title: prev.title };
	}

	if (currentLessonIndex < courseModules[currentModuleIndex].lessons.length - 1) {
		const next = courseModules[currentModuleIndex].lessons[currentLessonIndex + 1];
		nextLesson = { slug: next.slug, title: next.title };
	} else if (currentModuleIndex < courseModules.length - 1) {
		const next = courseModules[currentModuleIndex + 1].lessons[0];
		nextLesson = { slug: next.slug, title: next.title };
	}

	const completedCount = courseModules.reduce(
		(sum, m) => sum + m.lessons.filter((l) => l.completed).length,
		0
	);

	return {
		course,
		modules: courseModules,
		currentLesson,
		currentModule,
		currentModuleIndex,
		currentLessonIndex,
		currentLessonNumber,
		totalLessons,
		completedCount,
		prevLesson,
		nextLesson
	};
};
