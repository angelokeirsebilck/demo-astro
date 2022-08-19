import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";
import netlify from "@astrojs/netlify/functions";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig((mode) => {
  const { PUBLIC_SITE, PUBLIC_LIVE_PREVIEW } = loadEnv(mode, process.cwd(), "");
  const settings = {
    integrations: [tailwind(), svelte(), image()],
    site: PUBLIC_SITE,
    build: {
      format: "file",
    },
    server: {
      port: 3002,
      host: true,
    },
    vite: {
      plugins: [],
    },
  }; // If Live Preview true do SSR

  if (PUBLIC_LIVE_PREVIEW === "true") {
    settings["output"] = "server";
    settings["adapter"] = netlify();
  } else {
    settings["output"] = "static";
  }

  return settings;
});
