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
			title: 'Self-host mastodon',
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
		<h1 class="header pb-10 inline-block font-bold">
			<span
				class="animated gradient-1
							bg-gradient-to-r text-transparent bg-clip-text
							from-blue-500 to-cyan-500"
			>
				Things
			</span>
			<span
				class="animated gradient-2
							bg-gradient-to-r text-transparent bg-clip-text
              from-fuchsia-800 to-pink-600"
			>
				I am
			</span>
			<span
				class="animated gradient-3
							bg-gradient-to-r text-transparent bg-clip-text
              from-orange-500 to-amber-300"
			>
				proud of&hellip;
			</span>
		</h1>
	</div>
	<div class="max-h-full pb-3 flex overflow-x-scroll">
		{#each projects as project}
			<div class="relative flex flex-col shrink-0 w-11/12 md:w-1/3 m-1 overflow-hidden">
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
		<div class="shrink-0 m-1 md:w-32" />
	</div>
	<footer class="mt-24 md:mt-0">
		<a href="https://github.com/armandmgt/armandmgt.github.io" class="text-xs">
			<GithubIcon size="12" class="inline mr-1" />
			This site is on Github
		</a>
	</footer>
</main>

<style lang="scss">
	@keyframes animated-gradient-1 {
		0%,
		16.667%,
		100% {
			opacity: 1;
		}
		33.333%,
		83.333% {
			opacity: 0;
		}
	}

	@keyframes animated-gradient-2 {
		0%,
		100% {
			opacity: 0;
		}
		33.333%,
		50% {
			opacity: 1;
		}
		16.667%,
		66.667% {
			opacity: 0;
		}
	}

	@keyframes animated-gradient-3 {
		0%,
		50%,
		100% {
			opacity: 0;
		}
		66.6%,
		83.3% {
			opacity: 1;
		}
	}

	.header {
		&::before {
			content: 'Things I am proud of…';
			position: absolute;
		}
	}

	.animated.gradient-1 {
		animation: animated-gradient-1 8s infinite;
	}

	.animated.gradient-2 {
		animation: animated-gradient-2 8s infinite;
	}

	.animated.gradient-3 {
		animation: animated-gradient-3 8s infinite;
	}
</style>
