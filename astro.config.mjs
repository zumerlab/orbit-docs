import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from "@astrojs/react";
import svelte from '@astrojs/svelte';

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
  title: 'Orbit CSS radial UI composer',
  description: 'Get started building an amazing cool radial UI with Orbit CSS composer',

  disable404Route: true,
  lastUpdated: true,
  logo: {
    light: './src/assets/light-orbit.svg',
    dark: './src/assets/dark-orbit.svg'
  },
  components: {
    Hero: './src/components/OrbitHero.astro',
    PageFrame: './src/components/OrbitPageFrame.astro',
    Footer: './src/components/OrbitFooter.astro',
    Pagination: "./src/components/CustomPagination.astro"
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
      label: 'Steps to create a knob',
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
      label: 'o-arc',
      badge: 'updated',
      link: '/elements/arc/'
    }, {
      label: 'o-progress',
      badge: 'updated',
      link: '/elements/progress/'
    }, {
      label: 'capsule',
      link: '/elements/capsule/'
    },
  ]
  },{
    label: 'Tools',
    items: [{
      label: 'Visual Aids',
      link: '/tools/support/',
    
    },{
      label: 'Auto resize',
      link: '/tools/orbit-resize/',
    },{
      label: 'Colors',
      link: '/tools/colors/'
    },{
      label: 'Themes',
      badge: 'new',
      link: '/tools/themes/'
    }
  ]
  },{
    label: 'Integrations',
    badge: 'new',
    items: [{
      label: 'React',
      link: '/integrations/react/',
    },{
      label: 'Vue',
      link: '/integrations/vue/',
    },{
      label: 'Svelte',
      link: '/integrations/svelte/'
    }
  ]
  }, {
    label: 'Examples',
    items: [
    {
        label: 'Circular time',
        link: '/examples/circular_time/',
        badge: 'new',
    },
    {
      label: 'Progress bars',
      link: '/examples/progress/',
    },{
      label: 'Charts',
      link: '/examples/charts/',
    },{
      label: 'Gauges',
      link: '/examples/gauges/'
    },{
      label: 'Knobs',
      link: '/examples/knobs/'
    },{
      label: 'Pie menues',
      link: '/examples/piemenu/'
    },{
      label: 'Watch faces',
      link: '/examples/watches/'
    },{
      label: 'Scifi',
      link: '/examples/scifi/'
    },{
      label: 'Chemical structures',
      link: '/examples/chemical_structures/'
    },{
      label: 'Calendars & time planners',
      link: '/examples/calendar/'
    },{
      label: 'Mandalas',
      link: '/examples/mandalas/'
    },{
      label: 'Dashboards',
      link: '/examples/dashboard/'
    },{
      label: 'Abstract orbital map',
      link: '/examples/abstract_map/'
    }]
  }]
}),
react({
  include: ['**/react/*'],
}), 
svelte({
  include: ['**/svelte/*'],
})]
});