<script lang="ts">
	import { footerLinks } from '$lib/data/mock.js';

	const columns = [
		{ heading: 'Learn', links: footerLinks.learn },
		{ heading: 'Shop', links: footerLinks.shop },
		{ heading: 'Community', links: footerLinks.community },
		{ heading: 'About', links: footerLinks.about }
	];

	const year = new Date().getFullYear();
</script>

<footer class="layl-footer">
	<div class="layl-container">
		<div class="layl-footer-grid">
			<!-- Brand -->
			<div class="layl-footer-brand">
				<a href="/f" class="layl-wordmark" aria-label="Being Muslim — home">
					<span class="layl-wordmark-star" aria-hidden="true">
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
							<rect x="4.7" y="4.7" width="14.6" height="14.6" />
							<rect x="4.7" y="4.7" width="14.6" height="14.6" transform="rotate(45 12 12)" />
						</svg>
					</span>
					<span class="layl-wordmark-text">Being Muslim</span>
				</a>
				<p class="layl-footer-tagline">
					Empowering converts and beginners on their Islamic journey through education, community,
					and support.
				</p>
				<p class="layl-footer-verse">
					&ldquo;And it is He who made the night for you as clothing, and sleep a rest.&rdquo;
				</p>
			</div>

			<!-- Link columns -->
			{#each columns as column}
				<div>
					<h4 class="layl-footer-heading">{column.heading}</h4>
					{#each column.links as link}
						<a href={link.href} class="layl-footer-link">{link.label}</a>
					{/each}
				</div>
			{/each}
		</div>

		<!-- Bottom bar -->
		<div class="layl-footer-bottom">
			<p class="layl-footer-copy">&copy; {year} The Being Muslim Project. All rights reserved.</p>
			<div class="layl-footer-bottom-links">
				<a href="/privacy">Privacy</a>
				<a href="/terms">Terms</a>
				<a href="/contact">Contact</a>
			</div>
		</div>
	</div>
</footer>
