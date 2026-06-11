<script lang="ts">
	import { footerLinks } from '$lib/data/mock.js';

	const columns = [
		{ heading: 'Learn', links: footerLinks.learn },
		{ heading: 'The Press', links: footerLinks.shop },
		{ heading: 'Community', links: footerLinks.community },
		{ heading: 'The Project', links: footerLinks.about }
	] as const;

	const year = new Date().getFullYear();
</script>

<footer class="rsl-footer">
	<div class="rsl-container">
		<div class="rsl-footer-rule" aria-hidden="true"></div>

		<div class="rsl-footer-body">
			<div class="rsl-footer-mast">
				<span class="rsl-footer-orn" aria-hidden="true">❡</span>
				<p class="rsl-footer-wordmark">BEING MUSLIM</p>
				<p class="rsl-footer-tagline">A practical guide to the faith, for those beginning, returning, and deepening.</p>
			</div>

			<div class="rsl-footer-cols">
				{#each columns as col}
					<div class="rsl-footer-col">
						<span class="rsl-meta rsl-footer-col-head">{col.heading}</span>
						{#each col.links as link}
							<a href={link.href}>{link.label}</a>
						{/each}
					</div>
				{/each}
			</div>

			<div class="rsl-footer-fineprint">
				<p>
					Colophon — Set in Newsreader &amp; Work Sans<span class="rsl-footer-dot" aria-hidden="true">※</span>Printed on
					paper №&nbsp;FBF8F1<span class="rsl-footer-dot" aria-hidden="true">※</span>Published by The Being Muslim Project
				</p>
				<p>
					&copy; {year} The Being Muslim Project<span class="rsl-footer-dot" aria-hidden="true">·</span>All rights
					reserved<span class="rsl-footer-dot" aria-hidden="true">·</span><a href="/privacy" class="rsl-inline-link">Privacy</a><span class="rsl-footer-dot" aria-hidden="true">·</span><a href="/terms" class="rsl-inline-link">Terms</a>
				</p>
			</div>
		</div>
	</div>
</footer>
