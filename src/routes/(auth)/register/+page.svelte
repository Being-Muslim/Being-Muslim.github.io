<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Progress } from '$lib/components/ui/progress/index.js';
	import { Eye, EyeOff, User, Mail, Lock } from 'lucide-svelte';

	let fullName = $state('');
	let email = $state('');
	let password = $state('');
	let confirmPassword = $state('');
	let showPassword = $state(false);
	let showConfirmPassword = $state(false);
	let agreedToTerms = $state(false);

	let passwordStrength = $derived.by(() => {
		let score = 0;
		if (password.length >= 8) score += 25;
		if (password.length >= 12) score += 10;
		if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 25;
		if (/\d/.test(password)) score += 20;
		if (/[^a-zA-Z0-9]/.test(password)) score += 20;
		return Math.min(score, 100);
	});

	let strengthLabel = $derived.by(() => {
		if (password.length === 0) return '';
		if (passwordStrength < 30) return 'Weak';
		if (passwordStrength < 60) return 'Fair';
		if (passwordStrength < 80) return 'Good';
		return 'Strong';
	});

	let strengthColor = $derived.by(() => {
		if (passwordStrength < 30) return 'bg-destructive';
		if (passwordStrength < 60) return 'bg-accent-gold';
		if (passwordStrength < 80) return 'bg-accent-green/70';
		return 'bg-accent-green';
	});
</script>

<svelte:head>
	<title>Create Account - Being Muslim</title>
</svelte:head>

<div class="w-full max-w-md">
	<div class="rounded-xl border border-border bg-surface p-8 shadow-sm">
		<!-- Header -->
		<div class="mb-6 text-center">
			<h1 class="font-display text-2xl font-bold text-text-primary">Begin your journey</h1>
			<p class="mt-2 text-sm text-text-secondary">
				Create your account and join a community of seekers
			</p>
		</div>

		<!-- Form -->
		<form
			class="space-y-4"
			onsubmit={(e) => {
				e.preventDefault();
				// TODO: Handle registration
			}}
		>
			<!-- Full Name -->
			<div class="space-y-2">
				<label for="fullName" class="text-sm font-medium text-text-primary">Full name</label>
				<div class="relative">
					<User class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
					<Input
						id="fullName"
						type="text"
						placeholder="Your full name"
						bind:value={fullName}
						required
						class="pl-10"
					/>
				</div>
			</div>

			<!-- Email -->
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

			<!-- Password -->
			<div class="space-y-2">
				<label for="password" class="text-sm font-medium text-text-primary">Password</label>
				<div class="relative">
					<Lock class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
					<Input
						id="password"
						type={showPassword ? 'text' : 'password'}
						placeholder="Create a password"
						bind:value={password}
						required
						class="pl-10 pr-10"
					/>
					<button
						type="button"
						onclick={() => (showPassword = !showPassword)}
						class="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
						aria-label={showPassword ? 'Hide password' : 'Show password'}
					>
						{#if showPassword}
							<EyeOff class="h-4 w-4" />
						{:else}
							<Eye class="h-4 w-4" />
						{/if}
					</button>
				</div>

				<!-- Password Strength -->
				{#if password.length > 0}
					<div class="space-y-1.5">
						<Progress value={passwordStrength} class="h-1.5 [&>div]:transition-all [&>div]:{strengthColor}" />
						<p class="text-xs text-text-secondary">
							Password strength: <span class="font-medium">{strengthLabel}</span>
						</p>
					</div>
				{/if}
			</div>

			<!-- Confirm Password -->
			<div class="space-y-2">
				<label for="confirmPassword" class="text-sm font-medium text-text-primary">Confirm password</label>
				<div class="relative">
					<Lock class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
					<Input
						id="confirmPassword"
						type={showConfirmPassword ? 'text' : 'password'}
						placeholder="Confirm your password"
						bind:value={confirmPassword}
						required
						class="pl-10 pr-10"
					/>
					<button
						type="button"
						onclick={() => (showConfirmPassword = !showConfirmPassword)}
						class="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
						aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
					>
						{#if showConfirmPassword}
							<EyeOff class="h-4 w-4" />
						{:else}
							<Eye class="h-4 w-4" />
						{/if}
					</button>
				</div>
				{#if confirmPassword.length > 0 && password !== confirmPassword}
					<p class="text-xs text-destructive">Passwords do not match</p>
				{/if}
			</div>

			<!-- Terms Checkbox -->
			<label class="flex items-start gap-3 cursor-pointer">
				<input
					type="checkbox"
					bind:checked={agreedToTerms}
					class="mt-0.5 h-4 w-4 rounded border-border text-accent-primary focus:ring-accent-primary"
				/>
				<span class="text-sm text-text-secondary">
					I agree to the
					<a href="{base}/terms" class="font-medium text-accent-primary hover:underline">Terms of Service</a>
					and
					<a href="{base}/privacy" class="font-medium text-accent-primary hover:underline">Privacy Policy</a>
				</span>
			</label>

			<!-- Create Account Button -->
			<Button type="submit" class="w-full" disabled={!agreedToTerms}>
				{#snippet children()}
					Create Account
				{/snippet}
			</Button>
		</form>

		<!-- Divider -->
		<div class="relative my-6">
			<Separator />
			<span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface px-3 text-xs text-text-secondary">
				or sign up with
			</span>
		</div>

		<!-- Social Buttons -->
		<div class="grid grid-cols-2 gap-3">
			<Button variant="outline" class="w-full">
				{#snippet children()}
					<svg class="mr-2 h-4 w-4" viewBox="0 0 24 24">
						<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
						<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
						<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
						<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
					</svg>
					Google
				{/snippet}
			</Button>
			<Button variant="outline" class="w-full">
				{#snippet children()}
					<svg class="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
						<path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
					</svg>
					Apple
				{/snippet}
			</Button>
		</div>

		<!-- Login Link -->
		<p class="mt-6 text-center text-sm text-text-secondary">
			Already have an account?
			<a href="{base}/login" class="font-medium text-accent-primary hover:underline">Sign in</a>
		</p>
	</div>
</div>
