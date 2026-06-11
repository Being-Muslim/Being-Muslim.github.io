<script lang="ts">
	import { navLinks } from '$lib/data/mock.js';

	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 420;
	}
</script>

<svelte:window onscroll={handleScroll} />

{#if scrolled}
	<div class="rsl-stickybar">
		<div class="rsl-container rsl-stickybar-inner">
			<a href="/g/" class="rsl-stickybar-wordmark">BEING&nbsp;MUSLIM</a>
			<nav class="rsl-stickybar-links" aria-label="Condensed">
				{#each navLinks as link}
					<a href={link.href} class={link.label === 'Give' ? 'rsl-stickybar-give' : ''}>{link.label}</a>
				{/each}
			</nav>
		</div>
	</div>
{/if}

<header class="rsl-masthead">
	<div class="rsl-container">
		<div class="rsl-masthead-topline" aria-hidden="true"></div>

		<div class="rsl-dateline">
			<span>Est. 2015</span>
			<span>A Practical Guide to the Faith</span>
			<span>Edition №&nbsp;1</span>
		</div>

		<div class="rsl-wordmark">
			<a href="/g/">BEING<span class="rsl-wordmark-amp">&nbsp;·&nbsp;</span>MUSLIM</a>
		</div>
	</div>

	<nav class="rsl-masthead-nav" aria-label="Primary">
		<div class="rsl-container">
			<div class="rsl-masthead-links">
				{#each navLinks as link}
					<a href={link.href}>{link.label}</a>
				{/each}
			</div>

			<details class="rsl-mobile-nav">
				<summary><span class="rsl-mobile-glyph" aria-hidden="true">¶</span>Index</summary>
				<div class="rsl-mobile-nav-list">
					{#each navLinks as link}
						<a href={link.href}>{link.label}</a>
					{/each}
				</div>
			</details>
		</div>
	</nav>
</header>
