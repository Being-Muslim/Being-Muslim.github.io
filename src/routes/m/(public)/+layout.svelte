<script lang="ts">
  import { type Snippet } from 'svelte';
  import '../styles.css';
  import NavbarM from '../NavbarM.svelte';
  import FooterM from '../FooterM.svelte';

  let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <title>Being Muslim — Classes, Resources & Community</title>
  <meta name="description" content="A practical guide to Islamic faith and practice. Courses, resources, and community for those beginning their journey." />
</svelte:head>

<div class="bm-root">
  <NavbarM />
  <main>
    {@render children()}
  </main>
  <FooterM />
</div>
