<script lang="ts">
	import { footerLinks } from '$lib/data/mock.js';

	const columns = [
		{ heading: 'Learn', links: footerLinks.learn },
		{ heading: 'Shop', links: footerLinks.shop },
		{ heading: 'Community', links: footerLinks.community },
		{ heading: 'About', links: footerLinks.about }
	];
</script>

<footer class="zlj-footer">
	<div class="zlj-container">
		<div class="zlj-footer-grid">
			<div class="zlj-footer-brand">
				<a href="/i/" class="zlj-wordmark">
					BEING<span class="zlj-star" aria-hidden="true">✶</span>MUSLIM
				</a>
				<p>
					Practical knowledge for living your faith — the book, the boxed set, and a community
					behind every new Muslim.
				</p>
			</div>

			{#each columns as column (column.heading)}
				<div class="zlj-footer-col">
					<h4>{column.heading}</h4>
					<ul>
						{#each column.links as link (link.href)}
							<li><a href={link.href}>{link.label}</a></li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>

	<div class="zlj-footer-mark" aria-hidden="true">
		<span>Being<span class="zlj-star">✶</span>Muslim</span>
	</div>

	<div class="zlj-container">
		<div class="zlj-footer-bottom">
			<p>© 2026 The Being Muslim Project ✶ All rights reserved</p>
			<p>
				<a href="/privacy">Privacy</a>
				&nbsp;·&nbsp;
				<a href="/terms">Terms</a>
				&nbsp;·&nbsp;
				<a href="/contact">Contact</a>
			</p>
		</div>
	</div>
</footer>
