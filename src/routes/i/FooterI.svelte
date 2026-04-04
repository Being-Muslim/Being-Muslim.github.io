<script lang="ts">
</script>

<footer
	style="
    background: #0A0A0A;
    padding: 80px 24px 40px;
    text-align: center;
    font-family: 'Inter', sans-serif;
    border-top: 1px solid rgba(255,255,255,0.06);
  "
>
	<!-- Logo -->
	<div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 12px;">
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="#E8A838"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M12 22V8" />
			<path d="M12 8C12 8 8 4 8 2" />
			<path d="M12 8C12 8 16 4 16 2" />
			<path d="M12 14C12 14 8 10 6 9" />
			<path d="M12 14C12 14 16 10 18 9" />
			<path d="M12 19C12 19 9 16 7 15" />
			<path d="M12 19C12 19 15 16 17 15" />
		</svg>
		<span
			style="
        font-family: 'Playfair Display', serif;
        font-size: 16px;
        color: #FFFFFF;
      "
		>
			Being Muslim
		</span>
	</div>

	<!-- Tagline -->
	<p style="color: #888888; font-size: 13px; margin-bottom: 32px; letter-spacing: 0.02em;">
		A guide for those beginning their journey
	</p>

	<!-- Links -->
	<div
		style="
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 8px 24px;
      margin-bottom: 32px;
    "
	>
		{#each [
			{ label: 'Learn', href: '/i/courses/' },
			{ label: 'Convert', href: '/i/convert/' },
			{ label: 'Shop', href: '/i/shop/' },
			{ label: 'Community', href: '/i/community/' },
			{ label: 'Support', href: '/i/give/' }
		] as link}
			<a
				href={link.href}
				style="
          color: #888888;
          text-decoration: none;
          font-size: 13px;
          transition: color 0.3s ease;
        "
				onmouseenter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
				onmouseleave={(e) => (e.currentTarget.style.color = '#888888')}
			>
				{link.label}
			</a>
		{/each}
	</div>

	<!-- Social icons -->
	<div
		style="
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin-bottom: 40px;
    "
	>
		<!-- Instagram -->
		<a
			href="https://instagram.com/beingmuslimorg"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Instagram"
			style="color: #888888; transition: color 0.3s ease;"
			onmouseenter={(e) => (e.currentTarget.style.color = '#E8A838')}
			onmouseleave={(e) => (e.currentTarget.style.color = '#888888')}
		>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				<rect x="2" y="2" width="20" height="20" rx="5" />
				<circle cx="12" cy="12" r="5" />
				<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
			</svg>
		</a>
		<!-- Facebook -->
		<a
			href="https://facebook.com/beingmuslimorg"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Facebook"
			style="color: #888888; transition: color 0.3s ease;"
			onmouseenter={(e) => (e.currentTarget.style.color = '#E8A838')}
			onmouseleave={(e) => (e.currentTarget.style.color = '#888888')}
		>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
			</svg>
		</a>
		<!-- YouTube -->
		<a
			href="https://youtube.com/@beingmuslim"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="YouTube"
			style="color: #888888; transition: color 0.3s ease;"
			onmouseenter={(e) => (e.currentTarget.style.color = '#E8A838')}
			onmouseleave={(e) => (e.currentTarget.style.color = '#888888')}
		>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
				<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
			</svg>
		</a>
		<!-- X / Twitter -->
		<a
			href="https://x.com/beingmuslimorg"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="X"
			style="color: #888888; transition: color 0.3s ease;"
			onmouseenter={(e) => (e.currentTarget.style.color = '#E8A838')}
			onmouseleave={(e) => (e.currentTarget.style.color = '#888888')}
		>
			<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
				<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
			</svg>
		</a>
	</div>

	<!-- Copyright -->
	<p style="color: #555555; font-size: 12px;">
		&copy; {new Date().getFullYear()} Being Muslim. All rights reserved.
	</p>
</footer>
