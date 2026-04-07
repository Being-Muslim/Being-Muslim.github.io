<script lang="ts">
	import { withPrefix } from '$lib/data/utils';
	import { ShoppingBag, Package, ArrowRight } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/a-staging', href);

	const orders = [
		{
			id: 'ORD-1234',
			date: '2026-02-15',
			total: 24.99,
			status: 'Delivered',
			items: [{ title: 'Being Muslim: A Practical Guide', quantity: 1, price: 24.99 }]
		},
		{
			id: 'ORD-1198',
			date: '2026-01-28',
			total: 29.98,
			status: 'Delivered',
			items: [{ title: 'Prayer Reference Cards', quantity: 2, price: 14.99 }]
		},
		{
			id: 'ORD-1150',
			date: '2026-01-10',
			total: 84.99,
			status: 'Delivered',
			items: [{ title: 'Being Muslim Boxed Set', quantity: 1, price: 84.99 }]
		}
	];

	const statusStyles = (status: string) => {
		if (status === 'Delivered') return 'bg-accent-green text-white';
		if (status === 'Shipped') return 'bg-accent-gold text-text-primary';
		if (status === 'Processing') return 'bg-text-secondary text-white';
		return 'bg-border text-text-secondary';
	};
</script>

<svelte:head>
	<title>Orders - Being Muslim</title>
</svelte:head>

<div>
	<h1 class="font-display text-2xl font-bold">Order <span class="highlight">History</span></h1>
	<p class="mono mt-2 text-text-secondary">VIEW AND TRACK YOUR PAST ORDERS</p>

	{#if orders.length === 0}
		<!-- Empty State -->
		<div class="mt-10 border-[3px] border-border py-16 text-center">
			<div class="mx-auto flex h-20 w-20 items-center justify-center border-[3px] border-border">
				<ShoppingBag class="h-10 w-10 text-text-secondary/30" />
			</div>
			<p class="mt-6 font-display text-xl font-bold">No orders yet</p>
			<p class="mono mt-2 text-text-secondary">VISIT OUR SHOP TO FIND RESOURCES</p>
			<a
				href={p('/shop')}
				class="mt-6 inline-block border-[3px] border-border bg-accent-primary px-8 py-3 font-bold text-white transition-colors hover:bg-red-700"
			>
				Browse Shop
			</a>
		</div>
	{:else}
		<!-- Orders -->
		<div class="mt-8 border-[3px] border-border">
			{#each orders as order}
				<div class="border-b-[3px] border-border last:border-b-0">
					<!-- Order Header -->
					<div class="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-border bg-bg-primary px-4 py-3">
						<div class="flex items-center gap-3">
							<Package class="h-5 w-5 text-text-secondary" />
							<div>
								<span class="font-display font-bold">{order.id}</span>
								<span class="mono ml-3 text-text-secondary">{order.date}</span>
							</div>
						</div>
						<div class="flex items-center gap-4">
							<span class="border-[3px] border-border px-3 py-1 text-xs font-bold {statusStyles(order.status)}">
								{order.status}
							</span>
							<span class="font-display text-lg font-bold">${order.total.toFixed(2)}</span>
						</div>
					</div>

					<!-- Order Items -->
					{#each order.items as item}
						<div class="flex items-center justify-between px-4 py-3">
							<div class="flex items-center gap-4">
								<div class="flex h-12 w-12 shrink-0 items-center justify-center border-[3px] border-border">
									<ShoppingBag class="h-5 w-5 text-text-secondary/30" />
								</div>
								<div>
									<p class="font-display font-bold">{item.title}</p>
									<p class="mono text-text-secondary">QTY: {item.quantity}</p>
								</div>
							</div>
							<span class="font-display font-bold">${(item.price * item.quantity).toFixed(2)}</span>
						</div>
					{/each}
				</div>
			{/each}
		</div>

		<!-- Continue Shopping -->
		<div class="mt-6">
			<a
				href={p('/shop')}
				class="group inline-flex items-center gap-2 font-display font-bold text-accent-primary transition-colors hover:text-red-700"
			>
				Continue Shopping
				<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
			</a>
		</div>
	{/if}
</div>
