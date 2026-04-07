<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { Heart, ArrowRight, Repeat, Gift } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/b-staging', href);

	const donations = [
		{ date: 'Feb 1, 2026', amount: 85, type: 'Sponsor 1 Boxed Set', recurring: false },
		{ date: 'Jan 1, 2026', amount: 50, type: 'Monthly Donation', recurring: true },
		{ date: 'Dec 1, 2025', amount: 50, type: 'Monthly Donation', recurring: true },
		{ date: 'Nov 15, 2025', amount: 400, type: 'Sponsor 5 Boxed Sets', recurring: false },
		{ date: 'Nov 1, 2025', amount: 50, type: 'Monthly Donation', recurring: true }
	];

	const totalDonated = donations.reduce((sum, d) => sum + d.amount, 0);
</script>

<svelte:head>
	<title>Donations — Being Muslim</title>
</svelte:head>

<div class="space-y-6">
	<div>
		<h1 class="font-display text-2xl font-bold text-[#1C1C1E]">Donations</h1>
		<p class="mt-1 text-sm text-[#8E8E93]">View your giving history and impact.</p>
	</div>

	<!-- Summary bento -->
	<div class="grid grid-cols-3 gap-3">
		<div class="rounded-[20px] bg-gradient-to-br from-[#FF9F0A] to-[#FF3B30] p-6 text-center">
			<p class="font-display text-3xl font-bold text-white">${totalDonated}</p>
			<p class="mt-1 text-sm text-white/70">Total Given</p>
		</div>
		<div class="rounded-[20px] bg-white p-6 text-center">
			<div class="mx-auto flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#FF9F0A]/10">
				<Gift class="h-5 w-5 text-[#FF9F0A]" />
			</div>
			<p class="mt-2 font-display text-2xl font-bold text-[#1C1C1E]">7</p>
			<p class="mt-0.5 text-xs text-[#8E8E93]">Boxed Sets Sponsored</p>
		</div>
		<div class="rounded-[20px] bg-white p-6 text-center">
			<div class="mx-auto flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#30D158]/10">
				<Repeat class="h-5 w-5 text-[#30D158]" />
			</div>
			<p class="mt-2 font-display text-2xl font-bold text-[#1C1C1E]">$50/mo</p>
			<p class="mt-0.5 text-xs text-[#8E8E93]">Monthly Donation</p>
		</div>
	</div>

	<!-- Donation History -->
	<div>
		<h2 class="font-display text-xl font-bold text-[#1C1C1E]">Giving History</h2>
		<div class="mt-4 space-y-3">
			{#each donations as donation}
				<div class="flex items-center justify-between rounded-[20px] bg-white p-5">
					<div class="flex items-center gap-4">
						<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] {donation.recurring ? 'bg-[#30D158]/10' : 'bg-[#FF9F0A]/10'}">
							{#if donation.recurring}
								<Repeat class="h-5 w-5 text-[#30D158]" />
							{:else}
								<Heart class="h-5 w-5 text-[#FF9F0A]" />
							{/if}
						</div>
						<div>
							<p class="text-sm font-medium text-[#1C1C1E]">{donation.type}</p>
							<p class="mt-0.5 text-xs text-[#8E8E93]">{donation.date}</p>
						</div>
					</div>
					<div class="text-right">
						<p class="font-display text-lg font-bold text-[#1C1C1E]">${donation.amount}</p>
						{#if donation.recurring}
							<span class="text-xs font-medium text-[#30D158]">Recurring</span>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="text-center">
		<a href={p('/give')} class="inline-flex items-center gap-2 rounded-[14px] bg-[#007AFF] px-6 py-3 text-sm font-semibold text-white hover:opacity-90">
			Make a Donation <ArrowRight class="h-4 w-4" />
		</a>
	</div>
</div>
