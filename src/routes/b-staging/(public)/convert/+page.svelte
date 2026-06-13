<script lang="ts">
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

	// FAQ toggle state
	let openFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

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
<!-- 1. HERO — LIGHT STYLE          -->
<!-- ============================== -->
<section style="background: #faf9f5; padding: 100px 0 64px;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="max-width: 680px; margin: 0 auto; text-align: center;">
			<div style="display: inline-flex; align-items: center; gap: 8px; background: #f4f1eb; border-radius: 999px; padding: 6px 16px; margin-bottom: 24px;">
				<Heart class="h-4 w-4" style="color: #c8b8a0;" />
				<span style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #8a7e70;">You are welcome here</span>
			</div>

			<h1 style="font-family: 'Source Serif 4', serif; font-size: clamp(40px, 6vw, 64px); font-weight: 400; color: #2a2018; margin: 0 0 16px; line-height: 1.05;">
				Your Journey to Islam
			</h1>

			<p style="font-family: 'DM Sans', sans-serif; font-size: 17px; color: #8a7e70; max-width: 540px; line-height: 1.65; margin: 0 auto 40px;">
				Whether you have been exploring Islam for years or are just beginning to wonder, there is
				no rush and no pressure. This is a deeply personal journey, and we are honored to walk it
				with you — at whatever pace feels right.
			</p>

			<div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
				<a href="#ready-form" class="bm-btn-dark" style="padding: 12px 28px;">
					I'm Ready to Connect <ArrowRight class="h-3.5 w-3.5" />
				</a>
				<a href="#faq" class="bm-btn-outline" style="padding: 12px 28px;">
					I Have Questions <ChevronDown class="h-3.5 w-3.5" />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- KEY POINTS — WHAT ISLAM OFFERS -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #f4f1eb;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="text-align: center; margin-bottom: 40px;">
			<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 8px;">
				What draws people to Islam
			</h2>
			<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; max-width: 540px; margin: 0 auto; line-height: 1.6;">
				Every person's path is unique, but these are some of the things that resonate most deeply
				with those exploring the faith.
			</p>
		</div>

		<div class="bm-grid-4">
			{#each keyPoints as point}
				{@const Icon = point.icon}
				<div style="background: #faf9f5; border-radius: 12px; padding: 28px;">
					<div style="width: 44px; height: 44px; border-radius: 10px; background: rgba(200,184,160,0.25); display: flex; align-items: center; justify-content: center;">
						<Icon class="h-5 w-5" style="color: #c8b8a0;" />
					</div>
					<h3 style="font-family: 'Source Serif 4', serif; font-size: 17px; font-weight: 400; color: #2a2018; margin: 16px 0 8px; line-height: 1.3;">
						{point.title}
					</h3>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; line-height: 1.6; margin: 0;">
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
<section id="ready-form" class="bm-section-padding" style="background: #faf9f5;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="max-width: 680px; margin: 0 auto;">
			<div style="text-align: center; margin-bottom: 40px;">
				<div style="display: inline-flex; align-items: center; gap: 8px; background: #f4f1eb; border-radius: 999px; padding: 6px 16px; margin-bottom: 16px;">
					<Send class="h-4 w-4" style="color: #c8b8a0;" />
					<span style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #8a7e70;">Take the next step</span>
				</div>
				<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 8px;">
					Ready to connect?
				</h2>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; line-height: 1.6; margin: 0;">
					Fill out the form below and someone from our team will email you within 48 hours.
					There is absolutely no obligation — we are simply here to help.
				</p>
			</div>

			{#if isSubmitted}
				<!-- Success State -->
				<div style="background: #f4f1eb; border-radius: 12px; padding: 48px 32px; text-align: center;">
					<div style="width: 56px; height: 56px; border-radius: 999px; background: rgba(45, 106, 79, 0.1); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
						<Heart class="h-7 w-7" style="color: #2d6a4f;" />
					</div>
					<h3 style="font-family: 'Source Serif 4', serif; font-size: 24px; font-weight: 400; color: #2a2018; margin: 0 0 10px;">
						Thank you for reaching out
					</h3>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; line-height: 1.6; margin: 0; max-width: 420px; margin: 0 auto;">
						We have received your information and someone from our team will be in touch within
						48 hours. In the meantime, feel free to explore our resources and articles.
					</p>
				</div>
			{:else}
				<!-- Form -->
				<form
					style="background: #f4f1eb; border-radius: 12px; padding: 32px;"
					onsubmit={handleSubmit}
				>
					<!-- Name & Email -->
					<div class="bm-grid-stats">
						<div>
							<label
								for="convert-name"
								style="display: flex; align-items: center; gap: 6px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; margin-bottom: 6px;"
							>
								<User class="h-3.5 w-3.5" style="color: #8a7e70;" />
								Name <span style="color: #c8b8a0;">*</span>
							</label>
							<input
								id="convert-name"
								type="text"
								required
								bind:value={name}
								placeholder="Your full name"
								style="width: 100%; border: 1px solid #d8d2c8; border-radius: 8px; padding: 10px 14px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; outline: none; box-sizing: border-box;"
							/>
						</div>
						<div>
							<label
								for="convert-email"
								style="display: flex; align-items: center; gap: 6px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; margin-bottom: 6px;"
							>
								<Mail class="h-3.5 w-3.5" style="color: #8a7e70;" />
								Email <span style="color: #c8b8a0;">*</span>
							</label>
							<input
								id="convert-email"
								type="email"
								required
								bind:value={email}
								placeholder="you@example.com"
								style="width: 100%; border: 1px solid #d8d2c8; border-radius: 8px; padding: 10px 14px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; outline: none; box-sizing: border-box;"
							/>
						</div>
					</div>

					<!-- Phone & Location -->
					<div class="bm-grid-3" style="gap: 16px; margin-top: 16px;">
						<div>
							<label
								for="convert-phone"
								style="display: flex; align-items: center; gap: 6px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; margin-bottom: 6px;"
							>
								<Phone class="h-3.5 w-3.5" style="color: #8a7e70;" />
								Phone <span style="font-size: 12px; color: #8a7e70; font-weight: 400;">(optional)</span>
							</label>
							<input
								id="convert-phone"
								type="tel"
								bind:value={phone}
								placeholder="(555) 123-4567"
								style="width: 100%; border: 1px solid #d8d2c8; border-radius: 8px; padding: 10px 14px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; outline: none; box-sizing: border-box;"
							/>
						</div>
						<div>
							<label
								for="convert-city"
								style="display: flex; align-items: center; gap: 6px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; margin-bottom: 6px;"
							>
								<MapPin class="h-3.5 w-3.5" style="color: #8a7e70;" />
								City
							</label>
							<input
								id="convert-city"
								type="text"
								bind:value={city}
								placeholder="Your city"
								style="width: 100%; border: 1px solid #d8d2c8; border-radius: 8px; padding: 10px 14px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; outline: none; box-sizing: border-box;"
							/>
						</div>
						<div>
							<label
								for="convert-state"
								style="display: flex; align-items: center; gap: 6px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; margin-bottom: 6px;"
							>
								<span style="width: 14px;"></span>
								State
							</label>
							<input
								id="convert-state"
								type="text"
								bind:value={stateField}
								placeholder="Your state"
								style="width: 100%; border: 1px solid #d8d2c8; border-radius: 8px; padding: 10px 14px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; outline: none; box-sizing: border-box;"
							/>
						</div>
					</div>

					<!-- Background Selection -->
					<div style="margin-top: 24px;">
						<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; margin: 0 0 10px;">
							Which best describes where you are right now?
						</p>
						<div style="display: flex; flex-direction: column; gap: 8px;">
							{#each backgroundOptions as option}
								<label
									style="display: flex; align-items: flex-start; gap: 10px; border: 1px solid {selectedBackground === option ? '#2a2018' : '#d8d2c8'}; border-radius: 8px; padding: 12px 14px; cursor: pointer; background: {selectedBackground === option ? 'rgba(42,32,24,0.03)' : '#fff'}; transition: all 0.15s;"
								>
									<input
										type="radio"
										name="background"
										value={option}
										bind:group={selectedBackground}
										style="margin-top: 2px; accent-color: #2a2018;"
									/>
									<span style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; line-height: 1.5;">
										{option}
									</span>
								</label>
							{/each}
						</div>
					</div>

					<!-- Additional Info -->
					<div style="margin-top: 24px;">
						<label
							for="convert-info"
							style="display: flex; align-items: center; gap: 6px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; margin-bottom: 6px;"
						>
							<MessageSquare class="h-3.5 w-3.5" style="color: #8a7e70;" />
							Is there anything else you would like to share?
						</label>
						<textarea
							id="convert-info"
							bind:value={additionalInfo}
							rows={4}
							placeholder="Feel free to share anything on your mind — questions, concerns, or just a bit about your journey so far..."
							style="width: 100%; border: 1px solid #d8d2c8; border-radius: 8px; padding: 10px 14px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; outline: none; resize: vertical; box-sizing: border-box;"
						></textarea>
					</div>

					<!-- Note -->
					<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70; text-align: center; margin: 16px 0 0;">
						Someone from our team will email you within 48 hours. Your information is kept
						completely private.
					</p>

					<!-- Submit -->
					<div style="text-align: center; margin-top: 20px;">
						<button
							type="submit"
							disabled={isSubmitting || !name || !email}
							class="bm-btn-dark"
							style="padding: 12px 32px; opacity: {isSubmitting || !name || !email ? '0.5' : '1'}; cursor: {isSubmitting || !name || !email ? 'not-allowed' : 'pointer'};"
						>
							{#if isSubmitting}
								Sending...
							{:else}
								Submit <ArrowRight class="h-3.5 w-3.5" />
							{/if}
						</button>
					</div>
				</form>
			{/if}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 3. FAQ — BUTTON + IF TOGGLE    -->
<!-- ============================== -->
<section id="faq" class="bm-section-padding" style="background: #f4f1eb;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="max-width: 800px; margin: 0 auto;">
			<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); line-height: 1.15; color: #2a2018; font-weight: 400; margin: 0 0 8px; text-align: center;">
				Common Questions
			</h2>
			<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; text-align: center; margin: 0 0 32px; line-height: 1.6;">
				We hear these questions often from people exploring Islam. There are no wrong
				questions — and no judgment.
			</p>

			{#each faqs as faq, i}
				<button
					onclick={() => toggleFaq(i)}
					style="width: 100%; text-align: left; padding: 20px 0; border: none; border-top: 1px solid #e8e3da; background: none; cursor: pointer; display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;"
				>
					<span style="font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500; color: #2a2018; line-height: 1.4;">{faq.question}</span>
					<ChevronDown class="h-4 w-4 flex-shrink-0 mt-1 transition-transform duration-200 {openFaq === i ? 'rotate-180' : ''}" style="color: #8a7e70;" />
				</button>
				{#if openFaq === i}
					<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; line-height: 1.6; margin: 0 0 20px; padding-right: 40px;">{faq.answer}</p>
				{/if}
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- CLOSING CTA                    -->
<!-- ============================== -->
<section style="background: #f4f1eb; padding: 0 0 64px;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="background: #2a2018; border-radius: 16px; padding: 56px; display: flex; align-items: center; gap: 48px;">
			<div style="width: 64px; height: 64px; border-radius: 999px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
				<Heart class="h-8 w-8" style="color: #c8b8a0;" />
			</div>
			<div style="flex: 1;">
				<h2 style="font-family: 'Source Serif 4', serif; font-size: 28px; font-weight: 400; color: #fff; margin: 0 0 8px; line-height: 1.2;">
					Wherever you are on this path, you belong
				</h2>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: rgba(255,255,255,0.55); margin: 0; line-height: 1.6;">
					The Prophet Muhammad (peace be upon him) said: <em>"God is more merciful to His
					servants than a mother is to her child."</em> Whatever questions you carry,
					whatever doubts you hold — you are already taking a brave and beautiful step.
				</p>
			</div>
			<a href="#ready-form" class="bm-btn-white" style="flex-shrink: 0; padding: 12px 28px;">
				Reach Out to Us <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</section>
