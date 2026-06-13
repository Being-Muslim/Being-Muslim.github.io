<script lang="ts">
	import { withPrefix } from '$lib/data/utils';
	import { Heart, Gift, Repeat, Calendar, ArrowRight } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/a-staging', href);

	const donations = [
		{
			id: 'DON-456',
			date: '2026-02-01',
			amount: 85,
			type: 'Sponsor 1 Boxed Set',
			recurring: false
		},
		{
			id: 'DON-412',
			date: '2026-01-15',
			amount: 50,
			type: 'Custom Donation',
			recurring: true
		},
		{
			id: 'DON-389',
			date: '2025-12-20',
			amount: 400,
			type: 'Sponsor 5 Boxed Sets',
			recurring: false
		}
	];

	const totalDonated = donations.reduce((sum, d) => sum + d.amount, 0);
	const boxesSponsored = 6;
</script>

<svelte:head>
	<title>Donations - Being Muslim</title>
</svelte:head>

<div>
	<h1 class="font-display text-2xl font-bold">Donation <span class="highlight">History</span></h1>
	<p class="mono mt-2 text-text-secondary">TRACK YOUR CONTRIBUTIONS AND IMPACT</p>

	<!-- Summary Stats -->
	<div class="mt-8 grid grid-cols-3 gap-0 border-[3px] border-border">
		<div class="border-r-[3px] border-border p-4 text-center">
			<Heart class="mx-auto h-5 w-5 text-accent-primary" />
			<p class="mt-2 font-display text-2xl font-bold">${totalDonated}</p>
			<p class="mono text-text-secondary">TOTAL DONATED</p>
		</div>
		<div class="border-r-[3px] border-border p-4 text-center">
			<Gift class="mx-auto h-5 w-5 text-accent-primary" />
			<p class="mt-2 font-display text-2xl font-bold">{boxesSponsored}</p>
			<p class="mono text-text-secondary">SETS SPONSORED</p>
		</div>
		<div class="p-4 text-center">
			<Repeat class="mx-auto h-5 w-5 text-accent-primary" />
			<p class="mt-2 font-display text-2xl font-bold">$50/mo</p>
			<p class="mono text-text-secondary">RECURRING</p>
		</div>
	</div>

	<!-- Donation List -->
	{#if donations.length === 0}
		<div class="mt-10 border-[3px] border-border py-16 text-center">
			<div class="mx-auto flex h-20 w-20 items-center justify-center border-[3px] border-border">
				<Heart class="h-10 w-10 text-text-secondary/30" />
			</div>
			<p class="mt-6 font-display text-xl font-bold">No donations yet</p>
			<p class="mono mt-2 text-text-secondary">YOUR GENEROSITY HELPS NEW MUSLIMS</p>
			<a
				href={p('/give')}
				class="mt-6 inline-block border-[3px] border-border bg-accent-primary px-8 py-3 font-bold text-white transition-colors hover:bg-red-700"
			>
				Make a Donation
			</a>
		</div>
	{:else}
		<div class="mt-8 border-[3px] border-border">
			{#each donations as donation}
				<div class="flex items-center justify-between border-b-[3px] border-border px-4 py-4 last:border-b-0">
					<div class="flex items-center gap-4">
						<div class="flex h-12 w-12 shrink-0 items-center justify-center border-[3px] border-border bg-accent-primary/10">
							<Heart class="h-5 w-5 text-accent-primary" />
						</div>
						<div>
							<p class="font-display font-bold">{donation.type}</p>
							<div class="flex items-center gap-3">
								<span class="mono text-text-secondary">{donation.id}</span>
								<div class="flex items-center gap-1 text-text-secondary">
									<Calendar class="h-3 w-3" />
									<span class="mono">{donation.date}</span>
								</div>
								{#if donation.recurring}
									<span class="border-[3px] border-border bg-accent-gold px-2 py-0.5 text-xs font-bold text-text-primary">
										RECURRING
									</span>
								{/if}
							</div>
						</div>
					</div>
					<span class="font-display text-xl font-bold text-accent-primary">
						${donation.amount.toFixed(2)}
					</span>
				</div>
			{/each}
		</div>

		<div class="mt-6">
			<a
				href={p('/give')}
				class="group inline-flex items-center gap-2 font-display font-bold text-accent-primary transition-colors hover:text-red-700"
			>
				Make Another Donation
				<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
			</a>
		</div>
	{/if}
</div>
