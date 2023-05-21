import { writable as localStorageWritable } from 'svelte-local-storage-store';
import { get, writable } from 'svelte/store';
import { browser } from '$app/environment';

const defaultTheme = 'dark';

export const theme = localStorageWritable('theme', defaultTheme);

const detectSystemPreference = (e: MediaQueryListEvent) => applyTheme(e.matches ? 'dark' : 'light');

/**
 * Applies system preference theme and registers a listener for changes
 */
export const initTheme = async (): Promise<void> => {
	if (!browser) return;

	window
		.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', detectSystemPreference);

	if ('theme' in localStorage && theme) {
		try {
			const pref = get(theme);
			if (pref) {
				applyTheme(pref as string);
			}
		} catch (err) {
			console.error(err);
			localStorage.removeItem('theme');
		}
	} else {
		applyTheme('system');
	}
	initComplete.set(true);
};

export const initComplete = writable(false);

export const applyTheme = (newTheme: string): void => {
	if (!browser) return;

	const className =
		newTheme === 'system'
			? window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'
			: newTheme;

	document?.documentElement?.classList.remove('light', 'dark');
	document?.documentElement?.classList.add(className);
	theme.set(newTheme);
};
