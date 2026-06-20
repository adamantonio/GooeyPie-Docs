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
                Footer: './src/components/CustomFooter.astro',
            },
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/adamantonio/GooeyPie' }],
            customCss: ['./src/styles/style.css'],
            sidebar: [
                {
                    label: 'Getting started',
                    items: [
                        { label: 'Installation', slug: 'getting-started/installation' },
                        { label: 'Your First App', slug: 'getting-started/your-first-gooeypie-app' },
                        { label: 'Core Concepts', slug: 'getting-started/core-concepts' },
                    ],
                },
                {
                    label: 'Widgets',
                    items: [
                        { label: 'Gallery of all widgets', link: '/widget-gallery' },
                        { label: 'Button', link: '/widgets/button' },
                        { label: 'ButtonGroup', link: '/widgets/buttongroup' },
                        { label: 'Checkbox', link: '/widgets/checkbox' },
                        { label: 'DatePicker', link: '/widgets/datepicker' },
                        { label: 'Dropdown', link: '/widgets/dropdown' },
                        { label: 'Entry', link: '/widgets/entry' },
                        { label: 'ImageButton', link: '/widgets/imagebutton' },
                        { label: 'Image', link: '/widgets/image' },
                        { label: 'Label', link: '/widgets/label' },
                        { label: 'Listbox', link: '/widgets/listbox' },
                        { label: 'RadioGroup', link: '/widgets/radiogroup' },
                        { label: 'Secret', link: '/widgets/secret' },
                        { label: 'Slider', link: '/widgets/slider' },
                        { label: 'Switch', link: '/widgets/switch' },
                        { label: 'Table', link: '/widgets/table' },
                        { label: 'Textbox', link: '/widgets/textbox' },
                    ],
                },
                {
                    label: 'Events',
                    items: [
                        { label: 'About Events', slug: 'events/about-events' },
                        { label: 'Event Types', slug: 'events/event-types' },
                        { label: 'The Event Object', slug: 'events/the-event-object' },
                    ],
                },
                {
                    label: 'Layout',
                    items: [
                        { label: 'The Grid System', slug: 'layout/the-grid-system' },
                        { label: 'Container Widgets', slug: 'layout/container-widgets' },
                        { label: 'Tabbed Layouts', slug: 'layout/tabbed-layouts' },
                    ],
                },                
                {
                    label: 'Windows and Dialogs',
                    items: [
                        { label: 'The Main Window', slug: 'windows/the-main-window' },
                        { label: 'Additional Windows', slug: 'windows/additional-windows' },
                        { label: 'Popups', slug: 'windows/popups' },
                        { label: 'File and folder dialogs', slug: 'windows/file-folder-dialogs' },
                    ],
                },
                {
                    label: 'Utilities',
                    items: [
                        { label: 'The Timer Class', slug: 'utilities/timer' },
                    ],
                },
            ],
        }),
    ],
});

