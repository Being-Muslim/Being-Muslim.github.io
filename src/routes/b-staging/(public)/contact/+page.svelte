<script lang="ts">
	import {
		Star,
		BookOpen,
		Mic,
		CalendarDays,
		Briefcase,
		Send,
		Mail,
		ArrowRight,
		Menu,
		X
	} from 'lucide-svelte';

	// Form state
	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');
	let formSubmitting = $state(false);
	let formSuccess = $state(false);

	// Newsletter state
	let newsletterName = $state('');
	let newsletterEmail = $state('');
	let newsletterSubmitting = $state(false);
	let newsletterSuccess = $state(false);

	const subjectOptions = [
		'Questions about Islam',
		'Donation Request',
		'Order Support',
		'Speaking Requests',
		'Volunteer With Us',
		'Other'
	] as const;

	const speakerOfferings = [
		{
			icon: Mic,
			title: 'Speaker Request',
			description:
				'Dr. Asad Tarsin is available for speaking engagements at mosques, universities, conferences, and community events. Topics include new Muslim support, Islamic education methodology, and building welcoming communities.'
		},
		{
			icon: CalendarDays,
			title: 'Weekend Intensive',
			description:
				'Book an immersive weekend learning experience for your community. These programs cover the essentials of faith and practice in a supportive, interactive format designed for diverse audiences.'
		},
		{
			icon: Briefcase,
			title: 'Consulting and Training',
			description:
				'We offer consulting for mosques, organizations, and educators looking to improve their convert support programs, educational offerings, and community outreach strategies.'
		}
	] as const;

	async function handleContactSubmit(e: Event) {
		e.preventDefault();
		formSubmitting = true;
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1200));
		formSubmitting = false;
		formSuccess = true;
		firstName = '';
		lastName = '';
		email = '';
		subject = '';
		message = '';
	}

	async function handleNewsletterSubmit(e: Event) {
		e.preventDefault();
		newsletterSubmitting = true;
		await new Promise((resolve) => setTimeout(resolve, 800));
		newsletterSubmitting = false;
		newsletterSuccess = true;
		newsletterName = '';
		newsletterEmail = '';
	}
</script>

<svelte:head>
	<title>Contact — Being Muslim</title>
	<meta
		name="description"
		content="Get in touch with the Being Muslim team. Inquire about speaking engagements, weekend intensives, consulting, or reach out with any questions."
	/>
</svelte:head>

<div style="font-family: 'DM Sans', sans-serif; color: #2a2018;">
	<!-- ===== ABOUT US SECTION ===== -->
	<section class="pt-28 pb-20 lg:pt-36 lg:pb-24" style="background: #faf9f5;">
		<div class="max-w-[1400px] mx-auto px-6 lg:px-10">
			<!-- Section label -->
			<div class="flex items-center gap-2 mb-6">
				<Star class="w-3.5 h-3.5 text-[#2a2018]" />
				<span
					class="text-[12px] font-medium text-[#2a2018] uppercase tracking-[0.12em]"
					>About Us</span
				>
			</div>

			<div class="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20">
				<!-- Left: Story -->
				<div>
					<h1
						class="text-[36px] md:text-[48px] leading-[1.1] mb-6"
						style="font-family: 'Source Serif 4', serif;"
					>
						The Being Muslim
						<span class="italic" style="color: #2a2018;">Project</span>
					</h1>

					<p class="text-[15px] leading-[1.75] mb-5" style="color: #8a7e70;">
						The Being Muslim Project was founded following a 2006 conversion, born from a
						deeply personal recognition: there was a significant gap in beginner-friendly
						Islamic resources. Too many new Muslims were left to navigate their faith
						alone, with materials that were either too academic, too narrow, or simply
						unwelcoming.
					</p>

					<p class="text-[15px] leading-[1.75] mb-5" style="color: #8a7e70;">
						Created by <strong style="color: #2a2018;">Dr. Asad Tarsin</strong> — physician,
						educator, and author — Being Muslim exists to empower converts and beginner Muslims
						through practical, compassionate education. Dr. Tarsin envisioned resources that
						felt like a conversation with a trusted friend: comprehensive yet accessible, scholarly
						yet warm.
					</p>

					<p class="text-[15px] leading-[1.75]" style="color: #8a7e70;">
						Our mission is to ensure that every person who embraces Islam has access to
						the knowledge, guidance, and community they need to practice their faith with
						confidence and joy.
					</p>
				</div>

				<!-- Right: Impact Stats -->
				<div class="flex flex-col justify-center">
					<h3
						class="text-[22px] mb-8"
						style="font-family: 'Source Serif 4', serif;"
					>
						Our Impact
					</h3>

					<div class="space-y-0">
						{#each [
							{ value: '10,000+', label: 'Books distributed worldwide' },
							{ value: '50+', label: 'Countries reached' },
							{ value: '500+', label: 'Communities and mosques served' },
							{ value: '1,000+', label: 'Hours of classes and programs delivered' }
						] as stat}
							<div
								class="flex items-center justify-between py-4"
								style="border-bottom: 1px solid #d8d2c8;"
							>
								<span
									class="text-[28px] font-bold tracking-tight"
									style="font-family: 'Source Serif 4', serif;"
									>{stat.value}</span
								>
								<span class="text-[13px]" style="color: #8a7e70;"
									>{stat.label}</span
								>
							</div>
						{/each}
					</div>

					<p class="mt-8 text-[14px] leading-[1.7]" style="color: #8a7e70;">
						From grassroots work across the United States to international programs,
						Being Muslim has grown through classes, weekend intensives, books, videos,
						and a growing digital platform — all built on the belief that good education
						transforms lives.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- ===== SPEAKER REQUESTS SECTION ===== -->
	<section class="py-20 lg:py-24 bg-white">
		<div class="max-w-[1400px] mx-auto px-6 lg:px-10">
			<!-- Section label -->
			<div class="flex items-center gap-2 mb-6">
				<Star class="w-3.5 h-3.5 text-[#2a2018]" />
				<span
					class="text-[12px] font-medium text-[#2a2018] uppercase tracking-[0.12em]"
					>Speaker Requests</span
				>
			</div>

			<div class="grid lg:grid-cols-2 gap-6 mb-12">
				<h2
					class="text-[36px] md:text-[44px] leading-[1.12]"
					style="font-family: 'Source Serif 4', serif;"
				>
					Bring Being Muslim
					<span class="italic" style="color: #2a2018;">to Your Community</span>
				</h2>
				<p
					class="text-[14px] leading-[1.7] lg:pt-3 self-end"
					style="color: #8a7e70;"
				>
					We offer a range of speaking and educational programs designed to inspire,
					educate, and build stronger communities. Reach out to learn more about
					availability and scheduling.
				</p>
			</div>

			<!-- Offering Cards -->
			<div class="grid md:grid-cols-3 gap-5">
				{#each speakerOfferings as offering}
					<div
						class="p-7 transition-all hover:shadow-lg"
						style="background: #f4f1eb; border-radius: 10px;"
					>
						<div
							class="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
							style="background: #2a2018;"
						>
							<offering.icon class="w-5 h-5 text-white" />
						</div>
						<h3
							class="text-[18px] font-semibold mb-3"
							style="font-family: 'Source Serif 4', serif;"
						>
							{offering.title}
						</h3>
						<p
							class="text-[13px] leading-[1.7] mb-6"
							style="color: #8a7e70;"
						>
							{offering.description}
						</p>
						<a
							href="#contact-form"
							class="inline-flex items-center gap-2 px-6 py-2.5 text-white text-[13px] font-medium rounded-full hover:opacity-90 transition-opacity"
							style="background: #2a2018;"
						>
							Inquire
							<ArrowRight class="w-3.5 h-3.5" />
						</a>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ===== CONTACT FORM SECTION ===== -->
	<section id="contact-form" class="py-20 lg:py-24" style="background: #faf9f5;">
		<div class="max-w-[1400px] mx-auto px-6 lg:px-10">
			<div class="max-w-[780px] mx-auto">
				<!-- Section label -->
				<div class="flex items-center gap-2 mb-6">
					<Star class="w-3.5 h-3.5 text-[#2a2018]" />
					<span
						class="text-[12px] font-medium text-[#2a2018] uppercase tracking-[0.12em]"
						>Contact</span
					>
				</div>

				<h2
					class="text-[36px] md:text-[44px] leading-[1.12] mb-4"
					style="font-family: 'Source Serif 4', serif;"
				>
					Get in Touch
				</h2>
				<p class="text-[15px] leading-[1.7] mb-10" style="color: #8a7e70;">
					Reach out to us with any questions and our dedicated team of volunteers
					will respond as soon as possible.
				</p>

				<!-- Contact Form -->
				{#if formSuccess}
					<div
						class="p-8 text-center mb-10"
						style="background: #f4f1eb; border-radius: 10px;"
					>
						<div
							class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
							style="background: #2a2018;"
						>
							<Send class="w-6 h-6 text-white" />
						</div>
						<h3
							class="text-[20px] font-semibold mb-2"
							style="font-family: 'Source Serif 4', serif;"
						>
							Message Sent!
						</h3>
						<p class="text-[14px]" style="color: #8a7e70;">
							Thank you for reaching out. Our team will get back to you as soon
							as possible.
						</p>
						<button
							class="mt-5 text-[13px] font-medium underline underline-offset-4 hover:opacity-70 transition-opacity cursor-pointer"
							style="color: #2a2018;"
							onclick={() => (formSuccess = false)}
						>
							Send another message
						</button>
					</div>
				{:else}
					<form onsubmit={handleContactSubmit} class="space-y-5">
						<!-- Name row -->
						<div class="grid sm:grid-cols-2 gap-5">
							<div>
								<label
									for="firstName"
									class="block text-[13px] font-medium mb-2"
									>First Name</label
								>
								<input
									type="text"
									id="firstName"
									bind:value={firstName}
									placeholder="Your first name"
									class="w-full px-4 py-3 bg-white text-[14px] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow"
									style="border: 1px solid #d8d2c8; border-radius: 8px;"
								/>
							</div>
							<div>
								<label
									for="lastName"
									class="block text-[13px] font-medium mb-2"
									>Last Name</label
								>
								<input
									type="text"
									id="lastName"
									bind:value={lastName}
									placeholder="Your last name"
									class="w-full px-4 py-3 bg-white text-[14px] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow"
									style="border: 1px solid #d8d2c8; border-radius: 8px;"
								/>
							</div>
						</div>

						<!-- Email -->
						<div>
							<label for="email" class="block text-[13px] font-medium mb-2"
								>Email <span style="color: #c0392b;">*</span></label
							>
							<input
								type="email"
								id="email"
								bind:value={email}
								required
								placeholder="you@example.com"
								class="w-full px-4 py-3 bg-white text-[14px] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow"
								style="border: 1px solid #d8d2c8; border-radius: 8px;"
							/>
						</div>

						<!-- Subject -->
						<div>
							<label
								for="subject"
								class="block text-[13px] font-medium mb-2"
								>Subject <span style="color: #c0392b;">*</span></label
							>
							<select
								id="subject"
								bind:value={subject}
								required
								class="w-full px-4 py-3 bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow appearance-none cursor-pointer"
								style="border: 1px solid #d8d2c8; border-radius: 8px; color: {subject ? '#2a2018' : '#a8a29e'};"
							>
								<option value="" disabled>Select a subject</option>
								{#each subjectOptions as option}
									<option value={option}>{option}</option>
								{/each}
							</select>
						</div>

						<!-- Message -->
						<div>
							<label
								for="message"
								class="block text-[13px] font-medium mb-2"
								>Message <span style="color: #c0392b;">*</span></label
							>
							<textarea
								id="message"
								bind:value={message}
								required
								rows="5"
								placeholder="Tell us how we can help..."
								class="w-full px-4 py-3 bg-white text-[14px] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow resize-y"
								style="border: 1px solid #d8d2c8; border-radius: 8px;"
							></textarea>
						</div>

						<!-- Submit -->
						<button
							type="submit"
							disabled={formSubmitting}
							class="inline-flex items-center gap-2 px-8 py-3 text-white text-[14px] font-medium rounded-full hover:opacity-90 transition-opacity disabled:opacity-60 cursor-pointer"
							style="background: #2a2018;"
						>
							{#if formSubmitting}
								<span
									class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
								></span>
								Sending...
							{:else}
								Send Message
								<Send class="w-4 h-4" />
							{/if}
						</button>
					</form>
				{/if}

				<!-- Divider -->
				<div class="my-14 flex items-center gap-4">
					<div class="flex-1 h-px" style="background: #d8d2c8;"></div>
					<span class="text-[12px] uppercase tracking-[0.1em]" style="color: #8a7e70;"
						>Or</span
					>
					<div class="flex-1 h-px" style="background: #d8d2c8;"></div>
				</div>

				<!-- Newsletter Signup -->
				<div
					class="p-8 md:p-10"
					style="background: #f4f1eb; border-radius: 10px;"
				>
					<div class="flex items-center gap-3 mb-4">
						<div
							class="w-10 h-10 rounded-full flex items-center justify-center"
							style="background: #2a2018;"
						>
							<Mail class="w-4 h-4 text-white" />
						</div>
						<h3
							class="text-[20px]"
							style="font-family: 'Source Serif 4', serif;"
						>
							Stay Connected
						</h3>
					</div>
					<p class="text-[14px] leading-[1.7] mb-6" style="color: #8a7e70;">
						Subscribe to our newsletter for updates on new resources, community
						events, and inspiring stories from fellow Muslims on their journey.
					</p>

					{#if newsletterSuccess}
						<div class="text-center py-4">
							<p class="text-[14px] font-medium" style="color: #2a2018;">
								You are subscribed! Welcome to the Being Muslim community.
							</p>
						</div>
					{:else}
						<form
							onsubmit={handleNewsletterSubmit}
							class="flex flex-col sm:flex-row gap-3"
						>
							<input
								type="text"
								bind:value={newsletterName}
								placeholder="Your name"
								class="flex-1 px-4 py-3 bg-white text-[14px] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow"
								style="border: 1px solid #d8d2c8; border-radius: 8px;"
							/>
							<input
								type="email"
								bind:value={newsletterEmail}
								required
								placeholder="Your email"
								class="flex-1 px-4 py-3 bg-white text-[14px] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2a2018]/30 transition-shadow"
								style="border: 1px solid #d8d2c8; border-radius: 8px;"
							/>
							<button
								type="submit"
								disabled={newsletterSubmitting}
								class="px-6 py-3 text-white text-[13px] font-medium rounded-full hover:opacity-90 transition-opacity disabled:opacity-60 cursor-pointer whitespace-nowrap"
								style="background: #2a2018;"
							>
								{#if newsletterSubmitting}
									Subscribing...
								{:else}
									Subscribe
								{/if}
							</button>
						</form>
					{/if}
				</div>
			</div>
		</div>
	</section>
</div>
