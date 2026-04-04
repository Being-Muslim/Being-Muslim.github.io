<script lang="ts">
	import { Menu, X, Heart } from 'lucide-svelte';

	let mobileOpen = $state(false);
</script>

<header
	style="position: fixed; top: 0; left: 0; right: 0; z-index: 50; background: #fff; border-bottom: 1px solid rgba(0,0,0,0.06); box-shadow: 0 1px 3px rgba(0,0,0,0.04);"
>
	<nav style="max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 64px; padding: 0 24px;">
		<!-- Logo -->
		<a href="/l" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
			<img
				src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
				alt="Being Muslim"
				style="height: 28px; width: 28px; filter: invert(1);"
			/>
			<span style="font-family: 'DM Serif Display', serif; font-size: 18px; color: #1E1E1E;">Being Muslim</span>
		</a>

		<!-- Desktop right side -->
		<div style="display: none; align-items: center; gap: 32px;" class="desktop-nav">
			<a
				href="/l"
				style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: #1E1E1E; text-decoration: none; transition: color 0.2s;"
				class="nav-link"
			>
				Learn More
			</a>
			<a
				href="/l"
				style="display: inline-flex; align-items: center; gap: 6px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; color: #fff; background: #8B2E36; padding: 10px 24px; border-radius: 999px; text-decoration: none; transition: all 0.2s;"
				class="donate-btn"
			>
				<Heart style="width: 14px; height: 14px;" />
				Donate
			</a>
		</div>

		<!-- Mobile Menu Button -->
		<button
			style="padding: 8px; background: none; border: none; cursor: pointer; color: #1E1E1E;"
			class="mobile-toggle"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
		>
			{#if mobileOpen}<X style="width: 24px; height: 24px;" />{:else}<Menu style="width: 24px; height: 24px;" />{/if}
		</button>
	</nav>

	<!-- Mobile menu -->
	<div class="mobile-menu" class:open={mobileOpen}>
		<div style="border-top: 1px solid rgba(0,0,0,0.06); padding: 16px 24px;">
			{#each [
				{ label: 'Learn', href: '/l' },
				{ label: 'Convert', href: '/l' },
				{ label: 'Shop', href: '/l' },
				{ label: 'Community', href: '/l' },
				{ label: 'Support', href: '/l' },
				{ label: 'About', href: '/l' }
			] as link}
				<a
					href={link.href}
					style="display: block; padding: 12px 0; font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 500; color: #1E1E1E; text-decoration: none; border-bottom: 1px solid rgba(0,0,0,0.05);"
					onclick={() => (mobileOpen = false)}
				>
					{link.label}
				</a>
			{/each}
			<a
				href="/l"
				style="display: block; margin-top: 16px; text-align: center; font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 600; color: #fff; background: #8B2E36; padding: 14px; border-radius: 999px; text-decoration: none;"
				onclick={() => (mobileOpen = false)}
			>
				Donate
			</a>
		</div>
	</div>
</header>

<style>
	.desktop-nav {
		display: none !important;
	}
	.mobile-toggle {
		display: block;
	}
	@media (min-width: 768px) {
		.desktop-nav {
			display: flex !important;
		}
		.mobile-toggle {
			display: none !important;
		}
	}
	.nav-link:hover {
		color: #8B2E36 !important;
	}
	.donate-btn:hover {
		background: #7A2730 !important;
		box-shadow: 0 4px 12px rgba(139, 46, 54, 0.25);
	}
	.mobile-menu {
		max-height: 0;
		overflow: hidden;
		background: #fff;
		transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.mobile-menu.open {
		max-height: 450px;
	}
</style>
