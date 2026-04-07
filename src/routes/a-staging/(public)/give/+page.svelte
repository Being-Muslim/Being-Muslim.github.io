<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import { sponsorshipTiers, donationStats, testimonials } from '$lib/data/mock.js';
	import {
		Heart,
		ArrowRight,
		BookOpen,
		Globe,
		Users,
		Repeat,
		Package,
		GraduationCap,
		HandHeart,
		Settings,
		Quote,
		ChevronDown
	} from 'lucide-svelte';

	// Custom donation state
	let isMonthly = $state(false);
	let selectedAmount = $state<number | null>(50);
	let customAmount = $state('');

	const presetAmounts = [25, 50, 100, 250];

	function selectAmount(amount: number) {
		selectedAmount = amount;
		customAmount = '';
	}

	function handleCustomAmount(e: Event) {
		const target = e.target as HTMLInputElement;
		customAmount = target.value;
		selectedAmount = null;
	}

	let effectiveAmount = $derived(
		selectedAmount ?? (customAmount ? parseFloat(customAmount) : 0)
	);

	// Mock donors
	const recentDonors = [
		{ name: 'Sarah M.', amount: 85, message: 'For my sister who just took her shahada.', anonymous: false },
		{ name: 'Anonymous', amount: 400, message: 'May Allah bless every recipient.', anonymous: true },
		{ name: 'Ahmad K.', amount: 750, message: 'For the community center in my city.', anonymous: false },
		{ name: 'Fatima L.', amount: 50, message: 'Small contribution, big dua.', anonymous: false },
		{ name: 'Anonymous', amount: 85, message: '', anonymous: true },
		{ name: 'Omar T.', amount: 100, message: 'In honor of my mother.', anonymous: false },
		{ name: 'Khadija R.', amount: 400, message: 'Equipping the next generation.', anonymous: false },
		{ name: 'Yusuf A.', amount: 250, message: 'Knowledge is the best sadaqah.', anonymous: false },
		{ name: 'Anonymous', amount: 85, message: 'JazakAllah khair for this program.', anonymous: true },
		{ name: 'Maryam H.', amount: 50, message: 'Monthly supporter since 2023!', anonymous: false }
	] as const;

	// Allocation breakdown
	const allocationData = [
		{ label: 'Materials & Shipping', percentage: 70, color: 'bg-accent-primary' },
		{ label: 'Education Programs', percentage: 15, color: 'bg-accent-gold' },
		{ label: 'Community Support', percentage: 10, color: 'bg-accent-green' },
		{ label: 'Operations', percentage: 5, color: 'bg-text-secondary' }
	] as const;

	// FAQ data
	const faqs = [
		{
			question: 'Is my donation tax-deductible?',
			answer: 'Yes. Being Muslim is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law. You will receive a receipt via email for your records.'
		},
		{
			question: 'How are recipients selected?',
			answer: 'We work with mosques, community centers, chaplains, and convert support organizations worldwide. Recipients are identified by community leaders who know their congregation members\' needs. Priority is given to new Muslims who lack access to resources.'
		},
		{
			question: 'Can I sponsor for a specific community or mosque?',
			answer: 'Absolutely. If you have a specific mosque, community center, or organization in mind, reach out to us at give@beingmuslim.com and we will coordinate directly with them to deliver sponsored boxed sets.'
		},
		{
			question: 'What is included in a sponsored boxed set?',
			answer: 'Each sponsored boxed set includes the Being Muslim book, a set of prayer reference cards, a quick-reference guide, and a welcome letter. Everything is packaged in a beautifully designed gift box that makes recipients feel valued and supported.'
		},
		{
			question: 'Can I cancel my monthly donation?',
			answer: 'Yes, you can cancel your monthly donation at any time with no questions asked. Simply email us at give@beingmuslim.com or use the link in your donation confirmation email. We are grateful for every month of support.'
		}
	] as const;
</script>

<svelte:head>
	<title>Give — Support New Muslims with the Gift of Knowledge | Being Muslim</title>
	<meta
		name="description"
		content="Sponsor a Being Muslim boxed set for a new Muslim in need. Your donation puts essential resources into the hands of those beginning their Islamic journey."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. HERO                        -->
<!-- ============================== -->
<section class="relative flex min-h-[70vh] items-center overflow-hidden bg-bg-dark">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-[0.03]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo-give" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path
						d="M30 0L60 30L30 60L0 30Z"
						fill="none"
						stroke="currentColor"
						stroke-width="0.5"
						class="text-text-cream"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo-give)" />
		</svg>
	</div>

	<!-- Warm gradient overlay -->
	<div class="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-gold/5"></div>

	<div class="relative mx-auto max-w-[1280px] px-4 py-32 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<div class="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-text-cream/80">
				<Heart class="h-4 w-4 text-accent-gold" />
				<span>{donationStats.totalSponsored.toLocaleString()} boxed sets sponsored and counting</span>
			</div>

			<h1 class="font-display text-4xl font-bold leading-tight text-text-cream sm:text-5xl lg:text-6xl">
				Change a life with the
				<span class="text-accent-gold">gift of knowledge</span>
			</h1>

			<p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-cream/80 sm:text-xl">
				When someone embraces Islam, they deserve more than just a handshake. A sponsored Being Muslim
				boxed set gives new Muslims the resources, guidance, and encouragement they need to begin
				their journey with confidence.
			</p>

			<div class="mt-10 flex flex-wrap justify-center gap-4">
				<Button size="lg" class="bg-accent-primary text-text-cream hover:bg-accent-hover">
					{#snippet children()}
						Sponsor a Boxed Set
						<Heart class="ml-1 h-5 w-5" />
					{/snippet}
				</Button>
				<Button
					variant="outline"
					size="lg"
					class="border-text-cream/30 text-text-cream hover:bg-white/10 hover:text-text-cream"
				>
					{#snippet children()}
						Learn How It Works
						<ArrowRight class="ml-1 h-5 w-5" />
					{/snippet}
				</Button>
			</div>
		</div>
	</div>

	<div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent"></div>
</section>

<!-- ============================== -->
<!-- 2. IMPACT STORY                -->
<!-- ============================== -->
<Section narrow>
	<div class="rounded-2xl border border-border bg-surface p-8 sm:p-12">
		<div class="flex items-start gap-4">
			<div class="hidden shrink-0 sm:block">
				<Quote class="h-10 w-10 text-accent-gold/40" />
			</div>
			<div>
				<p class="font-display text-lg leading-relaxed text-text-primary sm:text-xl">
					When Sarah took her shahada at her local mosque, she was filled with joy — and uncertainty.
					She had no Muslim family, no books, and no idea how to pray. The imam handed her a Being Muslim
					boxed set, sponsored by a stranger across the country. That night, she opened the box and found
					not just a book, but a companion for her journey.
				</p>
				<p class="mt-4 text-base leading-relaxed text-text-secondary">
					Three months later, Sarah prays five times a day with confidence. The prayer cards sit beside
					her prayer mat. She has read the book twice. She says it felt like receiving a letter from
					someone who truly understood.
				</p>
				<div class="mt-6 border-l-4 border-accent-gold pl-4">
					<p class="font-display text-base italic text-text-primary">
						"That boxed set told me I was seen, I was valued, and I wasn't alone. Whoever sponsored it
						— may Allah reward them endlessly."
					</p>
					<p class="mt-2 text-sm font-medium text-text-secondary">— Sarah M., Chicago, IL</p>
				</div>
			</div>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 3. IMPACT COUNTER              -->
<!-- ============================== -->
<section class="bg-bg-dark py-12">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-2 gap-8 sm:grid-cols-4">
			<div class="text-center">
				<div class="flex items-center justify-center gap-2">
					<Package class="h-6 w-6 text-accent-gold" />
				</div>
				<p class="mt-2 font-display text-3xl font-bold text-accent-gold sm:text-4xl lg:text-5xl">
					{donationStats.totalSponsored.toLocaleString()}
				</p>
				<p class="mt-1 text-sm text-text-cream/70">Boxed Sets Sponsored</p>
			</div>
			<div class="text-center">
				<div class="flex items-center justify-center gap-2">
					<Users class="h-6 w-6 text-accent-gold" />
				</div>
				<p class="mt-2 font-display text-3xl font-bold text-accent-gold sm:text-4xl lg:text-5xl">
					{donationStats.communitiesReached}
				</p>
				<p class="mt-1 text-sm text-text-cream/70">Communities Reached</p>
			</div>
			<div class="text-center">
				<div class="flex items-center justify-center gap-2">
					<Globe class="h-6 w-6 text-accent-gold" />
				</div>
				<p class="mt-2 font-display text-3xl font-bold text-accent-gold sm:text-4xl lg:text-5xl">
					{donationStats.countriesReached}
				</p>
				<p class="mt-1 text-sm text-text-cream/70">Countries Reached</p>
			</div>
			<div class="text-center">
				<div class="flex items-center justify-center gap-2">
					<Repeat class="h-6 w-6 text-accent-gold" />
				</div>
				<p class="mt-2 font-display text-3xl font-bold text-accent-gold sm:text-4xl lg:text-5xl">
					{donationStats.monthlyDonors}
				</p>
				<p class="mt-1 text-sm text-text-cream/70">Monthly Donors</p>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 4. SPONSORSHIP TIERS           -->
<!-- ============================== -->
<Section>
	<div class="text-center">
		<Badge variant="gold">
			{#snippet children()}Sponsorship Tiers{/snippet}
		</Badge>
		<h2 class="mt-4 font-display text-3xl font-bold sm:text-4xl">
			Choose how you want to give
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
			Every sponsored boxed set includes the Being Muslim book, prayer reference cards,
			a quick-reference guide, and a heartfelt welcome letter.
		</p>
	</div>

	<div class="mt-12 grid gap-6 sm:grid-cols-3">
		{#each sponsorshipTiers as rawTier}
			{@const tier = rawTier as { name: string; price: number; description: string; impact: string; popular?: boolean }}
			<div
				class="relative flex flex-col rounded-xl border bg-surface p-8 transition-all hover:shadow-lg {tier.popular
					? 'border-accent-primary ring-2 ring-accent-primary/20 shadow-lg'
					: 'border-border'}"
			>
				{#if tier.popular}
					<div class="absolute -top-3 left-1/2 -translate-x-1/2">
						<Badge variant="default">
							{#snippet children()}Most Popular{/snippet}
						</Badge>
					</div>
				{/if}
				<h3 class="font-display text-xl font-semibold">{tier.name}</h3>
				<p class="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{tier.description}</p>
				<p class="mt-6 font-display text-4xl font-bold text-accent-primary">
					${tier.price}
				</p>
				<p class="mt-2 flex items-center gap-1.5 text-sm text-accent-green">
					<Heart class="h-3.5 w-3.5" />
					{tier.impact}
				</p>
				<Button variant={tier.popular ? 'default' : 'outline'} size="lg" class="mt-6 w-full">
					{#snippet children()}
						Sponsor Now
						<Heart class="ml-1 h-4 w-4" />
					{/snippet}
				</Button>
			</div>
		{/each}
	</div>
</Section>

<!-- ============================== -->
<!-- 5. CUSTOM DONATION             -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<div class="mx-auto max-w-2xl">
		<div class="text-center">
			<h2 class="font-display text-3xl font-bold sm:text-4xl">Give any amount</h2>
			<p class="mt-4 text-lg text-text-secondary">
				Every dollar counts. Choose a preset amount or enter your own.
			</p>
		</div>

		<div class="mt-10 rounded-2xl border border-border bg-surface p-8">
			<!-- One-time / Monthly Toggle -->
			<div class="flex justify-center">
				<div class="inline-flex rounded-lg border border-border bg-secondary p-1">
					<button
						class="rounded-md px-6 py-2 text-sm font-medium transition-all {!isMonthly
							? 'bg-surface text-text-primary shadow-sm'
							: 'text-text-secondary hover:text-text-primary'}"
						onclick={() => (isMonthly = false)}
					>
						One-time
					</button>
					<button
						class="rounded-md px-6 py-2 text-sm font-medium transition-all {isMonthly
							? 'bg-surface text-text-primary shadow-sm'
							: 'text-text-secondary hover:text-text-primary'}"
						onclick={() => (isMonthly = true)}
					>
						Monthly
					</button>
				</div>
			</div>

			{#if isMonthly}
				<p class="mt-3 text-center text-xs text-accent-green">
					Monthly donors provide consistent support that helps us plan ahead and reach more communities.
				</p>
			{/if}

			<!-- Preset Amounts -->
			<div class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
				{#each presetAmounts as amount}
					<button
						class="rounded-lg border-2 px-4 py-3 text-center font-display text-lg font-semibold transition-all {selectedAmount === amount
							? 'border-accent-primary bg-accent-primary/5 text-accent-primary'
							: 'border-border bg-surface text-text-primary hover:border-accent-primary/40'}"
						onclick={() => selectAmount(amount)}
					>
						${amount}
					</button>
				{/each}
			</div>

			<!-- Custom Amount -->
			<div class="mt-4">
				<div class="relative">
					<span class="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">$</span>
					<Input
						type="number"
						placeholder="Custom amount"
						value={customAmount}
						oninput={handleCustomAmount}
						class="h-12 pl-7 text-lg {customAmount ? 'border-accent-primary ring-1 ring-accent-primary/20' : ''}"
					/>
				</div>
			</div>

			<!-- Donate Button -->
			<Button
				size="lg"
				class="mt-6 w-full bg-accent-primary text-text-cream hover:bg-accent-hover"
				disabled={!effectiveAmount || effectiveAmount <= 0}
			>
				{#snippet children()}
					{#if effectiveAmount && effectiveAmount > 0}
						Donate ${effectiveAmount}{isMonthly ? '/month' : ''}
					{:else}
						Select an amount
					{/if}
					<Heart class="ml-2 h-5 w-5" />
				{/snippet}
			</Button>

			<p class="mt-4 text-center text-xs text-text-secondary">
				Secure payment processed via Stripe. All donations are tax-deductible.
			</p>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 6. WHERE DONATIONS GO          -->
<!-- ============================== -->
<Section>
	<div class="mx-auto max-w-3xl">
		<div class="text-center">
			<Badge variant="green">
				{#snippet children()}Full Transparency{/snippet}
			</Badge>
			<h2 class="mt-4 font-display text-3xl font-bold sm:text-4xl">
				Where your donation goes
			</h2>
			<p class="mt-4 text-lg text-text-secondary">
				We believe in complete transparency. Here is exactly how every dollar is allocated.
			</p>
		</div>

		<!-- Segmented Bar -->
		<div class="mt-10">
			<div class="flex h-8 w-full overflow-hidden rounded-full">
				{#each allocationData as segment}
					<div
						class="{segment.color} flex items-center justify-center transition-all"
						style="width: {segment.percentage}%"
					>
						{#if segment.percentage >= 15}
							<span class="text-xs font-semibold text-white">{segment.percentage}%</span>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Legend -->
			<div class="mt-8 grid gap-4 sm:grid-cols-2">
				{#each allocationData as segment}
					{@const icons = {
						'Materials & Shipping': Package,
						'Education Programs': GraduationCap,
						'Community Support': HandHeart,
						'Operations': Settings
					}}
					{@const Icon = icons[segment.label as keyof typeof icons]}
					<div class="flex items-start gap-3 rounded-lg border border-border bg-surface p-4">
						<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg {segment.color}/10">
							<Icon class="h-5 w-5 {segment.color === 'bg-accent-primary' ? 'text-accent-primary' : segment.color === 'bg-accent-gold' ? 'text-accent-gold' : segment.color === 'bg-accent-green' ? 'text-accent-green' : 'text-text-secondary'}" />
						</div>
						<div>
							<div class="flex items-center gap-2">
								<div class="h-3 w-3 rounded-full {segment.color}"></div>
								<p class="font-medium">{segment.label}</p>
							</div>
							<p class="mt-0.5 text-2xl font-bold font-display text-text-primary">{segment.percentage}%</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 7. DONOR WALL                  -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<div class="text-center">
		<h2 class="font-display text-3xl font-bold sm:text-4xl">Recent Supporters</h2>
		<p class="mt-4 text-lg text-text-secondary">
			Join these generous souls who are helping new Muslims begin their journey.
		</p>
	</div>

	<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each recentDonors as donor}
			<div class="rounded-xl border border-border bg-surface p-5 transition-all hover:shadow-md">
				<div class="flex items-center gap-3">
					<div
						class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full {donor.anonymous
							? 'bg-text-secondary/10 text-text-secondary'
							: 'bg-accent-primary/10 text-accent-primary'} font-semibold"
					>
						{#if donor.anonymous}
							<Heart class="h-4 w-4" />
						{:else}
							{donor.name[0]}
						{/if}
					</div>
					<div class="flex-1">
						<p class="font-medium {donor.anonymous ? 'text-text-secondary italic' : 'text-text-primary'}">
							{donor.name}
						</p>
						<p class="text-sm font-semibold text-accent-primary">${donor.amount}</p>
					</div>
				</div>
				{#if donor.message}
					<p class="mt-3 text-sm leading-relaxed text-text-secondary">"{donor.message}"</p>
				{/if}
			</div>
		{/each}
	</div>
</Section>

<!-- ============================== -->
<!-- 8. FAQ                         -->
<!-- ============================== -->
<Section narrow>
	<div class="text-center">
		<h2 class="font-display text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
		<p class="mt-4 text-lg text-text-secondary">
			Everything you need to know about donating and sponsoring.
		</p>
	</div>

	<div class="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8">
		<Accordion.Accordion type="multiple">
			{#each faqs as faq, i}
				<Accordion.AccordionItem value="item-{i}">
					<Accordion.AccordionTrigger class="text-left font-display text-base font-semibold">
						{#snippet children()}
							{faq.question}
						{/snippet}
					</Accordion.AccordionTrigger>
					<Accordion.AccordionContent>
						{#snippet children()}
							<p class="leading-relaxed text-text-secondary">
								{faq.answer}
							</p>
						{/snippet}
					</Accordion.AccordionContent>
				</Accordion.AccordionItem>
			{/each}
		</Accordion.Accordion>
	</div>
</Section>

<!-- ============================== -->
<!-- 9. FINAL CTA                   -->
<!-- ============================== -->
<section class="bg-bg-dark py-16 sm:py-24">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<Heart class="mx-auto h-12 w-12 text-accent-gold" />
			<h2 class="mt-6 font-display text-3xl font-bold text-text-cream sm:text-4xl">
				Every gift is a seed planted
			</h2>
			<p class="mt-4 text-lg leading-relaxed text-text-cream/80">
				The Prophet Muhammad (peace be upon him) said: <em>"The best of people are those who
				are most beneficial to others."</em> Your donation does not just send a book — it tells
				someone that their journey matters.
			</p>
			<div class="mt-10 flex flex-wrap justify-center gap-4">
				<Button size="lg" class="bg-accent-primary text-text-cream hover:bg-accent-hover">
					{#snippet children()}
						Sponsor a Boxed Set
						<Heart class="ml-1 h-5 w-5" />
					{/snippet}
				</Button>
				<Button
					variant="outline"
					size="lg"
					class="border-text-cream/30 text-text-cream hover:bg-white/10 hover:text-text-cream"
				>
					{#snippet children()}
						Share This Page
						<ArrowRight class="ml-1 h-5 w-5" />
					{/snippet}
				</Button>
			</div>
			<p class="mt-6 text-sm text-text-cream/50">
				Being Muslim is a 501(c)(3) nonprofit. Tax ID: 82-1234567
			</p>
		</div>
	</div>
</section>
