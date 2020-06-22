import svelte from 'vite-plugin-svelte';


/** @type {import('vite').UserConfig} */
let config = {
  plugins: [
    svelte(),
  ],

  optimizeDeps: {
    include: [
      'vite-plugin-svelte/runtime/api',
      'vite-plugin-svelte/runtime/adapter',
    ],
  },
};

export default config;
