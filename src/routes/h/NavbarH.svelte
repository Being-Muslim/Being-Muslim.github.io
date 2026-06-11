<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import { navLinks } from '$lib/data/mock.js';

	let mobileOpen = $state(false);
</script>

<div class="rwd-nav-wrap">
	<nav class="rwd-nav" aria-label="Main navigation">
		<a href="/h/" class="rwd-nav-logo" aria-label="Being Muslim — home">
			<span class="rwd-nav-logo-mark" aria-hidden="true">
				<!-- friendly leaf mark -->
				<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
					<path
						d="M12 21C12 21 4 16.5 4 9.5C4 5.5 7 3 12 3C17 3 20 5.5 20 9.5C20 16.5 12 21 12 21Z"
						fill="#1E6B4E"
					/>
					<path
						d="M12 18.5V8M12 12.5C12 12.5 9.5 11.5 8.5 9.5M12 10.5C12 10.5 14.5 9.8 15.5 7.8"
						stroke="#E6F2E9"
						stroke-width="1.6"
						stroke-linecap="round"
					/>
				</svg>
			</span>
			<span class="rwd-nav-logo-text">Being Muslim</span>
		</a>

		<div class="rwd-nav-links">
			{#each navLinks as link}
				<a href={link.href} class="rwd-nav-link">{link.label}</a>
			{/each}
		</div>

		<a href="/guides/new-muslim" class="rwd-btn rwd-btn-primary rwd-btn-sm rwd-nav-cta">
			Start Here
		</a>

		<button
			class="rwd-nav-burger"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={mobileOpen}
		>
			{#if mobileOpen}
				<X size={20} />
			{:else}
				<Menu size={20} />
			{/if}
		</button>
	</nav>

	{#if mobileOpen}
		<div class="rwd-nav-mobile">
			{#each navLinks as link}
				<a href={link.href} onclick={() => (mobileOpen = false)}>{link.label}</a>
			{/each}
			<a
				href="/guides/new-muslim"
				class="rwd-btn rwd-btn-primary"
				onclick={() => (mobileOpen = false)}
			>
				Start Here
			</a>
		</div>
	{/if}
</div>
