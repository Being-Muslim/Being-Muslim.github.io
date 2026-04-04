<script lang="ts">
  import { type Snippet } from 'svelte';
  import '../styles.css';
  import NavbarK from '../NavbarK.svelte';
  import FooterK from '../FooterK.svelte';

  let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <title>Being Muslim — Your Guide to Being Muslim</title>
  <meta name="description" content="Education, community, and support for those beginning their Islamic journey." />
</svelte:head>

<div class="bm-root">
  <NavbarK />
  <main>
    {@render children()}
  </main>
  <FooterK />
</div>
