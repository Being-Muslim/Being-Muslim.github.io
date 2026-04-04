<script lang="ts">
	import { onMount } from 'svelte';
	import { X } from 'lucide-svelte';

	let scrolled = $state(false);
	let menuOpen = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleMenu() {
		menuOpen = !menuOpen;
		if (menuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	function closeMenu() {
		menuOpen = false;
		document.body.style.overflow = '';
	}

	const navLinks = [
		{ label: 'Learn', href: '/i/courses/' },
		{ label: 'Convert', href: '/i/convert/' },
		{ label: 'Shop', href: '/i/shop/' },
		{ label: 'Community', href: '/i/community/' },
		{ label: 'Support', href: '/i/give/' },
		{ label: 'About', href: '/i/about/' }
	];
</script>

<nav
	style="
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    transition: background 0.3s ease;
    background: {scrolled ? 'rgba(255,255,255,0.05)' : 'transparent'};
    backdrop-filter: {scrolled ? 'blur(10px)' : 'none'};
    -webkit-backdrop-filter: {scrolled ? 'blur(10px)' : 'none'};
  "
>
	<!-- Logo -->
	<a href="/i/" style="display: flex; align-items: center; gap: 8px; text-decoration: none;">
		<svg
			width="24"
			height="24"
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
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0.02em;
      "
		>
			Being Muslim
		</span>
	</a>

	<!-- Menu button -->
	<button
		onclick={toggleMenu}
		style="
      background: none;
      border: none;
      color: #FFFFFF;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      cursor: pointer;
      padding: 8px 0;
    "
	>
		Menu
	</button>
</nav>

<!-- Full-screen menu overlay -->
{#if menuOpen}
	<div
		style="
      position: fixed;
      inset: 0;
      z-index: 2000;
      background: #0A0A0A;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      animation: menuFadeIn 0.3s ease;
    "
	>
		<button
			onclick={closeMenu}
			style="
        position: absolute;
        top: 16px;
        right: 24px;
        background: none;
        border: none;
        color: #FFFFFF;
        cursor: pointer;
        padding: 8px;
      "
			aria-label="Close menu"
		>
			<X size={28} />
		</button>

		<div style="display: flex; flex-direction: column; align-items: center; gap: 32px;">
			{#each navLinks as link}
				<a
					href={link.href}
					onclick={closeMenu}
					style="
            font-family: 'Playfair Display', serif;
            font-size: clamp(28px, 5vw, 48px);
            color: #FFFFFF;
            text-decoration: none;
            transition: color 0.3s ease;
          "
					onmouseenter={(e) => (e.currentTarget.style.color = '#E8A838')}
					onmouseleave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
				>
					{link.label}
				</a>
			{/each}
		</div>
	</div>
{/if}

<style>
	@keyframes menuFadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
