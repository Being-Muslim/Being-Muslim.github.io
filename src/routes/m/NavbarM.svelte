<script lang="ts">
  import { onMount } from 'svelte';
  import { Menu, X, TreePine } from 'lucide-svelte';

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
    <a href="/m/" class="logo">
      <TreePine size={20} color="#F5F0E8" strokeWidth={1.5} />
      <span class="logo-text">BEING MUSLIM</span>
    </a>

    <div class="nav-links desktop-only">
      <a href="/m/#classes">Classes</a>
      <a href="/m/#resources">Resources</a>
      <a href="/m/#shop">Shop</a>
      <a href="/m/#community">Community</a>
    </div>

    <div class="nav-right desktop-only">
      <a href="/m/#start" class="cta-pill">Get Started</a>
    </div>

    <button class="hamburger mobile-only" onclick={() => mobileOpen = !mobileOpen} aria-label="Toggle menu">
      {#if mobileOpen}
        <X size={22} color="#F5F0E8" />
      {:else}
        <Menu size={22} color="#F5F0E8" />
      {/if}
    </button>
  </div>

  {#if mobileOpen}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="mobile-overlay" onclick={closeMobile} onkeydown={(e) => e.key === 'Escape' && closeMobile()}>
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div class="mobile-menu" onclick={(e) => e.stopPropagation()} onkeydown={() => {}}>
        <a href="/m/#classes" onclick={closeMobile}>Classes</a>
        <a href="/m/#resources" onclick={closeMobile}>Resources</a>
        <a href="/m/#shop" onclick={closeMobile}>Shop</a>
        <a href="/m/#community" onclick={closeMobile}>Community</a>
        <a href="/m/#start" class="cta-pill" onclick={closeMobile}>Get Started</a>
      </div>
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
    height: 64px;
    transition: background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease;
    background: transparent;
    border-bottom: 1px solid transparent;
  }

  .navbar.scrolled {
    background: rgba(13, 13, 13, 0.95);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .navbar-inner {
    max-width: 1200px;
    margin: 0 auto;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
  }

  .logo {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .logo-text {
    font-family: var(--bm-font-body);
    font-weight: 500;
    font-size: 14px;
    color: #F5F0E8;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 36px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .nav-links a {
    font-family: var(--bm-font-body);
    font-weight: 400;
    font-size: 13px;
    color: rgba(245, 240, 232, 0.7);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .nav-links a:hover {
    color: #F5F0E8;
  }

  .nav-right {
    display: flex;
    align-items: center;
  }

  .cta-pill {
    background: var(--bm-gold);
    color: #0D0D0D !important;
    padding: 8px 20px;
    border-radius: 100px;
    font-family: var(--bm-font-body);
    font-weight: 600;
    font-size: 13px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .cta-pill:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(212, 168, 83, 0.3);
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

  .mobile-overlay {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 999;
  }

  .mobile-menu {
    background: rgba(13, 13, 13, 0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 32px 24px 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .mobile-menu a {
    font-family: var(--bm-font-body);
    font-weight: 400;
    font-size: 16px;
    color: rgba(245, 240, 232, 0.7);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .mobile-menu a:hover {
    color: #F5F0E8;
  }

  .mobile-menu .cta-pill {
    display: inline-block;
    margin-top: 8px;
  }

  .desktop-only {
    display: flex;
  }

  .mobile-only {
    display: none;
  }

  @media (max-width: 768px) {
    .desktop-only {
      display: none;
    }
    .mobile-only {
      display: flex;
    }
  }
</style>
