<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';
	import { cn } from '$lib/utils/cn.js';
	import {
		LayoutDashboard,
		BookOpen,
		ShoppingBag,
		Heart,
		UserCircle,
		Settings,
		Menu,
		X
	} from 'lucide-svelte';

	let { children }: { children: Snippet } = $props();

	let mobileMenuOpen = $state(false);

	const sidebarLinks = [
		{ href: '/account', label: 'Dashboard', icon: LayoutDashboard },
		{ href: '/account/learning', label: 'My Learning', icon: BookOpen },
		{ href: '/account/orders', label: 'Orders', icon: ShoppingBag },
		{ href: '/account/donations', label: 'Donations', icon: Heart },
		{ href: '/account/profile', label: 'Profile', icon: UserCircle },
		{ href: '/account/settings', label: 'Settings', icon: Settings }
	] as const;

	function isActive(href: string): boolean {
		const path = page.url.pathname;
		if (href === '/account') {
			return path === '/account';
		}
		return path.startsWith(href);
	}
</script>

<div class="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8">
	<div class="flex gap-8">
		<!-- Mobile Menu Toggle -->
		<div class="lg:hidden">
			<button
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				class="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary text-text-cream shadow-lg"
				aria-label="Toggle account menu"
			>
				{#if mobileMenuOpen}
					<X class="h-5 w-5" />
				{:else}
					<Menu class="h-5 w-5" />
				{/if}
			</button>
		</div>

		<!-- Sidebar -->
		<aside
			class={cn(
				'lg:relative lg:inset-auto lg:z-auto lg:block lg:bg-transparent',
				mobileMenuOpen ? 'fixed inset-0 z-30 bg-black/50' : 'hidden lg:block'
			)}
		>
			{#if mobileMenuOpen}
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<div class="absolute inset-0 lg:hidden" onclick={() => (mobileMenuOpen = false)}></div>
			{/if}
			<nav
				class="relative h-full w-64 shrink-0 overflow-y-auto bg-surface p-4 shadow-lg lg:h-auto lg:rounded-xl lg:border lg:border-border lg:shadow-sm"
			>
				<div class="mb-4 border-b border-border pb-4 lg:hidden">
					<p class="font-display text-lg font-semibold text-text-primary">My Account</p>
				</div>
				<ul class="space-y-1">
					{#each sidebarLinks as link}
						{@const Icon = link.icon}
						{@const active = isActive(link.href)}
						<li>
							<a
								href={link.href}
								onclick={() => (mobileMenuOpen = false)}
								class={cn(
									'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
									active
										? 'bg-accent-primary/10 text-accent-primary'
										: 'text-text-secondary hover:bg-secondary hover:text-text-primary'
								)}
							>
								<Icon class="h-4 w-4" />
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</aside>

		<!-- Main Content -->
		<div class="min-w-0 flex-1">
			{@render children()}
		</div>
	</div>
</div>
