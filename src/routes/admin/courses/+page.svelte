<script lang="ts">
	import { GraduationCap } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Courses — Being Muslim Admin</title>
</svelte:head>

<div class="admin-page">
	<div class="admin-page-header">
		<h1 class="admin-page-title">Courses</h1>
		<p class="admin-page-desc">Manage your learning content.</p>
	</div>

	<div class="placeholder">
		<GraduationCap class="h-12 w-12" style="color: #d1d5db;" />
		<h3 style="font-size: 16px; font-weight: 600; margin: 12px 0 4px; color: #374151;">Course Management</h3>
		<p style="font-size: 14px; color: #9ca3af; max-width: 360px; text-align: center; line-height: 1.5;">
			Create and manage courses, modules, and lessons. Course structure and lesson types are being finalized.
		</p>
	</div>
</div>

<style>
	.admin-page { max-width: 1200px; }
	.admin-page-header { margin-bottom: 24px; }
	.admin-page-title { font-size: 24px; font-weight: 700; margin: 0 0 4px; color: #1a1a2e; }
	.admin-page-desc { font-size: 14px; color: #6b7280; margin: 0; }
	.placeholder { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 64px 20px; display: flex; flex-direction: column; align-items: center; }
</style>
