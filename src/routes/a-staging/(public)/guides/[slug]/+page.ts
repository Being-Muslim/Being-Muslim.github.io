import type { PageLoad } from './$types';
import { guides } from '$lib/data/mock';
import { error } from '@sveltejs/kit';

export interface GuideStep {
	number: number;
	title: string;
	content: string;
	tip?: string;
}

function getGuideSteps(slug: string): GuideStep[] {
	const stepsBySlug: Record<string, GuideStep[]> = {
		'new-muslim': [
			{
				number: 1,
				title: 'Take a Deep Breath',
				content:
					'Congratulations on taking your shahada. The first thing to know is that there is no rush. Islam is a journey, not a sprint. Give yourself permission to learn at your own pace. Many new Muslims feel overwhelmed by the amount there is to learn — this is completely normal. Focus on one thing at a time.',
				tip: 'Write down how you feel today. You may want to look back on this moment in the future.'
			},
			{
				number: 2,
				title: 'Learn the Basics of Prayer',
				content:
					'Prayer (salah) is the most important daily practice in Islam. Start by learning the movements and key phrases. You do not need to memorize everything in Arabic right away — intention matters most. Begin with one or two prayers a day and gradually work up to all five.',
				tip: 'Our prayer reference cards are a great companion for this step. Keep them near your prayer area.'
			},
			{
				number: 3,
				title: 'Connect with a Community',
				content:
					'Find a local mosque or Islamic center where you feel welcome. Many mosques have programs specifically for new Muslims. If you do not have a local option, online communities can be just as supportive. Having people to ask questions and share your journey with makes a huge difference.',
				tip: 'Visit our community forums to connect with other new Muslims who understand exactly what you are going through.'
			},
			{
				number: 4,
				title: 'Start Reading the Quran',
				content:
					'Begin with a good English translation of the Quran. Start with the shorter chapters at the end (Juz Amma) — these are the ones you will eventually memorize for prayer. Read a little each day, even just a few verses. Understanding will deepen over time.',
				tip: 'The Clear Quran by Dr. Mustafa Khattab is an excellent translation for beginners.'
			},
			{
				number: 5,
				title: 'Learn About Halal Living',
				content:
					'Islam provides guidance on food, drink, and daily habits. The concept of halal (permissible) and haram (prohibited) extends beyond food to all aspects of life. Start with the basics: avoiding pork and alcohol, and learning to check food labels. Do not worry about getting everything perfect immediately.',
				tip: 'Most grocery stores have halal sections, and there are many apps that can help you identify halal products.'
			},
			{
				number: 6,
				title: 'Build a Daily Routine',
				content:
					'Structure your day around the five prayer times. This natural rhythm helps you stay connected to your faith throughout the day. Add small practices like saying bismillah before eating, making dua (supplication) before sleeping, and practicing gratitude each morning.',
				tip: 'Set gentle reminders on your phone for prayer times. Many Islamic apps can do this automatically.'
			}
		],
		'how-to-pray': [
			{
				number: 1,
				title: 'Prepare with Wudu (Ablution)',
				content:
					'Before praying, you must perform wudu — a ritual washing that purifies you for prayer. Wash your hands, rinse your mouth, clean your nose, wash your face, wash your arms to the elbows, wipe your head, and wash your feet. Each step is done with intention and mindfulness.',
				tip: 'If you forget the order, remember: face, arms, head, feet. The water should be clean and flowing.'
			},
			{
				number: 2,
				title: 'Find Your Direction (Qibla)',
				content:
					'Muslims pray facing the Kaaba in Makkah, Saudi Arabia. This direction is called the qibla. There are many smartphone apps that can help you find the qibla from anywhere in the world. In many mosques, the direction is indicated by the mihrab (prayer niche) in the wall.',
				tip: 'Download a qibla compass app — it uses your GPS to show you the exact direction to face.'
			},
			{
				number: 3,
				title: 'Make Your Intention (Niyyah)',
				content:
					'Before beginning the prayer, make a conscious intention in your heart about which prayer you are performing. This does not need to be said aloud — it is an internal commitment. The intention distinguishes a mindful act of worship from mere physical movements.',
				tip: 'Simply think: "I am praying the Dhuhr prayer for the sake of Allah." Sincerity is what counts.'
			},
			{
				number: 4,
				title: 'Stand and Begin (Takbir)',
				content:
					'Stand upright facing the qibla. Raise your hands to your ears and say "Allahu Akbar" (God is the Greatest). This marks the beginning of your prayer and is called the takbiratul ihram — the opening takbir. Place your right hand over your left on your chest.',
				tip: 'Stand in a comfortable, natural position. Your feet should be about shoulder-width apart.'
			},
			{
				number: 5,
				title: 'Recite Al-Fatiha',
				content:
					'Surah Al-Fatiha is the opening chapter of the Quran and is recited in every unit (rakah) of prayer. If you are still learning the Arabic, it is acceptable to recite what you know and make dua in your own language. Learning Al-Fatiha should be one of your first priorities.',
				tip: 'Listen to Al-Fatiha recitations online and practice along. Repetition is the best way to memorize.'
			},
			{
				number: 6,
				title: 'Bow and Prostrate (Ruku and Sujud)',
				content:
					'After reciting, bow at the waist (ruku) saying "Subhana Rabbiyal Adheem" (Glory to my Lord, the Magnificent). Stand back up, then prostrate (sujud) with your forehead, nose, palms, knees, and toes touching the ground, saying "Subhana Rabbiyal A\'la" (Glory to my Lord, the Most High). This cycle of bowing and prostrating forms the core physical movements of prayer.',
				tip: 'The prostration (sujud) is considered the closest you are to God during prayer. Take your time in this position.'
			}
		],
		'exploring-islam': [
			{
				number: 1,
				title: 'What Do Muslims Believe?',
				content:
					'At its core, Islam is a monotheistic faith — Muslims believe in one God (Allah in Arabic). Islam shares roots with Judaism and Christianity, and Muslims honor many of the same prophets including Abraham, Moses, and Jesus. The Prophet Muhammad is considered the final messenger of God.',
				tip: 'The word "Islam" means "submission to God" and "Muslim" means "one who submits." These words come from the Arabic root for peace (salam).'
			},
			{
				number: 2,
				title: 'The Quran: Islam\'s Holy Book',
				content:
					'The Quran is believed by Muslims to be the literal word of God, revealed to the Prophet Muhammad over a period of 23 years. It covers theology, law, morality, and guidance for daily life. The Quran is written in Arabic and has been preserved in its original language since it was first compiled.',
				tip: 'Many people find it helpful to read the Quran alongside a commentary (tafsir) for deeper understanding of context and meaning.'
			},
			{
				number: 3,
				title: 'The Five Pillars',
				content:
					'The five pillars are the foundational practices of Islam: the declaration of faith (shahada), five daily prayers (salah), charitable giving (zakat), fasting during Ramadan (sawm), and pilgrimage to Makkah (hajj). These pillars provide structure and purpose to a Muslim\'s life.',
				tip: 'Think of the five pillars as a framework rather than a checklist. Each one supports and strengthens the others.'
			},
			{
				number: 4,
				title: 'Islam in Daily Life',
				content:
					'Islam is not just a set of beliefs practiced on one day of the week — it is a complete way of life. From how Muslims greet each other (saying "As-salamu alaykum" — peace be upon you) to dietary guidelines and ethical principles, Islam provides guidance for every aspect of daily living.',
				tip: 'If you visit a mosque, you will notice people removing their shoes before entering and greeting each other with warmth. Visitors are always welcome.'
			}
		],
		reconnecting: [
			{
				number: 1,
				title: 'You Are Welcome Here',
				content:
					'If you have drifted from your practice, know that the door is always open. There is no judgment in returning — in fact, Islam teaches that God loves those who repent and return. Your background as a Muslim is not erased; it is a foundation you can build upon.',
				tip: 'The Prophet Muhammad said: "Every son of Adam makes mistakes, and the best of those who make mistakes are those who repent." (Tirmidhi)'
			},
			{
				number: 2,
				title: 'Start with What You Remember',
				content:
					'You likely remember more than you think. Start with what feels familiar — perhaps it is a dua your parent taught you, or the feeling of Ramadan, or the sound of the Quran. These memories are threads that connect you back to your faith. Pull on them gently.',
				tip: 'Try listening to Quran recitation. Many people find that the familiar sounds stir deep emotions and memories.'
			},
			{
				number: 3,
				title: 'Rebuild Your Prayer Practice',
				content:
					'Prayer is the first practice to restore. If five daily prayers feel like too much right now, start with one. The Fajr (dawn) prayer or the Maghrib (sunset) prayer are good starting points because they mark clear transitions in the day. Build consistency before adding more.',
				tip: 'It is better to pray one prayer consistently than to try all five and give up after a week. Be patient with yourself.'
			},
			{
				number: 4,
				title: 'Find Your Community',
				content:
					'Reconnecting is easier with support. Look for a community that is welcoming and non-judgmental. Many mosques have study circles and social events that make it easy to ease back in. If you are not ready for a mosque, online communities and podcasts can be a gentle starting point.',
				tip: 'You do not have to explain your absence to anyone. Simply show up. The community will be glad to see you.'
			},
			{
				number: 5,
				title: 'Learn with Fresh Eyes',
				content:
					'Approach your faith with curiosity rather than obligation. Read books, listen to lectures, and explore topics that genuinely interest you. The Islam you discover as an adult may feel very different from what you absorbed as a child — deeper, more nuanced, and more personally meaningful.',
				tip: '"Being Muslim" by Dr. Asad Tarsin is an excellent resource for rediscovering the faith with fresh eyes and an open heart.'
			}
		]
	};

	return stepsBySlug[slug] || stepsBySlug['new-muslim']!.slice(0, 4);
}

export const load: PageLoad = ({ params }) => {
	const guide = guides.find((g) => g.slug === params.slug);
	if (!guide) error(404, 'Not found');

	const steps = getGuideSteps(guide.slug);

	const otherGuides = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

	return { guide, steps, otherGuides };
};
