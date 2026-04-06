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
		top: 16px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 50;
		width: calc(100% - 32px);
		max-width: 900px;
		border-radius: 999px;
		padding: 0 8px;
		height: 52px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: {scrolled || mobileOpen ? 'rgba(244, 237, 228, 0.95)' : 'rgba(244, 237, 228, 0.85)'};
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid {scrolled ? 'rgba(58, 54, 50, 0.08)' : 'rgba(255, 255, 255, 0.3)'};
		box-shadow: {scrolled ? '0 4px 24px rgba(58, 54, 50, 0.1)' : '0 2px 12px rgba(58, 54, 50, 0.04)'};
		transition: all 0.3s ease;
	"
>
	<!-- Logo -->
	<a href="/g" style="display: flex; align-items: center; gap: 8px; text-decoration: none; padding-left: 12px;">
		<img
			src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
			alt="Being Muslim"
			style="height: 26px; width: 26px; filter: invert(1);"
		/>
		<span style="font-family: 'Cormorant Garamond', serif; font-size: 17px; font-weight: 600; color: #3A3632; letter-spacing: -0.01em;">
			Being Muslim
		</span>
	</a>

	<!-- Desktop Nav -->
	<nav style="display: flex; align-items: center; gap: 28px;" class="nav-desktop">
		{#each [
			{ label: 'Learn', href: '/g/learn' },
			{ label: 'Convert', href: '/g/convert' },
			{ label: 'Shop', href: '/g/shop' },
			{ label: 'Support', href: '/g/support' }
		] as link}
			<a
				href={link.href}
				style="
					font-family: 'Manrope', sans-serif;
					font-size: 13px;
					font-weight: 500;
					color: #3A3632;
					text-decoration: none;
					opacity: 0.7;
					transition: opacity 0.2s;
				"
				onmouseenter={(e) => (e.currentTarget.style.opacity = '1')}
				onmouseleave={(e) => (e.currentTarget.style.opacity = '0.7')}
			>
				{link.label}
			</a>
		{/each}
		<a
			href="/g"
			style="
				font-family: 'Manrope', sans-serif;
				font-size: 13px;
				font-weight: 600;
				color: #fff;
				background: #1A5653;
				padding: 8px 20px;
				border-radius: 999px;
				text-decoration: none;
				transition: all 0.2s;
			"
			onmouseenter={(e) => { e.currentTarget.style.background = '#1d635f'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(26,86,83,0.3)'; }}
			onmouseleave={(e) => { e.currentTarget.style.background = '#1A5653'; e.currentTarget.style.boxShadow = 'none'; }}
		>
			Begin
		</a>
	</nav>

	<!-- Mobile Menu Button -->
	<button
		style="
			display: none;
			padding: 8px;
			background: transparent;
			border: none;
			cursor: pointer;
			color: #3A3632;
			margin-right: 8px;
		"
		class="nav-mobile-btn"
		onclick={() => (mobileOpen = !mobileOpen)}
		aria-label="Toggle menu"
	>
		{#if mobileOpen}<X size={22} />{:else}<Menu size={22} />{/if}
	</button>
</header>

<!-- Mobile Menu Sheet -->
{#if mobileOpen}
	<div
		style="
			position: fixed;
			top: 78px;
			left: 16px;
			right: 16px;
			z-index: 49;
			background: rgba(244, 237, 228, 0.97);
			backdrop-filter: blur(16px);
			-webkit-backdrop-filter: blur(16px);
			border-radius: 20px;
			border: 1px solid rgba(58, 54, 50, 0.08);
			box-shadow: 0 8px 32px rgba(58, 54, 50, 0.12);
			padding: 20px 24px;
			animation: mobileSlideDown 0.2s ease-out;
		"
	>
		{#each [
			{ label: 'Learn', href: '/g/learn' },
			{ label: 'Convert', href: '/g/convert' },
			{ label: 'Shop', href: '/g/shop' },
			{ label: 'Support', href: '/g/support' }
		] as link}
			<a
				href={link.href}
				style="
					display: block;
					font-family: 'Manrope', sans-serif;
					font-size: 15px;
					font-weight: 500;
					color: #3A3632;
					text-decoration: none;
					padding: 12px 0;
					border-bottom: 1px solid rgba(58, 54, 50, 0.06);
				"
				onclick={() => (mobileOpen = false)}
			>
				{link.label}
			</a>
		{/each}
		<a
			href="/g"
			style="
				display: block;
				text-align: center;
				font-family: 'Manrope', sans-serif;
				font-size: 14px;
				font-weight: 600;
				color: #fff;
				background: #1A5653;
				padding: 12px 20px;
				border-radius: 999px;
				text-decoration: none;
				margin-top: 16px;
			"
			onclick={() => (mobileOpen = false)}
		>
			Begin Your Journey
		</a>
	</div>
{/if}

<style>
	@keyframes mobileSlideDown {
		from { opacity: 0; transform: translateY(-8px); }
		to { opacity: 1; transform: translateY(0); }
	}

	/* Desktop nav visible, mobile btn hidden by default */
	@media (max-width: 767px) {
		.nav-desktop {
			display: none !important;
		}
		.nav-mobile-btn {
			display: block !important;
		}
	}
</style>
