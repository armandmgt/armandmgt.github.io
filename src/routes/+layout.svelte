<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { initTheme, initComplete as themeInitComplete } from '$lib/theme';
	import ThemeSelector from './ThemeSelector.svelte';

	if (browser) import('tw-elements');
	initTheme();

	const themeColor = 'white';
	const backgroundColor = 'white';
	const siteLogo = 'logo.png';
	const siteName = 'Portfolio - armandmgt';
	const description = 'Landing page showing the things I am proud of.';
	const authorName = 'Armand Mégrot';
	const twitterHandle = '@armandmgt';

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface Thing extends Record<string, string | number | Thing | Thing[]> {}
	const serializeSchema = (schema: Thing): string => {
		// prettier-ignore
		// eslint-disable-next-line no-useless-escape
		return "<script type=\"application/ld+json\">" + JSON.stringify(schema) + "<\/script>";
	};

	const schemaOrgWebPage = serializeSchema({
		'@context': 'http://schema.org',
		'@type': 'WebPage',
		url: '/',
		headline: 'Things I am proud of...',
		inLanguage: 'en',
		mainEntityOfPage: '/',
		description: description,
		name: siteName,
		author: {
			'@type': 'Person',
			name: authorName
		},
		copyrightHolder: {
			'@type': 'Person',
			name: authorName
		},
		copyrightYear: '2022',
		creator: {
			'@type': 'Person',
			name: authorName
		},
		publisher: {
			'@type': 'Person',
			name: authorName
		},
		datePublished: '2022-11-21',
		dateModified: new Date().toISOString(),
		image: {
			'@type': 'ImageObject',
			url: siteLogo
		}
	});

	// Initial breadcrumb list

	const itemListElement = [
		{
			'@type': 'ListItem',
			item: {
				'@id': '/',
				name: 'Homepage'
			},
			position: 1
		}
	];

	const breadcrumb = serializeSchema({
		'@context': 'http://schema.org',
		'@type': 'BreadcrumbList',
		description: 'Breadcrumbs list',
		name: 'Breadcrumbs',
		itemListElement
	});
</script>

<svelte:head>
	<title>{siteName}</title>
	<link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
	<link rel="shortcut icon" href="favicon.ico" />
	<meta name="color-scheme" content="dark light" />
	<meta name="theme-color" content={themeColor} />
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="white">
	<meta name="theme-color" media="(prefers-color-scheme: dark)"  content="black">
	<meta name="background-color" content="{backgroundColor}">
	<meta name="background-color" media="(prefers-color-scheme: light)" content="white">
	<meta name="background-color" media="(prefers-color-scheme: dark)"  content="black">

	<meta name="msapplication-TileColor" content={backgroundColor} />
	<meta name="msapplication-config" content="browserconfig.xml" />
	<meta name="description" content={description} />
	<meta name="image" content={siteLogo} />

	<meta property="og:locale" content="en" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content="Home" />
	<meta property="og:type" content="website" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={siteLogo} />
	<meta property="og:image:alt" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content={twitterHandle} />
	<meta name="twitter:title" content={siteName} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={siteLogo} />
	<meta name="twitter:image:alt" content={description} />

	{@html schemaOrgWebPage}
	{@html breadcrumb}
</svelte:head>

{#if $themeInitComplete}
	<div class="relative h-screen bg-white dark:bg-black dark:text-white">
		<ThemeSelector />

		<slot />
	</div>
{/if}
