<script lang="ts">
	import { Menu, X, ArrowRight } from 'lucide-svelte';

	let mobileOpen = $state(false);
	let scrolled = $state(false);
	let activeMenu = $state<string | null>(null);
	let closeTimeout = $state<ReturnType<typeof setTimeout> | null>(null);

	function handleScroll() {
		scrolled = window.scrollY > 20;
	}

	function openMenu(label: string) {
		if (closeTimeout) clearTimeout(closeTimeout);
		activeMenu = label;
	}

	function scheduleClose() {
		closeTimeout = setTimeout(() => {
			activeMenu = null;
		}, 150);
	}

	function cancelClose() {
		if (closeTimeout) clearTimeout(closeTimeout);
	}

	const megaMenus: Record<string, { columns: { heading?: string; links: { label: string; href: string; desc?: string }[] }[]; featured?: { title: string; desc: string; href: string; img: string } }> = {
		Learn: {
			columns: [
				{
					heading: 'Resources',
					links: [
						{ label: 'Articles', href: '/c-staging/learn', desc: 'In-depth guides on faith and practice' },
						{ label: 'Courses', href: '/c-staging/learn', desc: 'Structured learning at your own pace' },
						{ label: 'Brief Overview of Islam', href: '/c-staging/learn/brief-overview-of-islam', desc: 'Core beliefs, practices, and history' }
					]
				},
				{
					heading: 'Popular Topics',
					links: [
						{ label: "Beginner's Guide", href: '/c-staging/learn/beginners-guide', desc: 'First steps for new Muslims' },
						{ label: 'Islam and Other Faiths', href: '/c-staging/learn/islam-and-other-faiths', desc: 'Common ground and key differences' },
						{ label: 'View All Resources', href: '/c-staging/learn' }
					]
				}
			],
			featured: {
				title: 'Foundations of Faith',
				desc: 'A 24-lesson course covering the essentials.',
				href: '/c-staging/learn',
				img: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=400&q=80&auto=format&fit=crop'
			}
		},
		Convert: {
			columns: [
				{
					heading: 'Your Journey',
					links: [
						{ label: 'Ready to Convert?', href: '/c-staging/convert', desc: 'Take the next step with guidance and support' },
						{ label: 'What to Expect', href: '/c-staging/convert', desc: 'Understanding the process and what comes after' },
						{ label: 'FAQ for New Muslims', href: '/c-staging/convert', desc: 'Answers to the most common questions' }
					]
				},
				{
					heading: 'Support',
					links: [
						{ label: 'Find a Community', href: '/c-staging/convert', desc: 'Connect with Muslims near you' },
						{ label: 'Mentorship Program', href: '/c-staging/convert', desc: 'One-on-one guidance from experienced Muslims' },
						{ label: 'Start Your Journey', href: '/c-staging/convert' }
					]
				}
			]
		},
		Products: {
			columns: [
				{
					heading: 'Products',
					links: [
						{ label: 'Being Muslim: A Practical Guide', href: '/c-staging/shop/book', desc: 'The bestselling book' },
						{ label: 'The Complete Boxed Set', href: '/c-staging/shop/boxed-set', desc: 'Book, prayer cards, and more' },
						{ label: 'Prayer Reference Cards', href: '/c-staging/shop/prayer-cards', desc: 'Keep by your prayer mat' },
						{ label: 'Digital Edition (eBook)', href: '/c-staging/shop/ebook', desc: 'Read anywhere, instantly' }
					]
				}
			],
			featured: {
				title: 'The Complete Boxed Set',
				desc: 'Everything you need in one beautiful package.',
				href: '/c-staging/shop/boxed-set',
				img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg'
			}
		},
		Support: {
			columns: [
				{
					heading: 'Get Involved',
					links: [
						{ label: 'Donate', href: '/c-staging/support', desc: 'Help fund resources for new Muslims' },
						{ label: 'Sponsor a Boxed Set', href: '/c-staging/support', desc: 'Gift a set to someone in need' },
						{ label: 'Volunteer', href: '/c-staging/support', desc: 'Join our team of contributors' },
						{ label: 'Support the Mission', href: '/c-staging/support' }
					]
				}
			]
		}
	};
</script>

<svelte:window onscroll={handleScroll} />

<header class="fixed top-0 left-0 right-0 z-50" style="padding: 16px 24px;">
	<!-- Desktop: pill navbar (always visible on md+) -->
	<nav
		class="bm-navbar-pill hidden md:flex"
		style="
			max-width: 1100px;
			margin: 0 auto;
			align-items: center;
			justify-content: space-between;
			padding: 10px 12px 10px 20px;
			border-radius: 999px;
			backdrop-filter: blur(20px);
			-webkit-backdrop-filter: blur(20px);
			border: 1px solid rgba(255,255,255,0.15);
			background: rgba(255,255,255,0.08);
			box-shadow: none;
			transition: all 0.3s;
		"
	>
		<a href="/c-staging" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
			<img src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png" alt="Being Muslim" style="height: 28px; width: 28px;" />
			<span style="font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; color: #fff;">Being Muslim</span>
		</a>
		<div style="display: flex; align-items: center; gap: 28px;">
			{#each [
				{ label: 'Home', href: '/c-staging' },
				{ label: 'Learn', href: '/c-staging/learn' },
				{ label: 'Convert', href: '/c-staging/convert' },
				{ label: 'Products', href: '/c-staging/shop' },
				{ label: 'Support', href: '/c-staging/support' }
			] as link}
				<div
					class="relative"
					onmouseenter={() => megaMenus[link.label] ? openMenu(link.label) : (activeMenu = null)}
					onmouseleave={scheduleClose}
				>
					<a href={link.href} style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; color: rgba(255,255,255,0.85); padding: 6px 14px; border-radius: 999px; display: inline-block;">{link.label}</a>
				</div>
			{/each}
		</div>
		<a href="/c-staging/contact" style="align-items: center; padding: 8px 20px; border-radius: 999px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; transition: all 0.3s; background: rgba(255,255,255,0.15); color: #fff; border: 1px solid rgba(255,255,255,0.25);">Contact</a>
	</nav>

	<!-- Mega Menu Dropdown -->
	{#if activeMenu && megaMenus[activeMenu]}
		{@const menu = megaMenus[activeMenu]}
		<div
			class="hidden md:block"
			onmouseenter={cancelClose}
			onmouseleave={scheduleClose}
			style="max-width: 1100px; margin: 8px auto 0; border-radius: 20px; backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.15); background: rgba(30,28,24,0.85); box-shadow: 0 8px 32px rgba(0,0,0,0.3); animation: megaFadeIn 0.15s ease-out;"
		>
			<div style="padding: 28px 32px;">
				<div style="display: flex; gap: 48px;">
					<!-- Link columns -->
					{#each menu.columns as column}
						<div style="flex: 1; min-width: 200px;">
							{#if column.heading}
								<p style="font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 16px;">{column.heading}</p>
							{/if}
							{#each column.links as item}
								<a href={item.href} style="display: block; text-decoration: none; padding: 8px 0; transition: opacity 0.15s;" class="mega-link">
									<span style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #fff; display: block;">{item.label}</span>
									{#if item.desc}
										<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: rgba(255,255,255,0.45); display: block; margin-top: 2px;">{item.desc}</span>
									{/if}
								</a>
							{/each}
						</div>
					{/each}

					<!-- Featured card (optional) -->
					{#if menu.featured}
						<div style="flex: 0 0 260px;">
							<a href={menu.featured.href} style="display: block; text-decoration: none; border-radius: 12px; overflow: hidden; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1);">
								<div style="aspect-ratio: 16/10; overflow: hidden;">
									<img src={menu.featured.img} alt={menu.featured.title} style="width: 100%; height: 100%; object-fit: cover; display: block;" />
								</div>
								<div style="padding: 16px;">
									<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; color: #fff; margin: 0 0 4px;">{menu.featured.title}</p>
									<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: rgba(255,255,255,0.45); margin: 0;">{menu.featured.desc}</p>
								</div>
							</a>
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/if}

	<!-- Mobile: single glass container that expands -->
	<div
		class="mobile-shell md:hidden"
		class:open={mobileOpen}
	>
		<!-- Top row: logo + hamburger -->
		<div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px 10px 20px;">
			<a href="/c-staging" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
				<img src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png" alt="Being Muslim" style="height: 28px; width: 28px;" />
				<span style="font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; color: #fff;">Being Muslim</span>
			</a>
			<button
				style="padding: 8px; border: none; background: none; cursor: pointer; color: #fff;"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label="Toggle menu"
			>
				{#if mobileOpen}<X class="h-5 w-5" />{:else}<Menu class="h-5 w-5" />{/if}
			</button>
		</div>

		<!-- Expandable links -->
		<div class="mobile-links">
			<div style="padding: 4px 20px 16px;">
				{#each [
					{ label: 'Home', href: '/c-staging' },
					{ label: 'Learn', href: '/c-staging/learn' },
					{ label: 'Convert', href: '/c-staging/convert' },
					{ label: 'Products', href: '/c-staging/shop' },
					{ label: 'Support', href: '/c-staging/support' }
				] as link}
					<a href={link.href} style="display: block; padding: 10px 0; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #fff; text-decoration: none;" onclick={() => (mobileOpen = false)}>{link.label}</a>
				{/each}
				<a href="/c-staging/contact" style="display: block; margin-top: 8px; text-align: center; background: rgba(255,255,255,0.15); color: #fff; padding: 10px; border-radius: 999px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; text-decoration: none; border: 1px solid rgba(255,255,255,0.25);" onclick={() => (mobileOpen = false)}>Contact</a>
			</div>
		</div>
	</div>
</header>

<style>
	@keyframes megaFadeIn {
		from { opacity: 0; transform: translateY(-4px); }
		to { opacity: 1; transform: translateY(0); }
	}
	:global(.mega-link:hover) {
		opacity: 0.7;
	}
	.mobile-shell {
		max-width: 1100px;
		margin: 0 auto;
		border-radius: 24px;
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255,255,255,0.15);
		background: rgba(255,255,255,0.08);
		overflow: hidden;
	}
	.mobile-links {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.mobile-shell.open .mobile-links {
		max-height: 400px;
	}
</style>
