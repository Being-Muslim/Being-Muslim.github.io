<footer style="background: #191918; padding: 64px 0 0;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr; gap: 40px; padding-bottom: 48px;">
			<!-- Brand -->
			<div>
				<a href="/b" style="display: flex; align-items: center; gap: 10px; text-decoration: none; margin-bottom: 16px;">
					<img src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png" alt="Being Muslim" style="height: 32px; width: 32px;" />
					<span style="font-family: 'Source Serif 4', serif; font-size: 18px; color: #fff;">Being Muslim</span>
				</a>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.6; max-width: 260px; margin-bottom: 20px;">
					Empowering converts and beginners on their Islamic journey through education, community, and support.
				</p>
				<!-- Social Icons -->
				<div style="display: flex; gap: 10px;">
					{#each [
						{ label: 'Instagram', icon: 'M12 2.2c2.7 0 3 0 4.1.1 1 .1 1.5.2 1.9.4.5.2.8.4 1.1.7.3.3.5.7.7 1.1.2.4.3.9.4 1.9 0 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 1-.2 1.5-.4 1.9-.2.5-.4.8-.7 1.1-.3.3-.7.5-1.1.7-.4.2-.9.3-1.9.4-1.1 0-1.4.1-4.1.1s-3 0-4.1-.1c-1-.1-1.5-.2-1.9-.4-.5-.2-.8-.4-1.1-.7-.3-.3-.5-.7-.7-1.1-.2-.4-.3-.9-.4-1.9 0-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c.1-1 .2-1.5.4-1.9.2-.5.4-.8.7-1.1.3-.3.7-.5 1.1-.7.4-.2.9-.3 1.9-.4 1.1 0 1.4-.1 4.1-.1M12 0C9.3 0 8.9 0 7.8.1 6.7.1 5.9.3 5.2.5c-.7.3-1.3.6-1.9 1.2C2.7 2.3 2.4 2.9 2.1 3.6c-.3.7-.4 1.5-.5 2.6C1.5 7.3 1.5 7.7 1.5 12s0 4.7.1 5.8c.1 1.1.2 1.9.5 2.6.3.7.6 1.3 1.2 1.9.6.6 1.2.9 1.9 1.2.7.3 1.5.4 2.6.5 1.1.1 1.5.1 5.8.1s4.7 0 5.8-.1c1.1-.1 1.9-.2 2.6-.5.7-.3 1.3-.6 1.9-1.2.6-.6.9-1.2 1.2-1.9.3-.7.4-1.5.5-2.6.1-1.1.1-1.5.1-5.8s0-4.7-.1-5.8c-.1-1.1-.2-1.9-.5-2.6-.3-.7-.6-1.3-1.2-1.9C19.7 1.1 19.1.8 18.4.5 17.7.3 16.9.1 15.8.1 14.7 0 14.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.5a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z' },
						{ label: 'YouTube', icon: 'M23.5 6.2c-.3-1-1-1.8-2-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.5.6c-1 .3-1.7 1.1-2 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1 1.8 2 2.1 1.9.6 9.5.6 9.5.6s7.6 0 9.5-.6c1-.3 1.7-1.1 2-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z' },
						{ label: 'Facebook', icon: 'M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 6 4.4 11 10.1 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.7.2 2.7.2v2.9h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4C19.6 23 24 18 24 12z' },
						{ label: 'X', icon: 'M18.2 2.3h3.5l-7.6 8.7L23 21.7h-7l-5.5-7.2-6.3 7.2H.7l8.1-9.3L.4 2.3h7.2l5 6.6 5.6-6.6zm-1.2 17.4h1.9L6.4 4.3H4.3l12.7 15.4z' }
					] as social}
						<a href="#" aria-label={social.label} class="bm-social-icon">
							<svg viewBox="0 0 24 24" style="width: 14px; height: 14px; fill: rgba(255,255,255,0.6);">
								<path d={social.icon} />
							</svg>
						</a>
					{/each}
				</div>
			</div>

			<!-- Learn -->
			<div>
				<h4 style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #fff; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">Learn</h4>
				{#each [
					{ label: 'Articles', href: '/b/learn' },
					{ label: 'Courses', href: '/b/learn' },
					{ label: 'Resources', href: '/b/learn' }
				] as link}
					<a href={link.href} class="bm-footer-link">{link.label}</a>
				{/each}
			</div>

			<!-- Shop -->
			<div>
				<h4 style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #fff; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">Shop</h4>
				{#each [
					{ label: 'The Book', href: '/b/shop' },
					{ label: 'Boxed Set', href: '/b/shop' },
					{ label: 'Prayer Cards', href: '/b/shop' },
					{ label: 'eBook', href: '/b/shop' }
				] as link}
					<a href={link.href} class="bm-footer-link">{link.label}</a>
				{/each}
			</div>

			<!-- Support -->
			<div>
				<h4 style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #fff; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">Support</h4>
				{#each [
					{ label: 'Donate', href: '/b/support' },
					{ label: 'Request Donation', href: '/b/support' },
					{ label: 'Volunteer', href: '/b/support' }
				] as link}
					<a href={link.href} class="bm-footer-link">{link.label}</a>
				{/each}
			</div>

			<!-- Company -->
			<div>
				<h4 style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #fff; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">Company</h4>
				{#each [
					{ label: 'About Us', href: '/b/contact' },
					{ label: 'Contact', href: '/b/contact' },
					{ label: 'Convert', href: '/b/convert' },
					{ label: 'Privacy Policy', href: '/b' }
				] as link}
					<a href={link.href} class="bm-footer-link">{link.label}</a>
				{/each}
			</div>
		</div>

		<!-- Bottom bar -->
		<div style="border-top: 1px solid rgba(255,255,255,0.08); padding: 20px 0; display: flex; justify-content: space-between; align-items: center;">
			<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: rgba(255,255,255,0.3);">&copy; 2026 The Being Muslim Project. All rights reserved.</p>
			<div style="display: flex; gap: 24px;">
				<a href="/b" class="bm-footer-link" style="font-size: 12px; color: rgba(255,255,255,0.3);">Privacy</a>
				<a href="/b" class="bm-footer-link" style="font-size: 12px; color: rgba(255,255,255,0.3);">Terms</a>
				<a href="/b/contact" class="bm-footer-link" style="font-size: 12px; color: rgba(255,255,255,0.3);">Contact</a>
			</div>
		</div>
	</div>
</footer>
