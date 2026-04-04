<script lang="ts">
	const linkGroups = [
		{
			title: 'Explore',
			links: [
				{ label: 'Articles', href: '/j/' },
				{ label: 'Courses', href: '/j/' },
				{ label: 'Community', href: '/j/' },
				{ label: 'Videos', href: '/j/' }
			]
		},
		{
			title: 'Shop',
			links: [
				{ label: 'The Book', href: '/j/' },
				{ label: 'Boxed Set', href: '/j/' },
				{ label: 'Prayer Cards', href: '/j/' },
				{ label: 'eBook', href: '/j/' }
			]
		},
		{
			title: 'Support',
			links: [
				{ label: 'Donate', href: '/j/' },
				{ label: 'Sponsor', href: '/j/' },
				{ label: 'Volunteer', href: '/j/' },
				{ label: 'Contact', href: '/j/' }
			]
		}
	];
</script>

<footer class="footer">
	<div class="footer__line"></div>
	<div class="footer__inner">
		<div class="footer__brand">
			<span class="footer__title">Being Muslim</span>
			<p class="footer__tagline">A practical guide for those beginning their journey in Islam.</p>
		</div>
		<div class="footer__links">
			{#each linkGroups as group}
				<div class="footer__group">
					<h4 class="footer__group-title">{group.title}</h4>
					{#each group.links as link}
						<a href={link.href} class="footer__link">{link.label}</a>
					{/each}
				</div>
			{/each}
		</div>
	</div>
	<div class="footer__bottom">
		<p class="footer__copy">&copy; {new Date().getFullYear()} Being Muslim. All rights reserved.</p>
	</div>
</footer>

<style>
	.footer {
		background: var(--bm-bg);
		padding: 0 24px;
	}

	.footer__line {
		max-width: 1200px;
		margin: 0 auto;
		height: 1px;
		background: var(--bm-gray);
		opacity: 0.3;
	}

	.footer__inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 64px 0 48px;
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		gap: 48px;
	}

	.footer__brand {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.footer__title {
		font-family: var(--bm-font-serif);
		font-style: italic;
		font-size: 32px;
		color: var(--bm-black);
	}

	.footer__tagline {
		font-size: 14px;
		color: var(--bm-gray);
		line-height: 1.6;
		max-width: 280px;
	}

	.footer__links {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 32px;
	}

	.footer__group {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.footer__group-title {
		font-family: var(--bm-font-sans);
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--bm-black);
		margin-bottom: 4px;
	}

	.footer__link {
		font-size: 14px;
		color: var(--bm-gray);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.footer__link:hover {
		color: var(--bm-orange);
	}

	.footer__bottom {
		max-width: 1200px;
		margin: 0 auto;
		padding: 24px 0;
		border-top: 1px solid rgba(154, 149, 144, 0.15);
	}

	.footer__copy {
		font-size: 12px;
		color: var(--bm-gray);
	}

	@media (max-width: 768px) {
		.footer__inner {
			grid-template-columns: 1fr;
			padding: 48px 0 32px;
		}

		.footer__links {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 480px) {
		.footer__links {
			grid-template-columns: 1fr;
		}
	}
</style>
