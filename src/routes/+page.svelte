<script lang="ts">
  import { BookIcon, FilterIcon, GithubIcon, MessageCircleIcon, RssIcon } from "svelte-feather-icons";
  import RocketScienceHero from "$lib/assets/images/RocketScienceHero.jpg";
  import ExposeHero from "../lib/assets/images/ExposeHero.jpg";
  import MastodonPersoHero from "$lib/assets/images/MastodonPersoHero.jpg";
  import PortfolioHero from "$lib/assets/images/PortfolioHero.jpg";
  import type { SvelteComponent } from "svelte";

  interface Project {
    heroImg: string;
    title: string;
    icon?: SvelteComponent;
    description: string;
    brightImg?: boolean;
  }

  const projects: Project[] = [
    {
      heroImg: RocketScienceHero,
      title: "Rocket Science",
      icon: FilterIcon,
      description: "Experimentation project using a sport API. The goal is to experiment with the Dynamic Island & LiveActivities API on iOS.",
      link: "https://github.com/armandmgt/rocket-science"
    },
    {
      heroImg: ExposeHero,
      title: "Expose",
      icon: RssIcon,
      description: "Implementing a reverse proxy to expose local web applications. The local proxy also exposes a web dashboard to inspect and replay requests.",
      link: "https://github.com/armandmgt/expose"
    },
    {
      heroImg: MastodonPersoHero,
      title: "Self-hosted mastodon",
      icon: MessageCircleIcon,
      description: "I am self-hosting a mastodon personal instance. The purpose was to avoid lags and also to understand how it works.",
      link: "https://mastodon.armandmgt.fr",
      brightImg: true
    },
    {
      heroImg: PortfolioHero,
      title: "This portfolio",
      icon: BookIcon,
      description: "Showing off the few side-projects I am happy about. I am not a good designer so please be kind :)",
      link: "https://github.com/armandmgt/armandmgt.github.io"
    }
  ];

  let descShown = false;
  const toggleDesc = () => descShown = !descShown;
</script>

<nav>
  <button
    class="absolute z-10 bottom-10 right-10 bg-black dark:bg-white w-24 h-24 hover:scale-125 transition-all rounded-full text-xl font-light text-transparent hover:text-white dark:hover:text-black"
    on:click={toggleDesc}
  >
    {#if descShown}HIDE{:else}SHOW{/if}
  </button>
</nav>

<main class="p-4 h-full">
  <h1 class="mb-10">Things I did</h1>
  <div class="flex grow overflow-x-auto">
    <div class="flex">
      {#each projects as project}
        <div class="relative w-96 flex flex-col overflow-hidden m-1 last:mr-32">
          <h3>
            <a href={project.link}>
              {project.title}
              <svelte:component this={project.icon} class="inline" />
            </a>
          </h3>
          <img src={project.heroImg} alt={project.title} class="grow object-cover" />
          <p
            class="absolute p-3 text-{project.brightImg ? 'black' : 'white'} bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 transition-all overflow-hidden"
            style:bottom={descShown ? '0' : '-100px'}
          >
            {project.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
  <footer>
    <a href="https://github.com/armandmgt/armandmgt.github.io" class="text-xs">
      <GithubIcon size="12" class="inline mr-1" />
      See on Github
    </a>
  </footer>
</main>
