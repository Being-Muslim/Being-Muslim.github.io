<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { ShoppingBag, ArrowRight, Package, Truck, Check } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/b-staging', href);

	const orders = [
		{ id: 'BM-2024-0142', date: 'Feb 10, 2026', items: ['Being Muslim Boxed Set', 'Prayer Cards'], status: 'Shipped' as const, total: 99.98 },
		{ id: 'BM-2024-0118', date: 'Jan 25, 2026', items: ['Being Muslim: Digital Edition'], status: 'Delivered' as const, total: 12.99 },
		{ id: 'BM-2024-0095', date: 'Dec 15, 2025', items: ['Being Muslim: A Practical Guide'], status: 'Delivered' as const, total: 24.99 },
		{ id: 'BM-2024-0072', date: 'Nov 3, 2025', items: ['Prayer Reference Cards'], status: 'Delivered' as const, total: 14.99 }
	];

	function statusIcon(status: string) {
		if (status === 'Shipped') return Truck;
		if (status === 'Delivered') return Check;
		return Package;
	}
</script>

<svelte:head>
	<title>Orders — Being Muslim</title>
</svelte:head>

<div class="space-y-6">
	<div>
		<h1 class="font-display text-2xl font-bold text-[#1C1C1E]">Orders</h1>
		<p class="mt-1 text-sm text-[#8E8E93]">Track and manage your purchases.</p>
	</div>

	{#if orders.length === 0}
		<div class="rounded-[20px] bg-white p-12 text-center">
			<ShoppingBag class="mx-auto h-14 w-14 text-[#8E8E93]/20" />
			<h2 class="mt-4 font-display text-xl font-bold text-[#1C1C1E]">No orders yet</h2>
			<p class="mt-2 text-sm text-[#8E8E93]">When you make a purchase, it will appear here.</p>
			<a href={p('/shop')} class="mt-6 inline-flex items-center gap-2 rounded-[14px] bg-[#007AFF] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90">
				Browse Shop <ArrowRight class="h-4 w-4" />
			</a>
		</div>
	{:else}
		<div class="space-y-3">
			{#each orders as order}
				{@const Icon = statusIcon(order.status)}
				<div class="rounded-[20px] bg-white p-5">
					<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
						<div class="flex items-start gap-4">
							<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] {order.status === 'Delivered' ? 'bg-[#30D158]/10' : 'bg-[#FF9F0A]/10'}">
								<Icon class="h-5 w-5 {order.status === 'Delivered' ? 'text-[#30D158]' : 'text-[#FF9F0A]'}" />
							</div>
							<div>
								<div class="flex items-center gap-2">
									<p class="font-display text-base font-bold text-[#1C1C1E]">#{order.id}</p>
									<span class="rounded-full px-2.5 py-0.5 text-xs font-medium {order.status === 'Delivered' ? 'bg-[#30D158]/10 text-[#30D158]' : 'bg-[#FF9F0A]/10 text-[#FF9F0A]'}">{order.status}</span>
								</div>
								<p class="mt-1 text-xs text-[#8E8E93]">{order.date}</p>
								<p class="mt-0.5 text-sm text-[#8E8E93]">{order.items.join(', ')}</p>
							</div>
						</div>
						<div class="flex items-center gap-4">
							<p class="font-display text-xl font-bold text-[#1C1C1E]">${order.total.toFixed(2)}</p>
							<button class="rounded-[10px] bg-[#F2F2F7] px-4 py-2 text-xs font-medium text-[#1C1C1E] hover:bg-[#E5E5EA]">View Details</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
