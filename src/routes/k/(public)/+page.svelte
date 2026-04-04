<script lang="ts">
  import { ArrowRight, Star, Users, BookOpen, MessageCircle, Heart } from 'lucide-svelte';
</script>

<!-- SECTION 1: HERO — Dark -->
<section class="section hero">
  <div class="hero-content">
    <h1 class="hero-headline">
      <span class="hero-line1">Your guide to</span>
      <span class="hero-line2">being Muslim.</span>
    </h1>
    <p class="hero-sub">
      Education, community, and support for those beginning their Islamic journey.
    </p>
    <a href="#start" class="gold-pill hero-cta">
      Start Your Journey <ArrowRight size={18} />
    </a>
    <p class="hero-trust">Trusted by 10,000+ learners across 50+ countries</p>
  </div>
</section>

<!-- SECTION 2: SOCIAL PROOF BAR — Gold -->
<section class="section proof-bar">
  <div class="proof-inner">
    <div class="proof-stat">10,000+ Learners</div>
    <div class="proof-divider"></div>
    <div class="proof-stat">50+ Countries</div>
    <div class="proof-divider"></div>
    <div class="proof-stat">3,247 Sets Sponsored</div>
    <div class="proof-divider"></div>
    <div class="proof-stat">4.9&#9733; Rating</div>
  </div>
</section>

<!-- SECTION 3: THE BOOK — Light -->
<section class="section book-section" id="shop">
  <div class="book-inner">
    <div class="book-image">
      <img
        src="https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg"
        alt="Being Muslim: A Practical Guide book cover"
        loading="lazy"
      />
    </div>
    <div class="book-text">
      <h2 class="section-heading dark">The book that started it all</h2>
      <p class="book-desc">
        Being Muslim: A Practical Guide has reached 10,000+ communities across 50+ countries.
        Written by Dr. Asad Tarsin, it's the most accessible introduction to Islamic practice
        available today.
      </p>
      <a href="https://www.beingmuslim.org/shop" class="gold-pill">
        Get the Book — $14.95
      </a>
    </div>
  </div>
</section>

<!-- SECTION 4: THREE PATHS — Dark -->
<section class="section paths-section">
  <div class="container">
    <h2 class="section-heading light centered">Wherever you are on your journey</h2>
    <div class="paths-row">
      <div class="path-item">
        <span class="path-number">01</span>
        <span class="path-label">Exploring</span>
        <p class="path-desc">Curious about Islam and looking for clear, honest answers to your questions.</p>
      </div>
      <div class="path-divider"></div>
      <div class="path-item">
        <span class="path-number">02</span>
        <span class="path-label">Converting</span>
        <p class="path-desc">Ready to embrace Islam and need guidance on the first steps of practice.</p>
      </div>
      <div class="path-divider"></div>
      <div class="path-item">
        <span class="path-number">03</span>
        <span class="path-label">Reconnecting</span>
        <p class="path-desc">Raised Muslim but seeking a deeper understanding of your faith and identity.</p>
      </div>
    </div>
    <a href="#start" class="gold-link centered-link">Find Your Path <ArrowRight size={16} /></a>
  </div>
</section>

<!-- SECTION 5: COURSES — Light -->
<section class="section courses-section" id="learn">
  <div class="container">
    <h2 class="section-heading dark">Learn at your own pace</h2>
    <div class="course-list">
      <a href="https://www.beingmuslim.org/courses" class="course-row">
        <div class="course-left">
          <span class="course-title">Foundations of Faith</span>
        </div>
        <div class="course-right">
          <span class="course-meta">24 lessons &middot; Dr. Asad Tarsin</span>
          <ArrowRight size={18} class="course-arrow" />
        </div>
      </a>
      <a href="https://www.beingmuslim.org/courses" class="course-row">
        <div class="course-left">
          <span class="course-title">The Five Pillars</span>
        </div>
        <div class="course-right">
          <span class="course-meta">18 lessons &middot; Dr. Asad Tarsin</span>
          <ArrowRight size={18} class="course-arrow" />
        </div>
      </a>
      <a href="https://www.beingmuslim.org/courses" class="course-row">
        <div class="course-left">
          <span class="course-title">Living Islam Daily</span>
        </div>
        <div class="course-right">
          <span class="course-meta">16 lessons &middot; Dr. Asad Tarsin</span>
          <ArrowRight size={18} class="course-arrow" />
        </div>
      </a>
    </div>
    <a href="https://www.beingmuslim.org/courses" class="gold-link">Browse All Courses <ArrowRight size={16} /></a>
  </div>
</section>

<!-- SECTION 6: PRODUCTS — Dark -->
<section class="section products-section">
  <div class="container">
    <h2 class="section-heading light centered">Everything you need to begin</h2>
    <div class="products-scroll">
      <div class="product-item">
        <div class="product-img">
          <img src="https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg" alt="Being Muslim Book" loading="lazy" />
        </div>
        <p class="product-title">Being Muslim Book</p>
        <p class="product-price">$14.95</p>
      </div>
      <div class="product-item">
        <div class="product-img">
          <img src="https://www.beingmuslim.org/wp-content/uploads/2023/05/being-muslim-journal.jpeg" alt="Guided Journal" loading="lazy" />
        </div>
        <p class="product-title">Guided Journal</p>
        <p class="product-price">$19.95</p>
      </div>
      <div class="product-item">
        <div class="product-img">
          <img src="https://www.beingmuslim.org/wp-content/uploads/2023/05/being-muslim-boxed-set.jpeg" alt="Boxed Set" loading="lazy" />
        </div>
        <p class="product-title">Complete Boxed Set</p>
        <p class="product-price">$49.95</p>
      </div>
      <div class="product-item">
        <div class="product-img">
          <img src="https://www.beingmuslim.org/wp-content/uploads/2023/05/being-muslim-prayer-guide.jpeg" alt="Prayer Guide" loading="lazy" />
        </div>
        <p class="product-title">Prayer Guide</p>
        <p class="product-price">$12.95</p>
      </div>
    </div>
    <a href="https://www.beingmuslim.org/shop" class="gold-link centered-link">Visit the Shop <ArrowRight size={16} /></a>
  </div>
</section>

<!-- SECTION 7: COMMUNITY — Light -->
<section class="section community-section" id="community">
  <div class="container centered-content">
    <p class="big-stat dark-text">2,500+</p>
    <p class="big-stat-label dark-text">Muslims learning together</p>
    <p class="stat-inline">1,200+ discussions &middot; 50+ countries</p>
    <a href="https://www.beingmuslim.org/community" class="gold-pill">
      Join the Community <ArrowRight size={18} />
    </a>
  </div>
</section>

<!-- SECTION 8: IMPACT — Dark -->
<section class="section impact-section" id="support">
  <div class="container centered-content">
    <p class="impact-number">3,247</p>
    <p class="impact-label">boxed sets sponsored</p>
    <p class="impact-stats">520 communities reached &middot; 52 countries &middot; 180 monthly donors</p>
    <a href="https://www.beingmuslim.org/support" class="outline-pill">
      Support the Mission <ArrowRight size={18} />
    </a>
  </div>
</section>

<!-- SECTION 9: TESTIMONIAL — Light -->
<section class="section testimonial-section">
  <div class="container centered-content">
    <div class="stars-row">
      <Star size={20} fill="#F0C75E" color="#F0C75E" />
      <Star size={20} fill="#F0C75E" color="#F0C75E" />
      <Star size={20} fill="#F0C75E" color="#F0C75E" />
      <Star size={20} fill="#F0C75E" color="#F0C75E" />
      <Star size={20} fill="#F0C75E" color="#F0C75E" />
    </div>
    <div class="quote-mark">&ldquo;</div>
    <blockquote class="testimonial-quote">
      This book changed my life. As a new Muslim, I felt completely lost until I found Being Muslim.
      The way it breaks down the essentials of faith and practice made everything feel approachable
      and beautiful. I carry it everywhere.
    </blockquote>
    <p class="testimonial-author">&mdash; Sarah M., New Muslim</p>
  </div>
</section>

<!-- SECTION 10: CTA / NEWSLETTER — Dark -->
<section class="section cta-section" id="start">
  <div class="container centered-content">
    <h2 class="cta-headline">Ready to begin?</h2>
    <div class="cta-buttons">
      <a href="https://www.beingmuslim.org/courses" class="gold-pill">Start Learning</a>
      <a href="https://www.beingmuslim.org/shop" class="white-outline-pill">Get the Book</a>
    </div>
    <div class="newsletter">
      <form class="newsletter-form" onsubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Your email address" class="newsletter-input" />
        <button type="submit" class="newsletter-btn">Subscribe</button>
      </form>
      <p class="newsletter-note">Join 5,000+ subscribers</p>
    </div>
  </div>
</section>

<style>
  /* ===== GLOBAL SECTION STYLES ===== */
  .section {
    width: 100%;
    position: relative;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .centered-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .section-heading {
    font-family: var(--bm-font);
    font-weight: 700;
    font-size: 48px;
    line-height: 1.15;
    margin-bottom: 40px;
  }

  .section-heading.dark {
    color: var(--bm-midnight);
  }

  .section-heading.light {
    color: var(--bm-white);
  }

  .section-heading.centered {
    text-align: center;
  }

  /* ===== GOLD PILL CTA ===== */
  .gold-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--bm-gold);
    color: var(--bm-midnight);
    font-family: var(--bm-font);
    font-weight: 600;
    font-size: 16px;
    padding: 18px 40px;
    border-radius: 100px;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border: none;
    cursor: pointer;
  }

  .gold-pill:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(240, 199, 94, 0.35);
  }

  /* ===== GOLD LINK ===== */
  .gold-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--bm-gold);
    font-family: var(--bm-font);
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    margin-top: 32px;
    transition: gap 0.2s ease;
  }

  .gold-link:hover {
    gap: 10px;
  }

  .centered-link {
    justify-content: center;
    width: 100%;
    text-align: center;
  }

  /* ===== WHITE OUTLINE PILL ===== */
  .white-outline-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: var(--bm-white);
    font-family: var(--bm-font);
    font-weight: 600;
    font-size: 16px;
    padding: 18px 40px;
    border-radius: 100px;
    border: 1.5px solid var(--bm-white);
    text-decoration: none;
    transition: transform 0.2s ease, background 0.2s ease;
    cursor: pointer;
  }

  .white-outline-pill:hover {
    transform: translateY(-2px);
    background: rgba(250, 250, 248, 0.08);
  }

  /* ===== OUTLINE PILL (GOLD) ===== */
  .outline-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: var(--bm-gold);
    font-family: var(--bm-font);
    font-weight: 600;
    font-size: 16px;
    padding: 18px 40px;
    border-radius: 100px;
    border: 1.5px solid var(--bm-gold);
    text-decoration: none;
    transition: transform 0.2s ease, background 0.2s ease;
    cursor: pointer;
  }

  .outline-pill:hover {
    transform: translateY(-2px);
    background: rgba(240, 199, 94, 0.08);
  }

  /* ===== SECTION 1: HERO ===== */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bm-midnight);
    padding: 120px 24px 80px;
  }

  .hero-content {
    text-align: center;
    max-width: 800px;
  }

  .hero-headline {
    margin-bottom: 28px;
  }

  .hero-line1 {
    display: block;
    font-family: var(--bm-font);
    font-weight: 800;
    font-size: 64px;
    line-height: 1.1;
    color: var(--bm-white);
  }

  .hero-line2 {
    display: block;
    font-family: var(--bm-font);
    font-weight: 800;
    font-size: clamp(72px, 10vw, 120px);
    line-height: 1.05;
    color: var(--bm-gold);
  }

  .hero-sub {
    font-family: var(--bm-font);
    font-weight: 300;
    font-size: 18px;
    line-height: 1.6;
    color: var(--bm-slate);
    max-width: 500px;
    margin: 0 auto 40px;
  }

  .hero-cta {
    margin-bottom: 24px;
  }

  .hero-trust {
    font-family: var(--bm-font);
    font-weight: 400;
    font-size: 13px;
    color: var(--bm-slate);
    opacity: 0.7;
  }

  /* ===== SECTION 2: PROOF BAR ===== */
  .proof-bar {
    background: var(--bm-gold);
    padding: 40px 24px;
  }

  .proof-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    flex-wrap: wrap;
  }

  .proof-stat {
    font-family: var(--bm-font);
    font-weight: 600;
    font-size: 15px;
    color: var(--bm-midnight);
    white-space: nowrap;
  }

  .proof-divider {
    width: 1px;
    height: 20px;
    background: rgba(12, 18, 32, 0.25);
    flex-shrink: 0;
  }

  /* ===== SECTION 3: BOOK ===== */
  .book-section {
    background: var(--bm-white);
    padding: 120px 24px;
  }

  .book-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 80px;
  }

  .book-image {
    flex: 0 0 40%;
    max-width: 40%;
  }

  .book-image img {
    width: 100%;
    height: auto;
    display: block;
    box-shadow: 0 24px 60px rgba(12, 18, 32, 0.15);
  }

  .book-text {
    flex: 1;
  }

  .book-desc {
    font-family: var(--bm-font);
    font-weight: 300;
    font-size: 17px;
    line-height: 1.7;
    color: var(--bm-slate);
    margin-bottom: 36px;
    max-width: 520px;
  }

  /* ===== SECTION 4: THREE PATHS ===== */
  .paths-section {
    background: var(--bm-midnight);
    padding: 120px 24px;
  }

  .paths-row {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 0;
    margin-bottom: 20px;
  }

  .path-item {
    flex: 1;
    padding: 0 40px;
    text-align: center;
  }

  .path-number {
    display: block;
    font-family: var(--bm-font);
    font-weight: 700;
    font-size: 32px;
    color: var(--bm-gold);
    margin-bottom: 12px;
  }

  .path-label {
    display: block;
    font-family: var(--bm-font);
    font-weight: 600;
    font-size: 20px;
    color: var(--bm-white);
    margin-bottom: 12px;
  }

  .path-desc {
    font-family: var(--bm-font);
    font-weight: 300;
    font-size: 15px;
    line-height: 1.6;
    color: var(--bm-slate);
  }

  .path-divider {
    width: 1px;
    background: rgba(250, 250, 248, 0.12);
    align-self: stretch;
    min-height: 120px;
    flex-shrink: 0;
  }

  /* ===== SECTION 5: COURSES ===== */
  .courses-section {
    background: var(--bm-white);
    padding: 120px 24px;
  }

  .course-list {
    border-top: 1px solid rgba(12, 18, 32, 0.1);
  }

  .course-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 28px 16px;
    border-bottom: 1px solid rgba(12, 18, 32, 0.1);
    text-decoration: none;
    transition: background 0.2s ease;
  }

  .course-row:hover {
    background: rgba(12, 18, 32, 0.03);
  }

  .course-left {
    flex: 1;
  }

  .course-title {
    font-family: var(--bm-font);
    font-weight: 600;
    font-size: 22px;
    color: var(--bm-midnight);
  }

  .course-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .course-meta {
    font-family: var(--bm-font);
    font-weight: 400;
    font-size: 14px;
    color: var(--bm-slate);
  }

  .course-row :global(.course-arrow) {
    color: var(--bm-slate);
    transition: transform 0.2s ease;
  }

  .course-row:hover :global(.course-arrow) {
    transform: translateX(4px);
    color: var(--bm-gold);
  }

  /* ===== SECTION 6: PRODUCTS ===== */
  .products-section {
    background: var(--bm-midnight);
    padding: 120px 24px;
  }

  .products-scroll {
    display: flex;
    gap: 32px;
    overflow-x: auto;
    padding-bottom: 12px;
    margin-bottom: 12px;
    scrollbar-width: none;
  }

  .products-scroll::-webkit-scrollbar {
    display: none;
  }

  .product-item {
    flex: 0 0 240px;
  }

  .product-img {
    width: 240px;
    height: 240px;
    overflow: hidden;
    margin-bottom: 16px;
  }

  .product-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  .product-item:hover .product-img img {
    transform: scale(1.04);
  }

  .product-title {
    font-family: var(--bm-font);
    font-weight: 500;
    font-size: 16px;
    color: var(--bm-white);
    margin-bottom: 4px;
  }

  .product-price {
    font-family: var(--bm-font);
    font-weight: 600;
    font-size: 15px;
    color: var(--bm-gold);
  }

  /* ===== SECTION 7: COMMUNITY ===== */
  .community-section {
    background: var(--bm-white);
    padding: 140px 24px;
  }

  .big-stat {
    font-family: var(--bm-font);
    font-weight: 800;
    font-size: 96px;
    line-height: 1;
    margin-bottom: 8px;
  }

  .big-stat.dark-text {
    color: var(--bm-midnight);
  }

  .big-stat-label {
    font-family: var(--bm-font);
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 16px;
  }

  .big-stat-label.dark-text {
    color: var(--bm-midnight);
  }

  .stat-inline {
    font-family: var(--bm-font);
    font-weight: 400;
    font-size: 15px;
    color: var(--bm-slate);
    margin-bottom: 40px;
  }

  /* ===== SECTION 8: IMPACT ===== */
  .impact-section {
    background: var(--bm-midnight);
    padding: 140px 24px;
  }

  .impact-number {
    font-family: var(--bm-font);
    font-weight: 800;
    font-size: 120px;
    line-height: 1;
    color: var(--bm-gold);
    margin-bottom: 8px;
  }

  .impact-label {
    font-family: var(--bm-font);
    font-weight: 400;
    font-size: 24px;
    color: var(--bm-white);
    margin-bottom: 20px;
  }

  .impact-stats {
    font-family: var(--bm-font);
    font-weight: 400;
    font-size: 15px;
    color: var(--bm-slate);
    margin-bottom: 40px;
  }

  /* ===== SECTION 9: TESTIMONIAL ===== */
  .testimonial-section {
    background: var(--bm-white);
    padding: 120px 24px;
  }

  .stars-row {
    display: flex;
    gap: 4px;
    margin-bottom: 28px;
  }

  .quote-mark {
    font-family: var(--bm-font);
    font-weight: 800;
    font-size: 80px;
    line-height: 0.6;
    color: var(--bm-gold);
    margin-bottom: 12px;
  }

  .testimonial-quote {
    font-family: var(--bm-font);
    font-weight: 400;
    font-style: italic;
    font-size: 24px;
    line-height: 1.6;
    color: var(--bm-midnight);
    max-width: 700px;
    margin-bottom: 28px;
  }

  .testimonial-author {
    font-family: var(--bm-font);
    font-weight: 500;
    font-size: 15px;
    color: var(--bm-slate);
  }

  /* ===== SECTION 10: CTA / NEWSLETTER ===== */
  .cta-section {
    background: var(--bm-midnight);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 120px 24px;
  }

  .cta-headline {
    font-family: var(--bm-font);
    font-weight: 800;
    font-size: clamp(48px, 8vw, 80px);
    color: var(--bm-gold);
    margin-bottom: 40px;
  }

  .cta-buttons {
    display: flex;
    gap: 16px;
    margin-bottom: 60px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .newsletter {
    width: 100%;
    max-width: 480px;
  }

  .newsletter-form {
    display: flex;
    gap: 0;
    width: 100%;
  }

  .newsletter-input {
    flex: 1;
    padding: 16px 20px;
    background: rgba(250, 250, 248, 0.06);
    border: 1px solid rgba(250, 250, 248, 0.15);
    border-right: none;
    border-radius: 100px 0 0 100px;
    color: var(--bm-white);
    font-family: var(--bm-font);
    font-weight: 400;
    font-size: 15px;
    outline: none;
    transition: border-color 0.2s ease;
  }

  .newsletter-input::placeholder {
    color: var(--bm-slate);
  }

  .newsletter-input:focus {
    border-color: var(--bm-gold);
  }

  .newsletter-btn {
    padding: 16px 28px;
    background: var(--bm-gold);
    color: var(--bm-midnight);
    font-family: var(--bm-font);
    font-weight: 600;
    font-size: 15px;
    border: none;
    border-radius: 0 100px 100px 0;
    cursor: pointer;
    transition: background 0.2s ease;
    white-space: nowrap;
  }

  .newsletter-btn:hover {
    background: #e5bc50;
  }

  .newsletter-note {
    font-family: var(--bm-font);
    font-weight: 400;
    font-size: 13px;
    color: var(--bm-slate);
    opacity: 0.7;
    margin-top: 14px;
    text-align: center;
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 768px) {
    .hero-line1 {
      font-size: 40px;
    }

    .hero-line2 {
      font-size: clamp(48px, 12vw, 72px);
    }

    .hero-sub {
      font-size: 16px;
    }

    .section-heading {
      font-size: 36px;
    }

    .proof-inner {
      gap: 16px;
    }

    .proof-divider {
      display: none;
    }

    .proof-stat {
      font-size: 13px;
    }

    .book-inner {
      flex-direction: column;
      gap: 48px;
    }

    .book-image {
      flex: none;
      max-width: 280px;
      margin: 0 auto;
    }

    .paths-row {
      flex-direction: column;
      gap: 40px;
      align-items: center;
    }

    .path-divider {
      width: 60px;
      height: 1px;
      min-height: 0;
    }

    .path-item {
      padding: 0;
    }

    .course-right {
      gap: 12px;
    }

    .course-meta {
      display: none;
    }

    .course-title {
      font-size: 18px;
    }

    .products-scroll {
      gap: 20px;
    }

    .product-item {
      flex: 0 0 200px;
    }

    .product-img {
      width: 200px;
      height: 200px;
    }

    .big-stat {
      font-size: 64px;
    }

    .big-stat-label {
      font-size: 20px;
    }

    .impact-number {
      font-size: 72px;
    }

    .impact-label {
      font-size: 20px;
    }

    .testimonial-quote {
      font-size: 20px;
    }

    .quote-mark {
      font-size: 60px;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .newsletter-form {
      flex-direction: column;
      gap: 12px;
    }

    .newsletter-input {
      border-radius: 100px;
      border-right: 1px solid rgba(250, 250, 248, 0.15);
    }

    .newsletter-btn {
      border-radius: 100px;
    }
  }
</style>
