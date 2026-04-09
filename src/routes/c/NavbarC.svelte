<script lang="ts">
	import { Menu, X, ArrowRight } from 'lucide-svelte';

	let mobileOpen = $state(false);
	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 40;
	}
</script>

<svelte:window onscroll={handleScroll} />

<header
	class="bmc-navbar fixed top-0 left-0 right-0 z-50"
	style="
		background: {scrolled ? 'rgba(13,13,13,0.95)' : 'transparent'};
		backdrop-filter: {scrolled ? 'blur(20px)' : 'none'};
		-webkit-backdrop-filter: {scrolled ? 'blur(20px)' : 'none'};
		border-bottom: 1px solid {scrolled ? 'rgba(255,255,255,0.06)' : 'transparent'};
	"
>
	<div style="max-width: 1200px; margin: 0 auto; padding: 0 24px;">
		<nav style="display: flex; align-items: center; justify-content: space-between; height: 72px;">
			<!-- Logo -->
			<a href="/c" style="text-decoration: none; display: flex; align-items: center; gap: 12px;">
				<img
					src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
					alt="Being Muslim"
					style="height: 28px; width: 28px;"
				/>
				<span style="font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #F5F0E8;">
					BEING MUSLIM
				</span>
			</a>

			<!-- Desktop Links -->
			<div class="hidden md:flex" style="align-items: center; gap: 32px;">
				{#each [
					{ label: 'Learn', href: '/c/learn' },
					{ label: 'Convert', href: '/c/convert' },
					{ label: 'Shop', href: '/c/shop' },
					{ label: 'Support', href: '/c/support' }
				] as link}
					<a
						href={link.href}
						style="font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 400; letter-spacing: 0.04em; color: rgba(245,240,232,0.7); text-decoration: none; transition: color 0.2s;"
						onmouseenter={(e) => { (e.currentTarget as HTMLElement).style.color = '#F5F0E8'; }}
						onmouseleave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,232,0.7)'; }}
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Desktop CTA -->
			<a
				href="/c/convert"
				class="hidden md:inline-flex"
				style="align-items: center; padding: 10px 24px; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 0.02em; text-decoration: none; border-radius: 4px; background: #D4A853; color: #0D0D0D; transition: all 0.25s;"
				onmouseenter={(e) => { (e.currentTarget as HTMLElement).style.background = '#e0b45e'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(212,168,83,0.3)'; }}
				onmouseleave={(e) => { (e.currentTarget as HTMLElement).style.background = '#D4A853'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
			>
				Get Started
			</a>

			<!-- Mobile hamburger -->
			<button
				class="md:hidden"
				style="padding: 8px; border: none; background: none; cursor: pointer; color: #F5F0E8;"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label="Toggle menu"
			>
				{#if mobileOpen}<X class="h-5 w-5" />{:else}<Menu class="h-5 w-5" />{/if}
			</button>
		</nav>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div
			class="md:hidden"
			style="background: rgba(13,13,13,0.98); border-top: 1px solid rgba(255,255,255,0.06); padding: 16px 24px 24px; animation: bmcMobileFade 0.2s ease-out;"
		>
			{#each [
				{ label: 'Learn', href: '/c/learn' },
				{ label: 'Convert', href: '/c/convert' },
				{ label: 'Shop', href: '/c/shop' },
				{ label: 'Support', href: '/c/support' }
			] as link}
				<a
					href={link.href}
					style="display: block; padding: 14px 0; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 400; color: rgba(245,240,232,0.8); text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.04);"
					onclick={() => (mobileOpen = false)}
				>
					{link.label}
				</a>
			{/each}
			<a
				href="/c/convert"
				style="display: block; margin-top: 16px; text-align: center; padding: 14px; border-radius: 4px; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500; text-decoration: none; background: #D4A853; color: #0D0D0D;"
				onclick={() => (mobileOpen = false)}
			>
				Get Started
			</a>
		</div>
	{/if}
</header>

<style>
	@keyframes bmcMobileFade {
		from { opacity: 0; transform: translateY(-8px); }
		to { opacity: 1; transform: translateY(0); }
	}
</style>
