<script lang="ts">
	import { Menu, X, ChevronDown } from 'lucide-svelte';

	let mobileOpen = $state(false);
	let scrolled = $state(false);
	let activeMenu = $state<string | null>(null);
	let closeTimeout = $state<ReturnType<typeof setTimeout> | null>(null);

	function handleScroll() {
		scrolled = window.scrollY > 8;
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

	// Coda-style nav: dropdown items first, divider, then plain links
	const dropdownItems: { label: string; href: string; links: { label: string; href: string; desc?: string }[] }[] = [
		{
			label: 'Learn',
			href: '/c/learn',
			links: [
				{ label: 'Articles', href: '/c/articles', desc: 'In-depth guides on faith and practice' },
				{ label: 'Courses', href: '/c/courses', desc: 'Structured learning at your own pace' },
				{ label: 'Guides', href: '/c/guides', desc: 'Practical how-tos for daily life' },
				{ label: 'Videos', href: '/c/videos', desc: 'Watch and learn at your own pace' }
			]
		},
		{
			label: 'Convert',
			href: '/c/convert',
			links: [
				{ label: 'Ready to Convert?', href: '/c/convert', desc: 'Take the next step with guidance' },
				{ label: 'Find a Community', href: '/c/community', desc: 'Connect with Muslims near you' },
				{ label: 'FAQ for New Muslims', href: '/c/convert', desc: 'Answers to common questions' }
			]
		},
		{
			label: 'Shop',
			href: '/c/shop',
			links: [
				{ label: 'Being Muslim: A Practical Guide', href: '/c/shop', desc: 'The bestselling book' },
				{ label: 'The Complete Boxed Set', href: '/c/shop', desc: 'Book, prayer cards, and more' },
				{ label: 'Prayer Reference Cards', href: '/c/shop', desc: 'Keep by your prayer mat' },
				{ label: 'Digital Edition (eBook)', href: '/c/shop', desc: 'Read anywhere, instantly' }
			]
		}
	];

	const plainLinks = [
		{ label: 'About', href: '/c/about' },
		{ label: 'Community', href: '/c/community' },
		{ label: 'Support', href: '/c/support' }
	];
</script>

<svelte:window onscroll={handleScroll} />

<header
	class="fixed top-0 left-0 right-0 z-50"
	style="
		background: #faf9f5;
		border-bottom: 1px solid {scrolled || activeMenu ? '#e6e0d6' : 'transparent'};
		box-shadow: {scrolled && !activeMenu ? '0 1px 12px rgba(42,32,24,0.05)' : 'none'};
		transition: border-color 0.2s, box-shadow 0.2s;
	"
>
	<nav
		style="
			max-width: 1400px;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 64px;
			padding: 0 24px;
		"
	>
		<!-- Left: logo + nav links (Coda-style left-aligned group) -->
		<div style="display: flex; align-items: center; gap: 28px; min-width: 0;">
			<a href="/c" style="display: flex; align-items: center; gap: 9px; text-decoration: none; flex-shrink: 0;">
				<img
					src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
					alt="Being Muslim"
					style="height: 26px; width: 26px; filter: invert(1);"
				/>
				<span style="font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; color: #2a2018; white-space: nowrap;">
					Being Muslim
				</span>
			</a>

			<div class="hidden lg:flex" style="align-items: center; gap: 2px;">
				{#each dropdownItems as item}
					<div
						style="position: relative;"
						onmouseenter={() => openMenu(item.label)}
						onmouseleave={scheduleClose}
					>
						<a href={item.href} class="bm-nav-item" class:active={activeMenu === item.label}>
							{item.label}
							<ChevronDown
								style="height: 13px; width: 13px; transition: transform 0.15s; {activeMenu === item.label ? 'transform: rotate(180deg);' : ''}"
							/>
						</a>

						{#if activeMenu === item.label}
							<!-- svelte-ignore a11y_no_static_element_interactions -->
							<div
								onmouseenter={cancelClose}
								onmouseleave={scheduleClose}
								style="
									position: absolute;
									top: calc(100% + 6px);
									left: 0;
									min-width: 290px;
									background: #fff;
									border: 1px solid #ece6dc;
									border-radius: 14px;
									box-shadow: 0 12px 32px rgba(42,32,24,0.10);
									padding: 8px;
									animation: navDropIn 0.15s ease-out;
								"
							>
								{#each item.links as link}
									<a href={link.href} class="bm-dropdown-link">
										<span style="display: block; font-size: 14px; font-weight: 500; color: #2a2018;">{link.label}</span>
										{#if link.desc}
											<span style="display: block; font-size: 12px; color: #8a7e70; margin-top: 1px;">{link.desc}</span>
										{/if}
									</a>
								{/each}
							</div>
						{/if}
					</div>
				{/each}

				<!-- Divider between dropdowns and plain links -->
				<div style="width: 1px; height: 18px; background: #d8d2c8; margin: 0 10px;"></div>

				{#each plainLinks as link}
					<a href={link.href} class="bm-nav-item">{link.label}</a>
				{/each}
			</div>
		</div>

		<!-- Right: dual CTAs (outline + solid) -->
		<div style="display: flex; align-items: center; gap: 10px;">
			<a href="/c/support" class="hidden md:inline-flex bm-cta-outline">Donate</a>
			<a href="/c/contact" class="hidden md:inline-flex bm-cta-solid">Contact</a>

			<!-- Mobile Menu Button -->
			<button
				class="lg:hidden"
				style="padding: 8px; border: none; background: none; cursor: pointer; color: #2a2018;"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label="Toggle menu"
			>
				{#if mobileOpen}<X class="h-5 w-5" />{:else}<Menu class="h-5 w-5" />{/if}
			</button>
		</div>
	</nav>

	{#if mobileOpen}
		<div
			class="lg:hidden"
			style="background: #faf9f5; border-top: 1px solid #e6e0d6; padding: 12px 24px 20px;"
		>
			{#each dropdownItems as item}
				<a
					href={item.href}
					style="display: block; padding: 10px 0; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018; text-decoration: none;"
					onclick={() => (mobileOpen = false)}>{item.label}</a
				>
			{/each}
			<div style="height: 1px; background: #e6e0d6; margin: 8px 0;"></div>
			{#each plainLinks as link}
				<a
					href={link.href}
					style="display: block; padding: 10px 0; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #2a2018; text-decoration: none;"
					onclick={() => (mobileOpen = false)}>{link.label}</a
				>
			{/each}
			<div style="display: flex; gap: 10px; margin-top: 12px;">
				<a href="/c/support" class="bm-cta-outline" style="flex: 1; justify-content: center;" onclick={() => (mobileOpen = false)}>Donate</a>
				<a href="/c/contact" class="bm-cta-solid" style="flex: 1; justify-content: center;" onclick={() => (mobileOpen = false)}>Contact</a>
			</div>
		</div>
	{/if}
</header>

<style>
	@keyframes navDropIn {
		from { opacity: 0; transform: translateY(-4px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.bm-nav-item {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		font-family: 'DM Sans', sans-serif;
		font-size: 14px;
		font-weight: 500;
		color: #2a2018;
		text-decoration: none;
		padding: 7px 12px;
		border-radius: 999px;
		transition: background 0.15s;
		white-space: nowrap;
	}
	.bm-nav-item:hover,
	.bm-nav-item.active {
		background: rgba(42, 32, 24, 0.06);
	}

	.bm-dropdown-link {
		display: block;
		text-decoration: none;
		padding: 9px 12px;
		border-radius: 10px;
		transition: background 0.15s;
	}
	.bm-dropdown-link:hover {
		background: #f5f1ea;
	}

	.bm-cta-outline {
		align-items: center;
		padding: 8px 18px;
		border-radius: 999px;
		font-family: 'DM Sans', sans-serif;
		font-size: 14px;
		font-weight: 500;
		text-decoration: none;
		background: #fff;
		color: #2a2018;
		border: 1px solid #d8d2c8;
		transition: border-color 0.15s, background 0.15s;
	}
	.bm-cta-outline:hover {
		border-color: #b5ac9e;
	}

	.bm-cta-solid {
		align-items: center;
		padding: 8px 18px;
		border-radius: 999px;
		font-family: 'DM Sans', sans-serif;
		font-size: 14px;
		font-weight: 500;
		text-decoration: none;
		background: #2a2018;
		color: #fff;
		border: 1px solid #2a2018;
		transition: background 0.15s;
	}
	.bm-cta-solid:hover {
		background: #1a140e;
	}
</style>
