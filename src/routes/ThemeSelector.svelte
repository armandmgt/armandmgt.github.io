<script lang="ts">
  import { MonitorIcon, MoonIcon, SunIcon } from 'svelte-feather-icons';
  import { theme, applyTheme } from '$lib/theme';

  let display = false;
  const toggleSelector = () => display = !display;
  const handleClick = (themeValue: string) => () => {
    applyTheme(themeValue);
    toggleSelector();
  };
</script>

<div class="absolute top-2 right-2">
    <button on:click={toggleSelector} aria-label="Theme selector">
        {#if $theme === 'light'}
            <SunIcon/>
        {:else if $theme === 'dark'}
            <MoonIcon/>
        {:else}
            <MonitorIcon/>
        {/if}
    </button>

    <div class="{display ? '' : 'hidden'} z-10 absolute right-0 bg-white dark:bg-black p-2 border-2 rounded">
        <button on:click={handleClick('light')} class:text-blue-500={$theme === 'light'} class="flex p-0.5">
            <SunIcon class="mr-2"/>
            Light
        </button>
        <button on:click={handleClick('dark')} class:text-blue-500={$theme === 'dark'} class="flex p-0.5">
            <MoonIcon class="mr-2"/>
            Dark
        </button>
        <button on:click={handleClick('system')} class:text-blue-500={$theme === 'system'} class="flex p-0.5">
            <MonitorIcon class="mr-2"/>
            System
        </button>
    </div>
</div>