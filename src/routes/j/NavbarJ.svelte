<script lang="ts">
	import { Menu, X } from 'lucide-svelte';

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	const navLinks = [
		{ label: 'LEARN', href: '/j/' },
		{ label: 'CONVERT', href: '/j/' },
		{ label: 'SHOP', href: '/j/' },
		{ label: 'SUPPORT', href: '/j/' }
	];

	function handleScroll() {
		scrolled = window.scrollY > 10;
	}

	function toggleMobile() {
		mobileOpen = !mobileOpen;
	}

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<svelte:window onscroll={handleScroll} />

<header
	class="navbar"
	class:scrolled
>
	<div class="navbar__inner">
		<a href="/j/" class="navbar__logo">BEING MUSLIM</a>

		<nav class="navbar__links">
			{#each navLinks as link}
				<a href={link.href} class="navbar__link">{link.label}</a>
			{/each}
		</nav>

		<button class="navbar__burger" onclick={toggleMobile} aria-label="Toggle menu">
			{#if mobileOpen}
				<X size={22} />
			{:else}
				<Menu size={22} />
			{/if}
		</button>
	</div>

	<div class="navbar__line"></div>
</header>

{#if mobileOpen}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="mobile-overlay" onclick={closeMobile} onkeydown={(e) => e.key === 'Escape' && closeMobile()}></div>
	<nav class="mobile-nav">
		{#each navLinks as link}
			<a href={link.href} class="mobile-nav__link" onclick={closeMobile}>{link.label}</a>
		{/each}
	</nav>
{/if}

<style>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		height: 64px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		transition: background 0.3s ease;
	}

	.navbar.scrolled {
		background: rgba(248, 246, 241, 0.95);
		backdrop-filter: blur(8px);
	}

	.navbar__inner {
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: 0 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
	}

	.navbar__logo {
		font-family: var(--bm-font-sans);
		font-size: 14px;
		font-weight: 700;
		letter-spacing: 0.15em;
		color: var(--bm-black);
		text-decoration: none;
	}

	.navbar__links {
		display: flex;
		align-items: center;
		gap: 32px;
	}

	.navbar__link {
		font-family: var(--bm-font-sans);
		font-size: 12px;
		font-weight: 500;
		letter-spacing: 0.12em;
		color: var(--bm-black);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.navbar__link:hover {
		color: var(--bm-orange);
	}

	.navbar__line {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		max-width: 1200px;
		height: 1px;
		background: var(--bm-gray);
		opacity: 0.3;
	}

	.navbar__burger {
		display: none;
		color: var(--bm-black);
	}

	.mobile-overlay {
		position: fixed;
		inset: 0;
		z-index: 98;
		background: rgba(17, 17, 17, 0.3);
	}

	.mobile-nav {
		position: fixed;
		top: 64px;
		left: 0;
		right: 0;
		z-index: 99;
		background: var(--bm-bg);
		padding: 32px 24px;
		display: flex;
		flex-direction: column;
		gap: 24px;
		border-bottom: 1px solid rgba(154, 149, 144, 0.3);
	}

	.mobile-nav__link {
		font-family: var(--bm-font-sans);
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 0.12em;
		color: var(--bm-black);
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.navbar__links {
			display: none;
		}

		.navbar__burger {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
