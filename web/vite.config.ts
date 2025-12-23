import path from "path";
import { defineConfig, type PluginOption } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { paraglideVitePlugin } from "@inlang/paraglide-js";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "$lib": path.resolve('./src/lib/'),
      '@components': path.resolve('./src/components/'),
    },
  },
  plugins: [
    svelte(),
    tailwindcss() as PluginOption,
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/lib/paraglide",
      strategy: ["cookie", "baseLocale"]
    }) as PluginOption,
  ],
})

