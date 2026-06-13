<script lang="ts">
	import { Menu, X } from 'lucide-svelte';

	let mobileOpen = $state(false);
	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 20;
	}
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
		<a href="/b-staging" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
			<img src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png" alt="Being Muslim" style="height: 28px; width: 28px;" />
			<span style="font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; color: #fff;">Being Muslim</span>
		</a>
		<div style="display: flex; align-items: center; gap: 28px;">
			{#each [
				{ label: 'Home', href: '/b-staging' },
				{ label: 'Learn', href: '/b-staging/learn' },
				{ label: 'Convert', href: '/b-staging/convert' },
				{ label: 'Shop', href: '/b-staging/shop' },
				{ label: 'Support', href: '/b-staging/support' }
			] as link}
				<a href={link.href} style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; color: rgba(255,255,255,0.85); padding: 6px 14px; border-radius: 999px;">{link.label}</a>
			{/each}
		</div>
		<a href="/b-staging/contact" style="align-items: center; padding: 8px 20px; border-radius: 999px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; transition: all 0.3s; background: rgba(255,255,255,0.15); color: #fff; border: 1px solid rgba(255,255,255,0.25);">Contact</a>
	</nav>

	<!-- Mobile: single glass container that expands -->
	<div
		class="mobile-shell md:hidden"
		class:open={mobileOpen}
	>
		<!-- Top row: logo + hamburger -->
		<div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px 10px 20px;">
			<a href="/b-staging" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
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
					{ label: 'Home', href: '/b-staging' },
					{ label: 'Learn', href: '/b-staging/learn' },
					{ label: 'Convert', href: '/b-staging/convert' },
					{ label: 'Shop', href: '/b-staging/shop' },
					{ label: 'Support', href: '/b-staging/support' }
				] as link}
					<a href={link.href} style="display: block; padding: 10px 0; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #fff; text-decoration: none;" onclick={() => (mobileOpen = false)}>{link.label}</a>
				{/each}
				<a href="/b-staging/contact" style="display: block; margin-top: 8px; text-align: center; background: rgba(255,255,255,0.15); color: #fff; padding: 10px; border-radius: 999px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; text-decoration: none; border: 1px solid rgba(255,255,255,0.25);" onclick={() => (mobileOpen = false)}>Contact</a>
			</div>
		</div>
	</div>
</header>

<style>
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
