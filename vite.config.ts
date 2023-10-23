import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      Components: fileURLToPath(new URL("./src/Components", import.meta.url)),
      Pages: fileURLToPath(new URL("./src/Pages", import.meta.url)),
      Themes: fileURLToPath(new URL("./src/Themes", import.meta.url)),
      Store: fileURLToPath(new URL("./src/Store", import.meta.url)),
    },
  },
});
