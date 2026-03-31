<script lang="ts">
	import { base } from '$app/paths';
	import { footerLinks } from '$lib/data/mock.js';
	import { withPrefix } from '$lib/data/utils.js';

	const p = (href: string) => withPrefix('/c', href);

	const sections = [
		{ title: 'Learn', links: footerLinks.learn },
		{ title: 'Shop', links: footerLinks.shop },
		{ title: 'Community', links: footerLinks.community },
		{ title: 'About', links: footerLinks.about }
	];
</script>

<!-- Tile-based footer on gray bg -->
<footer class="bg-[#F2F2F7] pt-12 pb-8">
	<div class="mx-auto max-w-[1400px] px-4 sm:px-6">
		<!-- 4 tiles grid -->
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each sections as section}
				<div class="rounded-[20px] bg-white p-6">
					<h3 class="font-display text-sm font-bold text-[#1C1C1E]">{section.title}</h3>
					<ul class="mt-4 space-y-2.5">
						{#each section.links as link}
							<li>
								<a href={p(link.href)} class="text-[13px] text-[#8E8E93] transition-colors hover:text-[#007AFF]">
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- Bottom strip -->
		<div class="mt-8 flex flex-col items-center justify-between gap-3 rounded-[20px] bg-white px-6 py-4 sm:flex-row">
			<div class="flex items-center gap-2">
				<span class="flex h-5 w-5 items-center justify-center rounded-full bg-[#007AFF]">
					<span class="text-[8px] font-bold text-white">BM</span>
				</span>
				<p class="text-xs text-[#8E8E93]">&copy; {new Date().getFullYear()} The Being Muslim Project. All rights reserved.</p>
			</div>
			<div class="flex gap-4">
				<a href="{base}/privacy" class="text-xs text-[#8E8E93] hover:text-[#007AFF]">Privacy</a>
				<a href="{base}/terms" class="text-xs text-[#8E8E93] hover:text-[#007AFF]">Terms</a>
				<a href="{base}/contact" class="text-xs text-[#8E8E93] hover:text-[#007AFF]">Contact</a>
			</div>
		</div>
	</div>
</footer>
