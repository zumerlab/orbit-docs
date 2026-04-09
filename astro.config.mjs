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
    {
      tag: 'link',
      attrs: {
        rel: 'author',
        type: 'text/plain',
        href: '/orbit-docs/llms.txt',
      }
    },
    {
      tag: 'link',
      attrs: {
        rel: 'author',
        type: 'text/plain',
        href: '/orbit-docs/llms-full.txt',
      }
    },
    {
      tag: 'script',
      attrs: {
        defer: true,
        src: 'https://cloud.umami.is/script.js',
        "data-website-id": '7ec718e8-f0c5-4abb-8f4f-144f57f61937'
      }
    },
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
      link: '/elements/arc/'
    }, {
      label: 'o-progress',
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
      link: '/tools/themes/'
    }
  ]
  },{
    label: 'Integrations',
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
      label: 'Circular timer',
      link: '/examples/circular_time/',
    },{
      label: 'Gauges',
      collapsed: true,
      items: [
        { label: 'Overview', link: '/examples/gauges/' },
        { label: '180° gauge', link: '/examples/gauges/180-degree-gauge/' },
        { label: '240° gauge', link: '/examples/gauges/240-degree-gauge/' },
        { label: 'Fuel gauge', link: '/examples/gauges/fuel-gauge/' },
      ]
    },{
      label: 'Knobs',
      collapsed: true,
      items: [
        { label: 'Overview', link: '/examples/knobs/' },
        { label: 'Knob with progress bar', link: '/examples/knobs/knob-with-progress-bar/' },
        { label: 'LED knob', link: '/examples/knobs/led-knob/' },
      ]
    },{
      label: 'Progress bars',
      collapsed: true,
      items: [
        { label: 'Overview', link: '/examples/progress/' },
        { label: 'Dashed circular progress bar', link: '/examples/progress/dashed-circular-progress-bar/' },
        { label: 'Circular progress with background', link: '/examples/progress/circular-progress-with-background/' },
        { label: 'Circular progress with handle', link: '/examples/progress/circular-progress-with-handle/' },
        { label: 'Stacked circular progress bars', link: '/examples/progress/stacked-circular-progress-bars/' },
      ]
    },{
      label: 'Charts',
      collapsed: true,
      items: [
        { label: 'Overview', link: '/examples/charts/' },
        { label: 'Donut chart', link: '/examples/charts/donut-chart/' },
        { label: 'Pie chart', link: '/examples/charts/pie-chart/' },
        { label: 'Sunburst chart', link: '/examples/charts/sunburst-chart/' },
      ]
    },{
      label: 'Watch faces',
      collapsed: true,
      items: [
        { label: 'Overview', link: '/examples/watches/' },
        { label: 'Minimalist analog clock', link: '/examples/watches/minimalist-analog-clock/' },
        { label: 'Chronograph watch face', link: '/examples/watches/chronograph-watch-face/' },
        { label: 'Roman numeral clock face', link: '/examples/watches/roman-numeral-clock-face/' },
        { label: 'Smartwatch face', link: '/examples/watches/smartwatch-face/' },
      ]
    },{
      label: 'Mandalas',
      collapsed: true,
      items: [
        { label: 'Overview', link: '/examples/mandalas/' },
        { label: 'Geometric square mandala', link: '/examples/mandalas/geometric-square-mandala/' },
        { label: 'Radial symmetry mandala', link: '/examples/mandalas/radial-symmetry-mandala/' },
      ]
    },{
      label: 'Calendars & time planners',
      collapsed: true,
      items: [
        { label: 'Overview', link: '/examples/calendar/' },
        { label: 'Circular year calendar', link: '/examples/calendar/circular-year-calendar/' },
      ]
    },{
      label: 'Pie menues',
      link: '/examples/piemenu/'
    },{
      label: 'Scifi',
      link: '/examples/scifi/'
    },{
      label: 'Chemical structures',
      link: '/examples/chemical_structures/'
    },{
      label: 'Dashboards',
      link: '/examples/dashboard/'
    },{
      label: 'Abstract orbital map',
      link: '/examples/abstract_map/'
    }]
  }, {
    label: 'Use cases',
    items: [{
      label: 'Dashboards',
      link: '/use-cases/dashboards/'
    },{
      label: 'IoT and hardware UI',
      link: '/use-cases/iot-and-hardware-ui/'
    },{
      label: 'Audio app UI',
      link: '/use-cases/audio-app-ui/'
    },{
      label: 'Fitness and health apps',
      link: '/use-cases/fitness-and-health-apps/'
    },{
      label: 'Sci-fi game UIs',
      link: '/use-cases/sci-fi-game-uis/'
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
