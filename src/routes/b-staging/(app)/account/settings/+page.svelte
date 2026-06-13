<script lang="ts">
	import { Bell, Globe, Lock, Trash2 } from 'lucide-svelte';

	let emailNotifications = $state(true);
	let communityDigest = $state(true);
	let courseReminders = $state(false);
</script>

<svelte:head>
	<title>Settings — Being Muslim</title>
</svelte:head>

<div class="space-y-4">
	<div class="mb-2">
		<h1 class="font-display text-2xl font-bold text-[#1C1C1E]">Settings</h1>
		<p class="mt-1 text-sm text-[#8E8E93]">Manage your account preferences.</p>
	</div>

	<!-- Notifications tile -->
	<div class="rounded-[20px] bg-white p-6 sm:p-8">
		<div class="flex items-center gap-3">
			<div class="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#FF3B30]/10">
				<Bell class="h-4.5 w-4.5 text-[#FF3B30]" />
			</div>
			<h2 class="font-display text-lg font-bold text-[#1C1C1E]">Notifications</h2>
		</div>
		<div class="mt-6 space-y-5">
			{#each [
				{ label: 'Email Notifications', desc: 'Receive updates about your account and courses.', bind: () => emailNotifications, toggle: () => emailNotifications = !emailNotifications },
				{ label: 'Community Digest', desc: 'Weekly summary of popular discussions.', bind: () => communityDigest, toggle: () => communityDigest = !communityDigest },
				{ label: 'Course Reminders', desc: 'Reminders to continue your learning.', bind: () => courseReminders, toggle: () => courseReminders = !courseReminders }
			] as setting}
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm font-medium text-[#1C1C1E]">{setting.label}</p>
						<p class="mt-0.5 text-xs text-[#8E8E93]">{setting.desc}</p>
					</div>
					<button
						class="relative h-[31px] w-[51px] shrink-0 rounded-full transition-colors {setting.bind() ? 'bg-[#30D158]' : 'bg-[#E5E5EA]'}"
						onclick={setting.toggle}
						aria-label="Toggle {setting.label}"
					>
						<span class="absolute top-[2px] h-[27px] w-[27px] rounded-full bg-white shadow transition-all {setting.bind() ? 'left-[22px]' : 'left-[2px]'}"></span>
					</button>
				</div>
			{/each}
		</div>
	</div>

	<!-- Password tile -->
	<div class="rounded-[20px] bg-white p-6 sm:p-8">
		<div class="flex items-center gap-3">
			<div class="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#007AFF]/10">
				<Lock class="h-4.5 w-4.5 text-[#007AFF]" />
			</div>
			<h2 class="font-display text-lg font-bold text-[#1C1C1E]">Password</h2>
		</div>
		<p class="mt-3 text-sm text-[#8E8E93]">Change your password to keep your account secure.</p>
		<form class="mt-5 space-y-4" onsubmit={(e) => e.preventDefault()}>
			<div class="space-y-2">
				<label for="current" class="text-sm font-medium text-[#1C1C1E]">Current Password</label>
				<input id="current" type="password" class="w-full rounded-[14px] bg-[#F2F2F7] px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30" />
			</div>
			<div class="space-y-2">
				<label for="newpass" class="text-sm font-medium text-[#1C1C1E]">New Password</label>
				<input id="newpass" type="password" class="w-full rounded-[14px] bg-[#F2F2F7] px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30" />
			</div>
			<button type="submit" class="rounded-[14px] bg-[#007AFF] px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90">Update Password</button>
		</form>
	</div>

	<!-- Language tile -->
	<div class="rounded-[20px] bg-white p-6 sm:p-8">
		<div class="flex items-center gap-3">
			<div class="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#5856D6]/10">
				<Globe class="h-4.5 w-4.5 text-[#5856D6]" />
			</div>
			<h2 class="font-display text-lg font-bold text-[#1C1C1E]">Language</h2>
		</div>
		<p class="mt-3 text-sm text-[#8E8E93]">Choose your preferred language for the platform.</p>
		<select class="mt-4 rounded-[14px] bg-[#F2F2F7] px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30">
			<option>English</option>
			<option>Arabic</option>
			<option>Spanish</option>
			<option>French</option>
		</select>
	</div>

	<!-- Danger Zone tile -->
	<div class="rounded-[20px] bg-white p-6 sm:p-8">
		<div class="flex items-center gap-3">
			<div class="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#FF3B30]/10">
				<Trash2 class="h-4.5 w-4.5 text-[#FF3B30]" />
			</div>
			<h2 class="font-display text-lg font-bold text-[#FF3B30]">Delete Account</h2>
		</div>
		<p class="mt-3 text-sm text-[#8E8E93]">Once you delete your account, there is no going back. Please be certain.</p>
		<button class="mt-4 rounded-[14px] border border-[#FF3B30]/20 px-6 py-2.5 text-sm font-semibold text-[#FF3B30] hover:bg-[#FF3B30]/5">Delete My Account</button>
	</div>
</div>
