import { defineConfigWithTheme } from "vitepress";
import type { ThemeConfig } from '@hempworks/pilgrim'
import config from '@hempworks/pilgrim/config'

export default defineConfigWithTheme<ThemeConfig>({
    extends: config,
    title: 'Envoyer',
    description: 'Zero Downtime PHP Deployments',
    base: '/',
    cleanUrls: false,
    srcDir: 'src',

    head: [
        ['link', {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: 'https://envoyer.io/img/favicons/apple-touch-icon.png',
        }],
        ['link', {
            rel: 'icon',
            sizes: '16x16',
            type: 'image/png',
            href: 'https://envoyer.io/img/favicons/favicon-16x16.png',
        }],
        ['link', {
            rel: 'icon',
            sizes: '32x32',
            type: 'image/png',
            href: 'https://envoyer.io/img/favicons/favicon-32x32.png',
        }],
        ['link', {
            rel: 'mask-icon',
            href: 'https://envoyer.io/img/favicons/safari-pinned-tab.svg',
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#FA342C',
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: 'envoyer.io/img/favicons/mstile-144x144.png',
        }],
        // ['meta', {
        //     property: 'og:image',
        //     content: 'https://envoyer.io/social-share.png',
        // }],
        ['meta', {
            property: 'twitter:card',
            content: 'summary_large_image',
        }],
        ['meta', {
            property: 'twitter:creator',
            content: '@laravelphp',
        }],
        // ['meta', {
        //     property: 'twitter:image',
        //     content: 'https://envoyer.io/social-share.png',
        // }],
    ],

    themeConfig: {
        logo: {
            light: '/logo.svg',
            dark: '/logo-dark.svg',
        },
        nav: [
            { text: 'Envoyer', link: 'https://envoyer.io' },
            { text: 'Video Tutorials', link: 'https://laracasts.com/series/envoyer' },
        ],
        sidebar: [
            {
                text: "Getting Started",
                items: [
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'Quick Start', link: '/quick-start'},
                ],
            },
            {
                text: "Accounts",
                items: [
                    { text: 'Your Account', link: '/accounts/your-account' },
                    { text: 'Source Control', link: '/accounts/source-control' },
                ],
            },
            {
                text: "Projects",
                items: [
                    { text: 'Management', link: '/projects/management' },
                    { text: 'Servers', link: '/projects/servers' },
                    { text: 'Deployment Hooks', link: '/projects/deployment-hooks' },
                    { text: 'Heartbeats', link: '/projects/heartbeats' },
                    { text: 'Notifications', link: '/projects/notifications' },
                    { text: 'Collaborators', link: '/projects/collaborators' },
                ],
            },
        ],
        search: {
            provider: 'local',
            options: {
                placeholder: 'Search Envoyer Docs...',
            },
        }
    },
    vite: {
        server: {
            host: true,
            fs: {
                // for when developing with locally linked theme
                allow: ['../..']
            }
        },
    }
})
