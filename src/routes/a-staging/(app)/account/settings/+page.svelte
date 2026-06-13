<script lang="ts">
	import { withPrefix } from '$lib/data/utils';
	import { Bell, Shield, Globe, Trash2, Save } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/a-staging', href);

	let emailNotifications = $state(true);
	let communityDigest = $state(true);
	let courseReminders = $state(true);
	let marketingEmails = $state(false);
	let profilePublic = $state(true);
	let showLearningProgress = $state(true);
	let language = $state('en');

	function handleSave() {
		// Mock save
	}
</script>

<svelte:head>
	<title>Settings - Being Muslim</title>
</svelte:head>

<div>
	<h1 class="font-display text-2xl font-bold">Account <span class="highlight">Settings</span></h1>
	<p class="mono mt-2 text-text-secondary">MANAGE YOUR PREFERENCES AND ACCOUNT</p>

	<!-- Notifications -->
	<div class="mt-8">
		<div class="flex items-center gap-3 border-[3px] border-border bg-text-primary px-4 py-3">
			<Bell class="h-4 w-4 text-white" />
			<span class="mono text-white">NOTIFICATIONS</span>
		</div>
		<div class="border-[3px] border-t-0 border-border">
			{@render toggleRow('Email Notifications', 'Receive important updates via email', emailNotifications, () => emailNotifications = !emailNotifications)}
			{@render toggleRow('Community Digest', 'Weekly summary of forum activity', communityDigest, () => communityDigest = !communityDigest)}
			{@render toggleRow('Course Reminders', 'Reminders to continue your courses', courseReminders, () => courseReminders = !courseReminders)}
			{@render toggleRow('Marketing Emails', 'New products and promotions', marketingEmails, () => marketingEmails = !marketingEmails)}
		</div>
	</div>

	<!-- Privacy -->
	<div class="mt-8">
		<div class="flex items-center gap-3 border-[3px] border-border bg-text-primary px-4 py-3">
			<Shield class="h-4 w-4 text-white" />
			<span class="mono text-white">PRIVACY</span>
		</div>
		<div class="border-[3px] border-t-0 border-border">
			{@render toggleRow('Public Profile', 'Allow others to see your profile', profilePublic, () => profilePublic = !profilePublic)}
			{@render toggleRow('Show Learning Progress', 'Display your course progress on your profile', showLearningProgress, () => showLearningProgress = !showLearningProgress)}
		</div>
	</div>

	<!-- Language -->
	<div class="mt-8">
		<div class="flex items-center gap-3 border-[3px] border-border bg-text-primary px-4 py-3">
			<Globe class="h-4 w-4 text-white" />
			<span class="mono text-white">LANGUAGE</span>
		</div>
		<div class="border-[3px] border-t-0 border-border p-4">
			<select
				bind:value={language}
				class="w-full border-[3px] border-border bg-bg-primary px-4 py-3 text-text-primary focus:outline-none sm:w-48"
			>
				<option value="en">English</option>
				<option value="ar">Arabic</option>
				<option value="es">Spanish</option>
				<option value="fr">French</option>
				<option value="ur">Urdu</option>
			</select>
		</div>
	</div>

	<!-- Save -->
	<div class="mt-8 flex justify-end">
		<button
			onclick={handleSave}
			class="inline-flex items-center gap-2 border-[3px] border-border bg-accent-primary px-6 py-3 font-bold text-white transition-colors hover:bg-red-700"
		>
			<Save class="h-4 w-4" />
			Save Settings
		</button>
	</div>

	<!-- Danger Zone -->
	<div class="mt-10">
		<div class="flex items-center gap-3 border-[3px] border-accent-primary bg-accent-primary px-4 py-3">
			<Trash2 class="h-4 w-4 text-white" />
			<span class="mono text-white">DANGER ZONE</span>
		</div>
		<div class="border-[3px] border-t-0 border-accent-primary p-6">
			<p class="text-text-secondary">
				Once you delete your account, there is no going back. All your data, including course
				progress and community posts, will be permanently removed.
			</p>
			<button
				class="mt-4 border-[3px] border-accent-primary px-6 py-3 font-bold text-accent-primary transition-colors hover:bg-accent-primary hover:text-white"
			>
				Delete Account
			</button>
		</div>
	</div>
</div>

{#snippet toggleRow(label: string, description: string, value: boolean, toggle: () => void)}
	<div class="flex items-center justify-between border-b-[3px] border-border px-4 py-4 last:border-b-0">
		<div>
			<p class="font-display font-bold">{label}</p>
			<p class="mono text-text-secondary">{description.toUpperCase()}</p>
		</div>
		<button
			onclick={toggle}
			class="flex h-8 w-14 items-center border-[3px] border-border transition-colors {value ? 'bg-accent-green' : 'bg-bg-primary'}"
			aria-label="Toggle {label}"
		>
			<span
				class="h-6 w-6 border-[2px] border-border bg-white transition-transform {value ? 'translate-x-6' : 'translate-x-0'}"
			></span>
		</button>
	</div>
{/snippet}
