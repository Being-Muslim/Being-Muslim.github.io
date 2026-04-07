<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import {
		ChevronDown,
		ArrowRight,
		Heart,
		BookOpen,
		Users,
		Star,
		Mail,
		Phone,
		MapPin,
		User,
		MessageSquare,
		Send
	} from 'lucide-svelte';

	// Form state
	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let city = $state('');
	let stateField = $state('');
	let selectedBackground = $state('');
	let additionalInfo = $state('');
	let isSubmitting = $state(false);
	let isSubmitted = $state(false);

	const backgroundOptions = [
		'I have been studying Islam and am ready to convert',
		"I haven't studied much, but I know I want to become a Muslim",
		'I am considering becoming Muslim, but have some questions first',
		'I am not interested in converting yet but would like to know more about Islam',
		'I already believe in Islam but would now like to embrace the faith formally'
	] as const;

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		isSubmitting = true;
		// Simulate submission
		setTimeout(() => {
			isSubmitting = false;
			isSubmitted = true;
		}, 1500);
	}

	// Key points about Islam
	const keyPoints = [
		{
			icon: Heart,
			title: 'A Path of Peace',
			description:
				'Islam offers a direct, personal relationship with God — one built on mercy, love, and guidance for every aspect of life.'
		},
		{
			icon: BookOpen,
			title: 'Timeless Wisdom',
			description:
				'The Quran and the teachings of the Prophet Muhammad (peace be upon him) provide a comprehensive guide for living with purpose and clarity.'
		},
		{
			icon: Users,
			title: 'A Global Community',
			description:
				'By embracing Islam, you join a worldwide family of nearly two billion people united by shared values, prayer, and mutual support.'
		},
		{
			icon: Star,
			title: 'Your Own Pace',
			description:
				'There is no pressure, no timeline. Islam welcomes you wherever you are in your journey — curious, exploring, or ready to take the next step.'
		}
	] as const;

	// FAQ data
	const faqs = [
		{
			question: 'My family is not supportive of my conversion. What do you advise?',
			answer: 'This is one of the most common concerns, and you are not alone. Islam places immense value on maintaining family ties, even when there are disagreements. We encourage kindness, patience, and open communication. Our team can connect you with mentors who have navigated similar situations and can offer practical guidance and emotional support.'
		},
		{
			question: 'Can you help me find a mosque or community of Muslims near me?',
			answer: 'Absolutely. Once you reach out to us, we can help locate mosques, Islamic centers, and convert-friendly communities in your area. Having a local support system is incredibly valuable, and we are committed to helping you find one.'
		},
		{
			question: 'My previous faith was very dear to me. If I am now a Muslim, do I have to reject it entirely?',
			answer: 'Islam actually affirms the core messages of earlier prophets and scriptures. Muslims believe in Moses, Jesus, and all the prophets (peace be upon them all). Becoming Muslim does not mean rejecting the good you found in your previous faith — it means building upon it with the final revelation from God. Many converts find that Islam deepens their connection to truths they always held dear.'
		},
		{
			question: 'My spouse or significant other is not a Muslim. How does becoming Muslim impact my marriage?',
			answer: 'This is a deeply personal and important question. Islam values the institution of marriage and family stability. The specifics can vary depending on your situation, and we recommend speaking with a knowledgeable scholar or imam who can provide guidance tailored to your circumstances. Our team can connect you with the right person to discuss this.'
		},
		{
			question: 'I just converted, what do I do next?',
			answer: 'Congratulations and may God bless your path ahead! We have written an article that offers some advice and important first steps. Our team will also reach out to you personally with resources, including the Being Muslim book and boxed set, to help you begin your journey with confidence.'
		},
		{
			question: 'I believe Islam to be true and revealed by God, but I can\'t live up to its teachings. What should I do?',
			answer: 'No one lives up to every teaching perfectly — not even lifelong Muslims. Islam is a journey, not a destination. God says in the Quran that He does not burden a soul beyond its capacity. What matters is sincerity, effort, and turning back to God when you fall short. You do not need to be perfect to begin; you just need to begin.'
		},
		{
			question: 'I want to convert, but I am finding it difficult to change my lifestyle. Can I still become Muslim?',
			answer: 'Yes, absolutely. Becoming Muslim is about affirming your belief in one God and accepting the Prophet Muhammad (peace be upon him) as His messenger. Lifestyle changes happen gradually, and Islam encourages a step-by-step approach. Many scholars advise that you take your shahada (declaration of faith) first and then work on changes at a pace that is sustainable for you. God is patient and merciful.'
		},
		{
			question: 'Do I need to change my name now that I have become Muslim?',
			answer: 'No, changing your name is not required in Islam. Many converts choose to keep their birth names. Some choose to adopt an additional name or a new name as a personal and symbolic step, but this is entirely optional. What matters is the change in your heart, not the name on your identification.'
		}
	] as const;
</script>

<svelte:head>
	<title>Your Journey to Islam — Convert & Explore | Being Muslim</title>
	<meta
		name="description"
		content="Considering Islam? Whether you are exploring, have questions, or are ready to convert, we are here to support you every step of the way."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. HERO — CONSIDERING CONVERTING -->
<!-- ============================== -->
<section class="relative flex min-h-[70vh] items-center overflow-hidden" style="background: #f0ebe3;">
	<!-- Subtle geometric pattern -->
	<div class="absolute inset-0 opacity-[0.04]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo-convert" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
					<circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" stroke-width="0.5" style="color: #2a2018" />
					<circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" stroke-width="0.3" style="color: #2a2018" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo-convert)" />
		</svg>
	</div>

	<div class="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-10">
		<div class="mx-auto max-w-3xl text-center">
			<div
				class="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"
				style="background: #e9e3da; color: #8a7e70; font-family: 'DM Sans', sans-serif;"
			>
				<Heart class="h-4 w-4" style="color: #8b2e36;" />
				<span>You are welcome here</span>
			</div>

			<h1
				class="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
				style="font-family: 'Source Serif 4', serif; color: #2a2018;"
			>
				Your Journey to Islam
			</h1>

			<p
				class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl"
				style="font-family: 'DM Sans', sans-serif; color: #8a7e70;"
			>
				Whether you have been exploring Islam for years or are just beginning to wonder, there is
				no rush and no pressure. This is a deeply personal journey, and we are honored to walk it
				with you — at whatever pace feels right.
			</p>

			<div class="mt-10 flex flex-wrap justify-center gap-4">
				<a
					href="#ready-form"
					class="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-medium transition-all hover:opacity-90"
					style="background: #8b2e36; color: #faf2e3; font-family: 'DM Sans', sans-serif;"
				>
					I'm Ready to Connect
					<ArrowRight class="h-5 w-5" />
				</a>
				<a
					href="#faq"
					class="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-base font-medium transition-all hover:opacity-80"
					style="border-color: #2a2018; color: #2a2018; font-family: 'DM Sans', sans-serif;"
				>
					I Have Questions
					<ChevronDown class="h-5 w-5" />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- KEY POINTS — WHAT ISLAM OFFERS -->
<!-- ============================== -->
<section class="py-16 md:py-24" style="background: #f0ebe3;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div class="text-center">
			<h2
				class="text-3xl font-bold sm:text-4xl"
				style="font-family: 'Source Serif 4', serif; color: #2a2018;"
			>
				What draws people to Islam
			</h2>
			<p
				class="mx-auto mt-4 max-w-2xl text-lg"
				style="font-family: 'DM Sans', sans-serif; color: #8a7e70;"
			>
				Every person's path is unique, but these are some of the things that resonate most deeply
				with those exploring the faith.
			</p>
		</div>

		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each keyPoints as point}
				{@const Icon = point.icon}
				<div
					class="rounded-[10px] p-6 transition-all hover:shadow-md"
					style="background: #e9e3da;"
				>
					<div
						class="flex h-12 w-12 items-center justify-center rounded-lg"
						style="background: rgba(139, 46, 54, 0.1);"
					>
						<Icon class="h-6 w-6" style="color: #8b2e36;" />
					</div>
					<h3
						class="mt-4 text-lg font-bold"
						style="font-family: 'Source Serif 4', serif; color: #2a2018;"
					>
						{point.title}
					</h3>
					<p
						class="mt-2 text-sm leading-relaxed"
						style="font-family: 'DM Sans', sans-serif; color: #8a7e70;"
					>
						{point.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 2. READY TO CONVERT — FORM     -->
<!-- ============================== -->
<section id="ready-form" class="py-16 md:py-24" style="background: #e9e3da;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div class="mx-auto max-w-2xl">
			<div class="text-center">
				<div
					class="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"
					style="background: rgba(139, 46, 54, 0.1); color: #8b2e36; font-family: 'DM Sans', sans-serif;"
				>
					<Send class="h-4 w-4" />
					<span>Take the next step</span>
				</div>
				<h2
					class="text-3xl font-bold sm:text-4xl"
					style="font-family: 'Source Serif 4', serif; color: #2a2018;"
				>
					Ready to connect?
				</h2>
				<p
					class="mt-4 text-lg leading-relaxed"
					style="font-family: 'DM Sans', sans-serif; color: #8a7e70;"
				>
					Fill out the form below and someone from our team will email you within 48 hours.
					There is absolutely no obligation — we are simply here to help.
				</p>
			</div>

			{#if isSubmitted}
				<!-- Success State -->
				<div
					class="mt-10 rounded-[10px] p-8 text-center sm:p-12"
					style="background: #f0ebe3;"
				>
					<div
						class="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
						style="background: rgba(45, 106, 79, 0.1);"
					>
						<Heart class="h-8 w-8" style="color: #2d6a4f;" />
					</div>
					<h3
						class="mt-6 text-2xl font-bold"
						style="font-family: 'Source Serif 4', serif; color: #2a2018;"
					>
						Thank you for reaching out
					</h3>
					<p
						class="mt-3 text-base leading-relaxed"
						style="font-family: 'DM Sans', sans-serif; color: #8a7e70;"
					>
						We have received your information and someone from our team will be in touch within
						48 hours. In the meantime, feel free to explore our resources and articles.
					</p>
				</div>
			{:else}
				<!-- Form -->
				<form
					class="mt-10 rounded-[10px] p-6 sm:p-8"
					style="background: #f0ebe3;"
					onsubmit={handleSubmit}
				>
					<!-- Name & Email -->
					<div class="grid gap-5 sm:grid-cols-2">
						<div>
							<label
								for="convert-name"
								class="mb-1.5 flex items-center gap-1.5 text-sm font-medium"
								style="color: #2a2018; font-family: 'DM Sans', sans-serif;"
							>
								<User class="h-4 w-4" style="color: #8a7e70;" />
								Name <span style="color: #8b2e36;">*</span>
							</label>
							<input
								id="convert-name"
								type="text"
								required
								bind:value={name}
								placeholder="Your full name"
								class="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all focus:ring-2"
								style="border-color: #d4cec4; background: #ffffff; color: #2a2018; font-family: 'DM Sans', sans-serif; --tw-ring-color: rgba(139, 46, 54, 0.3);"
							/>
						</div>
						<div>
							<label
								for="convert-email"
								class="mb-1.5 flex items-center gap-1.5 text-sm font-medium"
								style="color: #2a2018; font-family: 'DM Sans', sans-serif;"
							>
								<Mail class="h-4 w-4" style="color: #8a7e70;" />
								Email <span style="color: #8b2e36;">*</span>
							</label>
							<input
								id="convert-email"
								type="email"
								required
								bind:value={email}
								placeholder="you@example.com"
								class="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all focus:ring-2"
								style="border-color: #d4cec4; background: #ffffff; color: #2a2018; font-family: 'DM Sans', sans-serif; --tw-ring-color: rgba(139, 46, 54, 0.3);"
							/>
						</div>
					</div>

					<!-- Phone & Location -->
					<div class="mt-5 grid gap-5 sm:grid-cols-3">
						<div>
							<label
								for="convert-phone"
								class="mb-1.5 flex items-center gap-1.5 text-sm font-medium"
								style="color: #2a2018; font-family: 'DM Sans', sans-serif;"
							>
								<Phone class="h-4 w-4" style="color: #8a7e70;" />
								Phone <span class="text-xs" style="color: #8a7e70;">(optional)</span>
							</label>
							<input
								id="convert-phone"
								type="tel"
								bind:value={phone}
								placeholder="(555) 123-4567"
								class="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all focus:ring-2"
								style="border-color: #d4cec4; background: #ffffff; color: #2a2018; font-family: 'DM Sans', sans-serif; --tw-ring-color: rgba(139, 46, 54, 0.3);"
							/>
						</div>
						<div>
							<label
								for="convert-city"
								class="mb-1.5 flex items-center gap-1.5 text-sm font-medium"
								style="color: #2a2018; font-family: 'DM Sans', sans-serif;"
							>
								<MapPin class="h-4 w-4" style="color: #8a7e70;" />
								City
							</label>
							<input
								id="convert-city"
								type="text"
								bind:value={city}
								placeholder="Your city"
								class="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all focus:ring-2"
								style="border-color: #d4cec4; background: #ffffff; color: #2a2018; font-family: 'DM Sans', sans-serif; --tw-ring-color: rgba(139, 46, 54, 0.3);"
							/>
						</div>
						<div>
							<label
								for="convert-state"
								class="mb-1.5 flex items-center gap-1.5 text-sm font-medium"
								style="color: #2a2018; font-family: 'DM Sans', sans-serif;"
							>
								<MapPin class="h-4 w-4 opacity-0" />
								State
							</label>
							<input
								id="convert-state"
								type="text"
								bind:value={stateField}
								placeholder="Your state"
								class="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all focus:ring-2"
								style="border-color: #d4cec4; background: #ffffff; color: #2a2018; font-family: 'DM Sans', sans-serif; --tw-ring-color: rgba(139, 46, 54, 0.3);"
							/>
						</div>
					</div>

					<!-- Background Selection -->
					<div class="mt-6">
						<p
							class="mb-3 text-sm font-medium"
							style="color: #2a2018; font-family: 'DM Sans', sans-serif;"
						>
							Which best describes where you are right now?
						</p>
						<div class="space-y-2.5">
							{#each backgroundOptions as option}
								<label
									class="flex cursor-pointer items-start gap-3 rounded-lg border p-3.5 transition-all"
									style="border-color: {selectedBackground === option ? '#8b2e36' : '#d4cec4'}; background: {selectedBackground === option ? 'rgba(139, 46, 54, 0.05)' : '#ffffff'};"
								>
									<input
										type="radio"
										name="background"
										value={option}
										bind:group={selectedBackground}
										class="mt-0.5 h-4 w-4 shrink-0"
										style="accent-color: #8b2e36;"
									/>
									<span
										class="text-sm leading-relaxed"
										style="color: #2a2018; font-family: 'DM Sans', sans-serif;"
									>
										{option}
									</span>
								</label>
							{/each}
						</div>
					</div>

					<!-- Additional Info -->
					<div class="mt-6">
						<label
							for="convert-info"
							class="mb-1.5 flex items-center gap-1.5 text-sm font-medium"
							style="color: #2a2018; font-family: 'DM Sans', sans-serif;"
						>
							<MessageSquare class="h-4 w-4" style="color: #8a7e70;" />
							Is there anything else you would like to share?
						</label>
						<textarea
							id="convert-info"
							bind:value={additionalInfo}
							rows={4}
							placeholder="Feel free to share anything on your mind — questions, concerns, or just a bit about your journey so far..."
							class="w-full resize-y rounded-lg border px-4 py-2.5 text-sm outline-none transition-all focus:ring-2"
							style="border-color: #d4cec4; background: #ffffff; color: #2a2018; font-family: 'DM Sans', sans-serif; --tw-ring-color: rgba(139, 46, 54, 0.3);"
						></textarea>
					</div>

					<!-- Note -->
					<p
						class="mt-4 text-center text-xs"
						style="color: #8a7e70; font-family: 'DM Sans', sans-serif;"
					>
						Someone from our team will email you within 48 hours. Your information is kept
						completely private.
					</p>

					<!-- Submit -->
					<div class="mt-6 text-center">
						<button
							type="submit"
							disabled={isSubmitting || !name || !email}
							class="inline-flex items-center gap-2 rounded-lg px-8 py-3 text-base font-medium transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
							style="background: #8b2e36; color: #faf2e3; font-family: 'DM Sans', sans-serif;"
						>
							{#if isSubmitting}
								Sending...
							{:else}
								Submit
								<ArrowRight class="h-5 w-5" />
							{/if}
						</button>
					</div>
				</form>
			{/if}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 3. FAQ ACCORDION               -->
<!-- ============================== -->
<section id="faq" class="py-16 md:py-24" style="background: #f0ebe3;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div class="mx-auto max-w-3xl">
			<div class="text-center">
				<h2
					class="text-3xl font-bold sm:text-4xl"
					style="font-family: 'Source Serif 4', serif; color: #2a2018;"
				>
					Common Questions
				</h2>
				<p
					class="mt-4 text-lg"
					style="font-family: 'DM Sans', sans-serif; color: #8a7e70;"
				>
					We hear these questions often from people exploring Islam. There are no wrong
					questions — and no judgment.
				</p>
			</div>

			<div
				class="mt-10 rounded-[10px] p-6 sm:p-8"
				style="background: #e9e3da;"
			>
				<Accordion.Accordion type="multiple">
					{#each faqs as faq, i}
						<Accordion.AccordionItem value="item-{i}">
							<Accordion.AccordionTrigger class="text-left text-base font-semibold" style="font-family: 'Source Serif 4', serif; color: #2a2018;">
								{#snippet children()}
									{faq.question}
								{/snippet}
							</Accordion.AccordionTrigger>
							<Accordion.AccordionContent>
								{#snippet children()}
									<p
										class="leading-relaxed text-sm"
										style="font-family: 'DM Sans', sans-serif; color: #8a7e70;"
									>
										{faq.answer}
									</p>
								{/snippet}
							</Accordion.AccordionContent>
						</Accordion.AccordionItem>
					{/each}
				</Accordion.Accordion>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- CLOSING CTA                    -->
<!-- ============================== -->
<section class="py-16 sm:py-20" style="background: #2a2018;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div class="mx-auto max-w-2xl text-center">
			<Heart class="mx-auto h-10 w-10" style="color: #c4a35a;" />
			<h2
				class="mt-6 text-3xl font-bold sm:text-4xl"
				style="font-family: 'Source Serif 4', serif; color: #faf2e3;"
			>
				Wherever you are on this path, you belong
			</h2>
			<p
				class="mt-4 text-lg leading-relaxed"
				style="font-family: 'DM Sans', sans-serif; color: rgba(250, 242, 227, 0.75);"
			>
				The Prophet Muhammad (peace be upon him) said: <em>"God is more merciful to His
				servants than a mother is to her child."</em> Whatever questions you carry,
				whatever doubts you hold — you are already taking a brave and beautiful step.
			</p>
			<div class="mt-8">
				<a
					href="#ready-form"
					class="inline-flex items-center gap-2 rounded-lg px-8 py-3 text-base font-medium transition-all hover:opacity-90"
					style="background: #8b2e36; color: #faf2e3; font-family: 'DM Sans', sans-serif;"
				>
					Reach Out to Us
					<ArrowRight class="h-5 w-5" />
				</a>
			</div>
		</div>
	</div>
</section>
