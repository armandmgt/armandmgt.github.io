<script lang="ts">
	import {
		BookIcon,
		FilterIcon,
		GithubIcon,
		MessageCircleIcon,
		RssIcon
	} from 'svelte-feather-icons';
	import RocketScienceHero from '$lib/assets/images/RocketScienceHero.jpg?w=768&webp';
	import ExposeHero from '$lib/assets/images/ExposeHero.jpg?w=768&webp';
	import MastodonPersoHero from '$lib/assets/images/MastodonPersoHero.jpg?w=768&webp';
	import PortfolioHero from '$lib/assets/images/PortfolioHero.jpg?w=768&webp';
	import type { SvelteComponentTyped } from 'svelte';

	interface Project {
		heroImg: string;
		title: string;
		icon: SvelteComponentTyped;
		description: string;
		link: string;
		descColor: 'black' | 'white';
	}

	const projects: Project[] = [
		{
			heroImg: RocketScienceHero,
			title: 'Rocket Science',
			icon: FilterIcon,
			description:
				'Experimentation project using a sport API. The goal is to experiment with the Dynamic Island & LiveActivities API on iOS.',
			link: 'https://github.com/armandmgt/rocket-science',
			descColor: 'white'
		},
		{
			heroImg: ExposeHero,
			title: 'Expose',
			icon: RssIcon,
			description:
				'Implementing a reverse proxy to expose local web applications. The local proxy also exposes a web dashboard to inspect and replay requests.',
			link: 'https://github.com/armandmgt/expose',
			descColor: 'white'
		},
		{
			heroImg: MastodonPersoHero,
			title: 'Self-hosted mastodon',
			icon: MessageCircleIcon,
			description:
				'I am self-hosting a mastodon personal instance. The purpose was to avoid lags and also to understand how it works.',
			link: 'https://mastodon.armandmgt.fr',
			descColor: 'black'
		},
		{
			heroImg: PortfolioHero,
			title: 'This portfolio',
			icon: BookIcon,
			description:
				'Showing off the few side-projects I am happy about. I am not a good designer so please be kind :)',
			link: 'https://github.com/armandmgt/armandmgt.github.io',
			descColor: 'white'
		}
	];

	let descShown = false;
	const toggleDesc = () => (descShown = !descShown);

	$: buttonClasses = descShown ? '' : 'hover:bg-gradient-to-br';
	$: buttonSpanClasses = descShown ? 'hover:bg-gradient-to-r bg-clip-text text-transparent' : '';
</script>

<nav>
	<button
		class="absolute z-10 bottom-10 right-10
          w-24 h-24 rounded-full overflow-hidden
          text-transparent text-xl font-bold
          bg-black dark:bg-white
          {buttonClasses}
          hover:scale-125 hover:text-white
          from-fuchsia-800 to-orange-500 dark:from-cyan-500 dark:to-blue-500
          transition-all"
		on:click={toggleDesc}
	>
		<span
			class="{buttonSpanClasses}
            from-fuchsia-800 to-orange-500 dark:from-cyan-500 dark:to-blue-500
            inline-block w-full h-full
            grid place-items-center"
		>
			<span
				>{#if descShown}HIDE{:else}SHOW{/if}</span
			>
		</span>
	</button>
</nav>

<main class="flex flex-col p-4 max-h-full">
	<div>
		<h1 class="pb-10 inline-block font-bold">
			Things I am
			<span
				class="bg-gradient-to-r text-transparent bg-clip-text
              from-fuchsia-800 to-orange-500 dark:from-cyan-500 dark:to-blue-500"
			>
				proud
			</span>
			of&hellip;
		</h1>
	</div>
	<div class="max-h-full pb-3 flex overflow-x-scroll">
		{#each projects as project}
			<div class="relative flex flex-col shrink-0 w-1/3 m-1 overflow-hidden">
				<h2>
					<a href={project.link}>
						{project.title}
						<svelte:component this={project.icon} class="inline" />
					</a>
				</h2>
				<div class="flex-grow overflow-hidden">
					<img
						src={project.heroImg}
						alt={project.title}
						class="h-full w-full object-cover transition-all duration-700 hover:scale-105"
					/>
				</div>
				<p
					class="absolute bottom-0 text-{project.descColor} border-{project.descColor} p-3 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border-t transition-all overflow-hidden"
					style:transform={descShown ? 'unset' : 'translate(0, 100%)'}
				>
					{project.description}
				</p>
			</div>
		{/each}
		<div class="shrink-0 m-1 w-32" />
	</div>
	<footer>
		<a href="https://github.com/armandmgt/armandmgt.github.io" class="text-xs">
			<GithubIcon size="12" class="inline mr-1" />
			This site is on Github
		</a>
	</footer>
</main>
