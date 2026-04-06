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
	style="
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50;
		border-bottom: 1px solid {scrolled || mobileOpen ? 'rgba(28,25,23,0.08)' : 'transparent'};
		background: {scrolled || mobileOpen ? 'rgba(250,245,235,0.97)' : 'transparent'};
		backdrop-filter: {scrolled || mobileOpen ? 'blur(12px)' : 'none'};
		-webkit-backdrop-filter: {scrolled || mobileOpen ? 'blur(12px)' : 'none'};
		transition: all 0.3s ease;
		{scrolled || mobileOpen ? 'box-shadow: 0 1px 12px rgba(28,25,23,0.06);' : ''}
	"
>
	<nav style="max-width: 1400px; margin: 0 auto; display: flex; height: 72px; align-items: center; justify-content: space-between; padding: 0 24px;">
		<!-- Logo -->
		<a href="/e" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
			<img
				src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
				alt="Being Muslim"
				style="height: 30px; width: 30px; {scrolled || mobileOpen ? 'filter: invert(1);' : ''} transition: filter 0.3s;"
			/>
			<span style="font-family: 'Fraunces', serif; font-size: 20px; font-weight: 500; color: {scrolled || mobileOpen ? '#1C1917' : '#FAF5EB'}; transition: color 0.3s;">
				Being Muslim
			</span>
		</a>

		<!-- Desktop Nav -->
		<div style="display: none; align-items: center; gap: 36px;" class="desktop-nav">
			{#each [
				{ label: 'Home', href: '/e' },
				{ label: 'Learn', href: '/e/learn' },
				{ label: 'Convert', href: '/e/convert' },
				{ label: 'Shop', href: '/e/shop' },
				{ label: 'Support', href: '/e/support' }
			] as link}
				<a
					href={link.href}
					style="
						font-family: 'Outfit', sans-serif;
						font-size: 14px;
						font-weight: 400;
						text-decoration: none;
						color: {scrolled ? '#1C1917' : 'rgba(250,245,235,0.8)'};
						transition: color 0.3s;
					"
					onmouseenter={(e) => { const t = e.currentTarget as HTMLElement; t.style.color = scrolled ? '#C1604E' : '#FAF5EB'; }}
					onmouseleave={(e) => { const t = e.currentTarget as HTMLElement; t.style.color = scrolled ? '#1C1917' : 'rgba(250,245,235,0.8)'; }}
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Desktop CTA -->
		<a
			href="/e/contact"
			class="desktop-nav"
			style="
				display: none;
				align-items: center;
				padding: 10px 24px;
				border-radius: 999px;
				font-family: 'Outfit', sans-serif;
				font-size: 14px;
				font-weight: 500;
				text-decoration: none;
				background: #C1604E;
				color: #fff;
				transition: all 0.2s;
			"
			onmouseenter={(e) => { const t = e.currentTarget as HTMLElement; t.style.background = '#b3553f'; t.style.boxShadow = '0 4px 16px rgba(193,96,78,0.35)'; }}
			onmouseleave={(e) => { const t = e.currentTarget as HTMLElement; t.style.background = '#C1604E'; t.style.boxShadow = 'none'; }}
		>
			Contact
		</a>

		<!-- Mobile Menu Button -->
		<button
			style="
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 8px;
				border: none;
				background: none;
				cursor: pointer;
				color: {scrolled || mobileOpen ? '#1C1917' : '#FAF5EB'};
				transition: color 0.3s;
			"
			class="mobile-menu-btn"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
		>
			{#if mobileOpen}<X style="width: 24px; height: 24px;" />{:else}<Menu style="width: 24px; height: 24px;" />{/if}
		</button>
	</nav>

	<!-- Mobile Menu -->
	{#if mobileOpen}
		<div style="background: #FAF5EB; border-top: 1px solid rgba(28,25,23,0.08); padding: 16px 24px;" class="mobile-menu-panel">
			{#each [
				{ label: 'Home', href: '/e' },
				{ label: 'Learn', href: '/e/learn' },
				{ label: 'Convert', href: '/e/convert' },
				{ label: 'Shop', href: '/e/shop' },
				{ label: 'Support', href: '/e/support' }
			] as link}
				<a
					href={link.href}
					style="display: block; padding: 12px 0; font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 500; color: #1C1917; text-decoration: none; border-bottom: 1px solid rgba(28,25,23,0.06);"
					onclick={() => (mobileOpen = false)}
				>
					{link.label}
				</a>
			{/each}
			<a
				href="/e"
				style="display: block; margin-top: 16px; text-align: center; padding: 12px 24px; border-radius: 999px; background: #C1604E; color: #fff; font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 500; text-decoration: none;"
				onclick={() => (mobileOpen = false)}
			>
				Contact
			</a>
		</div>
	{/if}
</header>

<style>
	@media (min-width: 768px) {
		.desktop-nav {
			display: inline-flex !important;
		}
		.mobile-menu-btn {
			display: none !important;
		}
		.mobile-menu-panel {
			display: none !important;
		}
	}
</style>
