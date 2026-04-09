<footer style="background: var(--e-midnight); padding: 48px 0 0;">
	<div class="e-container">
		<!-- Top row: links -->
		<div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 32px; padding-bottom: 40px;">
			<!-- Brand -->
			<div style="min-width: 180px;">
				<a href="/e" style="text-decoration: none; display: inline-block; margin-bottom: 12px;">
					<span style="font-family: 'Space Grotesk', sans-serif; font-size: 17px; font-weight: 600; color: #FAFAF8;">Being Muslim</span>
				</a>
				<p style="font-family: 'Inter', sans-serif; font-size: 13px; color: rgba(250, 250, 248, 0.4); line-height: 1.6; max-width: 240px;">
					Empowering converts and beginners on their Islamic journey.
				</p>
			</div>

			<!-- Link groups -->
			<div style="display: flex; flex-wrap: wrap; gap: 48px;">
				<div>
					<h4 style="font-family: 'Space Grotesk', sans-serif; font-size: 11px; font-weight: 600; color: rgba(250, 250, 248, 0.3); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 14px;">Learn</h4>
					{#each [
						{ label: 'Articles', href: '/e/learn' },
						{ label: 'Courses', href: '/e/learn' },
						{ label: 'Resources', href: '/e/learn' }
					] as link}
						<a href={link.href} class="e-footer-link" style="display: block; padding: 3px 0;">{link.label}</a>
					{/each}
				</div>
				<div>
					<h4 style="font-family: 'Space Grotesk', sans-serif; font-size: 11px; font-weight: 600; color: rgba(250, 250, 248, 0.3); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 14px;">Products</h4>
					{#each [
						{ label: 'The Book', href: '/e/shop' },
						{ label: 'Boxed Set', href: '/e/shop' },
						{ label: 'Prayer Cards', href: '/e/shop' },
						{ label: 'eBook', href: '/e/shop' }
					] as link}
						<a href={link.href} class="e-footer-link" style="display: block; padding: 3px 0;">{link.label}</a>
					{/each}
				</div>
				<div>
					<h4 style="font-family: 'Space Grotesk', sans-serif; font-size: 11px; font-weight: 600; color: rgba(250, 250, 248, 0.3); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 14px;">Company</h4>
					{#each [
						{ label: 'About', href: '/e/contact' },
						{ label: 'Contact', href: '/e/contact' },
						{ label: 'Convert', href: '/e/convert' },
						{ label: 'Support', href: '/e/support' }
					] as link}
						<a href={link.href} class="e-footer-link" style="display: block; padding: 3px 0;">{link.label}</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Bottom bar -->
		<div style="border-top: 1px solid rgba(250, 250, 248, 0.06); padding: 20px 0; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px;">
			<p style="font-family: 'Inter', sans-serif; font-size: 12px; color: rgba(250, 250, 248, 0.25);">&copy; 2026 The Being Muslim Project. All rights reserved.</p>
			<div style="display: flex; gap: 24px;">
				<a href="/e" class="e-footer-link" style="font-size: 12px;">Privacy</a>
				<a href="/e" class="e-footer-link" style="font-size: 12px;">Terms</a>
				<a href="/e/contact" class="e-footer-link" style="font-size: 12px;">Contact</a>
			</div>
		</div>
	</div>
</footer>
