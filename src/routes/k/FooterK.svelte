<script lang="ts">
  import { Heart } from 'lucide-svelte';
</script>

<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <span class="footer-logo">BM</span>
      <p class="footer-tagline">Education, community, and support for every Muslim.</p>
    </div>

    <div class="footer-links">
      <a href="/k/#learn">Learn</a>
      <span class="divider">·</span>
      <a href="/k/#shop">Shop</a>
      <span class="divider">·</span>
      <a href="/k/#support">Support</a>
      <span class="divider">·</span>
      <a href="/k/#community">Community</a>
      <span class="divider">·</span>
      <a href="mailto:info@beingmuslim.org">Contact</a>
    </div>

    <div class="footer-social">
      <a href="https://www.instagram.com/beingmuslimorg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      </a>
      <a href="https://www.facebook.com/beingmuslimorg/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </a>
      <a href="https://www.youtube.com/@beingmuslim" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
      </a>
    </div>

    <p class="footer-copy">
      &copy; {new Date().getFullYear()} Being Muslim. Made with <Heart size={12} class="heart-icon" /> for the ummah.
    </p>
  </div>
</footer>

<style>
  .footer {
    background: var(--bm-midnight);
    border-top: 1px solid rgba(250, 250, 248, 0.06);
    padding: 60px 24px 40px;
  }

  .footer-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    text-align: center;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .footer-logo {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--bm-gold);
    color: var(--bm-midnight);
    font-family: var(--bm-font);
    font-weight: 700;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-tagline {
    font-family: var(--bm-font);
    font-weight: 300;
    font-size: 14px;
    color: var(--bm-slate);
  }

  .footer-links {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-links a {
    font-family: var(--bm-font);
    font-weight: 400;
    font-size: 13px;
    color: var(--bm-white);
    text-decoration: none;
    opacity: 0.6;
    transition: opacity 0.2s ease;
  }

  .footer-links a:hover {
    opacity: 1;
  }

  .divider {
    color: var(--bm-slate);
    opacity: 0.4;
    font-size: 13px;
  }

  .footer-social {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .footer-social a {
    color: var(--bm-slate);
    transition: color 0.2s ease;
    display: flex;
    align-items: center;
  }

  .footer-social a:hover {
    color: var(--bm-gold);
  }

  .footer-copy {
    font-family: var(--bm-font);
    font-weight: 300;
    font-size: 12px;
    color: var(--bm-slate);
    opacity: 0.6;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .footer-copy :global(.heart-icon) {
    color: var(--bm-gold);
    display: inline;
    vertical-align: middle;
  }
</style>
