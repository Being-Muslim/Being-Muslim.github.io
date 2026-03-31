<script lang="ts">
	import { base } from '$app/paths';
	import { cn } from '$lib/utils/cn.js';
	import { footerLinks } from '$lib/data/mock.js';

	let { class: className }: { class?: string } = $props();

	const sections = [
		{ title: 'Learn', links: footerLinks.learn },
		{ title: 'Shop', links: footerLinks.shop },
		{ title: 'Community', links: footerLinks.community },
		{ title: 'About', links: footerLinks.about }
	];
</script>

<footer class={cn('bg-bg-dark text-text-cream', className)}>
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<!-- Main Footer -->
		<div class="grid gap-8 py-16 sm:grid-cols-2 lg:grid-cols-5">
			<!-- Brand -->
			<div class="lg:col-span-1">
				<a href="{base}/" class="mb-4 flex items-center gap-2">
					<div class="flex h-9 w-9 items-center justify-center rounded-full bg-accent-primary">
						<svg viewBox="0 0 24 24" class="h-5 w-5 text-text-cream" fill="currentColor">
							<path d="M12 2C10.9 4.5 8 6 8 9c0 2 1 3.5 2.5 4.5C9.5 14 9 15 9 16.5c0 2 1.5 3.5 3 5.5 1.5-2 3-3.5 3-5.5 0-1.5-.5-2.5-1.5-3C14.9 12.5 16 11 16 9c0-3-2.9-4.5-4-7z" />
						</svg>
					</div>
					<span class="font-display text-lg font-bold">Being Muslim</span>
				</a>
				<p class="mt-3 text-sm leading-relaxed text-text-cream/70">
					Empowering converts and beginners on their Islamic journey through education, community, and support.
				</p>
				<!-- Social Links -->
				<div class="mt-6 flex gap-3">
					{#each ['Instagram', 'YouTube', 'Facebook', 'X'] as platform}
						<a
							href="#"
							class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm text-text-cream/70 transition-colors hover:bg-white/20 hover:text-text-cream"
							aria-label={platform}
						>
							{platform[0]}
						</a>
					{/each}
				</div>
			</div>

			<!-- Link Columns -->
			{#each sections as section}
				<div>
					<h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-text-cream/50">
						{section.title}
					</h3>
					<ul class="space-y-2.5">
						{#each section.links as link}
							<li>
								<a
									href={link.href}
									class="text-sm text-text-cream/70 transition-colors hover:text-text-cream"
								>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- Bottom Bar -->
		<div class="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
			<p class="text-xs text-text-cream/50">
				&copy; {new Date().getFullYear()} The Being Muslim Project. All rights reserved.
			</p>
			<div class="flex gap-4">
				<a href="{base}/privacy" class="text-xs text-text-cream/50 hover:text-text-cream">Privacy</a>
				<a href="{base}/terms" class="text-xs text-text-cream/50 hover:text-text-cream">Terms</a>
				<a href="{base}/contact" class="text-xs text-text-cream/50 hover:text-text-cream">Contact</a>
			</div>
		</div>
	</div>
</footer>
