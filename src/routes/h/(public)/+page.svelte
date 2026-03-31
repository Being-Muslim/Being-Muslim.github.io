<script lang="ts">
	import { base } from '$app/paths';
	import {
		testimonials,
		teamMembers,
		footerLinks
	} from '$lib/data/mock.js';
	import {
		ArrowRight,
		BookOpen,
		Heart,
		Users,
		Star,
		Play,
		ChevronDown,
		Mail,
		MapPin,
		Phone,
		Menu,
		X,
		GraduationCap,
		BookOpenCheck,
		Headphones,
		Sparkles,
		Shield
	} from 'lucide-svelte';

	let mobileMenuOpen = $state(false);
	let openFaq = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}

	const faqs = [
		{
			question: 'What is Being Muslim and who is it for?',
			answer: 'Being Muslim is a comprehensive resource for anyone beginning or deepening their journey in Islam. Whether you are exploring Islam for the first time, a recent convert, or a lifelong Muslim looking to reconnect, our guides, courses, and community are designed for you.'
		},
		{
			question: 'How do I get started with learning about Islam?',
			answer: 'Start with our "Exploring Islam" guide for a warm, honest introduction. From there, you can explore articles, take our Foundations of Faith course, or join the community forums to ask questions in a welcoming space.'
		},
		{
			question: 'Are the courses self-paced or scheduled?',
			answer: 'All courses are fully self-paced. You can start anytime and progress at your own speed. Each course includes video lessons, readings, and quizzes to reinforce your learning.'
		},
		{
			question: 'How is Being Muslim different from other Islamic resources?',
			answer: 'We focus specifically on accessibility and warmth. Our content is created by scholars who understand the unique journey of new and returning Muslims. No question is too basic, and every resource is designed to meet you where you are.'
		},
		{
			question: 'Can I contribute or sponsor resources for others?',
			answer: 'Yes! Through our Give page, you can sponsor boxed sets for new Muslims, support community centers, or make a general contribution to help us reach more people worldwide.'
		}
	];

	let email = $state('');
</script>

<svelte:head>
	<title>Being Muslim — Your Guide to a Beautiful Faith</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div style="font-family: 'DM Sans', sans-serif; color: #2d3748;">
	<!-- ===== NAVBAR ===== -->
	<nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200/50">
		<div class="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[64px]">
			<a href="{base}/h" class="flex items-center gap-2.5">
				<div class="w-7 h-7 rounded-full bg-[#5c6e4f] flex items-center justify-center">
					<BookOpen class="w-3.5 h-3.5 text-white" />
				</div>
				<span class="text-[17px] font-semibold tracking-tight" style="font-family: 'DM Serif Display', serif;">Being Muslim</span>
			</a>

			<div class="hidden md:flex items-center gap-8">
				{#each ['About', 'Resources', 'How It Works', 'Our Team'] as link}
					<a href="#" class="text-[14px] text-stone-500 hover:text-stone-900 transition-colors">{link}</a>
				{/each}
			</div>

			<a href="#" class="hidden md:inline-flex items-center px-5 py-2 bg-[#5c6e4f] text-white text-[13px] font-medium rounded-full hover:bg-[#4a5b3f] transition-colors">
				Get Started
			</a>

			<button class="md:hidden" onclick={() => (mobileMenuOpen = !mobileMenuOpen)}>
				{#if mobileMenuOpen}<X class="w-6 h-6" />{:else}<Menu class="w-6 h-6" />{/if}
			</button>
		</div>

		{#if mobileMenuOpen}
			<div class="md:hidden bg-white border-t border-stone-100 px-6 py-4 space-y-3">
				{#each ['About', 'Resources', 'How It Works', 'Our Team'] as link}
					<a href="#" class="block text-stone-600 py-2">{link}</a>
				{/each}
				<a href="#" class="block bg-[#5c6e4f] text-white text-center py-2.5 rounded-full font-medium mt-3">Get Started</a>
			</div>
		{/if}
	</nav>

	<!-- ===== HERO ===== -->
	<section class="relative min-h-[92vh] flex items-end pt-[64px]">
		<!-- Background image -->
		<div class="absolute inset-0">
			<img
				src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80&auto=format&fit=crop"
				alt=""
				class="w-full h-full object-cover"
				style="object-position: center 30%;"
			/>
			<!-- Warm overlay -->
			<div class="absolute inset-0" style="background: linear-gradient(to right, rgba(180,160,120,0.85) 0%, rgba(180,160,120,0.6) 40%, rgba(120,130,100,0.4) 100%);"></div>
		</div>

		<div class="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 w-full pb-16 lg:pb-20">
			<div class="max-w-[620px]">
				<h1 class="text-[42px] md:text-[56px] lg:text-[64px] leading-[1.05] tracking-[-0.02em] mb-5" style="font-family: 'DM Serif Display', serif; color: #1a1a1a;">
					Your Journey Begins with a
					<span class="italic" style="color: #3d4a35;">Single Step</span>
				</h1>
				<p class="text-[16px] leading-[1.6] mb-2 max-w-[480px]" style="color: #3a3a3a;">
					Comprehensive guides, courses, and community for those exploring Islam, new Muslims, and anyone reconnecting with their faith.
				</p>
				<p class="text-[13px] mb-8" style="color: #5a5a5a;">
					Trusted resources. Expert guidance. A welcoming community.
				</p>

				<div class="flex flex-wrap items-center gap-5 mb-14">
					<a href="#" class="inline-flex items-center gap-2 px-7 py-3 bg-[#1a1f25] text-white text-[14px] font-medium rounded-full hover:bg-black transition-colors">
						Start Learning
					</a>
					<button class="inline-flex items-center gap-3 group cursor-pointer">
						<div class="w-11 h-11 rounded-full bg-white/80 backdrop-blur flex items-center justify-center group-hover:bg-white transition-colors">
							<Play class="w-4 h-4 ml-0.5" style="color: #1a1f25;" />
						</div>
						<span class="text-[14px] font-medium" style="color: #2a2a2a;">Watch Introduction</span>
					</button>
				</div>

				<!-- Trust indicators -->
				<div class="flex items-center gap-3">
					<div class="flex -space-x-2">
						{#each ['#7a8b6e', '#a08b6e', '#6e7a8b', '#8b6e7a'] as color}
							<div class="w-8 h-8 rounded-full border-[2px] border-white" style="background: {color};"></div>
						{/each}
					</div>
					<div class="text-[13px]">
						<span class="font-semibold" style="color: #1a1a1a;">Trusted by</span>
						<span style="color: #4a4a4a;">10,000+ learners</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ===== ABOUT + STATS ===== -->
	<section class="py-20 lg:py-24 bg-white">
		<div class="max-w-[1280px] mx-auto px-6 lg:px-10">
			<!-- Label -->
			<div class="flex items-center gap-2 mb-6">
				<Star class="w-3.5 h-3.5 text-[#5c6e4f]" />
				<span class="text-[12px] font-medium text-[#5c6e4f] uppercase tracking-[0.12em]">About Us</span>
			</div>

			<!-- Heading + Stats row -->
			<div class="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-20 mb-14">
				<h2 class="text-[36px] md:text-[44px] leading-[1.12]" style="font-family: 'DM Serif Display', serif;">
					Feel supported as you explore, learn, and grow
					<span class="text-stone-300">in your faith.</span>
				</h2>

				<div class="space-y-0">
					{#each [
						{ value: '10,000+', label: 'Books Distributed' },
						{ value: '500+', label: 'Communities Served' },
						{ value: '50+', label: 'Countries Reached' }
					] as stat}
						<div class="flex items-center justify-between py-4 border-b border-stone-100">
							<span class="text-[28px] font-bold tracking-tight" style="font-family: 'DM Serif Display', serif;">{stat.value}</span>
							<span class="text-[13px] text-stone-400">{stat.label}</span>
						</div>
					{/each}
				</div>
			</div>

			<!-- Photo row -->
			<div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
				<div class="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden">
					<img src="https://images.unsplash.com/photo-1585036156171-384164a8c159?w=800&q=80&auto=format&fit=crop" alt="Islamic architecture" class="w-full h-full object-cover" />
				</div>
				<div class="aspect-[4/3] rounded-2xl overflow-hidden">
					<img src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&q=80&auto=format&fit=crop" alt="Person reading Quran" class="w-full h-full object-cover" />
				</div>
				<div class="aspect-[4/3] rounded-2xl overflow-hidden">
					<img src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=80&auto=format&fit=crop" alt="Community gathering" class="w-full h-full object-cover" />
				</div>
			</div>

			<!-- Feature cards -->
			<div class="grid md:grid-cols-3 gap-10 pt-12 border-t border-stone-100">
				{#each [
					{ icon: Heart, title: 'Personalized Guidance', desc: 'Resources tailored to where you are on your journey — exploring, new, or reconnecting.' },
					{ icon: BookOpen, title: 'Practical Resources', desc: 'From prayer guides to daily practice tips — tools that help you build real habits.' },
					{ icon: Shield, title: 'Safe and Private', desc: 'A safe, supportive space where no question is too basic and everyone belongs.' }
				] as feature}
					<div>
						<div class="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center mb-4">
							<feature.icon class="w-[18px] h-[18px] text-stone-500" />
						</div>
						<h3 class="font-semibold text-[15px] mb-2">{feature.title}</h3>
						<p class="text-[13px] text-stone-400 leading-[1.7]">{feature.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ===== RESOURCES / SERVICES ===== -->
	<section class="py-20 lg:py-24" style="background: #f5f1eb;">
		<div class="max-w-[1280px] mx-auto px-6 lg:px-10">
			<div class="flex items-center gap-2 mb-6">
				<Star class="w-3.5 h-3.5 text-[#5c6e4f]" />
				<span class="text-[12px] font-medium text-[#5c6e4f] uppercase tracking-[0.12em]">Resources</span>
			</div>

			<div class="grid lg:grid-cols-2 gap-6 mb-12">
				<h2 class="text-[36px] md:text-[44px] leading-[1.12]" style="font-family: 'DM Serif Display', serif;">
					Expert Support for Every Part of Your Journey
				</h2>
				<p class="text-[14px] text-stone-400 leading-[1.7] lg:pt-3 self-end">
					Find the guidance that meets your needs, at any stage of your path. Our resources grow with you — from first questions to deeper understanding.
				</p>
			</div>

			<!-- Image row above cards -->
			<div class="grid grid-cols-4 gap-3 mb-3">
				<div class="aspect-[4/3] rounded-xl overflow-hidden">
					<img src="https://images.unsplash.com/photo-1590076215667-875c2d44c977?w=400&q=80&auto=format&fit=crop" alt="" class="w-full h-full object-cover" />
				</div>
				<div class="aspect-[4/3] rounded-xl overflow-hidden">
					<img src="https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=400&q=80&auto=format&fit=crop" alt="" class="w-full h-full object-cover" />
				</div>
				<div class="aspect-[4/3] rounded-xl overflow-hidden">
					<img src="https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?w=400&q=80&auto=format&fit=crop" alt="" class="w-full h-full object-cover" />
				</div>
				<div class="aspect-[4/3] rounded-xl overflow-hidden">
					<img src="https://images.unsplash.com/photo-1584286595398-a59511e0649f?w=400&q=80&auto=format&fit=crop" alt="" class="w-full h-full object-cover" />
				</div>
			</div>

			<!-- Service cards -->
			<div class="grid md:grid-cols-3 gap-3">
				{#each [
					{ title: 'Guided Courses', desc: 'Self-paced courses taught by scholars, covering foundations, prayer, Quran, and more.', price: 'Free' },
					{ title: 'Articles & Guides', desc: 'In-depth articles and step-by-step guides on belief, prayer, fasting, and daily life.', price: 'Free' },
					{ title: 'Video Library', desc: 'Watch and learn at your own pace with our growing library of video content.', price: 'Free' }
				] as resource}
					<div class="bg-white rounded-xl p-6">
						<h3 class="font-semibold text-[15px] mb-2">{resource.title}</h3>
						<p class="text-[13px] text-stone-400 leading-[1.7] mb-5">{resource.desc}</p>
						<div class="flex items-center justify-between">
							<span class="font-bold text-[15px]">{resource.price}</span>
							<a href="#" class="inline-flex items-center gap-1 text-[13px] font-medium text-stone-500 hover:text-[#5c6e4f] transition-colors">
								Browse <ArrowRight class="w-3.5 h-3.5" />
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ===== STEPS (Dark with background image) ===== -->
	<section class="relative py-20 lg:py-28 overflow-hidden">
		<!-- Background image -->
		<div class="absolute inset-0">
			<img
				src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=1920&q=80&auto=format&fit=crop"
				alt=""
				class="w-full h-full object-cover"
			/>
			<div class="absolute inset-0 bg-[#1a1f25]/85"></div>
		</div>

		<div class="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 text-white">
			<div class="max-w-2xl mx-auto text-center mb-16">
				<h2 class="text-[36px] md:text-[48px] leading-[1.1] mb-4" style="font-family: 'DM Serif Display', serif;">
					Simple Steps to Start Your Journey
				</h2>
				<p class="text-[14px] text-stone-400 leading-[1.7] max-w-lg mx-auto">
					We make the process of learning about Islam clear and welcoming. Our approach gives you guidance, community, and confidence along the way.
				</p>
			</div>

			<div class="grid md:grid-cols-3 gap-12 mb-14">
				{#each [
					{ num: '01', title: 'Explore at Your Pace', desc: 'Browse our free articles, videos, and introductory guides. No sign-up required — start learning right away.' },
					{ num: '02', title: 'Find Your Path', desc: 'Whether you are exploring, recently converted, or reconnecting — we have a guided path designed just for you.' },
					{ num: '03', title: 'Join the Community', desc: 'Connect with fellow learners, ask questions, and grow together in a welcoming, judgement-free space.' }
				] as step}
					<div class="text-center">
						<div class="w-[60px] h-[60px] rounded-full border border-stone-500 flex items-center justify-center mx-auto mb-5">
							<span class="text-[16px] font-semibold text-stone-300">{step.num}</span>
						</div>
						<h3 class="text-[16px] font-semibold mb-2">{step.title}</h3>
						<p class="text-[13px] text-stone-400 leading-[1.7] max-w-[280px] mx-auto">{step.desc}</p>
					</div>
				{/each}
			</div>

			<div class="text-center">
				<a href="#" class="inline-flex items-center gap-2 px-7 py-3 bg-[#5c6e4f] text-white text-[14px] font-medium rounded-full hover:bg-[#4a5b3f] transition-colors">
					Start Exploring
				</a>
			</div>
		</div>
	</section>

	<!-- ===== TEAM ===== -->
	<section class="py-20 lg:py-24 bg-white">
		<div class="max-w-[1280px] mx-auto px-6 lg:px-10">
			<div class="grid lg:grid-cols-[1fr_1fr] gap-8 mb-12">
				<div>
					<div class="flex items-center gap-2 mb-5">
						<Star class="w-3.5 h-3.5 text-[#5c6e4f]" />
						<span class="text-[12px] font-medium text-[#5c6e4f] uppercase tracking-[0.12em]">Our Team</span>
					</div>
					<h2 class="text-[36px] md:text-[44px] leading-[1.12]" style="font-family: 'DM Serif Display', serif;">
						Meet Our Expert Guides
					</h2>
				</div>
				<p class="text-[14px] text-stone-400 leading-[1.7] lg:pt-10 lg:text-right self-end">
					Get guidance from an experienced team of scholars and educators who truly understand your journey.
				</p>
			</div>

			<div class="grid md:grid-cols-3 gap-6">
				{#each [
					{ name: 'Dr. Asad Tarsin', role: 'Founder & Author', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80&auto=format&fit=crop&crop=face' },
					{ name: 'Sarah Abdullah', role: 'Director of Community', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80&auto=format&fit=crop&crop=face' },
					{ name: 'Imam Ahmad Hassan', role: 'Educational Director', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80&auto=format&fit=crop&crop=face' }
				] as member}
					<div>
						<div class="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-stone-100">
							<img src={member.img} alt={member.name} class="w-full h-full object-cover" />
						</div>
						<h3 class="font-semibold text-[15px]">{member.name}</h3>
						<p class="text-[13px] text-stone-400">{member.role}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ===== TESTIMONIALS ===== -->
	<section class="py-20 lg:py-24" style="background: #faf8f3;">
		<div class="max-w-[1280px] mx-auto px-6 lg:px-10">
			<div class="grid lg:grid-cols-2 gap-8 mb-14">
				<div>
					<div class="flex items-center gap-2 mb-5">
						<Star class="w-3.5 h-3.5 text-[#5c6e4f]" />
						<span class="text-[12px] font-medium text-[#5c6e4f] uppercase tracking-[0.12em]">Testimonials</span>
					</div>
					<h2 class="text-[36px] md:text-[44px] leading-[1.12]" style="font-family: 'DM Serif Display', serif;">
						Real Stories From Our Community
					</h2>
				</div>
				<p class="text-[14px] text-stone-400 leading-[1.7] lg:pt-10 lg:text-right self-end">
					Read real experiences shared by people who found clarity, comfort, and community through Being Muslim.
				</p>
			</div>

			<!-- Quote card -->
			<div class="bg-white rounded-2xl p-10 md:p-14 max-w-[780px] mx-auto text-center">
				<div class="flex justify-center gap-1 mb-8">
					{#each [0, 1, 2, 3, 4] as _}
						<Star class="w-[18px] h-[18px] text-amber-400 fill-amber-400" />
					{/each}
				</div>
				<blockquote class="text-[22px] md:text-[26px] leading-[1.4] mb-8 text-stone-700" style="font-family: 'DM Serif Display', serif;">
					"{testimonials[0].quote}"
				</blockquote>
				<p class="font-semibold text-[14px]">{testimonials[0].name}</p>
				<p class="text-[13px] text-stone-400">{testimonials[0].role}</p>
			</div>
		</div>
	</section>

	<!-- ===== FAQ ===== -->
	<section class="py-20 lg:py-24 bg-white">
		<div class="max-w-[680px] mx-auto px-6 lg:px-10">
			<div class="flex items-center gap-2 mb-5">
				<Star class="w-3.5 h-3.5 text-[#5c6e4f]" />
				<span class="text-[12px] font-medium text-[#5c6e4f] uppercase tracking-[0.12em]">FAQ</span>
			</div>

			<h2 class="text-[36px] md:text-[44px] leading-[1.12] mb-10" style="font-family: 'DM Serif Display', serif;">
				Frequently Asked Questions
			</h2>

			<div class="divide-y divide-stone-100">
				{#each faqs as faq, i}
					<button
						class="w-full text-left py-5 flex items-start justify-between gap-4 cursor-pointer group"
						onclick={() => toggleFaq(i)}
					>
						<div class="flex-1 min-w-0">
							<h3 class="font-medium text-[15px] group-hover:text-[#5c6e4f] transition-colors pr-4">{faq.question}</h3>
							{#if openFaq === i}
								<p class="mt-3 text-[13px] text-stone-400 leading-[1.7]">{faq.answer}</p>
							{/if}
						</div>
						<ChevronDown class="w-4 h-4 text-stone-300 mt-1 flex-shrink-0 transition-transform duration-200 {openFaq === i ? 'rotate-180' : ''}" />
					</button>
				{/each}
			</div>

			<div class="text-center mt-8">
				<a href="#" class="text-[13px] font-medium text-stone-400 hover:text-[#5c6e4f] transition-colors underline underline-offset-4">See More FAQs</a>
			</div>
		</div>
	</section>

	<!-- ===== CTA BANNER ===== -->
	<section class="relative py-24 lg:py-32 overflow-hidden">
		<!-- Background image -->
		<div class="absolute inset-0">
			<img
				src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&auto=format&fit=crop"
				alt=""
				class="w-full h-full object-cover"
			/>
			<div class="absolute inset-0 bg-[#1a1f25]/75"></div>
		</div>

		<div class="relative z-10 max-w-[800px] mx-auto px-6 text-center text-white">
			<h2 class="text-[40px] md:text-[56px] leading-[1.08] mb-5" style="font-family: 'DM Serif Display', serif;">
				One Step Can Change
				<span style="font-family: 'Playfair Display', serif; font-style: italic; color: #a8c08e;"> Your Life</span>
			</h2>
			<p class="text-[14px] text-stone-300 max-w-md mx-auto mb-10 leading-[1.7]">
				Start here. Learn at your own pace. Join a community that welcomes you exactly as you are and supports your growth every step of the way.
			</p>
			<a href="#" class="inline-flex items-center gap-2 px-7 py-3 bg-[#5c6e4f] text-white text-[14px] font-medium rounded-full hover:bg-[#4a5b3f] transition-colors">
				Get Started Today
			</a>
		</div>
	</section>

	<!-- ===== FOOTER ===== -->
	<footer style="background: #1a2332;">
		<!-- Top green accent bar -->
		<div class="py-14" style="background: #3d4a35;">
			<div class="max-w-[1280px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-8 items-center">
				<h3 class="text-[28px] md:text-[32px] leading-[1.15] text-white" style="font-family: 'DM Serif Display', serif;">
					Your journey to understanding Islam starts here.
				</h3>
				<div class="md:text-right space-y-1 text-[13px] text-stone-300">
					<p>contact@beingmuslim.org</p>
					<p>San Francisco, CA</p>
				</div>
			</div>
		</div>

		<div class="max-w-[1280px] mx-auto px-6 lg:px-10 py-14">
			<div class="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
				<!-- Brand -->
				<div class="lg:col-span-2">
					<div class="flex items-center gap-2 mb-4">
						<div class="w-7 h-7 rounded-full bg-[#5c6e4f] flex items-center justify-center">
							<BookOpen class="w-3.5 h-3.5 text-white" />
						</div>
						<span class="text-[17px] font-semibold text-white" style="font-family: 'DM Serif Display', serif;">Being Muslim</span>
					</div>
					<p class="text-[13px] text-stone-400 leading-[1.7] mb-5 max-w-[280px]">
						Join our newsletter to stay up to date on resources and community updates.
					</p>
					<form class="flex gap-2" onsubmit={(e) => e.preventDefault()}>
						<input
							type="email"
							bind:value={email}
							placeholder="Enter your email"
							class="flex-1 px-4 py-2 bg-[#2d3748] border border-stone-600 rounded-full text-[13px] text-white placeholder-stone-500 focus:outline-none focus:border-[#5c6e4f]"
						/>
						<button type="submit" class="px-5 py-2 bg-[#5c6e4f] text-white text-[13px] font-medium rounded-full hover:bg-[#4a5b3f] transition-colors">
							Subscribe
						</button>
					</form>
				</div>

				<!-- Quick Links -->
				<div>
					<h4 class="text-white font-semibold text-[12px] mb-4 uppercase tracking-[0.12em]">Quick Links</h4>
					<ul class="space-y-2.5">
						{#each ['Home', 'About', 'Resources', 'Contact'] as link}
							<li><a href="#" class="text-[13px] text-stone-400 hover:text-white transition-colors">{link}</a></li>
						{/each}
					</ul>
				</div>

				<!-- Resources -->
				<div>
					<h4 class="text-white font-semibold text-[12px] mb-4 uppercase tracking-[0.12em]">Resources</h4>
					<ul class="space-y-2.5">
						{#each footerLinks.learn as link}
							<li><a href={link.href} class="text-[13px] text-stone-400 hover:text-white transition-colors">{link.label}</a></li>
						{/each}
					</ul>
				</div>

				<!-- Company -->
				<div>
					<h4 class="text-white font-semibold text-[12px] mb-4 uppercase tracking-[0.12em]">Company</h4>
					<ul class="space-y-2.5">
						{#each footerLinks.about as link}
							<li><a href={link.href} class="text-[13px] text-stone-400 hover:text-white transition-colors">{link.label}</a></li>
						{/each}
					</ul>
				</div>
			</div>

			<!-- Bottom bar -->
			<div class="border-t border-stone-700/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
				<p class="text-[12px] text-stone-500">© 2026 Being Muslim. All rights reserved.</p>
				<div class="flex items-center gap-6 text-[12px] text-stone-500">
					<a href="#" class="hover:text-white transition-colors">Terms of Service</a>
					<a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
				</div>
			</div>
		</div>
	</footer>
</div>
