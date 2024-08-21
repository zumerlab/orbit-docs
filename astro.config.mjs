import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://zumerlab.github.io/orbit-docs',
  base: 'orbit-docs',
  integrations: [starlight({
    head: [
      // Example: add Fathom analytics script tag.
      {
        tag: 'script',
        attrs: {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-XL52CBETDH',
          
        }
      },
      {
        tag: 'script',
        content: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XL52CBETDH');`
      },
    ],
    expressiveCode: {
      themes: ['github-light'],
      useStarlightDarkModeSwitch: false
    },
    title: 'Orbit CSS Radial Framework',
    description: 'Get started building an amazing cool radial UI with Orbit CSS Radial Framework',

    disable404Route: true,
    logo: {
      light: './src/assets/light-orbit.svg',
      dark: './src/assets/dark-orbit.svg'
    },
    components: {
      Hero: './src/components/OrbitHero.astro',
      PageFrame: './src/components/OrbitPageFrame.astro',
      Footer: './src/components/OrbitFooter.astro'
    },
    social: {
      github: 'https://github.com/zumerlab/orbit',
      telegram: 'https://t.me/ZumlyCommunity'
    },
    editLink: {
      baseUrl: 'https://github.com/zumerlab/orbit-docs/edit/main/',
    },
    sidebar: [{
      label: 'Getting started',
      items: [{
        label: 'About Orbit',
        link: '/introduction/',
      }, {
        label: 'Installation',
        link: '/introduction/installation/'
      }]
    }, {
      label: 'Guide',
      items: [{
        label: 'How does Orbit work?',
        link: '/guide/'
      }]
    }, {
      label: 'Elements',
      items: [{
        label: 'bigbang',
        link: '/elements/bigbang/',
      },
        {
        label: 'gravity-spot',
        link: '/elements/gravity-spot/',
      }, {
        label: 'orbit',
        link: '/elements/orbit/'
      }, {
        label: 'satellite',
        link: '/elements/satellite/'
      }, {
        label: 'vector',
        link: '/elements/vector/'
      }, {
        label: 'side',
        link: '/elements/side/'
      },{
        label: 'o-slice',
        link: '/elements/slice/'
      }, {
        label: 'o-progress',
        link: '/elements/progress/'
      }, {
        label: 'o-text',
        link: '/elements/text/'
      }, {
        label: 'capsule',
        link: '/elements/capsule/'
      }]
    },{
      label: 'Tools',
      items: [{
        label: 'Visual Aids',
        link: '/tools/support/',
      
      },{
        label: 'Auto resize',
        link: '/tools/orbit-resize/',
       
      }]
    }, {
      label: 'Examples',
      link: '/examples/',
      
    }]
  }), 
  react()]
});