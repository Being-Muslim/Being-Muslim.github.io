<script lang="ts">
	import { base } from '$app/paths';
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
<!-- HERO — Light style             -->
<!-- ============================== -->
<section style="background: #faf9f5; padding: 100px 0 64px;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10" style="text-align: center;">
		<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #c8b8a0; text-transform: uppercase; letter-spacing: 1.5px;">
			Get Involved
		</span>
		<h1 style="font-family: 'Source Serif 4', serif; font-size: clamp(40px, 6vw, 64px); font-weight: 400; color: #2a2018; margin: 16px 0 0; line-height: 1.05;">
			Support the Mission
		</h1>
		<p style="font-family: 'DM Sans', sans-serif; font-size: 17px; color: #8a7e70; max-width: 600px; line-height: 1.65; margin: 20px auto 0;">
			Every new Muslim deserves access to beautiful, accurate resources. Whether you give, request
			materials for your community, or volunteer your time — you are part of this mission.
		</p>

		<!-- Anchor Nav -->
		<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 36px;">
			{#each sections as section}
				<button
					style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; padding: 10px 24px; border-radius: 999px; cursor: pointer; transition: all 0.2s; {activeSection === section.id
						? 'background: #2a2018; color: #fff; border: 1px solid #2a2018;'
						: 'background: transparent; color: #2a2018; border: 1px solid #d8d2c8;'}"
					onclick={() => scrollTo(section.id)}
				>
					{section.label}
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 1. DONATE                      -->
<!-- ============================== -->
<section id="donate" style="background: #f4f1eb; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="max-width: 720px; margin: 0 auto;">
			<div style="text-align: center;">
				<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #c8b8a0; text-transform: uppercase; letter-spacing: 1.5px;">
					Donate
				</span>
				<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #2a2018; margin: 12px 0 0; line-height: 1.15;">
					Support the Mission
				</h2>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; line-height: 1.6; margin: 14px auto 0; max-width: 560px;">
					Your generosity helps new Muslims access the resources they need to begin their journey
					with confidence. Every dollar makes a difference.
				</p>
			</div>

			<div style="margin-top: 40px; background: #faf9f5; border-radius: 16px; border: 1px solid #e2dcd2; padding: 32px;">
				<!-- Donation Category -->
				<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #8a7e70; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px;">
					What would you like to support?
				</p>
				<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
					{#each donationCategories as cat}
						{@const Icon = cat.icon}
						<button
							style="display: flex; flex-direction: column; align-items: center; padding: 20px 12px; border-radius: 12px; cursor: pointer; transition: all 0.2s; text-align: center; {donationCategory === cat.id
								? 'background: #2a2018; border: 1px solid #2a2018;'
								: 'background: transparent; border: 1px solid #d8d2c8;'}"
							onclick={() => {
								donationCategory = cat.id;
								if (cat.id === 'general') {
									selectedAmount = 50;
									customAmount = '';
								}
							}}
						>
							<div style="width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; {donationCategory === cat.id
								? 'background: rgba(200,184,160,0.2);'
								: 'background: #f4f1eb;'}">
								<Icon class="h-5 w-5" style="color: {donationCategory === cat.id ? '#c8b8a0' : '#8a7e70'};" />
							</div>
							<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; margin: 10px 0 0; color: {donationCategory === cat.id ? '#fff' : '#2a2018'};">
								{cat.label}
							</p>
							<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; margin: 4px 0 0; color: {donationCategory === cat.id ? 'rgba(255,255,255,0.6)' : '#8a7e70'};">
								{cat.description}
							</p>
						</button>
					{/each}
				</div>

				<div style="height: 1px; background: #e2dcd2; margin: 24px 0;"></div>

				<!-- General: preset amounts + custom -->
				{#if !isItemDonation}
					<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
						{#each presetAmounts as amount}
							<button
								style="font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 600; padding: 14px; border-radius: 10px; cursor: pointer; transition: all 0.2s; text-align: center; {selectedAmount === amount
									? 'background: #2a2018; color: #fff; border: 1px solid #2a2018;'
									: 'background: transparent; color: #2a2018; border: 1px solid #d8d2c8;'}"
								onclick={() => selectAmount(amount)}
							>
								${amount}
							</button>
						{/each}
					</div>

					<div style="margin-top: 16px; position: relative;">
						<span style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70;">$</span>
						<input
							type="number"
							placeholder="Custom amount"
							value={customAmount}
							oninput={handleCustomAmount}
							style="width: 100%; box-sizing: border-box; height: 48px; padding: 0 14px 0 30px; font-family: 'DM Sans', sans-serif; font-size: 15px; color: #2a2018; background: #fff; border: 1px solid {customAmount ? '#2a2018' : '#d8d2c8'}; border-radius: 10px; outline: none;"
						/>
					</div>
				{:else}
					<!-- Item donation: quantity selector -->
					{@const activeCat = donationCategories.find((c) => c.id === donationCategory)}
					<div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px;">
						<div>
							<p style="font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 400; color: #2a2018; margin: 0;">
								{activeCat?.label} &mdash; ${activeCat && 'unitCost' in activeCat ? activeCat.unitCost : 0} each
							</p>
							<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; margin: 4px 0 0;">
								Includes estimated shipping costs
							</p>
						</div>

						<div style="display: flex; align-items: center; gap: 16px;">
							<button
								style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 10px; border: 1px solid #d8d2c8; background: #fff; cursor: pointer; transition: all 0.2s;"
								onclick={() => adjustQuantity(-1)}
								disabled={itemQuantity <= 1}
							>
								<Minus class="h-4 w-4" style="color: #8a7e70;" />
							</button>
							<span style="font-family: 'Source Serif 4', serif; font-size: 24px; font-weight: 600; color: #2a2018; min-width: 48px; text-align: center;">
								{itemQuantity}
							</span>
							<button
								style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 10px; border: 1px solid #d8d2c8; background: #fff; cursor: pointer; transition: all 0.2s;"
								onclick={() => adjustQuantity(1)}
							>
								<Plus class="h-4 w-4" style="color: #8a7e70;" />
							</button>
						</div>
					</div>

					<div style="margin-top: 16px; background: #f4f1eb; border-radius: 10px; padding: 16px; text-align: center;">
						<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; margin: 0;">
							Your donation covers <strong style="color: #2a2018;">{itemQuantity} {activeCat?.label?.toLowerCase()}</strong>
							including shipping
						</p>
					</div>
				{/if}

				<!-- Total + CTA -->
				<div style="margin-top: 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px;">
					<div>
						<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; margin: 0;">Donation total</p>
						<p style="font-family: 'Source Serif 4', serif; font-size: 32px; font-weight: 600; color: #2a2018; margin: 4px 0 0;">
							${effectiveAmount > 0 ? effectiveAmount.toLocaleString() : '0'}
						</p>
					</div>
					<button
						class="bm-btn-dark"
						style="padding: 14px 32px; font-size: 15px; opacity: {!effectiveAmount || effectiveAmount <= 0 ? '0.5' : '1'}; pointer-events: {!effectiveAmount || effectiveAmount <= 0 ? 'none' : 'auto'};"
						disabled={!effectiveAmount || effectiveAmount <= 0}
					>
						{#if effectiveAmount && effectiveAmount > 0}
							Donate ${effectiveAmount.toLocaleString()}
						{:else}
							Select an amount
						{/if}
						<CreditCard class="h-4 w-4" />
					</button>
				</div>

				<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70; text-align: center; margin: 16px 0 0;">
					Secure payment processed via Stripe. All donations are tax-deductible. Tax ID: 82-1234567
				</p>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 2. REQUEST A DONATION          -->
<!-- ============================== -->
<section id="request" style="background: #faf9f5; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="max-width: 720px; margin: 0 auto;">
			<div style="text-align: center;">
				<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #c8b8a0; text-transform: uppercase; letter-spacing: 1.5px;">
					Request Resources
				</span>
				<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #2a2018; margin: 12px 0 0; line-height: 1.15;">
					Request a Donation
				</h2>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; line-height: 1.6; margin: 14px auto 0; max-width: 560px;">
					Are you a mosque, community center, or organization that serves new Muslims? We provide
					free Being Muslim resources to qualifying organizations.
				</p>
			</div>

			{#if requestSubmitted}
				<div style="margin-top: 40px; background: #f4f1eb; border-radius: 16px; border: 1px solid #e2dcd2; padding: 48px 32px; text-align: center;">
					<CheckCircle2 class="mx-auto h-14 w-14" style="color: #7a8b6e;" />
					<h3 style="font-family: 'Source Serif 4', serif; font-size: 24px; font-weight: 400; color: #2a2018; margin: 16px 0 0;">
						Request Submitted
					</h3>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; max-width: 400px; margin: 12px auto 0; line-height: 1.6;">
						Thank you for reaching out. Our team will review your request and get back to you
						within 5 business days.
					</p>
					<button
						class="bm-btn-outline"
						style="margin-top: 24px;"
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
						Submit Another Request
					</button>
				</div>
			{:else}
				<form style="margin-top: 40px; background: #f4f1eb; border-radius: 16px; border: 1px solid #e2dcd2; padding: 32px;" onsubmit={handleRequestSubmit}>
					<!-- Organization Info -->
					<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #8a7e70; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px;">
						Organization Information
					</p>
					<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
						<div>
							<label for="org-name" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px;">
								Organization Name <span style="color: #c0392b;">*</span>
							</label>
							<div style="position: relative;">
								<Building2 class="h-4 w-4" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #8a7e70;" />
								<input
									id="org-name"
									placeholder="Masjid Al-Noor"
									bind:value={requestForm.organizationName}
									required
									style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px 0 36px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none;"
								/>
							</div>
						</div>
						<div>
							<label for="contact-name" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px;">
								Contact Name <span style="color: #c0392b;">*</span>
							</label>
							<div style="position: relative;">
								<Users class="h-4 w-4" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #8a7e70;" />
								<input
									id="contact-name"
									placeholder="Ahmad Khan"
									bind:value={requestForm.contactName}
									required
									style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px 0 36px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none;"
								/>
							</div>
						</div>
						<div>
							<label for="email" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px;">
								Email <span style="color: #c0392b;">*</span>
							</label>
							<div style="position: relative;">
								<Mail class="h-4 w-4" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #8a7e70;" />
								<input
									id="email"
									type="email"
									placeholder="contact@masjid.org"
									bind:value={requestForm.email}
									required
									style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px 0 36px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none;"
								/>
							</div>
						</div>
						<div>
							<label for="phone" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px;">
								Phone
							</label>
							<div style="position: relative;">
								<Phone class="h-4 w-4" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #8a7e70;" />
								<input
									id="phone"
									type="tel"
									placeholder="(555) 123-4567"
									bind:value={requestForm.phone}
									style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px 0 36px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none;"
								/>
							</div>
						</div>
					</div>

					<div style="height: 1px; background: #e2dcd2; margin: 24px 0;"></div>

					<!-- Shipping Address -->
					<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #8a7e70; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px;">
						Shipping Address
					</p>
					<div style="display: grid; gap: 16px;">
						<div>
							<label for="address" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px;">
								Street Address
							</label>
							<div style="position: relative;">
								<MapPin class="h-4 w-4" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #8a7e70;" />
								<input
									id="address"
									placeholder="123 Main Street"
									bind:value={requestForm.address}
									style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px 0 36px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none;"
								/>
							</div>
						</div>
						<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
							<div>
								<label for="city" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px;">City</label>
								<input
									id="city"
									placeholder="Chicago"
									bind:value={requestForm.city}
									style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none;"
								/>
							</div>
							<div>
								<label for="state" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px;">State</label>
								<input
									id="state"
									placeholder="IL"
									bind:value={requestForm.state}
									style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none;"
								/>
							</div>
							<div>
								<label for="zip" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px;">ZIP</label>
								<input
									id="zip"
									placeholder="60601"
									bind:value={requestForm.zip}
									style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none;"
								/>
							</div>
						</div>
					</div>

					<div style="height: 1px; background: #e2dcd2; margin: 24px 0;"></div>

					<!-- Resources Needed -->
					<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #8a7e70; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px;">
						Resources Needed
					</p>
					<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
						<label
							style="display: flex; align-items: center; gap: 12px; padding: 16px; border-radius: 12px; cursor: pointer; transition: all 0.2s; {requestForm.resources.books
								? 'background: #2a2018; border: 1px solid #2a2018;'
								: 'background: transparent; border: 1px solid #d8d2c8;'}"
						>
							<input
								type="checkbox"
								bind:checked={requestForm.resources.books}
								style="width: 16px; height: 16px; accent-color: #c8b8a0; flex-shrink: 0;"
							/>
							<div>
								<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; margin: 0; color: {requestForm.resources.books ? '#fff' : '#2a2018'};">Books</p>
								<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; margin: 2px 0 0; color: {requestForm.resources.books ? 'rgba(255,255,255,0.6)' : '#8a7e70'};">Being Muslim book</p>
							</div>
						</label>
						<label
							style="display: flex; align-items: center; gap: 12px; padding: 16px; border-radius: 12px; cursor: pointer; transition: all 0.2s; {requestForm.resources.boxedSets
								? 'background: #2a2018; border: 1px solid #2a2018;'
								: 'background: transparent; border: 1px solid #d8d2c8;'}"
						>
							<input
								type="checkbox"
								bind:checked={requestForm.resources.boxedSets}
								style="width: 16px; height: 16px; accent-color: #c8b8a0; flex-shrink: 0;"
							/>
							<div>
								<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; margin: 0; color: {requestForm.resources.boxedSets ? '#fff' : '#2a2018'};">Boxed Sets</p>
								<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; margin: 2px 0 0; color: {requestForm.resources.boxedSets ? 'rgba(255,255,255,0.6)' : '#8a7e70'};">Book + prayer cards + guide</p>
							</div>
						</label>
						<label
							style="display: flex; align-items: center; gap: 12px; padding: 16px; border-radius: 12px; cursor: pointer; transition: all 0.2s; {requestForm.resources.prayerCards
								? 'background: #2a2018; border: 1px solid #2a2018;'
								: 'background: transparent; border: 1px solid #d8d2c8;'}"
						>
							<input
								type="checkbox"
								bind:checked={requestForm.resources.prayerCards}
								style="width: 16px; height: 16px; accent-color: #c8b8a0; flex-shrink: 0;"
							/>
							<div>
								<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; margin: 0; color: {requestForm.resources.prayerCards ? '#fff' : '#2a2018'};">Prayer Cards</p>
								<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; margin: 2px 0 0; color: {requestForm.resources.prayerCards ? 'rgba(255,255,255,0.6)' : '#8a7e70'};">Quick-reference prayer cards</p>
							</div>
						</label>
					</div>

					<div style="margin-top: 16px;">
						<label for="quantity" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px;">
							Approximate Quantity Needed
						</label>
						<input
							id="quantity"
							type="number"
							placeholder="e.g. 25"
							bind:value={requestForm.quantity}
							style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none;"
						/>
					</div>

					<div style="margin-top: 16px;">
						<label for="how-used" style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #2a2018; display: block; margin-bottom: 6px;">
							How will these resources be used?
						</label>
						<textarea
							id="how-used"
							bind:value={requestForm.howUsed}
							placeholder="Tell us about your community, how many new Muslims you serve, and how you plan to distribute the resources..."
							rows="4"
							style="width: 100%; box-sizing: border-box; padding: 12px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #2a2018; background: #fff; border: 1px solid #d8d2c8; border-radius: 10px; outline: none; resize: vertical; line-height: 1.6;"
						></textarea>
					</div>

					<button
						type="submit"
						class="bm-btn-dark"
						style="width: 100%; justify-content: center; margin-top: 24px; padding: 14px 28px; font-size: 15px;"
					>
						Submit Request
						<ClipboardList class="h-4 w-4" />
					</button>

					<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70; text-align: center; margin: 12px 0 0;">
						We review all requests within 5 business days. Priority is given to organizations
						actively serving new Muslims.
					</p>
				</form>
			{/if}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 3. VOLUNTEER                   -->
<!-- ============================== -->
<section id="volunteer" style="background: #f4f1eb; padding: 64px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="max-width: 900px; margin: 0 auto;">
			<div style="text-align: center;">
				<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #c8b8a0; text-transform: uppercase; letter-spacing: 1.5px;">
					Volunteer
				</span>
				<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #2a2018; margin: 12px 0 0; line-height: 1.15;">
					Give Your Time
				</h2>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70; line-height: 1.6; margin: 14px auto 0; max-width: 560px;">
					Our mission relies on dedicated volunteers who share a passion for empowering new Muslims.
					Whether you have a few hours a week or want to take on a bigger role, there is a place
					for you.
				</p>
			</div>

			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 48px;">
				{#each volunteerOpportunities as opp}
					{@const Icon = opp.icon}
					<div style="background: #faf9f5; border-radius: 14px; padding: 28px; transition: all 0.2s;" class="bm-card-hover">
						<div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center;">
							<Icon class="h-5 w-5" style="color: #c8b8a0;" />
						</div>
						<h3 style="font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 400; color: #2a2018; margin: 16px 0 0; line-height: 1.3;">
							{opp.title}
						</h3>
						<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; color: #8a7e70; line-height: 1.6; margin: 8px 0 0;">
							{opp.description}
						</p>
					</div>
				{/each}
			</div>

			<!-- CTA -->
			<div style="margin-top: 48px; background: #2a2018; border-radius: 16px; padding: 56px; display: flex; align-items: center; gap: 48px;">
				<div style="width: 64px; height: 64px; border-radius: 999px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
					<HandHeart class="h-8 w-8" style="color: #c8b8a0;" />
				</div>
				<div style="flex: 1;">
					<h3 style="font-family: 'Source Serif 4', serif; font-size: 24px; font-weight: 400; color: #fff; margin: 0 0 8px; line-height: 1.2;">
						Ready to make a difference?
					</h3>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: rgba(255,255,255,0.55); margin: 0; line-height: 1.6;">
						Fill out our volunteer interest form and we will match you with an opportunity that fits
						your skills, availability, and passions.
					</p>
				</div>
				<a href="{base}/c/contact?interest=volunteer" class="bm-btn-white" style="flex-shrink: 0; padding: 12px 28px;">
					Volunteer Interest Form <ArrowRight class="h-3.5 w-3.5" />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- FINAL CTA                      -->
<!-- ============================== -->
<section style="background: #2a2018; padding: 80px 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="max-width: 600px; margin: 0 auto; text-align: center;">
			<div style="width: 56px; height: 56px; border-radius: 999px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center; margin: 0 auto;">
				<Heart class="h-7 w-7" style="color: #c8b8a0;" />
			</div>
			<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #fff; margin: 24px 0 0; line-height: 1.15;">
				Every act of support matters
			</h2>
			<p style="font-family: 'DM Sans', sans-serif; font-size: 16px; color: rgba(255,255,255,0.55); line-height: 1.65; margin: 16px 0 0;">
				The Prophet Muhammad (peace be upon him) said: <em>"The best of people are those who
				are most beneficial to others."</em> Whether you donate, request resources for your
				community, or give your time — you are part of something bigger.
			</p>
			<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 36px;">
				<button
					class="bm-btn-white"
					onclick={() => scrollTo('donate')}
				>
					<Heart class="h-4 w-4" />
					Donate Now
				</button>
				<button
					class="bm-btn-glass"
					onclick={() => scrollTo('request')}
				>
					<ClipboardList class="h-4 w-4" />
					Request Resources
				</button>
			</div>
			<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: rgba(255,255,255,0.35); margin: 24px 0 0;">
				Being Muslim is a 501(c)(3) nonprofit. Tax ID: 82-1234567
			</p>
		</div>
	</div>
</section>
