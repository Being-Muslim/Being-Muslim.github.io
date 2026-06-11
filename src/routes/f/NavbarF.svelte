<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import { navLinks } from '$lib/data/mock.js';

	let mobileOpen = $state(false);
	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 24;
	}
</script>

<svelte:window onscroll={handleScroll} />

<header class="layl-nav {scrolled || mobileOpen ? 'layl-nav-scrolled' : ''}">
	<nav class="layl-nav-inner" aria-label="Primary">
		<!-- Wordmark -->
		<a href="/f" class="layl-wordmark" aria-label="Being Muslim — home">
			<span class="layl-wordmark-star" aria-hidden="true">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
					<rect x="4.7" y="4.7" width="14.6" height="14.6" />
					<rect x="4.7" y="4.7" width="14.6" height="14.6" transform="rotate(45 12 12)" />
				</svg>
			</span>
			<span class="layl-wordmark-text">Being Muslim</span>
		</a>

		<!-- Desktop links -->
		<div class="layl-nav-links">
			{#each navLinks as link}
				<a href={link.href} class="layl-nav-link">{link.label}</a>
			{/each}
		</div>

		<!-- Desktop CTA -->
		<a href="/shop/being-muslim-book" class="layl-btn layl-btn-gold layl-nav-cta">Get the Book</a>

		<!-- Mobile toggle -->
		<button
			class="layl-nav-burger"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-expanded={mobileOpen}
			aria-label="Toggle menu"
		>
			{#if mobileOpen}
				<X size={20} />
			{:else}
				<Menu size={20} />
			{/if}
		</button>
	</nav>

	<!-- Mobile menu -->
	<div class="layl-nav-mobile" class:layl-open={mobileOpen}>
		<div class="layl-nav-mobile-inner">
			{#each navLinks as link}
				<a href={link.href} class="layl-nav-mobile-link" onclick={() => (mobileOpen = false)}>
					{link.label}
				</a>
			{/each}
			<a
				href="/shop/being-muslim-book"
				class="layl-btn layl-btn-gold layl-nav-mobile-cta"
				onclick={() => (mobileOpen = false)}
			>
				Get the Book
			</a>
		</div>
	</div>
</header>
