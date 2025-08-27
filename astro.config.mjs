// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SmartsHub Documentation',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Smarts-Hub/' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.smartshub.dev/' },],
			sidebar: [
				{
					label: '0xBot',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: '0xbot/introduction' },
						{ label: 'Installation', slug: '0xbot/installation' },
						{ label: 'Module installation', slug: '0xbot/moduleinstallation' },
						{ label: 'Module development', items: [
							{ label: 'Module development', slug: '0xbot/module-development/development' },
							{ label: 'Module development guidelines', slug: '0xbot/module-development/guidelines' },
						] },
					],
				},
				{
					label: 'FancyGlow',
					items: [
						{ label: 'Introduction', slug: 'fancy-glow/introduction' },
						{ label: 'Installation', slug: 'fancy-glow/installation' },
						{ label: 'Utility', slug: 'fancy-glow/utility' },
						{ label: 'API', slug: 'fancy-glow/api' },
						{ label: 'FAQ', slug: 'fancy-glow/faq' }
					],
				}
			],
		}),
	],
});
