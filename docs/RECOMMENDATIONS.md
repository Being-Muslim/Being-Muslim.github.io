# Being Muslim Project — Follow-up Recommendations

This is the running log of everything that was **intentionally NOT built** during the
SvelteKit → Next.js migration, plus decisions that should be revisited. The migration
delivered **only the content/structure defined in** `~/Downloads/Website Refresh Brainstorm.md`
("the doc"). Anything in the old SvelteKit site that the doc does not call for was dropped and
recorded here rather than ported.

_Last updated: 2026-06-13 (post follow-up round — frontend backlog addressed)._

---

## 0. Decisions & status — 2026-06-13 follow-up round

A round of frontend-only follow-ups was run (operator decisions in parens). Legend: ✅ done · ⏸️ deferred.

- ✅ **Fabricated stats / trust bars removed** (operator: remove stats, keep hero CTAs). Stripped the "Trusted by 10,000+ learners" trust bar from all 7 concept homes; removed the a-staging shop "Sponsor" stat counters (Sets Sponsored / Communities Reached / Countries / Monthly Donors). Hero CTA buttons kept. Dead `.bm-counter-*` (concept-d) and `.hero-trust` (concept-c) CSS cleaned.
- ✅ **Convert form → checkboxes** (doc §3.2.1.1). The 5 background options are now multi-select checkboxes (were single-select radios) on both staging concepts.
- ✅ **Translated book pages + languages index** (doc §4.1.1–4.1.2, §4.4). Added per-language Book pages (`/shop/book/spanish`, `/shop/book/portuguese`), a `/shop/languages` index (lists all languages incl. not-yet-purchasable), and a language switcher row on the Book hero — both staging concepts. NOTE: translated **body copy** is not real (clearly marked "translation forthcoming") — supply real translations before launch.
- ✅ **Cosmetics**: concept-a.css + concept-b.css header comments corrected; misleading "Courses" footer link removed from both staging footers.
- ⏸️ **Forms backend (DEFERRED — operator: skip backend for now, frontend only).** All 4 forms (Ask a Question, Ready to Convert, Request a Donation, Contact) remain front-end only (local confirmation, no submission). **Follow-up task:** build submission handling — see §3 for the per-form requirements (Ask-a-Question routes separately from Contact; Request-a-Donation exports to a sheet/report; Contact Subject drives routing). Pick a delivery mechanism (Next route handler + email/SES/Google Form) when ready.
- ⏸️ **Commerce / Shopify (DEFERRED — operator: skip).** Product pages stay static; cart/checkout/buy buttons non-functional. See §3.
- ⏸️ **Image localization (DEFERRED — by recommendation).** Not worth localizing images across 6 concepts before the design pick; do it for the chosen concept post-selection. See §6.
- ⏸️ **Recommended-resources curation, Brill fonts, Impact reviews** — blocked on external content/assets (the Google-Doc resource list, licensed font files, real review data). See §4/§6.

---

## 1. Non-doc sections removed from the staging HOME pages

The `a-staging` and `b-staging` Svelte homes carried five sections the doc does not list.
They were removed from the canonical home so all 7 concepts share the same 5-section structure
(Hero · 3 feature boxes · 3 articles · product carousel · FAQ). Revisit whether any belong:

| Section | Why removed | If wanted back |
|---|---|---|
| **Courses** (eLearning) | Doc §2a marks eLearning courses **"on hold"** | Add to canonical home + all 7 concepts when LMS is live |
| **Community** | Not in doc sitemap | Needs a product decision (forums/chat is a large surface — see §2) |
| **Support** (as a home section) | Doc keeps Support as its own page, not a home block | Could add a slim "Support the mission" home CTA |
| **Testimonials** | Not in doc home; doc puts credibility under Contact → Impact (§6.1.3) | Wire real Amazon/Goodreads/course reviews (see §4) |
| **Newsletter** | Not in doc | Add a footer signup if desired (low cost) |

## 2. Entire sub-trees NOT ported (exist in old SvelteKit `a-staging`/`b-staging`)

These routes existed in the Svelte build but are outside the doc's sitemap
(menu = Home · Learn · Conversion · Products · Support · Contact). They were dropped:

- **`community/*`** — landing, `chat`, and `forums/[category]/[thread]` tree. Large feature; needs its own scope.
- **`courses/*`** (`courses`, `courses/[slug]`) — eLearning; **on hold** per doc §2a.
- **`videos/*`** (`videos`, `videos/[slug]`) — not in doc.
- **`guides/*`** (`guides`, `guides/[slug]`) — not in doc (Learn articles cover this need).
- **`articles/[slug]`** — duplicate of the doc's Learn (blog). Canonical articles now live under `/learn/*`.
- **`faq-options/option-1…5`** (a-staging only) — design-exploration scratch pages; the chosen FAQ accordion is on the home + convert pages.
- **`give`** — donation content folded into the doc's **Support** page (`/support#donate`).
- **`cart`** — no standalone cart page in doc; "add to cart on each page" (doc §4). Shop CTAs point to `/shop`. A real cart/checkout is a Shopify integration (see §3).
- **standalone `about`** — folded into the doc's **Contact** page (`/contact` → About Us section, doc §6.1).
- **`(app)` account area** — `account` + `profile/settings/orders/donations/learning` + the `learn/[courseSlug]/[lessonSlug]` lesson player. No user-accounts in doc.
- **`(auth)`** — `login` / `register` / `forgot-password`. No auth described in doc.

## 3. Doc-required pieces that are stubbed / front-end-only (need backend before launch)

All forms currently `preventDefault` and show a local confirmation — **no backend wiring**:

- **Ask a Question** form (`/learn/ask-a-question`) — doc §2.3 says it routes **differently than Contact**. Needs its own submission target + the "General FAQ / question bank" publishing flow (doc §2.3.2).
- **Ready to Convert** form (`/convert`) — doc §3.2: "Someone from our team will email you within 48 hours." Needs email/notification routing.
- **Request a Donation** form (`/support#request`) — doc §5.2: must **export into a report/spreadsheet** for tracking (Google Form acceptable fallback).
- **Contact Us** form (`/contact#contact-form`) — doc §6.1.3: Subject is required and drives **routing rules** per subject (Speaker Request / Order Support / Volunteer / Other). Wire the per-subject routing.
- **Store / cart / checkout** — doc §4 is a **Shopify** store. Current product pages are static; "Add to Cart"/"Buy Now" are non-functional. Integrate Shopify (or chosen commerce) for real purchase + the cart.

## 4. Doc items deferred or only partially represented

- **Translated book pages** (doc §4.1.1–4.1.2) — Book page should show translated-text thumbnails (Spanish & Portuguese) linking to per-language pages; the "See All" store should include **a page for all languages even if not purchasable**. Not built (source had no per-language thumbnails; none fabricated). The mock `products` list has a Spanish edition with **no dedicated page** — its card currently links to the eBook page as nearest match. Build language pages + a languages index.
- **Impact / credibility** (doc §6.1.3) — "Pulling in Amazon, Goodreads reviews" + course testimonials. Current Contact → About Us uses **placeholder** testimonials/stats. Wire real review sources.
- **Conversion "background" options** (doc §3.2.1.1) — the doc lists these as **checkboxes** (multi-select). Implemented as a **single-select radio group** in both staging concepts (chosen for cross-concept parity + cleaner UX). Revisit if multiple selections are intended.
- **Recommended Resources external links** — doc names two external orgs (New Beginnings UK `beginnings.org.uk`, iERA New Muslim `newmuslim.iera.org`). Agents added two representative extras (Yaqeen Institute, SeekersGuidance). **Confirm/curate** the real approved resource list (doc §2.4 links a Google Doc source).
- **Hero banner image** (doc §1) — "use current image from beingmuslim.org." Concepts use a mix of beingmuslim.org + Unsplash hotlinked images. Finalize + **self-host/optimize** all imagery (no external hotlinks) before launch.

## 5. Non-doc elements retained in the concept mockups (a–e) — decide keep/cut

These were kept because they're visual/structural scaffolding, but they aren't doc content:

- **Hero CTA buttons** on each concept home (e.g. "Start Learning" / "Explore Resources"). The doc's hero specifies only header + subtext. Decide whether the hero keeps action buttons.
- **Trust bar / fabricated stats** on some concept homes (e.g. "communities reached", member counts). These numbers are invented — remove or replace with real figures.
- **Concept D animated counter/stats bar** — **already removed** during Wave 1 (fabricated stats, not in doc). The `.bm-counter-*` CSS remains in `concept-d.css` as harmless dead CSS; clean up if desired.

## 6. Cosmetic / housekeeping

- **Concept B CSS header comment** reads "Concept C Design System" — carried verbatim from the Svelte source (`b/styles.css`). Cosmetic only; fix on a styling pass.
- **Brill display font** — `.woff2` files are referenced in `globals.css` but **not bundled**; the site falls back to the serif stack (matching the original beingmuslim.org behavior). Add the real Brill files if licensed, or formalize the fallback.
- **External image hotlinks** — many product/hero/mega-menu images load from `beingmuslim.org` and `images.unsplash.com`. Localize + run through Next image optimization before launch.
- **Footer "Learn" column labels** — staging footers still list "Articles" and "Courses" labels (now pointing at `/learn`). "Courses" is misleading while eLearning is on hold; relabel or hide on a polish pass.

---

### Status of the migration itself (for context)
- ✅ All 7 concepts ported to Next.js 16: `a b c d e` (home-only mockups) + `a-staging b-staging` (full doc sitemap, 15 pages each).
- ✅ Full-project `tsc --noEmit` clean; all 36 routes return HTTP 200.
- Canonical home = Hero · 3 feature boxes (Learn/Convert/Buy) · 3 articles + Additional Resources · product carousel + See All · FAQ (8 Qs) + Ask-a-Question / Ready-to-Convert.
