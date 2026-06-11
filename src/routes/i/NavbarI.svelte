<script lang="ts">
	import { navLinks } from '$lib/data/mock.js';

	let mobileOpen = $state(false);
</script>

<header class="zlj-nav">
	<div class="zlj-nav-inner">
		<a href="/i/" class="zlj-wordmark" aria-label="Being Muslim — home">
			BEING<span class="zlj-star" aria-hidden="true">✶</span>MUSLIM
		</a>

		<nav class="zlj-nav-links" aria-label="Primary">
			{#each navLinks as link (link.href)}
				<a href={link.href}>{link.label}</a>
			{/each}
		</nav>

		<div class="zlj-nav-cta">
			<a href="/shop/being-muslim-book" class="zlj-btn zlj-btn--teal">Get the Book</a>
		</div>

		<button
			class="zlj-nav-toggle"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-expanded={mobileOpen}
			aria-controls="zlj-mobile-menu"
		>
			{mobileOpen ? 'Close ✕' : 'Menu ☰'}
		</button>
	</div>

	{#if mobileOpen}
		<nav class="zlj-nav-mobile" id="zlj-mobile-menu" aria-label="Mobile">
			{#each navLinks as link (link.href)}
				<a href={link.href} onclick={() => (mobileOpen = false)}>{link.label}</a>
			{/each}
			<a
				href="/shop/being-muslim-book"
				class="zlj-nav-mobile-cta"
				onclick={() => (mobileOpen = false)}
			>
				Get the Book →
			</a>
		</nav>
	{/if}
</header>
