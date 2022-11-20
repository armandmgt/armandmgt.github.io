<script>
  import '../app.css';
  import { browser } from '$app/environment';
  import { initTheme, initComplete as themeInitComplete } from '$lib/theme';
  import ThemeSelector from './ThemeSelector.svelte';

  if (browser)
      import('tw-elements');
  initTheme();
</script>

{#if $themeInitComplete}
    <div class="relative h-screen bg-white dark:bg-black dark:text-white">
        <ThemeSelector/>

        <slot></slot>
    </div>
{/if}
