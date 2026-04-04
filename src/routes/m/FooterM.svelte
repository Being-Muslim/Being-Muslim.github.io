<script lang="ts">
  import { TreePine } from 'lucide-svelte';
</script>

<footer class="footer">
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="/m/" class="footer-logo">
          <TreePine size={20} color="#F5F0E8" strokeWidth={1.5} />
          <span class="footer-logo-text">BEING MUSLIM</span>
        </a>
        <p class="footer-tagline">A practical guide to Islamic faith & practice.</p>
      </div>

      <div class="footer-columns">
        <div class="footer-col">
          <h4>Learn</h4>
          <a href="/m/#classes">Classes</a>
          <a href="/m/#resources">Resources</a>
          <a href="/m/#paths">Learning Paths</a>
        </div>
        <div class="footer-col">
          <h4>Shop</h4>
          <a href="/m/#shop">The Book</a>
          <a href="/m/#shop">Journal</a>
          <a href="/m/#shop">Boxed Set</a>
        </div>
        <div class="footer-col">
          <h4>Connect</h4>
          <a href="/m/#community">Community</a>
          <a href="/m/#sponsor">Sponsor</a>
          <a href="/m/#newsletter">Newsletter</a>
        </div>
      </div>
    </div>

    <div class="footer-social">
      <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </a>
    </div>

    <div class="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Being Muslim. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    background: #0D0D0D;
    padding: 60px 24px 32px;
  }

  .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-top {
    display: flex;
    justify-content: space-between;
    gap: 48px;
    margin-bottom: 48px;
  }

  .footer-brand {
    max-width: 280px;
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    margin-bottom: 12px;
  }

  .footer-logo-text {
    font-family: var(--bm-font-body);
    font-weight: 500;
    font-size: 13px;
    color: #F5F0E8;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .footer-tagline {
    font-family: var(--bm-font-body);
    font-size: 14px;
    color: rgba(245, 240, 232, 0.4);
    line-height: 1.6;
  }

  .footer-columns {
    display: flex;
    gap: 56px;
  }

  .footer-col {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .footer-col h4 {
    font-family: var(--bm-font-body) !important;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(245, 240, 232, 0.6);
    margin-bottom: 4px;
  }

  .footer-col a {
    font-family: var(--bm-font-body);
    font-size: 13px;
    color: rgba(245, 240, 232, 0.4);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .footer-col a:hover {
    color: var(--bm-gold);
  }

  .footer-social {
    display: flex;
    gap: 20px;
    padding-bottom: 32px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    margin-bottom: 24px;
  }

  .footer-social a {
    color: rgba(245, 240, 232, 0.4);
    transition: color 0.2s ease;
  }

  .footer-social a:hover {
    color: var(--bm-gold);
  }

  .footer-bottom p {
    font-family: var(--bm-font-body);
    font-size: 12px;
    color: rgba(245, 240, 232, 0.3);
  }

  @media (max-width: 768px) {
    .footer-top {
      flex-direction: column;
      gap: 36px;
    }

    .footer-columns {
      gap: 32px;
    }
  }

  @media (max-width: 480px) {
    .footer-columns {
      flex-direction: column;
      gap: 28px;
    }
  }
</style>
