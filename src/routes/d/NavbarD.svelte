<script lang="ts">
	let mobileOpen = $state(false);
	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 10;
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
		height: 52px;
		background: #FFFFFF;
		border-bottom: 1px solid {scrolled ? '#E5E5E5' : 'transparent'};
		transition: border-color 0.2s;
	"
>
	<nav
		style="
			max-width: 1200px;
			margin: 0 auto;
			height: 52px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 24px;
		"
	>
		<!-- Left: Brand -->
		<a
			href="/d"
			style="
				font-family: 'Inter', sans-serif;
				font-size: 16px;
				font-weight: 600;
				color: #111;
				text-decoration: none;
				letter-spacing: -0.02em;
			"
		>
			Being Muslim
		</a>

		<!-- Center: Nav links (desktop) -->
		<div
			style="
				display: none;
				align-items: center;
				gap: 32px;
			"
			class="d-nav-center"
		>
			{#each [
				{ label: 'Learn', href: '/d/learn' },
				{ label: 'Convert', href: '/d/convert' },
				{ label: 'Products', href: '/d/shop' }
			] as link}
				<a
					href={link.href}
					style="
						font-family: 'Inter', sans-serif;
						font-size: 13px;
						font-weight: 400;
						color: #666;
						text-decoration: none;
						transition: color 0.2s;
					"
					onmouseenter={(e) => (e.currentTarget.style.color = '#111')}
					onmouseleave={(e) => (e.currentTarget.style.color = '#666')}
				>
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Right: Contact (desktop) -->
		<a
			href="/d/contact"
			style="
				font-family: 'Inter', sans-serif;
				font-size: 13px;
				font-weight: 400;
				color: #666;
				text-decoration: none;
				transition: color 0.2s;
				display: none;
			"
			class="d-nav-contact"
			onmouseenter={(e) => (e.currentTarget.style.color = '#111')}
			onmouseleave={(e) => (e.currentTarget.style.color = '#666')}
		>
			Contact
		</a>

		<!-- Mobile menu button -->
		<button
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
			style="
				background: none;
				border: none;
				cursor: pointer;
				padding: 4px;
				display: flex;
				align-items: center;
			"
			class="d-nav-mobile-btn"
		>
			{#if mobileOpen}
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.5">
					<path d="M18 6L6 18M6 6l12 12" />
				</svg>
			{:else}
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.5">
					<path d="M4 8h16M4 16h16" />
				</svg>
			{/if}
		</button>
	</nav>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div
			style="
				background: #FFFFFF;
				border-bottom: 1px solid #E5E5E5;
				padding: 16px 24px 24px;
			"
		>
			{#each [
				{ label: 'Learn', href: '/d/learn' },
				{ label: 'Convert', href: '/d/convert' },
				{ label: 'Products', href: '/d/shop' },
				{ label: 'Contact', href: '/d/contact' }
			] as link}
				<a
					href={link.href}
					onclick={() => (mobileOpen = false)}
					style="
						display: block;
						font-family: 'Inter', sans-serif;
						font-size: 15px;
						font-weight: 400;
						color: #111;
						text-decoration: none;
						padding: 10px 0;
						border-bottom: 1px solid #F5F5F5;
					"
				>
					{link.label}
				</a>
			{/each}
		</div>
	{/if}
</header>

<style>
	@media (min-width: 768px) {
		.d-nav-center {
			display: flex !important;
		}
		.d-nav-contact {
			display: inline !important;
		}
		.d-nav-mobile-btn {
			display: none !important;
		}
	}
</style>
