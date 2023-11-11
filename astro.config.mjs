import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  site: 'https://zumerlab.github.io',
  base: '/docs',
  integrations: [
    starlight({
      title: 'Orbit',
      logo: {
        light: './src/assets/light-orbit.svg',
        dark: './src/assets/dark-orbit.svg',
      },
      components: {
        Hero: './src/components/OrbitHero.astro',
      },
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Getting started',
          autogenerate: {
            directory: 'introduction',
          },
        },
        {
          label: 'Layout',
          autogenerate: {
            directory: 'layout',
          },
        },
        {
          label: 'Components',
          autogenerate: {
            directory: 'components',
          },
        },
        {
          label: 'Examples',
          autogenerate: {
            directory: 'examples',
          },
        },
      ],
    }),
  ],
})
