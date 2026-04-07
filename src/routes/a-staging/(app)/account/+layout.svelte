<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';
	import { withPrefix } from '$lib/data/utils';
	import {
		LayoutDashboard,
		BookOpen,
		ShoppingBag,
		Heart,
		User,
		Settings
	} from 'lucide-svelte';

	let { children }: { children: Snippet } = $props();

	const p = (href: string) => withPrefix('/a-staging', href);

	const sidebarLinks = [
		{ label: 'Dashboard', href: p('/account'), icon: LayoutDashboard },
		{ label: 'My Learning', href: p('/account/learning'), icon: BookOpen },
		{ label: 'Orders', href: p('/account/orders'), icon: ShoppingBag },
		{ label: 'Donations', href: p('/account/donations'), icon: Heart },
		{ label: 'Profile', href: p('/account/profile'), icon: User },
		{ label: 'Settings', href: p('/account/settings'), icon: Settings }
	];

	function isActive(href: string): boolean {
		return page.url.pathname === href;
	}
</script>

<div class="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
	<div class="flex flex-col gap-0 lg:flex-row">
		<!-- Sidebar — bordered zones, no cards -->
		<aside class="w-full shrink-0 border-[3px] border-border lg:w-56">
			<div class="border-b-[3px] border-border px-4 py-3">
				<span class="mono text-text-primary">ACCOUNT</span>
			</div>
			<nav class="flex flex-row lg:flex-col">
				{#each sidebarLinks as link, i}
					<a
						href={link.href}
						class="flex items-center gap-3 border-b-[3px] border-border px-4 py-3 text-sm transition-colors last:border-b-0 {isActive(link.href)
							? 'bg-accent-gold/20 font-bold text-text-primary'
							: 'text-text-secondary hover:bg-accent-gold/10 hover:text-text-primary'}"
					>
						<link.icon class="h-4 w-4 shrink-0" />
						<span>{link.label}</span>
					</a>
				{/each}
			</nav>
		</aside>

		<!-- Main Content -->
		<div class="min-w-0 flex-1 border-[3px] border-l-0 border-border max-lg:border-l-[3px] max-lg:border-t-0">
			<div class="p-6 lg:p-8">
				{@render children()}
			</div>
		</div>
	</div>
</div>
