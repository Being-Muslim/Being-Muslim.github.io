<script lang="ts">
	import { Heart } from 'lucide-svelte';
</script>

<footer style="background: #1E1E1E; color: #fff;">
	<div class="bm-container" style="padding-top: 64px;">
		<!-- Footer grid -->
		<div class="bm-grid-footer" style="border-bottom: 1px solid rgba(255,255,255,0.08);">
			<!-- Brand column -->
			<div>
				<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
					<img
						src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
						alt="Being Muslim"
						style="height: 32px; width: 32px;"
					/>
					<span style="font-family: var(--bm-font-serif); font-size: 20px; color: #fff;">Being Muslim</span>
				</div>
				<p style="font-size: 14px; line-height: 1.7; color: rgba(255,255,255,0.55); max-width: 280px; margin-bottom: 20px;">
					Supporting new Muslims on their journey with beautiful resources, a welcoming community, and guided learning.
				</p>
				<!-- Social icons -->
				<div style="display: flex; gap: 10px;">
					{#each ['facebook', 'instagram', 'youtube', 'twitter'] as platform}
						<a href="/l" class="bm-social-icon" aria-label={platform}>
							<svg width="16" height="16" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
								{#if platform === 'facebook'}
									<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
								{:else if platform === 'instagram'}
									<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="rgba(255,255,255,0.7)" stroke="none"/>
								{:else if platform === 'youtube'}
									<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="rgba(255,255,255,0.7)" stroke="none"/>
								{:else}
									<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
								{/if}
							</svg>
						</a>
					{/each}
				</div>
			</div>

			<!-- Learn column -->
			<div>
				<p style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.35); margin-bottom: 16px;">Learn</p>
				{#each ['About Islam', 'New Muslim Guide', 'Courses', 'Articles', 'Videos'] as link}
					<a href="/l" class="bm-footer-link">{link}</a>
				{/each}
			</div>

			<!-- Shop column -->
			<div>
				<p style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.35); margin-bottom: 16px;">Shop</p>
				{#each ['Being Muslim Book', 'Boxed Set', 'Prayer Cards', 'eBook', 'Gift Cards'] as link}
					<a href="/l" class="bm-footer-link">{link}</a>
				{/each}
			</div>

			<!-- Support column -->
			<div>
				<p style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.35); margin-bottom: 16px;">Support</p>
				{#each ['Sponsor a Set', 'Donate', 'Partner With Us', 'Volunteer', 'Contact'] as link}
					<a href="/l" class="bm-footer-link">{link}</a>
				{/each}
			</div>

			<!-- About column -->
			<div>
				<p style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.35); margin-bottom: 16px;">About</p>
				{#each ['Our Mission', 'Our Team', 'Dr. Asad Tarsin', 'Press', 'Privacy Policy'] as link}
					<a href="/l" class="bm-footer-link">{link}</a>
				{/each}
			</div>
		</div>

		<!-- Trust badge -->
		<div style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 24px 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
			<Heart style="width: 16px; height: 16px; color: #C9A84C;" />
			<p style="font-size: 13px; color: rgba(255,255,255,0.5); text-align: center;">
				100% of sponsored sets go directly to new Muslims
			</p>
		</div>

		<!-- Copyright -->
		<div style="padding: 20px 0; text-align: center;">
			<p style="font-size: 12px; color: rgba(255,255,255,0.3);">
				&copy; {new Date().getFullYear()} Being Muslim Project. All rights reserved.
			</p>
		</div>
	</div>
</footer>
