<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Heart, Gift, Download, Calendar, ArrowRight } from 'lucide-svelte';

	const donationSummary = {
		totalDonated: 340,
		setsSponsored: 4,
		hasRecurring: true,
		recurringAmount: 85,
		recurringFrequency: 'Monthly'
	};

	const donations = [
		{
			id: 'DON-2026-0045',
			date: 'Feb 1, 2026',
			amount: 85,
			type: 'Recurring' as const,
			description: 'Monthly Boxed Set Sponsorship',
			receiptUrl: '#'
		},
		{
			id: 'DON-2026-0032',
			date: 'Jan 1, 2026',
			amount: 85,
			type: 'Recurring' as const,
			description: 'Monthly Boxed Set Sponsorship',
			receiptUrl: '#'
		},
		{
			id: 'DON-2025-0118',
			date: 'Dec 1, 2025',
			amount: 85,
			type: 'Recurring' as const,
			description: 'Monthly Boxed Set Sponsorship',
			receiptUrl: '#'
		},
		{
			id: 'DON-2025-0091',
			date: 'Nov 15, 2025',
			amount: 85,
			type: 'One-time' as const,
			description: 'Sponsor a Boxed Set',
			receiptUrl: '#'
		}
	];
</script>

<svelte:head>
	<title>Donations - Being Muslim</title>
</svelte:head>

<div class="space-y-8">
	<div>
		<h1 class="font-display text-2xl font-bold text-text-primary sm:text-3xl">Donations</h1>
		<p class="mt-1 text-text-secondary">Your generosity is making a difference.</p>
	</div>

	<!-- Summary Cards -->
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<!-- Total Donated -->
		<div class="rounded-xl border border-border bg-surface p-5">
			<div class="flex items-center gap-3">
				<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary/10">
					<Heart class="h-5 w-5 text-accent-primary" />
				</div>
				<div>
					<p class="text-xs text-text-secondary">Total Donated</p>
					<p class="font-display text-2xl font-bold text-text-primary">${donationSummary.totalDonated}</p>
				</div>
			</div>
		</div>

		<!-- Recurring Donation -->
		{#if donationSummary.hasRecurring}
			<div class="rounded-xl border border-accent-primary/20 bg-accent-primary/5 p-5">
				<div class="flex items-center gap-3">
					<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary/10">
						<Calendar class="h-5 w-5 text-accent-primary" />
					</div>
					<div>
						<p class="text-xs text-text-secondary">Active Recurring</p>
						<p class="font-display text-2xl font-bold text-text-primary">${donationSummary.recurringAmount}/mo</p>
					</div>
				</div>
				<Button variant="outline" size="sm" class="mt-3 w-full">
					{#snippet children()}
						Manage Recurring
					{/snippet}
				</Button>
			</div>
		{/if}

		<!-- Sets Sponsored -->
		<div class="rounded-xl border border-border bg-surface p-5">
			<div class="flex items-center gap-3">
				<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-gold/10">
					<Gift class="h-5 w-5 text-accent-gold" />
				</div>
				<div>
					<p class="text-xs text-text-secondary">Sets Sponsored</p>
					<p class="font-display text-2xl font-bold text-text-primary">{donationSummary.setsSponsored}</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Impact Section -->
	<div class="rounded-xl border border-border bg-gradient-to-br from-accent-primary/5 to-accent-gold/5 p-6">
		<h2 class="font-display text-lg font-semibold text-text-primary">Your Impact</h2>
		<p class="mt-2 text-sm text-text-secondary">
			Your donations have sponsored <span class="font-semibold text-accent-primary">{donationSummary.setsSponsored} boxed sets</span> for
			new Muslims around the world. Each set includes the Being Muslim book, prayer cards, and a quick-reference
			guide -- everything a new Muslim needs to begin their journey with confidence.
		</p>
		<a href="{base}/give" class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:underline">
			Sponsor another set
			<ArrowRight class="h-3.5 w-3.5" />
		</a>
	</div>

	<Separator />

	<!-- Donation History -->
	<div>
		<h2 class="font-display text-lg font-semibold text-text-primary">Donation History</h2>
		<div class="mt-4 space-y-3">
			{#each donations as donation}
				<div class="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
					<div class="flex items-center gap-3">
						<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full {donation.type === 'Recurring' ? 'bg-accent-primary/10' : 'bg-accent-gold/10'}">
							<Heart class="h-4 w-4 {donation.type === 'Recurring' ? 'text-accent-primary' : 'text-accent-gold'}" />
						</div>
						<div>
							<p class="text-sm font-medium text-text-primary">{donation.description}</p>
							<div class="mt-0.5 flex items-center gap-2">
								<span class="text-xs text-text-secondary">{donation.date}</span>
								<Badge variant={donation.type === 'Recurring' ? 'default' : 'secondary'}>
									{#snippet children()}{donation.type}{/snippet}
								</Badge>
							</div>
						</div>
					</div>
					<div class="flex items-center gap-4">
						<p class="font-display text-lg font-semibold text-text-primary">${donation.amount.toFixed(2)}</p>
						<a
							href={donation.receiptUrl}
							class="inline-flex items-center gap-1 text-xs font-medium text-accent-primary hover:underline"
						>
							<Download class="h-3 w-3" />
							Receipt
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
