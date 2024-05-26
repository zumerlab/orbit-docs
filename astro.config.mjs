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
      }, {
        label: 'Installation',
        link: '/introduction/installation/'
      }, {
        label: 'Initial setup',
        link: '/introduction/settings/'
      }]
    }, {
      label: 'Layout',
      items: [{
        label: 'Radial grid',
        link: '/layout/'
      }]
    }, {
      label: 'Elements',
      items: [{
        label: 'orbit-zone',
        link: '/elements/orbit-zone/',
      }, {
        label: 'orbit',
        link: '/elements/orbit/'
      }, {
        label: 'satellite',
        link: '/elements/satellite/'
      }, {
        label: 'spoke',
        link: '/elements/spoke/'
      }, {
        label: 'segment',
        link: '/elements/segment/'
      },{
        label: 'o-sector',
        link: '/elements/sector/'
      }, {
        label: 'o-progress',
        link: '/elements/progress/'
      }, {
        label: 'o-label',
        link: '/elements/label/'
      }]
    },{
      label: 'Utilities',
      items: [{
        label: 'CSS utilities',
        link: '/utilities/utilities/',
      
      },{
        label: 'Capsule',
        link: '/utilities/capsule/',
        
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
    },{
      label: 'Examples',
      autogenerate: {
        directory: 'examples'
      }
    }]
  }), react()]
});