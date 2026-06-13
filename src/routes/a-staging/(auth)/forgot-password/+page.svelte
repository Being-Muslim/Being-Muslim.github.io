<script lang="ts">
	import { withPrefix } from '$lib/data/utils';
	import { ArrowLeft, CheckCircle2 } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/a-staging', href);

	let email = $state('');
	let submitted = $state(false);

	function handleSubmit() {
		if (!email.trim()) return;
		submitted = true;
	}
</script>

<svelte:head>
	<title>Reset Password - Being Muslim</title>
</svelte:head>

<div class="w-full max-w-md">
	<div class="border-[3px] border-border bg-bg-primary p-8">
		{#if submitted}
			<!-- Success state -->
			<div class="text-center">
				<div class="mx-auto flex h-16 w-16 items-center justify-center border-[3px] border-border bg-accent-green">
					<CheckCircle2 class="h-8 w-8 text-white" />
				</div>
				<h1 class="mt-6 font-display text-3xl font-bold">Check Your <span class="highlight">Email</span></h1>
				<p class="mt-4 text-text-secondary">
					We have sent a password reset link to <strong class="text-text-primary">{email}</strong>. Please check your inbox and follow the instructions.
				</p>
				<a
					href={p('/login')}
					class="group mt-8 inline-flex items-center gap-2 font-display font-bold text-accent-primary transition-colors hover:text-red-700"
				>
					<ArrowLeft class="h-4 w-4 transition-transform group-hover:-translate-x-1" />
					Back to Sign In
				</a>
			</div>
		{:else}
			<h1 class="font-display text-3xl font-bold">Reset <span class="highlight">Password</span></h1>
			<p class="mono mt-2 text-text-secondary">ENTER YOUR EMAIL FOR A RESET LINK</p>

			<form class="mt-8" onsubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
				<div class="mb-6">
					<label for="reset-email" class="mono mb-2 block text-text-primary">EMAIL ADDRESS</label>
					<input
						id="reset-email"
						type="email"
						bind:value={email}
						placeholder="you@example.com"
						class="w-full border-[3px] border-border px-4 py-3 text-text-primary placeholder:text-text-secondary focus:outline-none"
					/>
				</div>

				<button
					type="submit"
					class="w-full border-[3px] border-border bg-accent-primary py-3 font-bold text-white transition-colors hover:bg-red-700"
				>
					Send Reset Link
				</button>
			</form>

			<p class="mt-6 text-center text-sm text-text-secondary">
				Remember your password?
				<a href={p('/login')} class="font-bold text-accent-primary hover:text-red-700">Sign in</a>
			</p>
		{/if}
	</div>
</div>
