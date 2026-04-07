<script lang="ts">
	import { withPrefix } from '$lib/data/utils.js';
	import { ArrowLeft, Mail } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/b-staging', href);

	let email = $state('');
	let submitted = $state(false);
</script>

<svelte:head>
	<title>Reset Password — Being Muslim</title>
</svelte:head>

<div class="w-full max-w-md">
	<div class="rounded-[20px] bg-white p-8 sm:p-10">
		{#if submitted}
			<div class="text-center">
				<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#30D158]/10">
					<Mail class="h-7 w-7 text-[#30D158]" />
				</div>
				<h1 class="mt-5 font-display text-2xl font-bold text-[#1C1C1E]">Check your email</h1>
				<p class="mt-3 text-sm text-[#8E8E93]">
					We sent a password reset link to <strong class="text-[#1C1C1E]">{email}</strong>. Please check your inbox.
				</p>
				<a href={p('/login')} class="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#007AFF] hover:underline">
					<ArrowLeft class="h-4 w-4" /> Back to Sign In
				</a>
			</div>
		{:else}
			<div class="mb-8 text-center">
				<h1 class="font-display text-2xl font-bold text-[#1C1C1E]">Reset your password</h1>
				<p class="mt-2 text-sm text-[#8E8E93]">Enter your email and we will send you a reset link</p>
			</div>

			<form class="space-y-5" onsubmit={(e) => { e.preventDefault(); submitted = true; }}>
				<div class="space-y-2">
					<label for="email" class="text-sm font-medium text-[#1C1C1E]">Email</label>
					<div class="relative">
						<Mail class="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8E8E93]" />
						<input id="email" type="email" placeholder="you@example.com" bind:value={email} required class="w-full rounded-[14px] bg-[#F2F2F7] py-3 pl-10 pr-4 text-sm text-[#1C1C1E] placeholder:text-[#8E8E93] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30" />
					</div>
				</div>

				<button type="submit" class="w-full rounded-[14px] bg-[#007AFF] py-3 text-sm font-semibold text-white hover:opacity-90">Send Reset Link</button>
			</form>

			<p class="mt-8 text-center text-sm text-[#8E8E93]">
				Remember your password? <a href={p('/login')} class="font-medium text-[#007AFF] hover:underline">Sign in</a>
			</p>
		{/if}
	</div>
</div>
