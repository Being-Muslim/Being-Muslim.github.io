<script lang="ts">
	import type { Snippet } from 'svelte';
	import {
		LayoutDashboard,
		FileText,
		GraduationCap,
		Users,
		Image,
		Settings,
		ChevronLeft,
		Menu,
		LogOut,
		Bell
	} from 'lucide-svelte';
	import { page } from '$app/stores';

	let { children }: { children: Snippet } = $props();
	let sidebarOpen = $state(false);

	const navItems = [
		{ label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
		{ label: 'Articles', href: '/admin/articles', icon: FileText },
		{ label: 'Courses', href: '/admin/courses', icon: GraduationCap },
		{ label: 'Community', href: '/admin/community', icon: Users },
		{ label: 'Media', href: '/admin/media', icon: Image },
		{ label: 'Settings', href: '/admin/settings', icon: Settings }
	];

	function isActive(href: string, pathname: string): boolean {
		if (href === '/admin') return pathname === '/admin';
		return pathname.startsWith(href);
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<div class="admin-root">
	<!-- Mobile header -->
	<header class="admin-mobile-header">
		<button class="admin-icon-btn" onclick={() => (sidebarOpen = true)} aria-label="Open menu">
			<Menu class="h-5 w-5" />
		</button>
		<span class="admin-logo-text">Being Muslim Admin</span>
		<button class="admin-icon-btn" aria-label="Notifications">
			<Bell class="h-5 w-5" />
		</button>
	</header>

	<!-- Sidebar overlay (mobile) -->
	{#if sidebarOpen}
		<button class="admin-sidebar-overlay" onclick={() => (sidebarOpen = false)} aria-label="Close menu"></button>
	{/if}

	<!-- Sidebar -->
	<aside class="admin-sidebar {sidebarOpen ? 'open' : ''}">
		<div class="admin-sidebar-header">
			<a href="/admin" class="admin-logo">
				<img
					src="https://www.beingmuslim.org/wp-content/uploads/2022/01/tree-logo-inverse.png"
					alt="Being Muslim"
					class="admin-logo-img"
				/>
				<span class="admin-logo-text">Being Muslim</span>
			</a>
			<button class="admin-icon-btn lg-hidden" onclick={() => (sidebarOpen = false)} aria-label="Close sidebar">
				<ChevronLeft class="h-5 w-5" />
			</button>
		</div>

		<nav class="admin-nav">
			{#each navItems as item}
				{@const active = isActive(item.href, $page.url.pathname)}
				<a
					href={item.href}
					class="admin-nav-item {active ? 'active' : ''}"
					onclick={() => (sidebarOpen = false)}
				>
					<item.icon class="h-[18px] w-[18px]" />
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="admin-sidebar-footer">
			<a href="/" class="admin-nav-item" target="_blank">
				View Site
			</a>
			<button class="admin-nav-item" style="width: 100%; border: none; cursor: pointer;">
				<LogOut class="h-[18px] w-[18px]" />
				Sign Out
			</button>
		</div>
	</aside>

	<!-- Main content -->
	<main class="admin-main">
		{@render children()}
	</main>
</div>

<style>
	.admin-root {
		display: flex;
		min-height: 100vh;
		background: #f8f9fa;
		font-family: 'Inter', system-ui, -apple-system, sans-serif;
		color: #1a1a2e;
	}

	/* ---- Sidebar ---- */
	.admin-sidebar {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: 260px;
		background: #1a1a2e;
		color: #fff;
		display: flex;
		flex-direction: column;
		z-index: 50;
		transform: translateX(-100%);
		transition: transform 0.2s ease;
	}
	.admin-sidebar.open {
		transform: translateX(0);
	}
	@media (min-width: 1024px) {
		.admin-sidebar {
			transform: translateX(0);
		}
	}

	.admin-sidebar-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 20px 16px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	}

	.admin-logo {
		display: flex;
		align-items: center;
		gap: 10px;
		text-decoration: none;
		color: #fff;
	}
	.admin-logo-img {
		width: 28px;
		height: 28px;
	}
	.admin-logo-text {
		font-size: 15px;
		font-weight: 600;
		color: inherit;
	}

	.admin-nav {
		flex: 1;
		padding: 12px 12px;
		overflow-y: auto;
	}

	.admin-nav-item {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 9px 12px;
		border-radius: 8px;
		font-size: 14px;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.6);
		text-decoration: none;
		transition: all 0.15s;
		background: none;
	}
	.admin-nav-item:hover {
		color: #fff;
		background: rgba(255, 255, 255, 0.08);
	}
	.admin-nav-item.active {
		color: #fff;
		background: rgba(255, 255, 255, 0.12);
	}

	.admin-sidebar-footer {
		padding: 12px;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
	}

	.admin-sidebar-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 40;
		border: none;
		cursor: default;
	}
	@media (min-width: 1024px) {
		.admin-sidebar-overlay {
			display: none;
		}
	}

	/* ---- Mobile header ---- */
	.admin-mobile-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 56px;
		background: #fff;
		border-bottom: 1px solid #e5e7eb;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 16px;
		z-index: 30;
	}
	@media (min-width: 1024px) {
		.admin-mobile-header {
			display: none;
		}
	}

	.admin-icon-btn {
		padding: 8px;
		border: none;
		background: none;
		cursor: pointer;
		border-radius: 8px;
		color: #6b7280;
		transition: background 0.15s;
	}
	.admin-icon-btn:hover {
		background: #f3f4f6;
	}

	/* ---- Main content ---- */
	.admin-main {
		flex: 1;
		padding: 72px 16px 32px; /* mobile: below header */
		min-height: 100vh;
	}
	@media (min-width: 1024px) {
		.admin-main {
			margin-left: 260px;
			padding: 32px 40px;
		}
	}

	.lg-hidden {
		display: block;
	}
	@media (min-width: 1024px) {
		.lg-hidden {
			display: none;
		}
	}
</style>
