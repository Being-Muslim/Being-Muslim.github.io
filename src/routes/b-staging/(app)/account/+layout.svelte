<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';
	import { withPrefix } from '$lib/data/utils.js';
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

	const p = (href: string) => withPrefix('/b-staging', href);

	let mobileMenuOpen = $state(false);

	const sidebarLinks = [
		{ href: p('/account'), label: 'Dashboard', icon: LayoutDashboard },
		{ href: p('/account/learning'), label: 'My Learning', icon: BookOpen },
		{ href: p('/account/orders'), label: 'Orders', icon: ShoppingBag },
		{ href: p('/account/donations'), label: 'Donations', icon: Heart },
		{ href: p('/account/profile'), label: 'Profile', icon: UserCircle },
		{ href: p('/account/settings'), label: 'Settings', icon: Settings }
	] as const;

	function isActive(href: string): boolean {
		const path = page.url.pathname;
		if (href === p('/account')) {
			return path === p('/account');
		}
		return path.startsWith(href);
	}
</script>

<div class="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 md:py-12">
	<div class="flex gap-4">
		<!-- Mobile Menu Toggle -->
		<div class="lg:hidden">
			<button
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				class="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#007AFF] text-white shadow-lg"
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
			class="shrink-0 {mobileMenuOpen ? 'fixed inset-0 z-30 bg-black/40' : 'hidden lg:block'}"
		>
			{#if mobileMenuOpen}
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<div class="absolute inset-0 lg:hidden" onclick={() => (mobileMenuOpen = false)}></div>
			{/if}
			<nav
				class="relative h-full w-64 overflow-y-auto bg-[#F2F2F7] p-4 shadow-lg lg:h-auto lg:rounded-[20px] lg:bg-white lg:shadow-none"
			>
				<div class="mb-4 border-b border-[#E5E5EA] pb-4 lg:hidden">
					<p class="font-display text-lg font-bold text-[#1C1C1E]">My Account</p>
				</div>
				<ul class="space-y-1">
					{#each sidebarLinks as link}
						{@const Icon = link.icon}
						{@const active = isActive(link.href)}
						<li>
							<a
								href={link.href}
								onclick={() => (mobileMenuOpen = false)}
								class="flex items-center gap-3 rounded-[14px] px-4 py-2.5 text-sm font-medium transition-colors {active
									? 'bg-[#007AFF]/10 text-[#007AFF]'
									: 'text-[#8E8E93] hover:bg-[#F2F2F7] hover:text-[#1C1C1E]'}"
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
