<script lang="ts">
	import { Menu, X, BookOpen, Heart, ShoppingBag, Users, ArrowRight, Compass, Sunrise, RefreshCw } from 'lucide-svelte';

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

	const megaMenus: Record<string, { columns: { heading?: string; links: { label: string; href: string; desc?: string; icon?: any }[] }[]; featured?: { title: string; desc: string; href: string; img: string } }> = {
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
		Shop: {
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

<header
	class="fixed top-0 left-0 right-0 z-50 border-b {activeMenu
		? 'bg-white/95 backdrop-blur-md shadow-sm border-border'
		: scrolled
			? 'bg-white/95 backdrop-blur-md shadow-sm border-border transition-all duration-300'
			: 'bg-transparent border-transparent transition-all duration-300'}"
>
	<nav class="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
		<!-- Logo -->
		<a href="/b" class="flex items-center gap-2.5">
			<img
				src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
				alt="Being Muslim"
				class="h-8 w-8 {scrolled || activeMenu ? 'invert' : ''}"
				style="transition: filter 0.3s;"
			/>
			<span class="text-lg font-bold transition-colors font-display {scrolled || activeMenu ? 'text-text-primary' : 'text-white'}">
				Being Muslim
			</span>
		</a>

		<!-- Desktop Nav -->
		<div class="hidden items-center gap-8 md:flex">
			{#each [
				{ label: 'Home', href: '/b' },
				{ label: 'Learn', href: '/b/learn' },
				{ label: 'Convert', href: '/b/convert' },
				{ label: 'Shop', href: '/b/shop' },
				{ label: 'Support', href: '/b/support' }
			] as link}
				<div
					class="relative"
					onmouseenter={() => megaMenus[link.label] ? openMenu(link.label) : (activeMenu = null)}
					onmouseleave={scheduleClose}
				>
					<a
						href={link.href}
						class="text-[14px] font-medium transition-colors py-6 inline-block {scrolled || activeMenu
							? 'text-text-primary hover:text-black'
							: 'text-white/80 hover:text-white'}"
						style="font-family: 'DM Sans', sans-serif;"
					>
						{link.label}
					</a>
				</div>
			{/each}
		</div>

		<!-- Desktop CTA -->
		<a
			href="/b/contact"
			class="hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-[14px] font-medium transition-all {scrolled || activeMenu
				? ''
				: 'bg-white text-text-primary hover:bg-white/90'}"
			style="font-family: 'DM Sans', sans-serif; {scrolled || activeMenu ? 'background: #2a2018; color: #fff;' : ''}"
		>
			Contact
		</a>

		<!-- Mobile Menu Button -->
		<button
			class="rounded-lg p-2 md:hidden {scrolled || activeMenu ? 'text-text-primary' : 'text-white'}"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
		>
			{#if mobileOpen}<X class="h-6 w-6" />{:else}<Menu class="h-6 w-6" />{/if}
		</button>
	</nav>

	<!-- Mega Menu Dropdown -->
	{#if activeMenu && megaMenus[activeMenu]}
		{@const menu = megaMenus[activeMenu]}
		<div
			class="hidden md:block absolute left-0 right-0 top-[72px] bg-white shadow-lg border-t border-border"
			onmouseenter={cancelClose}
			onmouseleave={scheduleClose}
			style="animation: megaFadeIn 0.15s ease-out;"
		>
			<div class="mx-auto max-w-[1400px] px-6 lg:px-10 py-8">
				<div style="display: flex; gap: 48px;">
					<!-- Link columns -->
					{#each menu.columns as column}
						<div style="flex: 1; min-width: 200px;">
							{#if column.heading}
								<p style="font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: #8a7e70; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 16px;">{column.heading}</p>
							{/if}
							{#each column.links as item}
								<a href={item.href} style="display: block; text-decoration: none; padding: 8px 0; transition: opacity 0.15s;" class="mega-link">
									<span style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018; display: block;">{item.label}</span>
									{#if item.desc}
										<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70; display: block; margin-top: 2px;">{item.desc}</span>
									{/if}
								</a>
							{/each}
						</div>
					{/each}

					<!-- Featured card (optional) -->
					{#if menu.featured}
						<div style="flex: 0 0 260px;">
							<a href={menu.featured.href} style="display: block; text-decoration: none; border-radius: 12px; overflow: hidden; background: #f4f1eb;">
								<div style="aspect-ratio: 16/10; overflow: hidden;">
									<img src={menu.featured.img} alt={menu.featured.title} style="width: 100%; height: 100%; object-fit: cover; display: block;" />
								</div>
								<div style="padding: 16px;">
									<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; color: #2a2018; margin: 0 0 4px;">{menu.featured.title}</p>
									<p style="font-family: 'DM Sans', sans-serif; font-size: 12px; color: #8a7e70; margin: 0;">{menu.featured.desc}</p>
								</div>
							</a>
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/if}

	{#if mobileOpen}
		<div class="md:hidden bg-white border-t border-border px-6 py-4 shadow-lg">
			{#each [
				{ label: 'Home', href: '/b' },
				{ label: 'Learn', href: '/b/learn' },
				{ label: 'Convert', href: '/b/convert' },
				{ label: 'Shop', href: '/b/shop' },
				{ label: 'Support', href: '/b/support' }
			] as link}
				<a href={link.href} class="block py-2.5 text-text-primary font-medium" onclick={() => (mobileOpen = false)}>{link.label}</a>
			{/each}
			<a href="/b/contact" class="block mt-3 text-center bg-text-primary text-white py-2.5 rounded-full font-medium">Contact</a>
		</div>
	{/if}
</header>

<style>
	@keyframes megaFadeIn {
		from { opacity: 0; transform: translateY(-4px); }
		to { opacity: 1; transform: translateY(0); }
	}
	:global(.mega-link:hover) {
		opacity: 0.7;
	}
</style>
