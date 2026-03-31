<script lang="ts">
	import { base } from '$app/paths';
	import { footerLinks } from '$lib/data/mock.js';
	import { withPrefix } from '$lib/data/utils.js';

	const p = (href: string) => withPrefix('/e', href);

	const sections = [
		{ title: 'Learn', links: footerLinks.learn },
		{ title: 'Shop', links: footerLinks.shop },
		{ title: 'Community', links: footerLinks.community },
		{ title: 'About', links: footerLinks.about }
	];
</script>

<!-- Dark Footer with glass-panel-dark tiles -->
<footer class="bg-[#1A2332] text-white">
	<div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
		<div class="grid gap-8 py-16 sm:grid-cols-2 lg:grid-cols-5">
			<!-- Brand -->
			<div class="lg:col-span-1">
				<a href={p('/')} class="flex items-center gap-2.5">
					<div class="flex h-9 w-9 items-center justify-center rounded-full bg-accent-primary">
						<svg viewBox="0 0 24 24" class="h-5 w-5 text-white" fill="currentColor">
							<path d="M12 2L9 7l-5 1 3.5 3.5L7 17l5-2.5L17 17l-.5-5.5L20 8l-5-1L12 2z" />
						</svg>
					</div>
					<span class="font-display text-lg font-bold">Being Muslim</span>
				</a>
				<p class="mt-3 text-sm leading-relaxed text-white/50">
					Empowering converts and beginners on their Islamic journey through education,
					community, and support.
				</p>
				<div class="mt-5 flex gap-3">
					{#each ['I', 'Y', 'F', 'X'] as letter}
						<a
							href="#"
							class="glass-panel-dark flex h-9 w-9 items-center justify-center text-sm text-white/50 transition-colors hover:text-accent-primary"
							aria-label="Social"
						>
							{letter}
						</a>
					{/each}
				</div>
			</div>

			{#each sections as section}
				<div class="glass-panel-dark p-5">
					<h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-primary">
						{section.title}
					</h3>
					<ul class="space-y-2.5">
						{#each section.links as link}
							<li>
								<a
									href={p(link.href)}
									class="text-sm text-white/50 transition-colors hover:text-white"
									>{link.label}</a
								>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div
			class="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row"
		>
			<p class="text-xs text-white/30">
				&copy; {new Date().getFullYear()} The Being Muslim Project. All rights reserved.
			</p>
			<div class="flex gap-4">
				<a href="{base}/privacy" class="text-xs text-white/30 hover:text-white">Privacy</a>
				<a href="{base}/terms" class="text-xs text-white/30 hover:text-white">Terms</a>
				<a href="{base}/contact" class="text-xs text-white/30 hover:text-white">Contact</a>
			</div>
		</div>
	</div>
</footer>
