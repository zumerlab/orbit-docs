import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://zumerlab.github.io/orbit-docs',
  integrations: [starlight({
    expressiveCode: {
      themes: ['starlight-light'],
      useStarlightDarkModeSwitch: false
    },
    title: 'Orbit',
    disable404Route: true,
    logo: {
      light: './src/assets/light-orbit.svg',
      dark: './src/assets/dark-orbit.svg'
    },
    components: {
      Hero: './src/components/OrbitHero.astro',
      PageFrame: './src/components/OrbitPageFrame.astro'
    },
    social: {
      github: 'https://github.com/zumerlab/orbit-orbit'
    },
    sidebar: [{
      label: 'Getting started',
      items: [{
        label: 'About Orbit',
        link: '/introduction/',
        badge: 'New'
      }, {
        label: 'Installation',
        link: '/introduction/installation/'
      }]
    }, {
      label: 'Layout',
      items: [{
        label: 'CSS radial grid',
        link: '/layout/'
      }, {
        label: 'o-container',
        link: '/layout/container/'
      }, {
        label: 'o-orbit',
        link: '/layout/orbit/'
      }, {
        label: 'o-core',
        link: '/layout/core/'
      }]
    }, {
      label: 'Components',
      items: [{
        label: 'o-orbiter',
        link: '/components/orbiter/',
        badge: 'New'
      }, {
        label: 'o-sector',
        link: '/components/sector/'
      }, {
        label: 'o-progress',
        link: '/components/progress/'
      }, {
        label: 'o-svg-progress',
        link: '/components/svg-progress/'
      }, {
        label: 'o-svg-markers',
        link: '/components/svg-markers/'
      }, {
        label: 'o-label',
        link: '/components/label/'
      }, {
        label: 'o-tooltip',
        link: '/components/tooltip/'
      }]
    }, {
      label: 'Theming',
      items: [{
        label: 'Colors',
        link: '/theme/colors/',
        badge: 'New'
      }]
    }, {
      label: 'Examples',
      autogenerate: {
        directory: 'examples'
      }
    }]
  }), react()]
});