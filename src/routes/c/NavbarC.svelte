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
	<div style="max-width: 1100px; margin: 0 auto; position: relative;">
		<nav
			class="bm-navbar-pill"
			style="
				position: relative;
				z-index: 2;
				display: flex;
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
			<!-- Logo -->
			<a href="/c" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
				<img
					src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
					alt="Being Muslim"
					style="height: 28px; width: 28px;"
				/>
				<span style="font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; color: #fff;">
					Being Muslim
				</span>
			</a>

			<!-- Desktop Nav -->
			<div class="hidden md:flex" style="align-items: center; gap: 28px;">
				{#each [
					{ label: 'Home', href: '/c' },
					{ label: 'Learn', href: '/c/learn' },
					{ label: 'Convert', href: '/c/convert' },
					{ label: 'Shop', href: '/c/shop' },
					{ label: 'Support', href: '/c/support' }
				] as link}
					<a
						href={link.href}
						style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; text-decoration: none; color: rgba(255,255,255,0.85); padding: 6px 14px; border-radius: 999px;"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Desktop CTA -->
			<a
				href="/c/contact"
				class="hidden md:inline-flex"
				style="
					align-items: center;
					padding: 8px 20px;
					border-radius: 999px;
					font-family: 'DM Sans', sans-serif;
					font-size: 13px;
					font-weight: 500;
					text-decoration: none;
					transition: all 0.3s;
					background: rgba(255,255,255,0.15);
					color: #fff;
					border: 1px solid rgba(255,255,255,0.25);
				"
			>
				Contact
			</a>

			<!-- Mobile Menu Button -->
			<button
				style="padding: 8px; border: none; background: none; cursor: pointer; color: #fff;"
				class="md:hidden"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label="Toggle menu"
			>
				{#if mobileOpen}<X class="h-5 w-5" />{:else}<Menu class="h-5 w-5" />{/if}
			</button>
		</nav>

		<div
			class="mobile-dropdown md:hidden"
			class:open={mobileOpen}
		>
			<div style="
				padding: 24px 20px 16px;
				margin-top: -20px;
				border-radius: 0 0 24px 24px;
				backdrop-filter: blur(20px);
				-webkit-backdrop-filter: blur(20px);
				background: rgba(255,255,255,0.12);
				border: 1px solid rgba(255,255,255,0.15);
				border-top: none;
			">
				{#each [
					{ label: 'Home', href: '/c' },
					{ label: 'Learn', href: '/c/learn' },
					{ label: 'Convert', href: '/c/convert' },
					{ label: 'Shop', href: '/c/shop' },
					{ label: 'Support', href: '/c/support' }
				] as link}
					<a href={link.href} style="display: block; padding: 10px 0; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #fff; text-decoration: none;" onclick={() => (mobileOpen = false)}>{link.label}</a>
				{/each}
				<a href="/c/contact" style="display: block; margin-top: 8px; text-align: center; background: rgba(255,255,255,0.15); color: #fff; padding: 10px; border-radius: 999px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; text-decoration: none; border: 1px solid rgba(255,255,255,0.25);">Contact</a>
			</div>
		</div>
	</div>
</header>

<style>
	.mobile-dropdown {
		position: relative;
		z-index: 1;
		overflow: hidden;
		max-height: 0;
		opacity: 0;
		transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
		pointer-events: none;
	}
	.mobile-dropdown.open {
		max-height: 400px;
		opacity: 1;
		pointer-events: auto;
	}
</style>
