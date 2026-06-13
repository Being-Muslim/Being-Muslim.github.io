<script lang="ts">
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { products } from '$lib/data/mock.js';
	import {
		ShoppingCart,
		Minus,
		Plus,
		Trash2,
		ArrowRight,
		ArrowLeft,
		BookOpen,
		Tag,
		Truck,
		ShieldCheck,
		Package
	} from 'lucide-svelte';

	interface CartItem {
		handle: string;
		title: string;
		price: number;
		quantity: number;
		image: string;
	}

	// Pre-populate with 2 mock items
	let cartItems = $state<CartItem[]>([
		{
			handle: products[0].handle,
			title: products[0].title,
			price: products[0].price,
			quantity: 1,
			image: products[0].images[0]
		},
		{
			handle: products[2].handle,
			title: products[2].title,
			price: products[2].price,
			quantity: 2,
			image: products[2].images[0]
		}
	]);

	let promoCode = $state('');
	let promoApplied = $state(false);
	let promoError = $state('');

	const FREE_SHIPPING_THRESHOLD = 50;

	let subtotal = $derived(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));

	let shippingCost = $derived(subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 5.99);

	let discount = $derived(promoApplied ? subtotal * 0.1 : 0);

	let total = $derived(subtotal - discount + shippingCost);

	let itemCount = $derived(cartItems.reduce((acc, item) => acc + item.quantity, 0));

	function updateQuantity(handle: string, delta: number) {
		const item = cartItems.find((i) => i.handle === handle);
		if (!item) return;
		const newQty = item.quantity + delta;
		if (newQty < 1 || newQty > 10) return;
		item.quantity = newQty;
	}

	function removeItem(handle: string) {
		cartItems = cartItems.filter((i) => i.handle !== handle);
	}

	function applyPromo() {
		promoError = '';
		if (promoCode.toUpperCase() === 'WELCOME10') {
			promoApplied = true;
		} else {
			promoError = 'Invalid promo code. Try "WELCOME10".';
		}
	}

	function removePromo() {
		promoApplied = false;
		promoCode = '';
		promoError = '';
	}
</script>

<svelte:head>
	<title>Shopping Cart — Being Muslim</title>
	<meta name="description" content="Review your cart and proceed to checkout." />
</svelte:head>

<!-- ============================== -->
<!-- HEADER                         -->
<!-- ============================== -->
<div class="bg-secondary/50 py-6">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="flex items-center gap-3">
			<ShoppingCart class="h-6 w-6 text-accent-primary" />
			<h1 class="font-display text-2xl font-bold sm:text-3xl">Shopping Cart</h1>
			{#if cartItems.length > 0}
				<Badge variant="secondary">
					{#snippet children()}
						{itemCount} {itemCount === 1 ? 'item' : 'items'}
					{/snippet}
				</Badge>
			{/if}
		</div>
	</div>
</div>

{#if cartItems.length === 0}
	<!-- ============================== -->
	<!-- EMPTY CART STATE               -->
	<!-- ============================== -->
	<Section>
		<div class="mx-auto max-w-md text-center">
			<div
				class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-secondary"
			>
				<Package class="h-12 w-12 text-text-secondary/40" />
			</div>
			<h2 class="mt-6 font-display text-2xl font-bold">Your cart is empty</h2>
			<p class="mt-3 text-text-secondary">
				Discover beautifully crafted resources to support your Islamic journey.
			</p>
			<a href="/shop">
				<Button size="lg" class="mt-8 bg-accent-primary text-text-cream hover:bg-accent-hover">
					{#snippet children()}
						Start Shopping
						<ArrowRight class="h-5 w-5" />
					{/snippet}
				</Button>
			</a>
		</div>
	</Section>
{:else}
	<!-- ============================== -->
	<!-- CART CONTENT                   -->
	<!-- ============================== -->
	<Section>
		<div class="grid gap-10 lg:grid-cols-3">
			<!-- LEFT: Cart Items (2 cols wide) -->
			<div class="lg:col-span-2">
				<!-- Free shipping progress -->
				{#if subtotal < FREE_SHIPPING_THRESHOLD}
					<div class="mb-6 rounded-xl border border-accent-green/20 bg-accent-green/5 p-4">
						<div class="flex items-center gap-2 text-sm">
							<Truck class="h-4 w-4 text-accent-green" />
							<span class="text-text-secondary">
								Add <strong class="text-accent-green">
									${(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)}
								</strong> more for free shipping!
							</span>
						</div>
						<div class="mt-2 h-1.5 overflow-hidden rounded-full bg-accent-green/10">
							<div
								class="h-full rounded-full bg-accent-green transition-all duration-500"
								style="width: {Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)}%"
							></div>
						</div>
					</div>
				{:else}
					<div class="mb-6 rounded-xl border border-accent-green/20 bg-accent-green/5 p-4">
						<div class="flex items-center gap-2 text-sm text-accent-green">
							<Truck class="h-4 w-4" />
							<span class="font-medium">You qualify for free shipping!</span>
						</div>
					</div>
				{/if}

				<!-- Cart Item List -->
				<div class="space-y-4">
					{#each cartItems as item (item.handle)}
						<div
							class="flex gap-4 rounded-xl border border-border bg-surface p-4 transition-all sm:gap-6 sm:p-6"
						>
							<!-- Product Image Placeholder -->
							<a
								href="/shop/{item.handle}"
								class="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-primary/10 to-accent-gold/10 sm:h-28 sm:w-28"
							>
								<BookOpen class="h-8 w-8 text-accent-primary/30" />
							</a>

							<!-- Product Details -->
							<div class="flex min-w-0 flex-1 flex-col">
								<div class="flex items-start justify-between gap-2">
									<a
										href="/shop/{item.handle}"
										class="font-display text-base font-semibold leading-snug hover:text-accent-primary sm:text-lg"
									>
										{item.title}
									</a>
									<button
										onclick={() => removeItem(item.handle)}
										class="shrink-0 rounded-lg p-1.5 text-text-secondary transition-colors hover:bg-destructive/10 hover:text-destructive"
										aria-label="Remove {item.title} from cart"
									>
										<Trash2 class="h-4 w-4" />
									</button>
								</div>

								<span class="mt-1 text-sm text-text-secondary">
									${item.price.toFixed(2)} each
								</span>

								<!-- Bottom row: quantity + subtotal -->
								<div class="mt-auto flex items-center justify-between pt-3">
									<!-- Quantity Controls -->
									<div class="flex items-center gap-1">
										<button
											onclick={() => updateQuantity(item.handle, -1)}
											disabled={item.quantity <= 1}
											class="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-sm transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
											aria-label="Decrease quantity"
										>
											<Minus class="h-3.5 w-3.5" />
										</button>
										<span
											class="flex h-8 w-10 items-center justify-center text-sm font-semibold"
										>
											{item.quantity}
										</span>
										<button
											onclick={() => updateQuantity(item.handle, 1)}
											disabled={item.quantity >= 10}
											class="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-sm transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
											aria-label="Increase quantity"
										>
											<Plus class="h-3.5 w-3.5" />
										</button>
									</div>

									<!-- Item Subtotal -->
									<span class="font-display text-lg font-bold text-accent-primary">
										${(item.price * item.quantity).toFixed(2)}
									</span>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<!-- Continue Shopping -->
				<div class="mt-6">
					<a
						href="/shop"
						class="inline-flex items-center gap-1.5 text-sm font-medium text-accent-primary hover:underline"
					>
						<ArrowLeft class="h-4 w-4" />
						Continue Shopping
					</a>
				</div>
			</div>

			<!-- RIGHT: Order Summary Sidebar -->
			<div class="lg:col-span-1">
				<div class="sticky top-6 rounded-xl border border-border bg-surface p-6">
					<h2 class="font-display text-lg font-bold">Order Summary</h2>

					<Separator class="my-4" />

					<!-- Promo Code -->
					<div class="mb-4">
						{#if promoApplied}
							<div
								class="flex items-center justify-between rounded-lg border border-accent-green/30 bg-accent-green/5 px-3 py-2"
							>
								<div class="flex items-center gap-2">
									<Tag class="h-4 w-4 text-accent-green" />
									<span class="text-sm font-medium text-accent-green">WELCOME10</span>
								</div>
								<button
									onclick={removePromo}
									class="text-xs text-text-secondary hover:text-destructive"
								>
									Remove
								</button>
							</div>
						{:else}
							<div class="flex gap-2">
								<input
									type="text"
									bind:value={promoCode}
									placeholder="Promo code"
									class="h-10 flex-1 rounded-lg border border-border bg-background px-3 text-sm placeholder:text-text-secondary/60 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20"
								/>
								<Button
									variant="outline"
									size="sm"
									class="h-10 shrink-0"
									onclick={applyPromo}
									disabled={promoCode.trim() === ''}
								>
									{#snippet children()}Apply{/snippet}
								</Button>
							</div>
							{#if promoError}
								<p class="mt-1.5 text-xs text-destructive">{promoError}</p>
							{/if}
						{/if}
					</div>

					<Separator class="my-4" />

					<!-- Line Items -->
					<div class="space-y-3 text-sm">
						<div class="flex justify-between">
							<span class="text-text-secondary">Subtotal</span>
							<span class="font-medium">${subtotal.toFixed(2)}</span>
						</div>

						{#if promoApplied}
							<div class="flex justify-between text-accent-green">
								<span>Discount (10%)</span>
								<span class="font-medium">-${discount.toFixed(2)}</span>
							</div>
						{/if}

						<div class="flex justify-between">
							<span class="text-text-secondary">Shipping</span>
							{#if shippingCost === 0}
								<span class="font-medium text-accent-green">Free</span>
							{:else}
								<span class="font-medium">${shippingCost.toFixed(2)}</span>
							{/if}
						</div>
					</div>

					<Separator class="my-4" />

					<!-- Total -->
					<div class="flex items-baseline justify-between">
						<span class="font-display text-base font-bold">Total</span>
						<span class="font-display text-2xl font-bold text-accent-primary">
							${total.toFixed(2)}
						</span>
					</div>

					<!-- Checkout Button -->
					<Button
						size="lg"
						class="mt-6 w-full bg-accent-primary text-text-cream hover:bg-accent-hover"
					>
						{#snippet children()}
							Proceed to Checkout
							<ArrowRight class="h-5 w-5" />
						{/snippet}
					</Button>

					<!-- Trust Signals -->
					<div class="mt-4 flex items-center justify-center gap-4 text-xs text-text-secondary">
						<div class="flex items-center gap-1">
							<ShieldCheck class="h-3.5 w-3.5" />
							Secure checkout
						</div>
						<div class="flex items-center gap-1">
							<Truck class="h-3.5 w-3.5" />
							Free over $50
						</div>
					</div>
				</div>
			</div>
		</div>
	</Section>
{/if}
