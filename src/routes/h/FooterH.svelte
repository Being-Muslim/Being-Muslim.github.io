<script lang="ts">
	import { Heart } from 'lucide-svelte';
	import { footerLinks } from '$lib/data/mock.js';

	const columns = [
		{ heading: 'Learn', links: footerLinks.learn },
		{ heading: 'Shop', links: footerLinks.shop },
		{ heading: 'Community', links: footerLinks.community },
		{ heading: 'About', links: footerLinks.about }
	];
</script>

<footer class="rwd-footer">
	<div class="rwd-container">
		<div class="rwd-footer-grid">
			<div class="rwd-footer-brand">
				<a href="/h/" class="rwd-nav-logo" aria-label="Being Muslim — home">
					<span class="rwd-nav-logo-mark" style="background: #fff;" aria-hidden="true">
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
				<p>
					A friendly companion for converts and beginners — education, community, and support for
					every step of the journey.
				</p>
			</div>

			{#each columns as column}
				<div class="rwd-footer-col">
					<h4>{column.heading}</h4>
					{#each column.links as link}
						<a href={link.href}>{link.label}</a>
					{/each}
				</div>
			{/each}
		</div>

		<div class="rwd-footer-bottom">
			<span>&copy; 2026 The Being Muslim Project. All rights reserved.</span>
			<span class="rwd-footer-heart">
				Made with <Heart size={13} fill="currentColor" /> for every new beginning
			</span>
		</div>
	</div>
</footer>
