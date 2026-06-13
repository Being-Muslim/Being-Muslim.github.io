<script lang="ts">
	import { User, Camera } from 'lucide-svelte';

	let name = $state('Aminah Rahman');
	let email = $state('aminah@example.com');
	let bio = $state('A new Muslim on a journey of learning and growth. Based in Chicago. Joined the community in 2025.');
	let location = $state('Chicago, IL');
</script>

<svelte:head>
	<title>Profile — Being Muslim</title>
</svelte:head>

<div class="space-y-6">
	<div>
		<h1 class="font-display text-2xl font-bold text-[#1C1C1E]">Profile</h1>
		<p class="mt-1 text-sm text-[#8E8E93]">Manage your personal information.</p>
	</div>

	<!-- Avatar tile -->
	<div class="rounded-[20px] bg-white p-6">
		<div class="flex items-center gap-5">
			<div class="relative">
				<div class="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#007AFF]/15 to-[#5856D6]/15">
					<User class="h-10 w-10 text-[#007AFF]/60" />
				</div>
				<button class="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#007AFF] text-white shadow-md hover:opacity-90" aria-label="Change photo">
					<Camera class="h-4 w-4" />
				</button>
			</div>
			<div>
				<p class="font-display text-lg font-bold text-[#1C1C1E]">{name}</p>
				<p class="text-sm text-[#8E8E93]">{email}</p>
				<p class="mt-1 text-xs text-[#8E8E93]">JPG, PNG, or GIF. Max 2MB.</p>
			</div>
		</div>
	</div>

	<!-- Form tile -->
	<div class="rounded-[20px] bg-white p-6 sm:p-8">
		<form class="space-y-5" onsubmit={(e) => e.preventDefault()}>
			<div class="grid gap-5 sm:grid-cols-2">
				<div class="space-y-2">
					<label for="name" class="text-sm font-medium text-[#1C1C1E]">Full Name</label>
					<input id="name" type="text" bind:value={name} class="w-full rounded-[14px] bg-[#F2F2F7] px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30" />
				</div>
				<div class="space-y-2">
					<label for="email" class="text-sm font-medium text-[#1C1C1E]">Email</label>
					<input id="email" type="email" bind:value={email} class="w-full rounded-[14px] bg-[#F2F2F7] px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30" />
				</div>
			</div>
			<div class="space-y-2">
				<label for="location" class="text-sm font-medium text-[#1C1C1E]">Location</label>
				<input id="location" type="text" bind:value={location} class="w-full rounded-[14px] bg-[#F2F2F7] px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30" />
			</div>
			<div class="space-y-2">
				<label for="bio" class="text-sm font-medium text-[#1C1C1E]">Bio</label>
				<textarea id="bio" bind:value={bio} rows="3" class="w-full rounded-[14px] bg-[#F2F2F7] px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30"></textarea>
			</div>
			<button type="submit" class="rounded-[14px] bg-[#007AFF] px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90">Save Changes</button>
		</form>
	</div>
</div>
