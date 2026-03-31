<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Mail, ArrowLeft, CheckCircle } from 'lucide-svelte';

	let email = $state('');
	let submitted = $state(false);
</script>

<svelte:head>
	<title>Reset Password - Being Muslim</title>
</svelte:head>

<div class="w-full max-w-md">
	<div class="rounded-xl border border-border bg-surface p-8 shadow-sm">
		{#if !submitted}
			<!-- Reset Form -->
			<div class="mb-6 text-center">
				<div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary/10">
					<Mail class="h-6 w-6 text-accent-primary" />
				</div>
				<h1 class="font-display text-2xl font-bold text-text-primary">Reset your password</h1>
				<p class="mt-2 text-sm text-text-secondary">
					Enter your email address and we'll send you a link to reset your password.
				</p>
			</div>

			<form
				class="space-y-4"
				onsubmit={(e) => {
					e.preventDefault();
					submitted = true;
				}}
			>
				<div class="space-y-2">
					<label for="email" class="text-sm font-medium text-text-primary">Email</label>
					<div class="relative">
						<Mail class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
						<Input
							id="email"
							type="email"
							placeholder="you@example.com"
							bind:value={email}
							required
							class="pl-10"
						/>
					</div>
				</div>

				<Button type="submit" class="w-full">
					{#snippet children()}
						Send Reset Link
					{/snippet}
				</Button>
			</form>
		{:else}
			<!-- Success State -->
			<div class="text-center">
				<div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-green/10">
					<CheckCircle class="h-6 w-6 text-accent-green" />
				</div>
				<h1 class="font-display text-2xl font-bold text-text-primary">Check your email</h1>
				<p class="mt-2 text-sm text-text-secondary">
					We've sent a password reset link to
				</p>
				<p class="mt-1 text-sm font-medium text-text-primary">{email}</p>
				<p class="mt-4 text-xs text-text-secondary">
					Didn't receive the email? Check your spam folder or
					<button
						onclick={() => (submitted = false)}
						class="font-medium text-accent-primary hover:underline"
					>
						try again
					</button>.
				</p>
			</div>
		{/if}

		<!-- Back to Sign In -->
		<div class="mt-6 text-center">
			<a
				href="{base}/login"
				class="inline-flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-text-primary"
			>
				<ArrowLeft class="h-4 w-4" />
				Back to sign in
			</a>
		</div>
	</div>
</div>
