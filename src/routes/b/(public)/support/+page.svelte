<script lang="ts">
	import { base } from '$app/paths';
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import {
		Heart,
		ArrowRight,
		BookOpen,
		Package,
		HandHeart,
		Users,
		Mail,
		Phone,
		MapPin,
		Building2,
		Minus,
		Plus,
		CreditCard,
		ClipboardList,
		CheckCircle2
	} from 'lucide-svelte';

	// ─── Anchor navigation ───
	const sections = [
		{ id: 'donate', label: 'Donate' },
		{ id: 'request', label: 'Request a Donation' },
		{ id: 'volunteer', label: 'Volunteer' }
	] as const;

	let activeSection = $state('donate');

	function scrollTo(id: string) {
		activeSection = id;
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	// ─── Donate section state ───
	type DonationCategory = 'general' | 'books' | 'boxed-sets';

	let donationCategory = $state<DonationCategory>('general');
	let itemQuantity = $state(1);
	let selectedAmount = $state<number | null>(50);
	let customAmount = $state('');

	const donationCategories = [
		{
			id: 'general' as DonationCategory,
			label: 'General',
			description: 'Support wherever needed most',
			icon: Heart
		},
		{
			id: 'books' as DonationCategory,
			label: 'Books',
			description: 'Fund a copy of Being Muslim',
			icon: BookOpen,
			unitCost: 25
		},
		{
			id: 'boxed-sets' as DonationCategory,
			label: 'Boxed Sets',
			description: 'Complete set with prayer cards',
			icon: Package,
			unitCost: 85
		}
	] as const;

	const presetAmounts = [25, 50, 85, 100];

	function selectAmount(amount: number) {
		selectedAmount = amount;
		customAmount = '';
	}

	function handleCustomAmount(e: Event) {
		const target = e.target as HTMLInputElement;
		customAmount = target.value;
		selectedAmount = null;
	}

	function adjustQuantity(delta: number) {
		itemQuantity = Math.max(1, Math.min(100, itemQuantity + delta));
	}

	let effectiveAmount = $derived(
		donationCategory === 'general'
			? selectedAmount ?? (customAmount ? parseFloat(customAmount) : 0)
			: (donationCategories.find((c) => c.id === donationCategory) as { unitCost: number })
					.unitCost * itemQuantity
	);

	let isItemDonation = $derived(donationCategory !== 'general');

	// ─── Request form state ───
	let requestForm = $state({
		organizationName: '',
		contactName: '',
		email: '',
		phone: '',
		address: '',
		city: '',
		state: '',
		zip: '',
		resources: {
			books: false,
			boxedSets: false,
			prayerCards: false
		},
		quantity: '',
		howUsed: ''
	});

	let requestSubmitted = $state(false);

	function handleRequestSubmit(e: Event) {
		e.preventDefault();
		// In production this would POST to an API
		requestSubmitted = true;
	}

	// ─── Volunteer ───
	const volunteerOpportunities = [
		{
			title: 'Content Translation',
			description:
				'Help translate Being Muslim resources into other languages so we can reach more communities worldwide.',
			icon: BookOpen
		},
		{
			title: 'Mentorship Program',
			description:
				'Become a mentor for new Muslims in your area. Share your knowledge, answer questions, and provide support.',
			icon: Users
		},
		{
			title: 'Community Outreach',
			description:
				'Help us connect with mosques, community centers, and organizations that serve new Muslims.',
			icon: HandHeart
		},
		{
			title: 'Event Support',
			description:
				'Assist with organizing and running workshops, seminars, and community events in your city.',
			icon: Building2
		}
	] as const;
</script>

<svelte:head>
	<title>Support — Donate, Request Resources & Volunteer | Being Muslim</title>
	<meta
		name="description"
		content="Support the Being Muslim mission. Donate to fund resources for new Muslims, request free materials for your mosque or organization, or volunteer your time."
	/>
</svelte:head>

<!-- ============================== -->
<!-- HERO                           -->
<!-- ============================== -->
<section class="relative flex min-h-[50vh] items-center overflow-hidden bg-bg-dark">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-[0.03]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo-support" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path
						d="M30 0L60 30L30 60L0 30Z"
						fill="none"
						stroke="currentColor"
						stroke-width="0.5"
						class="text-text-cream"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo-support)" />
		</svg>
	</div>

	<div class="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-gold/5"></div>

	<div class="relative mx-auto max-w-[1280px] px-4 py-28 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<Badge variant="gold">
				{#snippet children()}Get Involved{/snippet}
			</Badge>
			<h1 class="mt-6 font-display text-4xl font-bold leading-tight text-text-cream sm:text-5xl lg:text-6xl">
				Support the
				<span class="text-accent-gold">Mission</span>
			</h1>
			<p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-cream/80 sm:text-xl">
				Every new Muslim deserves access to beautiful, accurate resources. Whether you give, request
				materials for your community, or volunteer your time — you are part of this mission.
			</p>

			<!-- Anchor Nav -->
			<div class="mt-10 flex flex-wrap justify-center gap-3">
				{#each sections as section}
					<button
						class="rounded-full border px-5 py-2 text-sm font-medium transition-all {activeSection === section.id
							? 'border-accent-gold bg-accent-gold/20 text-accent-gold'
							: 'border-text-cream/20 text-text-cream/70 hover:border-text-cream/40 hover:text-text-cream'}"
						onclick={() => scrollTo(section.id)}
					>
						{section.label}
					</button>
				{/each}
			</div>
		</div>
	</div>

	<div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent"></div>
</section>

<!-- ============================== -->
<!-- 1. DONATE                      -->
<!-- ============================== -->
<Section id="donate">
	<div class="mx-auto max-w-3xl">
		<div class="text-center">
			<Badge variant="gold">
				{#snippet children()}Donate{/snippet}
			</Badge>
			<h2 class="mt-4 font-display text-3xl font-bold sm:text-4xl">Support the Mission</h2>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
				Your generosity helps new Muslims access the resources they need to begin their journey
				with confidence. Every dollar makes a difference — whether it funds a single book or an
				entire boxed set.
			</p>
		</div>

		<div class="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8">
			<!-- Donation Category -->
			<p class="mb-4 text-sm font-semibold uppercase tracking-wider text-text-secondary">
				What would you like to support?
			</p>
			<div class="grid gap-3 sm:grid-cols-3">
				{#each donationCategories as cat}
					{@const Icon = cat.icon}
					<button
						class="flex flex-col items-center rounded-xl border-2 p-5 text-center transition-all {donationCategory === cat.id
							? 'border-accent-primary bg-accent-primary/5 shadow-sm'
							: 'border-border bg-surface hover:border-accent-primary/40'}"
						onclick={() => {
							donationCategory = cat.id;
							if (cat.id === 'general') {
								selectedAmount = 50;
								customAmount = '';
							}
						}}
					>
						<div
							class="flex h-11 w-11 items-center justify-center rounded-xl {donationCategory === cat.id
								? 'bg-accent-primary/15'
								: 'bg-secondary'}"
						>
							<Icon
								class="h-5 w-5 {donationCategory === cat.id
									? 'text-accent-primary'
									: 'text-text-secondary'}"
							/>
						</div>
						<p class="mt-3 font-display text-sm font-semibold">{cat.label}</p>
						<p class="mt-1 text-xs text-text-secondary">{cat.description}</p>
					</button>
				{/each}
			</div>

			<Separator class="my-6" />

			<!-- General: preset amounts + custom -->
			{#if !isItemDonation}
				<div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
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

				<div class="mt-4">
					<div class="relative">
						<span class="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">$</span>
						<Input
							type="number"
							placeholder="Custom amount"
							value={customAmount}
							oninput={handleCustomAmount}
							class="h-12 pl-7 text-lg {customAmount
								? 'border-accent-primary ring-1 ring-accent-primary/20'
								: ''}"
						/>
					</div>
				</div>
			{:else}
				<!-- Item donation: quantity selector -->
				{@const activeCat = donationCategories.find((c) => c.id === donationCategory)}
				<div class="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
					<div>
						<p class="font-display text-lg font-semibold">
							{activeCat?.label} &mdash; ${activeCat && 'unitCost' in activeCat ? activeCat.unitCost : 0} each
						</p>
						<p class="mt-1 text-sm text-text-secondary">
							Includes estimated shipping costs
						</p>
					</div>

					<div class="flex items-center gap-4">
						<button
							class="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface transition-colors hover:bg-secondary"
							onclick={() => adjustQuantity(-1)}
							disabled={itemQuantity <= 1}
						>
							<Minus class="h-4 w-4 text-text-secondary" />
						</button>
						<span class="min-w-[3rem] text-center font-display text-2xl font-bold">
							{itemQuantity}
						</span>
						<button
							class="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface transition-colors hover:bg-secondary"
							onclick={() => adjustQuantity(1)}
						>
							<Plus class="h-4 w-4 text-text-secondary" />
						</button>
					</div>
				</div>

				<div class="mt-4 rounded-lg bg-secondary/60 p-4 text-center">
					<p class="text-sm text-text-secondary">
						Your donation covers <strong class="text-text-primary">{itemQuantity} {activeCat?.label?.toLowerCase()}</strong>
						including shipping
					</p>
				</div>
			{/if}

			<!-- Total + CTA -->
			<div class="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
				<div>
					<p class="text-sm text-text-secondary">Donation total</p>
					<p class="font-display text-3xl font-bold text-accent-primary">
						${effectiveAmount > 0 ? effectiveAmount.toLocaleString() : '0'}
					</p>
				</div>
				<Button
					size="lg"
					class="w-full bg-accent-primary text-text-cream hover:bg-accent-hover sm:w-auto"
					disabled={!effectiveAmount || effectiveAmount <= 0}
				>
					{#snippet children()}
						{#if effectiveAmount && effectiveAmount > 0}
							Donate ${effectiveAmount.toLocaleString()}
						{:else}
							Select an amount
						{/if}
						<CreditCard class="ml-2 h-5 w-5" />
					{/snippet}
				</Button>
			</div>

			<p class="mt-4 text-center text-xs text-text-secondary">
				Secure payment processed via Stripe. All donations are tax-deductible. Tax ID: 82-1234567
			</p>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 2. REQUEST A DONATION          -->
<!-- ============================== -->
<Section id="request" class="bg-secondary/50">
	<div class="mx-auto max-w-3xl">
		<div class="text-center">
			<Badge variant="gold">
				{#snippet children()}Request Resources{/snippet}
			</Badge>
			<h2 class="mt-4 font-display text-3xl font-bold sm:text-4xl">
				Request a Donation
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
				Are you a mosque, community center, or organization that serves new Muslims? We provide
				free Being Muslim resources to qualifying organizations. Fill out the form below and our
				team will be in touch.
			</p>
		</div>

		{#if requestSubmitted}
			<div class="mt-10 rounded-2xl border border-accent-green/30 bg-accent-green/5 p-8 text-center sm:p-12">
				<CheckCircle2 class="mx-auto h-14 w-14 text-accent-green" />
				<h3 class="mt-4 font-display text-2xl font-bold">Request Submitted</h3>
				<p class="mx-auto mt-3 max-w-md text-text-secondary">
					Thank you for reaching out. Our team will review your request and get back to you
					within 5 business days.
				</p>
				<Button
					variant="outline"
					class="mt-6"
					onclick={() => {
						requestSubmitted = false;
						requestForm = {
							organizationName: '',
							contactName: '',
							email: '',
							phone: '',
							address: '',
							city: '',
							state: '',
							zip: '',
							resources: { books: false, boxedSets: false, prayerCards: false },
							quantity: '',
							howUsed: ''
						};
					}}
				>
					{#snippet children()}Submit Another Request{/snippet}
				</Button>
			</div>
		{:else}
			<form class="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8" onsubmit={handleRequestSubmit}>
				<!-- Organization Info -->
				<p class="mb-4 text-sm font-semibold uppercase tracking-wider text-text-secondary">
					Organization Information
				</p>
				<div class="grid gap-4 sm:grid-cols-2">
					<div>
						<label for="org-name" class="mb-1.5 block text-sm font-medium">
							Organization Name <span class="text-red-500">*</span>
						</label>
						<div class="relative">
							<Building2 class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
							<Input
								id="org-name"
								placeholder="Masjid Al-Noor"
								bind:value={requestForm.organizationName}
								required
								class="pl-10"
							/>
						</div>
					</div>
					<div>
						<label for="contact-name" class="mb-1.5 block text-sm font-medium">
							Contact Name <span class="text-red-500">*</span>
						</label>
						<div class="relative">
							<Users class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
							<Input
								id="contact-name"
								placeholder="Ahmad Khan"
								bind:value={requestForm.contactName}
								required
								class="pl-10"
							/>
						</div>
					</div>
					<div>
						<label for="email" class="mb-1.5 block text-sm font-medium">
							Email <span class="text-red-500">*</span>
						</label>
						<div class="relative">
							<Mail class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
							<Input
								id="email"
								type="email"
								placeholder="contact@masjid.org"
								bind:value={requestForm.email}
								required
								class="pl-10"
							/>
						</div>
					</div>
					<div>
						<label for="phone" class="mb-1.5 block text-sm font-medium">
							Phone
						</label>
						<div class="relative">
							<Phone class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
							<Input
								id="phone"
								type="tel"
								placeholder="(555) 123-4567"
								bind:value={requestForm.phone}
								class="pl-10"
							/>
						</div>
					</div>
				</div>

				<Separator class="my-6" />

				<!-- Shipping Address -->
				<p class="mb-4 text-sm font-semibold uppercase tracking-wider text-text-secondary">
					Shipping Address
				</p>
				<div class="grid gap-4">
					<div>
						<label for="address" class="mb-1.5 block text-sm font-medium">
							Street Address
						</label>
						<div class="relative">
							<MapPin class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
							<Input
								id="address"
								placeholder="123 Main Street"
								bind:value={requestForm.address}
								class="pl-10"
							/>
						</div>
					</div>
					<div class="grid gap-4 sm:grid-cols-3">
						<div>
							<label for="city" class="mb-1.5 block text-sm font-medium">City</label>
							<Input id="city" placeholder="Chicago" bind:value={requestForm.city} />
						</div>
						<div>
							<label for="state" class="mb-1.5 block text-sm font-medium">State</label>
							<Input id="state" placeholder="IL" bind:value={requestForm.state} />
						</div>
						<div>
							<label for="zip" class="mb-1.5 block text-sm font-medium">ZIP</label>
							<Input id="zip" placeholder="60601" bind:value={requestForm.zip} />
						</div>
					</div>
				</div>

				<Separator class="my-6" />

				<!-- Resources Needed -->
				<p class="mb-4 text-sm font-semibold uppercase tracking-wider text-text-secondary">
					Resources Needed
				</p>
				<div class="grid gap-3 sm:grid-cols-3">
					<label
						class="flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all {requestForm.resources.books
							? 'border-accent-primary bg-accent-primary/5'
							: 'border-border hover:border-accent-primary/40'}"
					>
						<input
							type="checkbox"
							bind:checked={requestForm.resources.books}
							class="h-4 w-4 rounded border-border text-accent-primary accent-accent-primary"
						/>
						<div>
							<p class="text-sm font-semibold">Books</p>
							<p class="text-xs text-text-secondary">Being Muslim book</p>
						</div>
					</label>
					<label
						class="flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all {requestForm.resources.boxedSets
							? 'border-accent-primary bg-accent-primary/5'
							: 'border-border hover:border-accent-primary/40'}"
					>
						<input
							type="checkbox"
							bind:checked={requestForm.resources.boxedSets}
							class="h-4 w-4 rounded border-border text-accent-primary accent-accent-primary"
						/>
						<div>
							<p class="text-sm font-semibold">Boxed Sets</p>
							<p class="text-xs text-text-secondary">Book + prayer cards + guide</p>
						</div>
					</label>
					<label
						class="flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all {requestForm.resources.prayerCards
							? 'border-accent-primary bg-accent-primary/5'
							: 'border-border hover:border-accent-primary/40'}"
					>
						<input
							type="checkbox"
							bind:checked={requestForm.resources.prayerCards}
							class="h-4 w-4 rounded border-border text-accent-primary accent-accent-primary"
						/>
						<div>
							<p class="text-sm font-semibold">Prayer Cards</p>
							<p class="text-xs text-text-secondary">Quick-reference prayer cards</p>
						</div>
					</label>
				</div>

				<div class="mt-4">
					<label for="quantity" class="mb-1.5 block text-sm font-medium">
						Approximate Quantity Needed
					</label>
					<Input
						id="quantity"
						type="number"
						placeholder="e.g. 25"
						bind:value={requestForm.quantity}
					/>
				</div>

				<div class="mt-4">
					<label for="how-used" class="mb-1.5 block text-sm font-medium">
						How will these resources be used?
					</label>
					<textarea
						id="how-used"
						bind:value={requestForm.howUsed}
						placeholder="Tell us about your community, how many new Muslims you serve, and how you plan to distribute the resources..."
						rows="4"
						class="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary/20"
					></textarea>
				</div>

				<Button
					type="submit"
					size="lg"
					class="mt-6 w-full bg-accent-primary text-text-cream hover:bg-accent-hover"
				>
					{#snippet children()}
						Submit Request
						<ClipboardList class="ml-2 h-5 w-5" />
					{/snippet}
				</Button>

				<p class="mt-3 text-center text-xs text-text-secondary">
					We review all requests within 5 business days. Priority is given to organizations
					actively serving new Muslims.
				</p>
			</form>
		{/if}
	</div>
</Section>

<!-- ============================== -->
<!-- 3. VOLUNTEER                   -->
<!-- ============================== -->
<Section id="volunteer">
	<div class="mx-auto max-w-4xl">
		<div class="text-center">
			<Badge variant="gold">
				{#snippet children()}Volunteer{/snippet}
			</Badge>
			<h2 class="mt-4 font-display text-3xl font-bold sm:text-4xl">
				Give Your Time
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
				Our mission relies on dedicated volunteers who share a passion for empowering new Muslims.
				Whether you have a few hours a week or want to take on a bigger role, there is a place
				for you.
			</p>
		</div>

		<div class="mt-12 grid gap-6 sm:grid-cols-2">
			{#each volunteerOpportunities as opp}
				{@const Icon = opp.icon}
				<div class="rounded-xl border border-border bg-surface p-6 transition-all hover:shadow-lg">
					<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-primary/10">
						<Icon class="h-6 w-6 text-accent-primary" />
					</div>
					<h3 class="mt-4 font-display text-lg font-semibold">{opp.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-text-secondary">{opp.description}</p>
				</div>
			{/each}
		</div>

		<!-- CTA -->
		<div class="mt-12 rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
			<HandHeart class="mx-auto h-12 w-12 text-accent-gold" />
			<h3 class="mt-4 font-display text-2xl font-bold">Ready to make a difference?</h3>
			<p class="mx-auto mt-3 max-w-lg text-text-secondary">
				Fill out our volunteer interest form and we will match you with an opportunity that fits
				your skills, availability, and passions.
			</p>
			<a href="{base}/b/contact?interest=volunteer">
				<Button size="lg" class="mt-6 bg-accent-primary text-text-cream hover:bg-accent-hover">
					{#snippet children()}
						Volunteer Interest Form
						<ArrowRight class="ml-2 h-5 w-5" />
					{/snippet}
				</Button>
			</a>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- FINAL CTA                      -->
<!-- ============================== -->
<section class="bg-bg-dark py-16 sm:py-24">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<Heart class="mx-auto h-12 w-12 text-accent-gold" />
			<h2 class="mt-6 font-display text-3xl font-bold text-text-cream sm:text-4xl">
				Every act of support matters
			</h2>
			<p class="mt-4 text-lg leading-relaxed text-text-cream/80">
				The Prophet Muhammad (peace be upon him) said: <em>"The best of people are those who
				are most beneficial to others."</em> Whether you donate, request resources for your
				community, or give your time — you are part of something bigger.
			</p>
			<div class="mt-10 flex flex-wrap justify-center gap-4">
				<button
					class="inline-flex items-center gap-2 rounded-lg bg-accent-primary px-6 py-3 font-medium text-text-cream transition-colors hover:bg-accent-hover"
					onclick={() => scrollTo('donate')}
				>
					<Heart class="h-5 w-5" />
					Donate Now
				</button>
				<button
					class="inline-flex items-center gap-2 rounded-lg border border-text-cream/30 px-6 py-3 font-medium text-text-cream transition-colors hover:bg-white/10"
					onclick={() => scrollTo('request')}
				>
					<ClipboardList class="h-5 w-5" />
					Request Resources
				</button>
			</div>
			<p class="mt-6 text-sm text-text-cream/50">
				Being Muslim is a 501(c)(3) nonprofit. Tax ID: 82-1234567
			</p>
		</div>
	</div>
</section>
