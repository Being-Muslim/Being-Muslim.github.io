<script lang="ts">
	import { Menu, X } from 'lucide-svelte';

	let mobileOpen = $state(false);
	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 20;
	}
</script>

<svelte:window onscroll={handleScroll} />

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
	style="background: {scrolled || mobileOpen ? 'rgba(12, 18, 32, 0.98)' : 'rgba(12, 18, 32, 0.8)'}; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid rgba(250, 250, 248, {scrolled ? '0.08' : '0.04'});"
>
	<nav style="max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 56px; padding: 0 24px;">
		<!-- Logo -->
		<a href="/e" style="text-decoration: none; display: flex; align-items: center; gap: 8px;">
			<span style="font-family: 'Space Grotesk', sans-serif; font-size: 17px; font-weight: 600; color: #FAFAF8;">Being Muslim</span>
		</a>

		<!-- Desktop Nav -->
		<div class="hidden md:flex" style="align-items: center; gap: 32px;">
			{#each [
				{ label: 'Learn', href: '/e/learn' },
				{ label: 'Convert', href: '/e/convert' },
				{ label: 'Products', href: '/e/shop' },
				{ label: 'Support', href: '/e/support' }
			] as link}
				<a
					href={link.href}
					style="font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 400; color: rgba(250, 250, 248, 0.6); text-decoration: none; transition: color 0.2s;"
					onmouseenter={(e) => e.currentTarget.style.color = 'rgba(250, 250, 248, 0.95)'}
					onmouseleave={(e) => e.currentTarget.style.color = 'rgba(250, 250, 248, 0.6)'}
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Desktop CTA -->
		<a href="/e/contact" class="e-nav-pill hidden md:inline-flex">
			Get Started
		</a>

		<!-- Mobile Menu Button -->
		<button
			class="md:hidden"
			style="background: none; border: none; cursor: pointer; padding: 8px; color: rgba(250, 250, 248, 0.8);"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
		>
			{#if mobileOpen}<X class="h-5 w-5" />{:else}<Menu class="h-5 w-5" />{/if}
		</button>
	</nav>

	<!-- Mobile Menu -->
	<div class="mobile-menu md:hidden" class:open={mobileOpen}>
		<div style="padding: 16px 24px 24px; border-top: 1px solid rgba(250, 250, 248, 0.08);">
			{#each [
				{ label: 'Learn', href: '/e/learn' },
				{ label: 'Convert', href: '/e/convert' },
				{ label: 'Products', href: '/e/shop' },
				{ label: 'Support', href: '/e/support' }
			] as link}
				<a
					href={link.href}
					style="display: block; padding: 10px 0; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 400; color: rgba(250, 250, 248, 0.7); text-decoration: none;"
					onclick={() => (mobileOpen = false)}
				>
					{link.label}
				</a>
			{/each}
			<a
				href="/e/contact"
				class="e-nav-pill"
				style="display: block; text-align: center; margin-top: 12px;"
				onclick={() => (mobileOpen = false)}
			>
				Get Started
			</a>
		</div>
	</div>
</header>

<style>
	.mobile-menu {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.mobile-menu.open {
		max-height: 320px;
	}
</style>
