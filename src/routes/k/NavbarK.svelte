<script lang="ts">
  import { onMount } from 'svelte';
  import { ArrowRight, Menu, X } from 'lucide-svelte';

  let scrolled = $state(false);
  let mobileOpen = $state(false);

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 40;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function closeMobile() {
    mobileOpen = false;
  }
</script>

<nav class="navbar" class:scrolled>
  <div class="navbar-inner">
    <a href="/k/" class="logo">
      <span class="logo-circle">BM</span>
    </a>

    <div class="nav-links desktop-only">
      <a href="/k/#learn">Learn</a>
      <a href="/k/#shop">Shop</a>
      <a href="/k/#support">Support</a>
      <a href="/k/#start" class="cta-pill">Get Started</a>
    </div>

    <button class="hamburger mobile-only" onclick={() => mobileOpen = !mobileOpen} aria-label="Toggle menu">
      {#if mobileOpen}
        <X size={22} color="#FAFAF8" />
      {:else}
        <Menu size={22} color="#FAFAF8" />
      {/if}
    </button>
  </div>

  {#if mobileOpen}
    <div class="mobile-menu">
      <a href="/k/#learn" onclick={closeMobile}>Learn</a>
      <a href="/k/#shop" onclick={closeMobile}>Shop</a>
      <a href="/k/#support" onclick={closeMobile}>Support</a>
      <a href="/k/#start" class="cta-pill" onclick={closeMobile}>Get Started</a>
    </div>
  {/if}
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    height: 60px;
    transition: background 0.3s ease, backdrop-filter 0.3s ease;
    background: transparent;
  }

  .navbar.scrolled {
    background: rgba(12, 18, 32, 0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .navbar-inner {
    max-width: 1100px;
    margin: 0 auto;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
  }

  .logo {
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  .logo-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--bm-gold);
    color: var(--bm-midnight);
    font-family: var(--bm-font);
    font-weight: 700;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.5px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .nav-links a {
    font-family: var(--bm-font);
    font-weight: 400;
    font-size: 14px;
    color: var(--bm-white);
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }

  .nav-links a:hover {
    opacity: 1;
  }

  .cta-pill {
    background: var(--bm-gold) !important;
    color: var(--bm-midnight) !important;
    padding: 8px 20px !important;
    border-radius: 100px;
    font-weight: 600 !important;
    font-size: 13px !important;
    opacity: 1 !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
  }

  .cta-pill:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(240, 199, 94, 0.3);
  }

  .hamburger {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mobile-menu {
    background: rgba(12, 18, 32, 0.97);
    backdrop-filter: blur(16px);
    padding: 20px 24px 28px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .mobile-menu a {
    font-family: var(--bm-font);
    font-weight: 400;
    font-size: 16px;
    color: var(--bm-white);
    text-decoration: none;
    opacity: 0.8;
  }

  .mobile-menu .cta-pill {
    display: inline-block;
    margin-top: 4px;
  }

  .desktop-only {
    display: flex;
  }

  .mobile-only {
    display: none;
  }

  @media (max-width: 640px) {
    .desktop-only {
      display: none;
    }
    .mobile-only {
      display: flex;
    }
  }
</style>
