<script lang="ts">
	import { base } from '$app/paths';
	import { Section } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
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
<section class="relative flex min-h-[60vh] items-center overflow-hidden bg-bg-dark">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-[0.03]">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="geo-about" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
					<path
						d="M30 0L60 30L30 60L0 30Z"
						fill="none"
						stroke="currentColor"
						stroke-width="0.5"
						class="text-text-cream"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#geo-about)" />
		</svg>
	</div>

	<div class="relative mx-auto max-w-[1280px] px-4 py-32 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<Badge variant="gold">
				{#snippet children()}Our Story{/snippet}
			</Badge>
			<h1 class="mt-6 font-display text-4xl font-bold leading-tight text-text-cream sm:text-5xl lg:text-6xl">
				About Being Muslim
			</h1>
			<p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-cream/80 sm:text-xl">
				We believe that every person who embraces Islam deserves access to beautiful, accurate,
				and compassionate resources. Being Muslim exists to make that a reality.
			</p>
		</div>
	</div>

	<div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent"></div>
</section>

<!-- ============================== -->
<!-- 2. MISSION & VISION            -->
<!-- ============================== -->
<Section>
	<div class="grid gap-12 lg:grid-cols-2">
		<!-- Mission -->
		<div class="relative">
			<div class="mb-6 h-1 w-16 rounded-full bg-accent-gold"></div>
			<h2 class="font-display text-3xl font-bold">Our Mission</h2>
			<p class="mt-4 text-lg leading-relaxed text-text-secondary">
				To empower new and returning Muslims with the knowledge, resources, and community they
				need to live Islam with understanding, confidence, and joy. We create educational content
				that is warm, rigorous, and deeply human — meeting people wherever they are on their journey.
			</p>
			<p class="mt-4 text-lg leading-relaxed text-text-secondary">
				We serve converts taking their first steps, lifelong Muslims seeking deeper understanding,
				and curious seekers exploring the faith. No one is turned away, and no question is too basic.
			</p>
		</div>

		<!-- Vision -->
		<div class="relative">
			<div class="mb-6 h-1 w-16 rounded-full bg-accent-primary"></div>
			<h2 class="font-display text-3xl font-bold">Our Vision</h2>
			<p class="mt-4 text-lg leading-relaxed text-text-secondary">
				A world where every new Muslim has a supportive community, accessible resources, and
				the confidence to practice their faith without feeling lost or alone. We envision Islamic
				education that is as beautiful and inviting as the faith itself.
			</p>
			<p class="mt-4 text-lg leading-relaxed text-text-secondary">
				We are building a global platform that connects learners with knowledge, mentors with
				students, and communities with one another — bridging the gap between the moment of
				conversion and a lifetime of confident practice.
			</p>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 3. THE STORY                   -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<div class="mx-auto max-w-4xl">
		<div class="text-center">
			<h2 class="font-display text-3xl font-bold sm:text-4xl">How It All Began</h2>
			<p class="mt-4 text-lg text-text-secondary">The story behind Being Muslim</p>
		</div>

		<div class="mt-12 grid items-start gap-12 lg:grid-cols-[200px_1fr]">
			<!-- Author Avatar -->
			<div class="flex justify-center lg:justify-start">
				<div class="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-gold/20 ring-4 ring-accent-gold/20">
					<span class="font-display text-4xl font-bold text-accent-primary">AT</span>
				</div>
			</div>

			<!-- Story -->
			<div class="space-y-6">
				<p class="text-lg leading-relaxed text-text-secondary">
					Dr. Asad Tarsin's journey began in the hallways of a hospital, where as a physician
					he witnessed something that troubled him deeply: new Muslims, filled with the light of
					faith, but left without guidance. Time and again, he met converts who had been welcomed
					with open arms at their shahada ceremony, only to be left on their own to figure out
					how to pray, what to eat, and how to navigate a new identity.
				</p>

				<p class="text-lg leading-relaxed text-text-secondary">
					The existing resources were either too academic, too narrow, or simply not inviting enough
					for someone taking their first steps. Dr. Tarsin envisioned something different: a guide
					that felt like a conversation with a trusted friend, one that was comprehensive yet
					accessible, scholarly yet warm.
				</p>

				<!-- Pull Quote -->
				<div class="rounded-xl border-l-4 border-accent-gold bg-surface p-6 shadow-sm">
					<Quote class="mb-3 h-8 w-8 text-accent-gold/40" />
					<p class="font-display text-xl leading-relaxed italic text-text-primary">
						"I kept meeting new Muslims who were overwhelmed and under-resourced. They had
						taken the most courageous step of their lives, and we were failing them. I wrote
						Being Muslim because they deserved better."
					</p>
					<p class="mt-4 font-medium text-accent-primary">— Dr. Asad Tarsin</p>
				</div>

				<p class="text-lg leading-relaxed text-text-secondary">
					What started as a single book written on nights and weekends has grown into a comprehensive
					ecosystem of education and support. The Being Muslim book has been distributed to over
					10,000 people in more than 50 countries. The boxed set — complete with prayer cards and
					a quick-reference guide — has become the go-to gift for mosques welcoming new members.
				</p>

				<p class="text-lg leading-relaxed text-text-secondary">
					Today, Being Muslim is more than a book. It is a platform, a community, and a movement
					built on the belief that good education can transform lives. And we are just getting started.
				</p>
			</div>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 4. IMPACT NUMBERS              -->
<!-- ============================== -->
<section class="bg-bg-dark py-16 sm:py-24">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="font-display text-3xl font-bold text-text-cream sm:text-4xl">Our Impact in Numbers</h2>
			<p class="mt-4 text-lg text-text-cream/70">
				Every number represents a real person on their journey.
			</p>
		</div>

		<div class="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
			{#each stats as stat}
				<div class="text-center">
					<p class="font-display text-3xl font-bold text-accent-gold sm:text-4xl lg:text-5xl">
						{stat.value}
					</p>
					<p class="mt-2 text-sm text-text-cream/70">{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============================== -->
<!-- 5. TEAM                        -->
<!-- ============================== -->
<Section id="team">
	<div class="text-center">
		<Badge variant="gold">
			{#snippet children()}Our Team{/snippet}
		</Badge>
		<h2 class="mt-4 font-display text-3xl font-bold sm:text-4xl">The People Behind the Mission</h2>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
			A dedicated team of educators, converts, and community builders working to make Islamic
			education accessible to everyone.
		</p>
	</div>

	<div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
		{#each teamMembers as member}
			<div class="rounded-xl border border-border bg-surface p-8 text-center transition-all hover:shadow-lg">
				<!-- Avatar -->
				<div class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary/15 to-accent-gold/15 ring-4 ring-accent-gold/10">
					<span class="font-display text-2xl font-bold text-accent-primary">
						{member.name
							.split(' ')
							.map((n) => n[0])
							.join('')}
					</span>
				</div>
				<h3 class="mt-6 font-display text-xl font-semibold">{member.name}</h3>
				<p class="mt-1 text-sm font-medium text-accent-primary">{member.role}</p>
				<Separator class="my-4" />
				<p class="text-sm leading-relaxed text-text-secondary">{member.bio}</p>
			</div>
		{/each}
	</div>
</Section>

<!-- ============================== -->
<!-- 6. TIMELINE                    -->
<!-- ============================== -->
<Section class="bg-secondary/50">
	<div class="text-center">
		<h2 class="font-display text-3xl font-bold sm:text-4xl">Our Journey</h2>
		<p class="mt-4 text-lg text-text-secondary">
			From a single book to a global platform — milestones along the way.
		</p>
	</div>

	<div class="relative mt-12">
		<!-- Vertical Line (center on desktop, left on mobile) -->
		<div class="absolute left-4 top-0 bottom-0 w-0.5 bg-border sm:left-1/2 sm:-translate-x-1/2"></div>

		<div class="space-y-12">
			{#each milestones as milestone, i}
				{@const isLeft = i % 2 === 0}
				<div class="relative flex items-start gap-6 sm:gap-0">
					<!-- Dot on timeline -->
					<div class="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-bg-primary bg-accent-primary sm:left-1/2">
						<div class="h-2 w-2 rounded-full bg-white"></div>
					</div>

					<!-- Content: Mobile (always right), Desktop (alternating) -->
					<div
						class="ml-12 w-full sm:ml-0 sm:w-1/2 {isLeft
							? 'sm:pr-12 sm:text-right'
							: 'sm:ml-auto sm:pl-12 sm:text-left'}"
					>
						<Badge variant="gold" class="mb-3">
							{#snippet children()}{milestone.year}{/snippet}
						</Badge>
						<h3 class="font-display text-xl font-semibold">{milestone.title}</h3>
						<p class="mt-2 text-sm leading-relaxed text-text-secondary">
							{milestone.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 7. PARTNERS & ENDORSEMENTS     -->
<!-- ============================== -->
<Section>
	<div class="text-center">
		<h2 class="font-display text-3xl font-bold sm:text-4xl">Partners & Endorsements</h2>
		<p class="mt-4 text-lg text-text-secondary">
			Trusted by leading Islamic organizations and educators worldwide.
		</p>
	</div>

	<!-- Partner Grid -->
	<div class="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
		{#each partners as partner}
			<div class="flex h-24 items-center justify-center rounded-xl border border-border bg-surface px-4 text-center transition-all hover:border-accent-primary/30 hover:shadow-sm">
				<p class="text-sm font-medium text-text-secondary">{partner}</p>
			</div>
		{/each}
	</div>

	<!-- Scholar Endorsement -->
	<div class="mx-auto mt-16 max-w-3xl">
		<div class="rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
			<div class="flex justify-center gap-1">
				{#each Array(5) as _}
					<Star class="h-5 w-5 fill-accent-gold text-accent-gold" />
				{/each}
			</div>
			<blockquote class="mt-6 font-display text-xl leading-relaxed sm:text-2xl">
				"Being Muslim is exactly what our community has needed for decades. Dr. Tarsin has created
				a resource that is both intellectually honest and deeply compassionate — a rare combination.
				I recommend it without reservation to every mosque, chaplain, and convert support program."
			</blockquote>
			<div class="mt-6">
				<p class="font-semibold">Dr. Yasmin Ahmed</p>
				<p class="text-sm text-text-secondary">Professor of Islamic Studies, Georgetown University</p>
			</div>
		</div>
	</div>
</Section>

<!-- ============================== -->
<!-- 8. CTA SECTION                 -->
<!-- ============================== -->
<section class="bg-bg-dark py-16 sm:py-24">
	<div class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="font-display text-3xl font-bold text-text-cream sm:text-4xl">
				Join the Mission
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-text-cream/70">
				There are many ways to be part of this work. Whether you volunteer your time, support
				with a donation, or partner with us — your contribution makes a difference.
			</p>
		</div>

		<div class="mt-12 grid gap-6 sm:grid-cols-3">
			<!-- Volunteer -->
			<div class="rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur transition-all hover:border-white/20 hover:bg-white/10">
				<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent-primary/20">
					<Users class="h-7 w-7 text-accent-gold" />
				</div>
				<h3 class="mt-5 font-display text-xl font-semibold text-text-cream">Volunteer</h3>
				<p class="mt-3 text-sm leading-relaxed text-text-cream/70">
					Help us create content, mentor new Muslims, moderate community spaces, or translate
					resources into new languages.
				</p>
				<Button
					variant="outline"
					class="mt-6 border-text-cream/30 text-text-cream hover:bg-white/10 hover:text-text-cream"
				>
					{#snippet children()}
						Get Involved
						<ArrowRight class="ml-1 h-4 w-4" />
					{/snippet}
				</Button>
			</div>

			<!-- Donate -->
			<div class="rounded-xl border border-accent-primary/40 bg-accent-primary/10 p-8 text-center backdrop-blur transition-all hover:border-accent-primary/60 hover:bg-accent-primary/15">
				<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent-primary/20">
					<Heart class="h-7 w-7 text-accent-gold" />
				</div>
				<h3 class="mt-5 font-display text-xl font-semibold text-text-cream">Donate</h3>
				<p class="mt-3 text-sm leading-relaxed text-text-cream/70">
					Sponsor a boxed set for a new Muslim, fund education programs, or become a monthly
					supporter of our mission.
				</p>
				<a href="{base}/give">
					<Button class="mt-6 bg-accent-primary text-text-cream hover:bg-accent-hover">
						{#snippet children()}
							Give Now
							<Heart class="ml-1 h-4 w-4" />
						{/snippet}
					</Button>
				</a>
			</div>

			<!-- Partner -->
			<div class="rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur transition-all hover:border-white/20 hover:bg-white/10">
				<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent-primary/20">
					<Handshake class="h-7 w-7 text-accent-gold" />
				</div>
				<h3 class="mt-5 font-display text-xl font-semibold text-text-cream">Partner</h3>
				<p class="mt-3 text-sm leading-relaxed text-text-cream/70">
					Are you a mosque, organization, or educator? Partner with us to bring Being Muslim
					resources to your community.
				</p>
				<Button
					variant="outline"
					class="mt-6 border-text-cream/30 text-text-cream hover:bg-white/10 hover:text-text-cream"
				>
					{#snippet children()}
						Become a Partner
						<ArrowRight class="ml-1 h-4 w-4" />
					{/snippet}
				</Button>
			</div>
		</div>
	</div>
</section>
