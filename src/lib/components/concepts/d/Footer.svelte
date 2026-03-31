<script lang="ts">
	import { base } from '$app/paths';
	import { footerLinks } from '$lib/data/mock.js';
	import { withPrefix } from '$lib/data/utils.js';

	const p = (href: string) => withPrefix('/d', href);

	const sections = [
		{ title: 'Learn', links: footerLinks.learn },
		{ title: 'Shop', links: footerLinks.shop },
		{ title: 'Community', links: footerLinks.community },
		{ title: 'About', links: footerLinks.about }
	];
</script>

<!-- Split footer: bronze-tinted left, dark links right -->
<footer class="w-full">
	<div class="grid grid-cols-1 md:grid-cols-5">
		<!-- Left panel: bronze-tinted brand -->
		<div class="col-span-2 bg-accent-primary/10 px-8 py-16 md:px-12 md:py-24">
			<a href={p('/')} class="font-display text-2xl font-light text-text-primary">
				Being Muslim
			</a>
			<hr class="bronze-rule my-5 w-12" />
			<p class="max-w-xs text-sm leading-relaxed text-text-secondary">
				Empowering converts and beginners on their Islamic journey through education, community,
				and support.
			</p>
			<div class="mt-8 flex gap-3">
				{#each ['Instagram', 'YouTube', 'Facebook', 'X'] as platform}
					<a
						href="#"
						class="flex h-8 w-8 items-center justify-center rounded-sm border border-accent-primary/20 text-[10px] text-text-secondary transition-colors hover:border-accent-primary hover:text-accent-primary"
						aria-label={platform}
					>
						{platform[0]}
					</a>
				{/each}
			</div>
		</div>

		<!-- Right panel: dark link columns -->
		<div class="col-span-3 bg-bg-primary px-8 py-16 md:px-12 md:py-24">
			<div class="grid grid-cols-2 gap-8 sm:grid-cols-4">
				{#each sections as section}
					<div>
						<h3
							class="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent-primary"
						>
							{section.title}
						</h3>
						<ul class="space-y-3">
							{#each section.links as link}
								<li>
									<a
										href={p(link.href)}
										class="text-sm text-text-secondary transition-colors hover:text-text-primary"
									>
										{link.label}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>

			<hr class="bronze-rule mt-12 mb-6" />
			<div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
				<p class="text-xs text-text-secondary">
					&copy; {new Date().getFullYear()} The Being Muslim Project
				</p>
				<div class="flex gap-6">
					<a href="{base}/privacy" class="text-xs text-text-secondary hover:text-accent-primary"
						>Privacy</a
					>
					<a href="{base}/terms" class="text-xs text-text-secondary hover:text-accent-primary"
						>Terms</a
					>
					<a href="{base}/contact" class="text-xs text-text-secondary hover:text-accent-primary"
						>Contact</a
					>
				</div>
			</div>
		</div>
	</div>
</footer>
