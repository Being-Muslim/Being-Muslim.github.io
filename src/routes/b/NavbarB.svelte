<script lang="ts">
	import { Menu, X, Droplets, Square } from 'lucide-svelte';

	let mobileOpen = $state(false);
	let scrolled = $state(false);
	let activeMenu = $state<string | null>(null);
	let closeTimeout = $state<ReturnType<typeof setTimeout> | null>(null);
	let navStyle = $state<'glass' | 'white'>('glass');

	// Theme tokens for the two nav styles (glass pill vs solid white pill)
	const T = $derived(
		navStyle === 'glass'
			? {
					pillBg: 'rgba(255,255,255,0.08)',
					pillBorder: 'rgba(255,255,255,0.15)',
					pillShadow: 'none',
					blur: 'blur(20px)',
					logoFilter: 'none',
					text: '#fff',
					link: 'rgba(255,255,255,0.85)',
					ctaBg: 'rgba(255,255,255,0.15)',
					ctaColor: '#fff',
					ctaBorder: 'rgba(255,255,255,0.25)',
					menuBg: 'rgba(30,28,24,0.85)',
					menuBorder: 'rgba(255,255,255,0.15)',
					menuBlur: 'blur(24px)',
					menuShadow: '0 8px 32px rgba(0,0,0,0.3)',
					heading: 'rgba(255,255,255,0.45)',
					itemText: '#fff',
					itemDesc: 'rgba(255,255,255,0.45)',
					cardBg: 'rgba(255,255,255,0.08)',
					cardBorder: 'rgba(255,255,255,0.1)',
					cardTitle: '#fff',
					cardDesc: 'rgba(255,255,255,0.45)'
				}
			: {
					pillBg: '#ffffff',
					pillBorder: 'rgba(0,0,0,0.08)',
					pillShadow: '0 4px 24px rgba(0,0,0,0.10)',
					blur: 'none',
					logoFilter: 'invert(1)',
					text: '#2a2018',
					link: 'rgba(42,32,24,0.8)',
					ctaBg: '#2a2018',
					ctaColor: '#fff',
					ctaBorder: '#2a2018',
					menuBg: '#ffffff',
					menuBorder: 'rgba(0,0,0,0.08)',
					menuBlur: 'none',
					menuShadow: '0 12px 32px rgba(0,0,0,0.12)',
					heading: '#8a7e70',
					itemText: '#2a2018',
					itemDesc: '#8a7e70',
					cardBg: '#f4f1eb',
					cardBorder: 'rgba(0,0,0,0.05)',
					cardTitle: '#2a2018',
					cardDesc: '#8a7e70'
				}
	);

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
						{ label: 'Articles', href: '/b/learn', desc: 'In-depth guides on faith and practice' },
						{ label: 'Courses', href: '/b/learn', desc: 'Structured learning at your own pace' },
						{ label: 'Brief Overview of Islam', href: '/b/learn/brief-overview-of-islam', desc: 'Core beliefs, practices, and history' }
					]
				},
				{
					heading: 'Popular Topics',
					links: [
						{ label: "Beginner's Guide", href: '/b/learn/beginners-guide', desc: 'First steps for new Muslims' },
						{ label: 'Islam and Other Faiths', href: '/b/learn/islam-and-other-faiths', desc: 'Common ground and key differences' },
						{ label: 'View All Resources', href: '/b/learn' }
					]
				}
			],
			featured: {
				title: 'Foundations of Faith',
				desc: 'A 24-lesson course covering the essentials.',
				href: '/b/learn',
				img: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=400&q=80&auto=format&fit=crop'
			}
		},
		Convert: {
			columns: [
				{
					heading: 'Your Journey',
					links: [
						{ label: 'Ready to Convert?', href: '/b/convert', desc: 'Take the next step with guidance and support' },
						{ label: 'What to Expect', href: '/b/convert', desc: 'Understanding the process and what comes after' },
						{ label: 'FAQ for New Muslims', href: '/b/convert', desc: 'Answers to the most common questions' }
					]
				},
				{
					heading: 'Support',
					links: [
						{ label: 'Find a Community', href: '/b/convert', desc: 'Connect with Muslims near you' },
						{ label: 'Mentorship Program', href: '/b/convert', desc: 'One-on-one guidance from experienced Muslims' },
						{ label: 'Start Your Journey', href: '/b/convert' }
					]
				}
			]
		},
		Products: {
			columns: [
				{
					heading: 'Products',
					links: [
						{ label: 'Being Muslim: A Practical Guide', href: '/b/shop/book', desc: 'The bestselling book' },
						{ label: 'The Complete Boxed Set', href: '/b/shop/boxed-set', desc: 'Book, prayer cards, and more' },
						{ label: 'Prayer Reference Cards', href: '/b/shop/prayer-cards', desc: 'Keep by your prayer mat' },
						{ label: 'Digital Edition (eBook)', href: '/b/shop/ebook', desc: 'Read anywhere, instantly' }
					]
				}
			],
			featured: {
				title: 'The Complete Boxed Set',
				desc: 'Everything you need in one beautiful package.',
				href: '/b/shop/boxed-set',
				img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg'
			}
		},
		Support: {
			columns: [
				{
					heading: 'Get Involved',
					links: [
						{ label: 'Donate', href: '/b/support', desc: 'Help fund resources for new Muslims' },
						{ label: 'Sponsor a Boxed Set', href: '/b/support', desc: 'Gift a set to someone in need' },
						{ label: 'Volunteer', href: '/b/support', desc: 'Join our team of contributors' },
						{ label: 'Support the Mission', href: '/b/support' }
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
			backdrop-filter: {T.blur};
			-webkit-backdrop-filter: {T.blur};
			border: 1px solid {T.pillBorder};
			background: {T.pillBg};
			box-shadow: {T.pillShadow};
			transition: all 0.3s;
		"
	>
		<a href="/b" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
			<img src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png" alt="Being Muslim" style="height: 28px; width: 28px; filter: {T.logoFilter}; transition: filter 0.3s;" />
			<span style="font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; color: {T.text}; transition: color 0.3s;">Being Muslim</span>
		</a>
		<div style="display: flex; align-items: center; gap: 28px;">
			{#each [
				{ label: 'Home', href: '/b' },
				{ label: 'Learn', href: '/b/learn' },
				{ label: 'Convert', href: '/b/convert' },
				{ label: 'Products', href: '/b/shop' },
				{ label: 'Support', href: '/b/support' }
			] as link}
				<div
					class="relative"
					onmouseenter={() => megaMenus[link.label] ? openMenu(link.label) : (activeMenu = null)}
					onmouseleave={scheduleClose}
				>
					<a href={link.href} style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; color: {T.link}; padding: 6px 14px; border-radius: 999px; display: inline-block; transition: color 0.3s;">{link.label}</a>
				</div>
			{/each}
		</div>
		<div style="display: flex; align-items: center; gap: 8px;">
			<!-- Nav style switcher (glass <-> white) -->
			<button
				onclick={() => (navStyle = navStyle === 'glass' ? 'white' : 'glass')}
				title="Nav style: {navStyle} — click to switch"
				aria-label="Switch navigation style"
				style="display: inline-flex; align-items: center; justify-content: center; height: 34px; width: 34px; border-radius: 999px; cursor: pointer; background: none; border: 1px solid {T.ctaBorder}; color: {T.text}; transition: all 0.3s;"
			>
				{#if navStyle === 'glass'}<Droplets style="height: 15px; width: 15px;" />{:else}<Square style="height: 15px; width: 15px;" />{/if}
			</button>
			<a href="/b/contact" style="align-items: center; padding: 8px 20px; border-radius: 999px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; transition: all 0.3s; background: {T.ctaBg}; color: {T.ctaColor}; border: 1px solid {T.ctaBorder};">Contact</a>
		</div>
	</nav>

	<!-- Mega Menu Dropdown -->
	{#if activeMenu && megaMenus[activeMenu]}
		{@const menu = megaMenus[activeMenu]}
		<div
			class="hidden md:block"
			onmouseenter={cancelClose}
			onmouseleave={scheduleClose}
			style="max-width: 1100px; margin: 8px auto 0; border-radius: 20px; backdrop-filter: {T.menuBlur}; -webkit-backdrop-filter: {T.menuBlur}; border: 1px solid {T.menuBorder}; background: {T.menuBg}; box-shadow: {T.menuShadow}; animation: megaFadeIn 0.15s ease-out;"
		>
			<div style="padding: 28px 32px;">
				<div style="display: flex; gap: 48px;">
					<!-- Link columns -->
					{#each menu.columns as column}
						<div style="flex: 1; min-width: 200px;">
							{#if column.heading}
								<p style="font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: {T.heading}; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 16px;">{column.heading}</p>
							{/if}
							{#each column.links as item}
								<a href={item.href} style="display: block; text-decoration: none; padding: 8px 0; transition: opacity 0.15s;" class="mega-link">
									<span style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: {T.itemText}; display: block;">{item.label}</span>
									{#if item.desc}
										<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: {T.itemDesc}; display: block; margin-top: 2px;">{item.desc}</span>
									{/if}
								</a>
							{/each}
						</div>
					{/each}

					<!-- Featured card (optional) -->
					{#if menu.featured}
						<div style="flex: 0 0 260px;">
							<a href={menu.featured.href} style="display: block; text-decoration: none; border-radius: 12px; overflow: hidden; background: {T.cardBg}; border: 1px solid {T.cardBorder};">
								<div style="aspect-ratio: 16/10; overflow: hidden;">
									<img src={menu.featured.img} alt={menu.featured.title} style="width: 100%; height: 100%; object-fit: cover; display: block;" />
								</div>
								<div style="padding: 16px;">
									<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; color: {T.cardTitle}; margin: 0 0 4px;">{menu.featured.title}</p>
									<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: {T.cardDesc}; margin: 0;">{menu.featured.desc}</p>
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
		style="backdrop-filter: {T.blur}; -webkit-backdrop-filter: {T.blur}; border: 1px solid {T.pillBorder}; background: {T.pillBg}; box-shadow: {T.pillShadow};"
	>
		<!-- Top row: logo + switcher + hamburger -->
		<div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px 10px 20px;">
			<a href="/b" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
				<img src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png" alt="Being Muslim" style="height: 28px; width: 28px; filter: {T.logoFilter}; transition: filter 0.3s;" />
				<span style="font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; color: {T.text}; transition: color 0.3s;">Being Muslim</span>
			</a>
			<div style="display: flex; align-items: center; gap: 4px;">
				<button
					onclick={() => (navStyle = navStyle === 'glass' ? 'white' : 'glass')}
					aria-label="Switch navigation style"
					style="padding: 8px; border: none; background: none; cursor: pointer; color: {T.text};"
				>
					{#if navStyle === 'glass'}<Droplets class="h-5 w-5" />{:else}<Square class="h-5 w-5" />{/if}
				</button>
				<button
					style="padding: 8px; border: none; background: none; cursor: pointer; color: {T.text};"
					onclick={() => (mobileOpen = !mobileOpen)}
					aria-label="Toggle menu"
				>
					{#if mobileOpen}<X class="h-5 w-5" />{:else}<Menu class="h-5 w-5" />{/if}
				</button>
			</div>
		</div>

		<!-- Expandable links -->
		<div class="mobile-links">
			<div style="padding: 4px 20px 16px;">
				{#each [
					{ label: 'Home', href: '/b' },
					{ label: 'Learn', href: '/b/learn' },
					{ label: 'Convert', href: '/b/convert' },
					{ label: 'Products', href: '/b/shop' },
					{ label: 'Support', href: '/b/support' }
				] as link}
					<a href={link.href} style="display: block; padding: 10px 0; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: {T.text}; text-decoration: none;" onclick={() => (mobileOpen = false)}>{link.label}</a>
				{/each}
				<a href="/b/contact" style="display: block; margin-top: 8px; text-align: center; background: {T.ctaBg}; color: {T.ctaColor}; padding: 10px; border-radius: 999px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; text-decoration: none; border: 1px solid {T.ctaBorder};" onclick={() => (mobileOpen = false)}>Contact</a>
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
