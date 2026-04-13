// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'GooeyPie',
            // Head is for metadata and external CSS links
            head: [
                {
                    tag: 'link',
                    attrs: {
                        rel: 'stylesheet',
                        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
                    },
                },
            ],
			// Override the Head component
            components: {
                Head: './src/components/CustomHead.astro',
            },
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/adamantonio/GooeyPie' }],
            customCss: ['./src/styles/style.css'],
            sidebar: [
                {
                    label: 'Getting started',
                    items: [
                        { label: 'Example Guide', slug: 'guides/example' },
                    ],
                },
                {
                    label: 'Widgets',
                    items: [
                        { label: 'Gallery of all widgets', link: '/gallery' },
                        { label: 'Button', link: '/widgets/button' },
                        { label: 'Entry', link: '/widgets/entry' },
                        { label: 'ButtonGroup', link: '/widgets/buttongroup' },
                        { label: 'Checkbox', link: '/widgets/checkbox' },
                        { label: 'Dropdown', link: '/widgets/dropdown' },
                        { label: 'ImageButton', link: '/widgets/imagebutton' },
                        { label: 'Image', link: '/widgets/image' },
                        { label: 'Label', link: '/widgets/label' },
                        { label: 'Listbox', link: '/widgets/listbox' },
                        { label: 'RadioGroup', link: '/widgets/radiogroup' },
                        { label: 'Slider', link: '/widgets/slider' },
                        { label: 'Switch', link: '/widgets/switch' },
                        { label: 'Textbox', link: '/widgets/textbox' },
                    ],
                },
            ],
        }),
    ],
});

