import type { PageLoad } from './$types';
import { forumCategories, sampleThreads } from '$lib/data/mock';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const category = forumCategories.find((c) => c.slug === params.category);
	if (!category) error(404, 'Category not found');

	const thread = sampleThreads.find((t) => t.slug === params.thread);
	if (!thread) error(404, 'Thread not found');

	// Mock original post
	const originalPost = {
		author: thread.author,
		avatar: thread.author[0].toUpperCase(),
		joinDate: 'January 2025',
		postCount: 42,
		timestamp: '3 days ago',
		content: `Assalamu alaikum everyone,

I've been thinking about this topic a lot lately and wanted to reach out to the community for advice and perspectives.

For those of you who have gone through something similar, I'd love to hear how you approached it. What worked for you? What challenges did you face along the way?

I think this is something many of us deal with, especially those of us who are newer to the faith. It can feel isolating at times, but knowing that others have navigated the same path gives me hope.

JazakAllah khair for any insights you can share. This community has been such a blessing in my journey.`
	};

	// Mock replies
	const replies = [
		{
			id: '1',
			author: 'Aminah_R',
			avatar: 'A',
			joinDate: 'March 2024',
			postCount: 156,
			timestamp: '2 days ago',
			content:
				"Wa alaikum assalam! This is such an important topic. I went through something very similar when I first converted. My advice would be to take it one step at a time. Don't try to change everything overnight. Focus on building one good habit before moving to the next.\n\nAlso, finding a mentor or someone you trust to talk to can make a world of difference. Feel free to reach out if you ever want to chat!",
			bestAnswer: true
		},
		{
			id: '2',
			author: 'ImamKhalid',
			avatar: 'I',
			joinDate: 'August 2023',
			postCount: 312,
			timestamp: '2 days ago',
			content:
				'MashaAllah, great question. I always remind people in our community that the Prophet (peace be upon him) said "The most beloved deeds to Allah are those done consistently, even if they are small." This applies beautifully to your situation.\n\nConsistency over perfection. Always.'
		},
		{
			id: '3',
			author: 'SeekingLight',
			avatar: 'S',
			joinDate: 'November 2024',
			postCount: 28,
			timestamp: '1 day ago',
			content:
				"I'm dealing with the same thing right now! Thank you for posting this. It helps knowing I'm not alone. The responses here have given me a lot to think about."
		},
		{
			id: '4',
			author: 'FatimaS',
			avatar: 'F',
			joinDate: 'June 2024',
			postCount: 89,
			timestamp: '12 hours ago',
			content:
				'Adding to what others have said, I found that journaling really helped me process my thoughts and track my progress. Sometimes you don\'t realize how far you\'ve come until you look back at where you started.\n\nAlso, don\'t be afraid to ask for help. That\'s literally what this community is for!'
		},
		{
			id: '5',
			author: 'OmarK',
			avatar: 'O',
			joinDate: 'February 2025',
			postCount: 15,
			timestamp: '6 hours ago',
			content:
				'JazakAllah khair to everyone sharing their experiences. This thread is exactly why I love this community. We lift each other up. May Allah bless all of you on your journeys.'
		}
	];

	// Mock similar threads
	const similarThreads = sampleThreads
		.filter((t) => t.slug !== thread.slug)
		.slice(0, 3);

	return { category, thread, originalPost, replies, similarThreads };
};
