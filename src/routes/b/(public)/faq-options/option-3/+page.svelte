<script lang="ts">
	import { base } from '$app/paths';
	import { ChevronDown } from 'lucide-svelte';

	let openFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	const faqs = [
		{ q: 'I just converted, what do I do next?', a: 'Congratulations and may God bless your path ahead! We have written an article that offers some advice and important first steps: "A Beginner\'s Guide to Being a Muslim." You can find it on our Learn page.' },
		{ q: 'My family is not supportive of my conversion. What do you advise?', a: 'This is a common challenge many new Muslims face. We recommend patience, maintaining loving relationships, and leading by positive example. Our community forum has many discussions from people who have navigated this successfully.' },
		{ q: 'Can you help me find a mosque or community of Muslims near me?', a: 'We can help connect you with local communities. Reach out through our Contact page and we will do our best to help you find a welcoming community in your area.' },
		{ q: 'My previous faith was very dear to me. Do I have to reject it entirely?', a: 'Islam acknowledges and respects the earlier prophets and scriptures. Many of the values you cherished in your previous faith are shared in Islam. Your journey enriches rather than erases your spiritual history.' },
		{ q: 'Do I need to change my name now that I have become Muslim?', a: 'No, changing your name is not required in Islam. Many Muslims keep their birth names. Some choose to adopt a new name as a personal expression of their new identity, but this is entirely optional.' },
		{ q: 'I want to convert, but I find it difficult to change my lifestyle. Can I still become Muslim?', a: 'Absolutely. Islam teaches that faith is a journey, not a destination. You do not need to be perfect to begin. Start with the essentials and grow at your own pace — God is patient and merciful.' },
		{ q: 'My spouse is not a Muslim. How does becoming Muslim impact my marriage?', a: 'This is a nuanced topic that depends on your specific situation. We recommend speaking with a knowledgeable scholar who can provide guidance tailored to your circumstances. Reach out through our Contact page.' }
	];

	const stats = [
		{ value: '10,000+', label: 'Books Distributed' },
		{ value: '500+', label: 'Communities' },
		{ value: '50+', label: 'Countries' },
		{ value: '4.8\u2605', label: 'Rating' }
	];
</script>

<svelte:head>
	<title>FAQ Option 3: Quick Stats — Being Muslim</title>
</svelte:head>

<section style="background: #fff; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #8a7e70; letter-spacing: 0.05em; text-transform: uppercase; margin: 0 0 8px;">Layout Comparison</p>
		<h1 style="font-family: 'Source Serif 4', serif; font-size: 28px; font-weight: 400; color: #2a2018; margin: 0 0 48px;">FAQ Option 3: Quick Stats</h1>

		<div style="display: grid; grid-template-columns: 1fr 380px; gap: 48px; align-items: start;">
			<!-- Left: FAQ Accordion -->
			<div>
				<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 32px;">
					Frequently Asked Questions
				</h2>

				{#each faqs as faq, i}
					<button
						onclick={() => toggleFaq(i)}
						style="width: 100%; text-align: left; padding: 20px 0; border: none; border-top: 1px solid #e8e3da; background: none; cursor: pointer; display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;"
					>
						<span style="font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500; color: #2a2018; line-height: 1.4;">{faq.q}</span>
						<ChevronDown class="h-4 w-4 flex-shrink-0 mt-1 transition-transform duration-200 {openFaq === i ? 'rotate-180' : ''}" style="color: #8a7e70;" />
					</button>
					{#if openFaq === i}
						<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; line-height: 1.6; margin: 0 0 20px; padding-right: 40px;">{faq.a}</p>
					{/if}
				{/each}

				<div style="margin-top: 24px; display: flex; gap: 12px;">
					<a href="{base}/b/convert" class="bm-btn-dark" style="padding: 10px 24px;">
						Ready to Convert
					</a>
					<a href="{base}/b/contact" class="bm-btn-outline" style="padding: 10px 24px;">
						Ask a Question
					</a>
				</div>
			</div>

			<!-- Right: Sticky Stat Cards -->
			<div style="position: sticky; top: 100px; display: flex; flex-direction: column; gap: 12px;">
				{#each stats as stat}
					<div style="background: #e9e3da; border-radius: 12px; padding: 24px;">
						<p style="font-family: 'Source Serif 4', serif; font-size: 28px; font-weight: 400; line-height: 1; color: #2a2018; margin: 0;">{stat.value}</p>
						<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; margin: 6px 0 0;">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
