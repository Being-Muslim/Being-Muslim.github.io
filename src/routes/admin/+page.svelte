<script lang="ts">
	import { FileText, GraduationCap, Users, Eye, TrendingUp, ArrowRight } from 'lucide-svelte';

	const stats = [
		{ label: 'Published Articles', value: '12', change: '+3 this month', icon: FileText, color: '#3b82f6' },
		{ label: 'Active Courses', value: '4', change: '+1 this month', icon: GraduationCap, color: '#8b5cf6' },
		{ label: 'Community Members', value: '2,547', change: '+128 this month', icon: Users, color: '#10b981' },
		{ label: 'Page Views (30d)', value: '18.2k', change: '+12%', icon: Eye, color: '#f59e0b' }
	];

	const recentArticles = [
		{ title: 'Brief Overview of Islam', status: 'published', date: 'Mar 28, 2026' },
		{ title: "A Beginner's Guide to Being a Muslim", status: 'published', date: 'Mar 25, 2026' },
		{ title: 'Islam and Other Faiths', status: 'draft', date: 'Mar 22, 2026' },
		{ title: 'Understanding the Five Pillars', status: 'scheduled', date: 'Apr 5, 2026' }
	];
</script>

<svelte:head>
	<title>Dashboard — Being Muslim Admin</title>
</svelte:head>

<div class="admin-page">
	<div class="admin-page-header">
		<h1 class="admin-page-title">Dashboard</h1>
		<p class="admin-page-desc">Welcome back. Here's what's happening.</p>
	</div>

	<!-- Stats Grid -->
	<div class="stats-grid">
		{#each stats as stat}
			<div class="stat-card">
				<div class="stat-icon" style="background: {stat.color}15; color: {stat.color};">
					<stat.icon class="h-5 w-5" />
				</div>
				<div>
					<p class="stat-value">{stat.value}</p>
					<p class="stat-label">{stat.label}</p>
					<p class="stat-change">
						<TrendingUp class="h-3 w-3" style="color: #10b981;" />
						{stat.change}
					</p>
				</div>
			</div>
		{/each}
	</div>

	<!-- Recent Articles -->
	<div class="admin-card" style="margin-top: 24px;">
		<div class="admin-card-header">
			<h2 class="admin-card-title">Recent Articles</h2>
			<a href="/admin/articles" class="admin-link">
				View all <ArrowRight class="h-3.5 w-3.5" />
			</a>
		</div>
		<div class="admin-table-wrap">
			<table class="admin-table">
				<thead>
					<tr>
						<th>Title</th>
						<th>Status</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{#each recentArticles as article}
						<tr>
							<td><a href="/admin/articles/1" class="admin-table-link">{article.title}</a></td>
							<td>
								<span class="status-badge status-{article.status}">{article.status}</span>
							</td>
							<td class="text-muted">{article.date}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>

<style>
	.admin-page {
		max-width: 1200px;
	}

	.admin-page-header {
		margin-bottom: 24px;
	}
	.admin-page-title {
		font-size: 24px;
		font-weight: 700;
		margin: 0 0 4px;
		color: #1a1a2e;
	}
	.admin-page-desc {
		font-size: 14px;
		color: #6b7280;
		margin: 0;
	}

	/* Stats */
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;
	}
	@media (min-width: 1024px) {
		.stats-grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}
	.stat-card {
		background: #fff;
		border-radius: 12px;
		padding: 20px;
		border: 1px solid #e5e7eb;
		display: flex;
		gap: 16px;
		align-items: flex-start;
	}
	.stat-icon {
		width: 40px;
		height: 40px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	.stat-value {
		font-size: 22px;
		font-weight: 700;
		margin: 0;
		color: #1a1a2e;
	}
	.stat-label {
		font-size: 13px;
		color: #6b7280;
		margin: 2px 0 0;
	}
	.stat-change {
		font-size: 12px;
		color: #10b981;
		margin: 4px 0 0;
		display: flex;
		align-items: center;
		gap: 4px;
	}

	/* Cards */
	.admin-card {
		background: #fff;
		border-radius: 12px;
		border: 1px solid #e5e7eb;
		overflow: hidden;
	}
	.admin-card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px 20px;
		border-bottom: 1px solid #f3f4f6;
	}
	.admin-card-title {
		font-size: 16px;
		font-weight: 600;
		margin: 0;
	}
	.admin-link {
		font-size: 13px;
		color: #3b82f6;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 4px;
	}
	.admin-link:hover {
		text-decoration: underline;
	}

	/* Table */
	.admin-table-wrap {
		overflow-x: auto;
	}
	.admin-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 14px;
	}
	.admin-table th {
		text-align: left;
		padding: 10px 20px;
		font-size: 12px;
		font-weight: 600;
		color: #6b7280;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		background: #fafafa;
	}
	.admin-table td {
		padding: 12px 20px;
		border-top: 1px solid #f3f4f6;
	}
	.admin-table-link {
		color: #1a1a2e;
		text-decoration: none;
		font-weight: 500;
	}
	.admin-table-link:hover {
		color: #3b82f6;
	}
	.text-muted {
		color: #9ca3af;
		font-size: 13px;
	}

	/* Status badges */
	.status-badge {
		font-size: 12px;
		font-weight: 500;
		padding: 3px 10px;
		border-radius: 999px;
	}
	.status-published {
		background: #ecfdf5;
		color: #059669;
	}
	.status-draft {
		background: #f3f4f6;
		color: #6b7280;
	}
	.status-scheduled {
		background: #eff6ff;
		color: #3b82f6;
	}
	.status-archived {
		background: #fef3c7;
		color: #d97706;
	}
</style>
