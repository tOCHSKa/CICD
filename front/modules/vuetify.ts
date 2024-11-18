import vuetify from 'vite-plugin-vuetify';
import { defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }));
    });
  },
});
