<footer
	style="
		background: #FFFFFF;
		border-top: 1px solid #E5E5E5;
		padding: 20px 0;
	"
>
	<div
		style="
			max-width: 1200px;
			margin: 0 auto;
			padding: 0 24px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
			gap: 12px;
		"
	>
		<span
			style="
				font-family: 'Inter', sans-serif;
				font-size: 12px;
				font-weight: 300;
				color: #999;
			"
		>
			&copy; 2026 The Being Muslim Project
		</span>
		<div style="display: flex; gap: 24px;">
			{#each [
				{ label: 'Learn', href: '/d/learn' },
				{ label: 'Convert', href: '/d/convert' },
				{ label: 'Products', href: '/d/shop' },
				{ label: 'Contact', href: '/d/contact' }
			] as link}
				<a
					href={link.href}
					style="
						font-family: 'Inter', sans-serif;
						font-size: 12px;
						font-weight: 300;
						color: #999;
						text-decoration: none;
						transition: color 0.2s;
					"
					onmouseenter={(e) => (e.currentTarget.style.color = '#111')}
					onmouseleave={(e) => (e.currentTarget.style.color = '#999')}
				>
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</footer>
