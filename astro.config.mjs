import { defineConfig } from "astro/config";
// https://astro.build/config

import react from "@astrojs/react";

export default
/** @type {import('astro').AstroUserConfig} */
defineConfig({
  integrations: [react()],
});