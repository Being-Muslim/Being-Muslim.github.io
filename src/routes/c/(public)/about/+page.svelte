<script lang="ts">
	import { stats, teamMembers, testimonials } from '$lib/data/mock.js';
	import {
		ArrowRight,
		Heart,
		BookOpen,
		Users,
		Globe,
		Star,
		Quote,
		HandHeart,
		GraduationCap,
		Handshake
	} from 'lucide-svelte';

	// Timeline milestones
	const milestones = [
		{
			year: '2015',
			title: 'Being Muslim Book Published',
			description:
				'Dr. Asad Tarsin publishes the first edition of Being Muslim: A Practical Guide, filling a critical gap in accessible Islamic education for converts and beginners.'
		},
		{
			year: '2017',
			title: 'Boxed Set Launched',
			description:
				'Responding to community demand, the Being Muslim Boxed Set is introduced — combining the book with prayer cards, a quick-reference guide, and beautiful packaging.'
		},
		{
			year: '2019',
			title: '5,000 Books Distributed',
			description:
				'A major milestone as the 5,000th book reaches a new Muslim. Distribution expands to mosques and community centers across North America.'
		},
		{
			year: '2021',
			title: 'Sponsorship Program Launched',
			description:
				'The sponsorship program begins, allowing donors to fund boxed sets for new Muslims who cannot afford them. Partnerships form with over 200 mosques.'
		},
		{
			year: '2023',
			title: '10,000 Books Milestone',
			description:
				'Being Muslim reaches 10,000 distributed books. The program expands internationally, reaching communities in over 50 countries.'
		},
		{
			year: '2025',
			title: 'Digital Platform Launched',
			description:
				'The Being Muslim digital platform launches, bringing courses, articles, video content, and community features to a global audience.'
		}
	] as const;

	// Partner organizations
	const partners = [
		'ICNA Relief',
		'WhyIslam',
		'New Muslim Academy',
		'Islamic Society of North America',
		'Muslim Community Center Network',
		'Convert Care International',
		'American Muslim Association',
		'Global Islamic Education Foundation'
	] as const;
</script>

<svelte:head>
	<title>About — Our Mission, Story & Team | Being Muslim</title>
	<meta
		name="description"
		content="Learn about Being Muslim's mission to empower converts and beginners on their Islamic journey through accessible education, community support, and beautiful resources."
	/>
</svelte:head>

<!-- ============================== -->
<!-- 1. HERO                        -->
<!-- ============================== -->
<section style="background: #2a2018; padding: 100px 0 80px; position: relative; overflow: hidden;">
	<!-- Background Pattern -->
	<div style="position: absolute; inset: 0; opacity: 0.03;">
		<svg style="width: 100%; height: 100%;" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo-about" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path
						d="M30 0L60 30L30 60L0 30Z"
						fill="none"
						stroke="#faf9f5"
						stroke-width="0.5"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo-about)" />
		</svg>
	</div>

	<div class="mx-auto max-w-[1400px] px-6 lg:px-10" style="position: relative; z-index: 1;">
		<div style="max-width: 640px; margin: 0 auto; text-align: center;">
			<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #c8b8a0; text-transform: uppercase; letter-spacing: 1.5px;">Our Story</span>
			<h1 style="font-family: 'Source Serif 4', serif; font-size: clamp(36px, 5vw, 56px); font-weight: 400; line-height: 1.1; color: #faf9f5; margin: 20px 0 0;">
				About Being Muslim
			</h1>
			<p style="font-family: 'DM Sans', sans-serif; font-size: 17px; line-height: 1.65; color: rgba(250,249,245,0.7); margin: 20px auto 0; max-width: 520px;">
				We believe that every person who embraces Islam deserves access to beautiful, accurate,
				and compassionate resources. Being Muslim exists to make that a reality.
			</p>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 2. MISSION & VISION            -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #faf9f5;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div class="bm-grid-2-gap">
			<!-- Mission -->
			<div>
				<div style="height: 3px; width: 48px; border-radius: 999px; background: #c8b8a0; margin-bottom: 24px;"></div>
				<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(24px, 3vw, 32px); font-weight: 400; color: #2a2018; margin: 0 0 16px;">Our Mission</h2>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.65; color: #8a7e70; margin: 0 0 16px;">
					To empower new and returning Muslims with the knowledge, resources, and community they
					need to live Islam with understanding, confidence, and joy. We create educational content
					that is warm, rigorous, and deeply human — meeting people wherever they are on their journey.
				</p>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.65; color: #8a7e70; margin: 0;">
					We serve converts taking their first steps, lifelong Muslims seeking deeper understanding,
					and curious seekers exploring the faith. No one is turned away, and no question is too basic.
				</p>
			</div>

			<!-- Vision -->
			<div>
				<div style="height: 3px; width: 48px; border-radius: 999px; background: #2a2018; margin-bottom: 24px;"></div>
				<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(24px, 3vw, 32px); font-weight: 400; color: #2a2018; margin: 0 0 16px;">Our Vision</h2>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.65; color: #8a7e70; margin: 0 0 16px;">
					A world where every new Muslim has a supportive community, accessible resources, and
					the confidence to practice their faith without feeling lost or alone. We envision Islamic
					education that is as beautiful and inviting as the faith itself.
				</p>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.65; color: #8a7e70; margin: 0;">
					We are building a global platform that connects learners with knowledge, mentors with
					students, and communities with one another — bridging the gap between the moment of
					conversion and a lifetime of confident practice.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 3. THE STORY                   -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #f4f1eb;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="max-width: 900px; margin: 0 auto;">
			<div style="text-align: center; margin-bottom: 48px;">
				<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #2a2018; margin: 0 0 12px;">How It All Began</h2>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70;">The story behind Being Muslim</p>
			</div>

			<div class="bm-grid-timeline">
				<!-- Author Avatar -->
				<div style="display: flex; justify-content: center;">
					<div style="width: 160px; height: 160px; border-radius: 999px; background: linear-gradient(135deg, rgba(200,184,160,0.3), rgba(226,220,210,0.5)); display: flex; align-items: center; justify-content: center; border: 4px solid rgba(200,184,160,0.25);">
						<span style="font-family: 'Source Serif 4', serif; font-size: 36px; font-weight: 600; color: #2a2018;">AT</span>
					</div>
				</div>

				<!-- Story -->
				<div>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.65; color: #8a7e70; margin: 0 0 24px;">
						Dr. Asad Tarsin's journey began in the hallways of a hospital, where as a physician
						he witnessed something that troubled him deeply: new Muslims, filled with the light of
						faith, but left without guidance. Time and again, he met converts who had been welcomed
						with open arms at their shahada ceremony, only to be left on their own to figure out
						how to pray, what to eat, and how to navigate a new identity.
					</p>

					<p style="font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.65; color: #8a7e70; margin: 0 0 24px;">
						The existing resources were either too academic, too narrow, or simply not inviting enough
						for someone taking their first steps. Dr. Tarsin envisioned something different: a guide
						that felt like a conversation with a trusted friend, one that was comprehensive yet
						accessible, scholarly yet warm.
					</p>

					<!-- Pull Quote -->
					<div style="background: #e2dcd2; border-radius: 12px; padding: 28px; border-left: 4px solid #c8b8a0; margin-bottom: 24px;">
						<Quote class="h-7 w-7" style="color: rgba(200,184,160,0.5); margin-bottom: 12px;" />
						<p style="font-family: 'Source Serif 4', serif; font-size: 19px; line-height: 1.55; color: #2a2018; font-style: italic; margin: 0 0 16px;">
							"I kept meeting new Muslims who were overwhelmed and under-resourced. They had
							taken the most courageous step of their lives, and we were failing them. I wrote
							Being Muslim because they deserved better."
						</p>
						<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; color: #2a2018; margin: 0;">— Dr. Asad Tarsin</p>
					</div>

					<p style="font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.65; color: #8a7e70; margin: 0 0 24px;">
						What started as a single book written on nights and weekends has grown into a comprehensive
						ecosystem of education and support. The Being Muslim book has been distributed to over
						10,000 people in more than 50 countries. The boxed set — complete with prayer cards and
						a quick-reference guide — has become the go-to gift for mosques welcoming new members.
					</p>

					<p style="font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.65; color: #8a7e70; margin: 0;">
						Today, Being Muslim is more than a book. It is a platform, a community, and a movement
						built on the belief that good education can transform lives. And we are just getting started.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 4. IMPACT NUMBERS              -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #2a2018;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="text-align: center; margin-bottom: 48px;">
			<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #faf9f5; margin: 0 0 12px;">Our Impact in Numbers</h2>
			<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: rgba(250,249,245,0.6);">
				Every number represents a real person on their journey.
			</p>
		</div>

		<div class="bm-grid-4" style="gap: 32px;">
			{#each stats as stat}
				<div style="text-align: center;">
					<p style="font-family: 'Source Serif 4', serif; font-size: clamp(28px, 4vw, 48px); font-weight: 400; color: #c8b8a0; margin: 0;">
						{stat.value}
					</p>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: rgba(250,249,245,0.55); margin: 8px 0 0;">
						{stat.label}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 5. TEAM                        -->
<!-- ============================== -->
<section id="team" class="bm-section-padding" style="background: #faf9f5;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="text-align: center; margin-bottom: 48px;">
			<span style="font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; color: #c8b8a0; text-transform: uppercase; letter-spacing: 1.5px;">Our Team</span>
			<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #2a2018; margin: 16px 0 0;">The People Behind the Mission</h2>
			<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; line-height: 1.6; color: #8a7e70; max-width: 560px; margin: 16px auto 0;">
				A dedicated team of educators, converts, and community builders working to make Islamic
				education accessible to everyone.
			</p>
		</div>

		<div class="bm-grid-3" style="gap: 24px;">
			{#each teamMembers as member}
				<div class="bm-card-hover" style="background: #e2dcd2; border-radius: 14px; padding: 32px; text-align: center;">
					<!-- Avatar -->
					<div style="width: 80px; height: 80px; border-radius: 999px; background: linear-gradient(135deg, rgba(200,184,160,0.35), rgba(250,249,245,0.5)); display: flex; align-items: center; justify-content: center; margin: 0 auto; border: 3px solid rgba(200,184,160,0.2);">
						<span style="font-family: 'Source Serif 4', serif; font-size: 20px; font-weight: 600; color: #2a2018;">
							{member.name
								.split(' ')
								.map((n) => n[0])
								.join('')}
						</span>
					</div>
					<h3 style="font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 400; color: #2a2018; margin: 20px 0 4px;">{member.name}</h3>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #c8b8a0; margin: 0 0 16px;">{member.role}</p>
					<div style="height: 1px; background: rgba(200,184,160,0.3); margin: 0 0 16px;"></div>
					<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; line-height: 1.6; color: #8a7e70; margin: 0;">{member.bio}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 6. TIMELINE                    -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #f4f1eb;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="text-align: center; margin-bottom: 48px;">
			<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #2a2018; margin: 0 0 12px;">Our Journey</h2>
			<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70;">
				From a single book to a global platform — milestones along the way.
			</p>
		</div>

		<div style="position: relative; max-width: 800px; margin: 0 auto;">
			<!-- Vertical Line -->
			<div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: #d8d2c8; transform: translateX(-50%);"></div>

			<div style="display: flex; flex-direction: column; gap: 48px;">
				{#each milestones as milestone, i}
					{@const isLeft = i % 2 === 0}
					<div style="position: relative; display: flex; align-items: flex-start;">
						<!-- Dot on timeline -->
						<div style="position: absolute; left: 50%; z-index: 2; transform: translateX(-50%); width: 32px; height: 32px; border-radius: 999px; background: #2a2018; border: 4px solid #f4f1eb; display: flex; align-items: center; justify-content: center;">
							<div style="width: 8px; height: 8px; border-radius: 999px; background: #faf9f5;"></div>
						</div>

						<!-- Content -->
						<div style="width: 50%; {isLeft ? 'padding-right: 40px; text-align: right;' : 'margin-left: auto; padding-left: 40px; text-align: left;'}">
							<span style="font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; color: #c8b8a0; background: #e2dcd2; padding: 3px 12px; border-radius: 999px; display: inline-block; margin-bottom: 10px;">{milestone.year}</span>
							<h3 style="font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 400; color: #2a2018; margin: 0 0 8px;">{milestone.title}</h3>
							<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; line-height: 1.6; color: #8a7e70; margin: 0;">
								{milestone.description}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 7. PARTNERS & ENDORSEMENTS     -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #faf9f5;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="text-align: center; margin-bottom: 48px;">
			<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #2a2018; margin: 0 0 12px;">Partners & Endorsements</h2>
			<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; color: #8a7e70;">
				Trusted by leading Islamic organizations and educators worldwide.
			</p>
		</div>

		<!-- Partner Grid -->
		<div class="bm-grid-4" style="gap: 16px; margin-bottom: 64px;">
			{#each partners as partner}
				<div class="bm-card-hover" style="display: flex; height: 80px; align-items: center; justify-content: center; border-radius: 12px; background: #e2dcd2; padding: 0 20px; text-align: center;">
					<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #8a7e70; margin: 0;">{partner}</p>
				</div>
			{/each}
		</div>

		<!-- Scholar Endorsement -->
		<div style="max-width: 720px; margin: 0 auto;">
			<div style="background: #e2dcd2; border-radius: 16px; padding: 48px; text-align: center;">
				<div style="display: flex; justify-content: center; gap: 4px; margin-bottom: 24px;">
					{#each Array(5) as _}
						<Star class="h-5 w-5" style="color: #c8b8a0; fill: #c8b8a0;" />
					{/each}
				</div>
				<blockquote style="font-family: 'Source Serif 4', serif; font-size: clamp(18px, 2.5vw, 22px); line-height: 1.5; color: #2a2018; margin: 0 0 24px; font-style: normal;">
					"Being Muslim is exactly what our community has needed for decades. Dr. Tarsin has created
					a resource that is both intellectually honest and deeply compassionate — a rare combination.
					I recommend it without reservation to every mosque, chaplain, and convert support program."
				</blockquote>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; color: #2a2018; margin: 0;">Dr. Yasmin Ahmed</p>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #8a7e70; margin: 4px 0 0;">Professor of Islamic Studies, Georgetown University</p>
			</div>
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 8. CTA SECTION                 -->
<!-- ============================== -->
<section class="bm-section-padding" style="background: #2a2018;">
	<div class="mx-auto max-w-[1400px] px-6 lg:px-10">
		<div style="text-align: center; margin-bottom: 48px;">
			<h2 style="font-family: 'Source Serif 4', serif; font-size: clamp(26px, 3.8vw, 38px); font-weight: 400; color: #faf9f5; margin: 0 0 16px;">
				Join the Mission
			</h2>
			<p style="font-family: 'DM Sans', sans-serif; font-size: 15px; line-height: 1.65; color: rgba(250,249,245,0.6); max-width: 560px; margin: 0 auto;">
				There are many ways to be part of this work. Whether you volunteer your time, support
				with a donation, or partner with us — your contribution makes a difference.
			</p>
		</div>

		<div class="bm-grid-3">
			<!-- Volunteer -->
			<div style="border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04); border-radius: 14px; padding: 32px; text-align: center; transition: background 0.2s;">
				<div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
					<Users class="h-6 w-6" style="color: #c8b8a0;" />
				</div>
				<h3 style="font-family: 'Source Serif 4', serif; font-size: 20px; font-weight: 400; color: #faf9f5; margin: 0 0 12px;">Volunteer</h3>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; line-height: 1.6; color: rgba(250,249,245,0.55); margin: 0 0 24px;">
					Help us create content, mentor new Muslims, moderate community spaces, or translate
					resources into new languages.
				</p>
				<a href="/c/about" class="bm-btn-glass" style="font-size: 13px; padding: 10px 22px;">
					Get Involved <ArrowRight class="h-3.5 w-3.5" />
				</a>
			</div>

			<!-- Donate -->
			<div style="border: 1px solid rgba(200,184,160,0.3); background: rgba(200,184,160,0.08); border-radius: 14px; padding: 32px; text-align: center; transition: background 0.2s;">
				<div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
					<Heart class="h-6 w-6" style="color: #c8b8a0;" />
				</div>
				<h3 style="font-family: 'Source Serif 4', serif; font-size: 20px; font-weight: 400; color: #faf9f5; margin: 0 0 12px;">Donate</h3>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; line-height: 1.6; color: rgba(250,249,245,0.55); margin: 0 0 24px;">
					Sponsor a boxed set for a new Muslim, fund education programs, or become a monthly
					supporter of our mission.
				</p>
				<a href="/c/give" class="bm-btn-white" style="font-size: 13px; padding: 10px 22px;">
					Give Now <Heart class="h-3.5 w-3.5" />
				</a>
			</div>

			<!-- Partner -->
			<div style="border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04); border-radius: 14px; padding: 32px; text-align: center; transition: background 0.2s;">
				<div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(200,184,160,0.15); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
					<Handshake class="h-6 w-6" style="color: #c8b8a0;" />
				</div>
				<h3 style="font-family: 'Source Serif 4', serif; font-size: 20px; font-weight: 400; color: #faf9f5; margin: 0 0 12px;">Partner</h3>
				<p style="font-family: 'DM Sans', sans-serif; font-size: 13px; line-height: 1.6; color: rgba(250,249,245,0.55); margin: 0 0 24px;">
					Are you a mosque, organization, or educator? Partner with us to bring Being Muslim
					resources to your community.
				</p>
				<a href="/c/about" class="bm-btn-glass" style="font-size: 13px; padding: 10px 22px;">
					Become a Partner <ArrowRight class="h-3.5 w-3.5" />
				</a>
			</div>
		</div>
	</div>
</section>
