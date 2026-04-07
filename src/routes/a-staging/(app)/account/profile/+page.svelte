<script lang="ts">
	import { withPrefix } from '$lib/data/utils';
	import { Camera, Save } from 'lucide-svelte';

	const p = (href: string) => withPrefix('/a-staging', href);

	let name = $state('Aminah Roberts');
	let email = $state('aminah@example.com');
	let bio = $state('New Muslim on a learning journey. Passionate about understanding the foundations of faith.');
	let location = $state('Austin, TX');
	let website = $state('');
	let journeyType = $state('convert');

	function handleSave() {
		// Mock save
	}
</script>

<svelte:head>
	<title>Profile - Being Muslim</title>
</svelte:head>

<div>
	<h1 class="font-display text-2xl font-bold">Edit <span class="highlight">Profile</span></h1>
	<p class="mono mt-2 text-text-secondary">MANAGE YOUR PERSONAL INFORMATION</p>

	<form
		class="mt-8"
		onsubmit={(e) => {
			e.preventDefault();
			handleSave();
		}}
	>
		<!-- Avatar -->
		<div class="flex items-center gap-6 border-[3px] border-border p-6">
			<div class="relative">
				<div class="flex h-20 w-20 items-center justify-center border-[3px] border-border bg-accent-primary/10 font-display text-2xl font-bold text-accent-primary">
					AR
				</div>
				<button
					type="button"
					class="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center border-[3px] border-border bg-accent-primary text-white hover:bg-red-700"
					aria-label="Change avatar"
				>
					<Camera class="h-4 w-4" />
				</button>
			</div>
			<div>
				<p class="font-display text-lg font-bold">{name}</p>
				<p class="mono text-text-secondary">MEMBER SINCE JANUARY 2026</p>
			</div>
		</div>

		<!-- Fields -->
		<div class="mt-6 grid gap-0 border-[3px] border-border sm:grid-cols-2">
			<div class="border-b-[3px] border-r-0 border-border p-4 sm:border-r-[3px]">
				<label for="prof-name" class="mono mb-2 block text-text-primary">FULL NAME</label>
				<input
					id="prof-name"
					type="text"
					bind:value={name}
					class="w-full border-[3px] border-border px-4 py-3 text-text-primary focus:outline-none"
				/>
			</div>
			<div class="border-b-[3px] border-border p-4">
				<label for="prof-email" class="mono mb-2 block text-text-primary">EMAIL</label>
				<input
					id="prof-email"
					type="email"
					bind:value={email}
					class="w-full border-[3px] border-border px-4 py-3 text-text-primary focus:outline-none"
				/>
			</div>
			<div class="border-b-[3px] border-r-0 border-border p-4 sm:border-b-0 sm:border-r-[3px]">
				<label for="prof-location" class="mono mb-2 block text-text-primary">LOCATION</label>
				<input
					id="prof-location"
					type="text"
					bind:value={location}
					placeholder="City, State"
					class="w-full border-[3px] border-border px-4 py-3 text-text-primary placeholder:text-text-secondary focus:outline-none"
				/>
			</div>
			<div class="p-4">
				<label for="prof-website" class="mono mb-2 block text-text-primary">WEBSITE</label>
				<input
					id="prof-website"
					type="url"
					bind:value={website}
					placeholder="https://..."
					class="w-full border-[3px] border-border px-4 py-3 text-text-primary placeholder:text-text-secondary focus:outline-none"
				/>
			</div>
		</div>

		<!-- Journey Type -->
		<div class="mt-6 border-[3px] border-border p-4">
			<label for="prof-journey" class="mono mb-2 block text-text-primary">MY JOURNEY</label>
			<select
				id="prof-journey"
				bind:value={journeyType}
				class="w-full border-[3px] border-border bg-bg-primary px-4 py-3 text-text-primary focus:outline-none sm:w-auto"
			>
				<option value="exploring">Exploring Islam</option>
				<option value="convert">New Muslim / Convert</option>
				<option value="reconnecting">Reconnecting with Faith</option>
				<option value="lifelong">Lifelong Muslim</option>
			</select>
		</div>

		<!-- Bio -->
		<div class="mt-6 border-[3px] border-border p-4">
			<label for="prof-bio" class="mono mb-2 block text-text-primary">BIO</label>
			<textarea
				id="prof-bio"
				bind:value={bio}
				rows="4"
				class="w-full resize-none border-[3px] border-border p-4 text-text-primary placeholder:text-text-secondary focus:outline-none"
			></textarea>
		</div>

		<!-- Save -->
		<div class="mt-6 flex justify-end">
			<button
				type="submit"
				class="inline-flex items-center gap-2 border-[3px] border-border bg-accent-primary px-6 py-3 font-bold text-white transition-colors hover:bg-red-700"
			>
				<Save class="h-4 w-4" />
				Save Changes
			</button>
		</div>
	</form>
</div>
