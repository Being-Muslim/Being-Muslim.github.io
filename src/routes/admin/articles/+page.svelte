<script lang="ts">
	import { Plus, Search, Filter, MoreHorizontal, FileText } from 'lucide-svelte';

	const articles = [
		{ id: '1', title: 'Brief Overview of Islam', category: 'Foundations', status: 'published', author: 'Dr. Asad Tarsin', date: 'Mar 28, 2026', views: '2.4k' },
		{ id: '2', title: "A Beginner's Guide to Being a Muslim", category: 'New Muslims', status: 'published', author: 'Dr. Asad Tarsin', date: 'Mar 25, 2026', views: '1.8k' },
		{ id: '3', title: 'Islam and Other Faiths', category: 'Belief', status: 'draft', author: 'Dr. Asad Tarsin', date: 'Mar 22, 2026', views: '--' },
		{ id: '4', title: 'Understanding the Five Pillars', category: 'Foundations', status: 'scheduled', author: 'Dr. Asad Tarsin', date: 'Apr 5, 2026', views: '--' },
		{ id: '5', title: 'Prayer: A Step-by-Step Guide', category: 'Practice', status: 'published', author: 'Imam Ahmad', date: 'Mar 18, 2026', views: '3.1k' },
		{ id: '6', title: 'Ramadan Preparation Guide', category: 'Practice', status: 'archived', author: 'Dr. Asad Tarsin', date: 'Feb 28, 2026', views: '980' }
	];

	let search = $state('');
	let statusFilter = $state('all');

	const filteredArticles = $derived(
		articles.filter((a) => {
			const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase());
			const matchesStatus = statusFilter === 'all' || a.status === statusFilter;
			return matchesSearch && matchesStatus;
		})
	);

	const statusCounts = $derived({
		all: articles.length,
		published: articles.filter((a) => a.status === 'published').length,
		draft: articles.filter((a) => a.status === 'draft').length,
		scheduled: articles.filter((a) => a.status === 'scheduled').length,
		archived: articles.filter((a) => a.status === 'archived').length
	});
</script>

<svelte:head>
	<title>Articles — Being Muslim Admin</title>
</svelte:head>

<div class="admin-page">
	<div class="admin-page-header" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
		<div>
			<h1 class="admin-page-title">Articles</h1>
			<p class="admin-page-desc">Manage your blog posts and resources.</p>
		</div>
		<a href="/admin/articles/new" class="admin-btn-primary">
			<Plus class="h-4 w-4" />
			New Article
		</a>
	</div>

	<!-- Filters -->
	<div class="filter-bar">
		<div class="filter-tabs">
			{#each ['all', 'published', 'draft', 'scheduled', 'archived'] as status}
				<button
					class="filter-tab {statusFilter === status ? 'active' : ''}"
					onclick={() => (statusFilter = status)}
				>
					{status.charAt(0).toUpperCase() + status.slice(1)}
					<span class="filter-count">{statusCounts[status as keyof typeof statusCounts]}</span>
				</button>
			{/each}
		</div>
		<div class="search-box">
			<Search class="h-4 w-4" style="color: #9ca3af; position: absolute; left: 12px; top: 50%; transform: translateY(-50%);" />
			<input type="text" placeholder="Search articles..." bind:value={search} class="search-input" />
		</div>
	</div>

	<!-- Articles Table -->
	<div class="admin-card" style="margin-top: 16px;">
		{#if filteredArticles.length === 0}
			<div style="padding: 48px 20px; text-align: center;">
				<FileText class="h-10 w-10" style="color: #d1d5db; margin: 0 auto 12px;" />
				<p style="font-size: 14px; color: #6b7280; margin: 0;">No articles found.</p>
			</div>
		{:else}
			<div class="admin-table-wrap">
				<table class="admin-table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Category</th>
							<th>Author</th>
							<th>Status</th>
							<th>Views</th>
							<th>Date</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{#each filteredArticles as article}
							<tr>
								<td>
									<a href="/admin/articles/{article.id}" class="admin-table-link">{article.title}</a>
								</td>
								<td><span class="category-badge">{article.category}</span></td>
								<td class="text-muted">{article.author}</td>
								<td><span class="status-badge status-{article.status}">{article.status}</span></td>
								<td class="text-muted">{article.views}</td>
								<td class="text-muted">{article.date}</td>
								<td>
									<button class="admin-icon-btn-sm" aria-label="More actions">
										<MoreHorizontal class="h-4 w-4" />
									</button>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	</div>
</div>

<style>
	.admin-page {
		max-width: 1200px;
	}
	.admin-page-header { margin-bottom: 20px; }
	.admin-page-title { font-size: 24px; font-weight: 700; margin: 0 0 4px; color: #1a1a2e; }
	.admin-page-desc { font-size: 14px; color: #6b7280; margin: 0; }

	.admin-btn-primary {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 9px 18px;
		background: #1a1a2e;
		color: #fff;
		border: none;
		border-radius: 8px;
		font-size: 14px;
		font-weight: 500;
		text-decoration: none;
		cursor: pointer;
		transition: background 0.15s;
	}
	.admin-btn-primary:hover {
		background: #2d2d4e;
	}

	/* Filters */
	.filter-bar {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 12px;
	}
	.filter-tabs {
		display: flex;
		gap: 4px;
		overflow-x: auto;
	}
	.filter-tab {
		padding: 6px 12px;
		border: none;
		background: none;
		font-size: 13px;
		font-weight: 500;
		color: #6b7280;
		border-radius: 6px;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 6px;
		white-space: nowrap;
		transition: all 0.15s;
	}
	.filter-tab:hover { background: #f3f4f6; color: #1a1a2e; }
	.filter-tab.active { background: #1a1a2e; color: #fff; }
	.filter-tab.active .filter-count { background: rgba(255,255,255,0.2); color: #fff; }
	.filter-count {
		font-size: 11px;
		background: #f3f4f6;
		color: #6b7280;
		padding: 1px 6px;
		border-radius: 999px;
	}

	.search-box {
		position: relative;
	}
	.search-input {
		padding: 8px 12px 8px 36px;
		border: 1px solid #e5e7eb;
		border-radius: 8px;
		font-size: 14px;
		background: #fff;
		width: 240px;
		outline: none;
		transition: border-color 0.15s;
	}
	.search-input:focus { border-color: #3b82f6; }

	/* Table reuse */
	.admin-card { background: #fff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; }
	.admin-table-wrap { overflow-x: auto; }
	.admin-table { width: 100%; border-collapse: collapse; font-size: 14px; }
	.admin-table th { text-align: left; padding: 10px 20px; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.04em; background: #fafafa; }
	.admin-table td { padding: 12px 20px; border-top: 1px solid #f3f4f6; }
	.admin-table-link { color: #1a1a2e; text-decoration: none; font-weight: 500; }
	.admin-table-link:hover { color: #3b82f6; }
	.text-muted { color: #9ca3af; font-size: 13px; }

	.category-badge { font-size: 12px; color: #6b7280; background: #f3f4f6; padding: 3px 10px; border-radius: 6px; }
	.status-badge { font-size: 12px; font-weight: 500; padding: 3px 10px; border-radius: 999px; }
	.status-published { background: #ecfdf5; color: #059669; }
	.status-draft { background: #f3f4f6; color: #6b7280; }
	.status-scheduled { background: #eff6ff; color: #3b82f6; }
	.status-archived { background: #fef3c7; color: #d97706; }

	.admin-icon-btn-sm {
		padding: 6px;
		border: none;
		background: none;
		cursor: pointer;
		border-radius: 6px;
		color: #9ca3af;
		transition: all 0.15s;
	}
	.admin-icon-btn-sm:hover { background: #f3f4f6; color: #1a1a2e; }
</style>
