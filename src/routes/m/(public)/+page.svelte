<script lang="ts">
  import { Play, BookOpen, Users, MessageCircle, Star, Heart, Globe, Compass, RotateCcw, ArrowRight, Send } from 'lucide-svelte';
</script>

<!-- SECTION 1: HERO -->
<section class="hero">
  <div class="hero-content">
    <span class="bm-label" style="letter-spacing: 0.2em; font-size: 11px;">WELCOME TO</span>
    <h1 class="hero-title">Being Muslim</h1>
    <p class="hero-subtitle-italic">A Practical Guide to Islamic Faith & Practice</p>
    <p class="hero-subtitle">Courses, resources, and community for those beginning their journey — by Dr. Asad Tarsin</p>
    <a href="#classes" class="bm-btn-gold" style="padding: 16px 36px; margin-top: 8px;">Explore Classes</a>
    <p class="hero-meta">10,000+ learners &middot; 50+ countries</p>
  </div>
  <div class="hero-fade"></div>
</section>

<!-- SECTION 2: FEATURED CLASS -->
<section class="bm-section" id="featured">
  <div class="featured-card">
    <div class="featured-image">
      <img src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=900&q=80&auto=format&fit=crop" alt="Foundations of Faith" />
      <div class="featured-image-overlay"></div>
      <div class="play-btn-large">
        <div class="play-circle">
          <Play size={28} color="#D4A853" fill="#D4A853" />
        </div>
      </div>
    </div>
    <div class="featured-info">
      <span class="bm-label">FEATURED CLASS</span>
      <h2 style="font-family: var(--bm-font-heading); font-size: 32px; color: rgba(245,240,232,0.9); margin-top: 16px;">Foundations of Faith</h2>
      <p style="font-family: var(--bm-font-body); font-size: 14px; color: rgba(245,240,232,0.6); margin-top: 8px;">Dr. Asad Tarsin</p>
      <p style="font-family: var(--bm-font-body); font-size: 15px; color: rgba(245,240,232,0.5); margin-top: 16px; line-height: 1.7;">A comprehensive 24-lesson course covering the essentials of Islamic belief and practice. Perfect for new Muslims and those seeking to deepen their understanding.</p>
      <p style="font-family: var(--bm-font-body); font-size: 13px; color: rgba(245,240,232,0.4); margin-top: 16px;">24 lessons &middot; 6 hours &middot; Beginner</p>
      <a href="#classes" class="bm-btn-gold" style="margin-top: 24px;">Start Watching</a>
    </div>
  </div>
</section>

<!-- SECTION 3: CLASSES -->
<section class="bm-section" id="classes">
  <h2 style="font-family: var(--bm-font-heading); font-size: 36px; color: rgba(245,240,232,0.9); text-align: center; margin-bottom: 48px;">All Classes</h2>
  <div class="bm-grid-3">
    {#each [
      { title: 'Foundations of Faith', instructor: 'Dr. Asad Tarsin', lessons: 24, duration: '6 hours', category: 'BELIEF', img: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80&auto=format&fit=crop' },
      { title: 'Prayer Mastery', instructor: 'Imam Ahmad', lessons: 16, duration: '4 hours', category: 'PRACTICE', img: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=80&auto=format&fit=crop' },
      { title: 'Your Quran Journey', instructor: 'Ustadha Fatima', lessons: 32, duration: '10 hours', category: 'QURAN', img: 'https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?w=600&q=80&auto=format&fit=crop' }
    ] as course}
      <div class="bm-card-dark class-card">
        <div class="class-thumb">
          <img src={course.img} alt={course.title} />
          <div class="class-thumb-overlay"></div>
          <div class="play-btn-small">
            <Play size={20} color="#fff" fill="#fff" />
          </div>
        </div>
        <div class="class-info">
          <span class="bm-label" style="font-size: 10px;">{course.category}</span>
          <h3 style="font-family: var(--bm-font-heading); font-size: 20px; color: rgba(245,240,232,0.9); margin-top: 8px;">{course.title}</h3>
          <p style="font-family: var(--bm-font-body); font-size: 13px; color: rgba(245,240,232,0.5); margin-top: 6px;">{course.instructor}</p>
          <p style="font-family: var(--bm-font-body); font-size: 12px; color: rgba(245,240,232,0.4); margin-top: 8px;">{course.lessons} lessons &middot; {course.duration}</p>
        </div>
      </div>
    {/each}
  </div>
  <div style="text-align: center; margin-top: 40px;">
    <a href="#classes" class="bm-link-gold">Browse All Classes <ArrowRight size={14} style="display:inline; vertical-align:middle;" /></a>
  </div>
</section>

<!-- SECTION 4: THE BOOK -->
<section class="book-section" id="book">
  <div class="bm-section">
    <div class="bm-grid-2">
      <div class="book-image-wrap">
        <div class="book-glow"></div>
        <img src="https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg" alt="Being Muslim: A Practical Guide" class="book-cover" />
      </div>
      <div class="book-info">
        <span class="bm-label">THE BESTSELLING GUIDE</span>
        <h2 style="font-family: var(--bm-font-heading); font-size: 36px; color: rgba(245,240,232,0.9); margin-top: 16px; line-height: 1.2;">Being Muslim: A Practical Guide</h2>
        <p style="font-family: var(--bm-font-body); font-style: italic; font-size: 15px; color: rgba(245,240,232,0.6); margin-top: 12px;">by Dr. Asad Tarsin</p>
        <p style="font-family: var(--bm-font-body); font-size: 15px; color: rgba(245,240,232,0.5); margin-top: 20px; line-height: 1.7;">A comprehensive yet accessible guide that walks readers through the fundamentals of Islamic belief and practice. Written for new Muslims, those exploring Islam, and lifelong Muslims seeking to deepen their understanding.</p>
        <p style="font-family: var(--bm-font-body); font-size: 14px; color: var(--bm-gold); margin-top: 20px; font-weight: 500;">10,000+ communities &middot; 50+ countries</p>
        <p style="font-family: var(--bm-font-heading); font-size: 24px; color: rgba(245,240,232,0.9); margin-top: 20px;">$14.95</p>
        <a href="#book" class="bm-btn-gold" style="margin-top: 24px;">Get the Book</a>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 5: MORE PRODUCTS -->
<section class="bm-section" id="shop">
  <h2 style="font-family: var(--bm-font-heading); font-size: 32px; color: rgba(245,240,232,0.9); text-align: center; margin-bottom: 48px;">The Collection</h2>
  <div class="bm-grid-4">
    {#each [
      { title: 'Being Muslim: A Practical Guide', price: '$14.95', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/being-muslim-book.jpeg' },
      { title: 'The Complete Boxed Set', price: '$85.00', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-boxed-set-900x1200.jpeg' },
      { title: 'Prayer Reference Cards', price: '$37.50', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/the-prayer-card-900x610.jpeg' },
      { title: 'Digital Edition (eBook)', price: '$9.00', img: 'https://www.beingmuslim.org/wp-content/uploads/2021/08/BM-E-Book-900x1200.png' }
    ] as product}
      <div class="bm-card-dark product-card">
        <div class="product-thumb">
          <img src={product.img} alt={product.title} />
        </div>
        <div class="product-info">
          <h3 style="font-family: var(--bm-font-heading); font-size: 16px; color: rgba(245,240,232,0.9); line-height: 1.4;">{product.title}</h3>
          <p style="font-family: var(--bm-font-body); font-size: 14px; color: var(--bm-gold); margin-top: 8px; font-weight: 500;">{product.price}</p>
        </div>
      </div>
    {/each}
  </div>
  <div style="text-align: center; margin-top: 40px;">
    <a href="#shop" class="bm-link-gold">Visit the Shop <ArrowRight size={14} style="display:inline; vertical-align:middle;" /></a>
  </div>
</section>

<!-- SECTION 6: PATHS -->
<section class="bm-section" id="paths">
  <h2 style="font-family: var(--bm-font-heading); font-size: 36px; color: rgba(245,240,232,0.9); text-align: center; margin-bottom: 48px;">Start Your Journey</h2>
  <div class="bm-grid-3">
    {#each [
      { icon: Compass, title: 'Exploring Islam', desc: 'Curious about Islam? Start here with introductory resources designed for those who want to learn without pressure.' },
      { icon: BookOpen, title: 'Recently Converted', desc: 'New to the faith? Find step-by-step guidance, community support, and practical tools for your first year and beyond.' },
      { icon: RotateCcw, title: 'Reconnecting with Faith', desc: 'Coming back to practice? Rediscover your relationship with Islam at your own pace with compassionate guidance.' }
    ] as path}
      <div class="bm-card-dark path-card">
        <div class="path-icon">
          <path.icon size={24} color="#D4A853" strokeWidth={1.5} />
        </div>
        <h3 style="font-family: var(--bm-font-heading); font-size: 20px; color: rgba(245,240,232,0.9); margin-top: 20px;">{path.title}</h3>
        <p style="font-family: var(--bm-font-body); font-size: 14px; color: rgba(245,240,232,0.5); margin-top: 12px; line-height: 1.7;">{path.desc}</p>
        <a href="#paths" class="bm-link-gold" style="margin-top: 20px; display: inline-flex; align-items: center; gap: 6px;">Explore <ArrowRight size={14} /></a>
      </div>
    {/each}
  </div>
</section>

<!-- SECTION 7: COMMUNITY -->
<section class="bm-section" id="community">
  <div class="community-container">
    <div class="bm-grid-2">
      <div class="community-left">
        <h2 style="font-family: var(--bm-font-heading); font-size: 36px; color: rgba(245,240,232,0.9); line-height: 1.2;">Join the Community</h2>
        <p style="font-family: var(--bm-font-body); font-size: 15px; color: rgba(245,240,232,0.5); margin-top: 16px; line-height: 1.7;">Connect with fellow learners, ask questions, share your journey, and find support in a welcoming space.</p>
        <div class="community-stats">
          <div class="community-stat">
            <span class="stat-number">2,500+</span>
            <span class="stat-label">members</span>
          </div>
          <div class="community-stat">
            <span class="stat-number">1,200+</span>
            <span class="stat-label">discussions</span>
          </div>
        </div>
        <a href="#community" class="bm-btn-gold" style="margin-top: 28px;">Join Now</a>
      </div>
      <div class="community-chat">
        <div class="chat-message">
          <div class="chat-avatar" style="background: #2a5a3a;">A</div>
          <div class="chat-bubble">
            <span class="chat-name">Amina</span>
            <p>Just completed the Foundations course! The section on prayer was so helpful for someone new to the practice.</p>
          </div>
        </div>
        <div class="chat-message">
          <div class="chat-avatar" style="background: #4a3a6a;">Y</div>
          <div class="chat-bubble">
            <span class="chat-name">Yusuf</span>
            <p>Welcome! That course changed my perspective completely. Highly recommend the Quran Journey next.</p>
          </div>
        </div>
        <div class="chat-message">
          <div class="chat-avatar" style="background: #6a4a2a;">S</div>
          <div class="chat-bubble">
            <span class="chat-name">Sarah</span>
            <p>This community is such a blessing. Everyone here is so supportive and kind.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 8: IMPACT -->
<section class="bm-section" id="sponsor" style="text-align: center;">
  <h2 style="font-family: var(--bm-font-heading); font-size: 36px; color: rgba(245,240,232,0.9);">Make an Impact</h2>
  <p style="font-family: var(--bm-font-body); font-size: 16px; color: rgba(245,240,232,0.5); max-width: 560px; margin: 16px auto 0; line-height: 1.7;">Your sponsorship puts a complete Being Muslim boxed set into the hands of a new Muslim who needs it most.</p>
  <p style="font-family: var(--bm-font-heading); font-size: 28px; color: var(--bm-gold); margin-top: 32px;">3,247 sets sponsored</p>
  <a href="#sponsor" class="bm-btn-gold" style="margin-top: 28px; padding: 16px 36px;">Sponsor a Set &mdash; $85</a>
  <p style="font-family: var(--bm-font-body); font-size: 13px; color: rgba(245,240,232,0.4); margin-top: 24px;">520 communities &middot; 52 countries &middot; 180 donors</p>
</section>

<!-- SECTION 9: TESTIMONIAL -->
<section class="testimonial-section">
  <div class="bm-section" style="text-align: center; max-width: 720px;">
    <div class="gold-rule"></div>
    <div class="stars">
      {#each Array(5) as _}
        <Star size={18} color="#D4A853" fill="#D4A853" />
      {/each}
    </div>
    <blockquote style="font-family: var(--bm-font-heading); font-style: italic; font-size: 24px; color: rgba(245,240,232,0.9); line-height: 1.6; margin-top: 28px;">"Being Muslim gave me the foundation I needed to truly understand and practice my faith. It's not just a book — it's a companion for the journey."</blockquote>
    <p style="font-family: var(--bm-font-body); font-size: 14px; color: rgba(245,240,232,0.6); margin-top: 24px;">— Aisha R., New York</p>
    <div class="gold-rule" style="margin-top: 32px;"></div>
  </div>
</section>

<!-- SECTION 10: NEWSLETTER -->
<section class="bm-section" id="newsletter" style="text-align: center;">
  <h2 style="font-family: var(--bm-font-heading); font-size: 32px; color: rgba(245,240,232,0.9);">Stay in the loop</h2>
  <p style="font-family: var(--bm-font-body); font-size: 15px; color: rgba(245,240,232,0.5); margin-top: 12px;">Get updates on new classes, resources, and community highlights.</p>
  <form class="newsletter-form" onsubmit={(e) => e.preventDefault()}>
    <input type="email" placeholder="Enter your email" class="newsletter-input" />
    <button type="submit" class="bm-btn-gold newsletter-btn">
      <Send size={16} />
      Subscribe
    </button>
  </form>
  <p style="font-family: var(--bm-font-body); font-size: 13px; color: rgba(245,240,232,0.4); margin-top: 16px;">5,000+ subscribers</p>
</section>

<style>
  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: radial-gradient(ellipse at center, #1A1A1A 0%, #0D0D0D 70%);
    padding: 64px 24px 0;
  }

  .hero-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    position: relative;
    z-index: 1;
  }

  .hero-title {
    font-family: var(--bm-font-heading);
    font-size: clamp(48px, 8vw, 80px);
    font-weight: 500;
    color: var(--bm-white);
    line-height: 1.1;
  }

  .hero-subtitle-italic {
    font-family: var(--bm-font-heading);
    font-style: italic;
    font-size: 22px;
    color: rgba(245, 240, 232, 0.6);
  }

  .hero-subtitle {
    font-family: var(--bm-font-body);
    font-size: 16px;
    color: rgba(245, 240, 232, 0.5);
    max-width: 520px;
    line-height: 1.6;
  }

  .hero-meta {
    font-family: var(--bm-font-body);
    font-size: 13px;
    color: rgba(245, 240, 232, 0.4);
    margin-top: 8px;
  }

  .hero-fade {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(to bottom, transparent, #0D0D0D);
    pointer-events: none;
  }

  /* ── FEATURED CARD ── */
  .featured-card {
    display: flex;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    overflow: hidden;
    background: var(--bm-surface);
  }

  .featured-image {
    position: relative;
    width: 55%;
    min-height: 400px;
    flex-shrink: 0;
  }

  .featured-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .featured-image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, transparent 60%, rgba(26, 26, 26, 0.6));
    pointer-events: none;
  }

  .play-btn-large {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .play-circle {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.2s ease, background 0.2s ease;
  }

  .play-circle:hover {
    transform: scale(1.08);
    background: rgba(255, 255, 255, 0.22);
  }

  .featured-info {
    width: 45%;
    padding: 48px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* ── CLASS CARDS ── */
  .class-card {
    cursor: pointer;
  }

  .class-thumb {
    position: relative;
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }

  .class-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .class-card:hover .class-thumb img {
    transform: scale(1.05);
  }

  .class-thumb-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.25);
    transition: background 0.3s ease;
  }

  .class-card:hover .class-thumb-overlay {
    background: rgba(0, 0, 0, 0.4);
  }

  .play-btn-small {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .class-card:hover .play-btn-small {
    opacity: 1;
  }

  .class-info {
    padding: 20px;
  }

  /* ── BOOK SECTION ── */
  .book-section {
    background: var(--bm-surface);
  }

  .book-image-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .book-glow {
    position: absolute;
    width: 280px;
    height: 380px;
    background: radial-gradient(ellipse, rgba(212, 168, 83, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    filter: blur(40px);
  }

  .book-cover {
    position: relative;
    max-width: 280px;
    border-radius: 8px;
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
  }

  .book-info {
    display: flex;
    flex-direction: column;
  }

  /* ── PRODUCT CARDS ── */
  .product-card {
    cursor: pointer;
  }

  .product-thumb {
    aspect-ratio: 1;
    overflow: hidden;
    background: #151515;
  }

  .product-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .product-card:hover .product-thumb img {
    transform: scale(1.05);
  }

  .product-info {
    padding: 16px;
  }

  /* ── PATH CARDS ── */
  .path-card {
    padding: 32px 28px;
  }

  .path-icon {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1px solid rgba(212, 168, 83, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(212, 168, 83, 0.06);
  }

  /* ── COMMUNITY ── */
  .community-container {
    background: var(--bm-surface);
    border-radius: 16px;
    padding: 56px 48px;
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  .community-stats {
    display: flex;
    gap: 32px;
    margin-top: 28px;
  }

  .community-stat {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .stat-number {
    font-family: var(--bm-font-heading);
    font-size: 28px;
    color: var(--bm-gold);
    font-weight: 500;
  }

  .stat-label {
    font-family: var(--bm-font-body);
    font-size: 13px;
    color: rgba(245, 240, 232, 0.4);
  }

  .community-chat {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .chat-message {
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }

  .chat-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--bm-font-body);
    font-size: 14px;
    font-weight: 600;
    color: rgba(245, 240, 232, 0.8);
    flex-shrink: 0;
  }

  .chat-bubble {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 12px 16px;
  }

  .chat-name {
    font-family: var(--bm-font-body);
    font-size: 12px;
    font-weight: 600;
    color: rgba(245, 240, 232, 0.6);
    display: block;
    margin-bottom: 4px;
  }

  .chat-bubble p {
    font-family: var(--bm-font-body);
    font-size: 13px;
    color: rgba(245, 240, 232, 0.5);
    line-height: 1.6;
  }

  /* ── TESTIMONIAL ── */
  .testimonial-section {
    background: var(--bm-surface);
  }

  .gold-rule {
    width: 60px;
    height: 1px;
    background: var(--bm-gold);
    margin: 0 auto;
    opacity: 0.5;
  }

  .stars {
    display: flex;
    justify-content: center;
    gap: 4px;
    margin-top: 28px;
  }

  /* ── NEWSLETTER ── */
  .newsletter-form {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 28px;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  .newsletter-input {
    flex: 1;
    background: var(--bm-surface);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 100px;
    padding: 14px 24px;
    font-family: var(--bm-font-body);
    font-size: 14px;
    color: var(--bm-white);
    outline: none;
    transition: border-color 0.2s ease;
  }

  .newsletter-input::placeholder {
    color: rgba(245, 240, 232, 0.35);
  }

  .newsletter-input:focus {
    border-color: rgba(212, 168, 83, 0.4);
  }

  .newsletter-btn {
    padding: 14px 24px;
    flex-shrink: 0;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .featured-card {
      flex-direction: column;
    }

    .featured-image {
      width: 100%;
      min-height: 260px;
    }

    .featured-info {
      width: 100%;
      padding: 32px 24px;
    }

    .community-container {
      padding: 36px 24px;
    }

    .hero-subtitle-italic {
      font-size: 18px;
    }
  }

  @media (max-width: 600px) {
    .hero {
      padding-top: 80px;
    }

    .hero-subtitle-italic {
      font-size: 16px;
    }

    .hero-subtitle {
      font-size: 14px;
    }

    .newsletter-form {
      flex-direction: column;
    }

    .community-stats {
      gap: 24px;
    }

    .stat-number {
      font-size: 22px;
    }
  }
</style>
