import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      Apis: fileURLToPath(new URL("./src/Apis", import.meta.url)),
      Assets: fileURLToPath(new URL("./src/Assets", import.meta.url)),
      Components: fileURLToPath(new URL("./src/Components", import.meta.url)),
      Constants: fileURLToPath(new URL("./src/Constants", import.meta.url)),
      Contexts: fileURLToPath(new URL("./src/Contexts", import.meta.url)),
      Hooks: fileURLToPath(new URL("./src/Hooks", import.meta.url)),
      Languages: fileURLToPath(new URL("./src/Languages", import.meta.url)),
      Pages: fileURLToPath(new URL("./src/Pages", import.meta.url)),
      Routes: fileURLToPath(new URL("./src/Routes", import.meta.url)),
      Store: fileURLToPath(new URL("./src/Store", import.meta.url)),
      Themes: fileURLToPath(new URL("./src/Themes", import.meta.url)),
      Types: fileURLToPath(new URL("./src/Types", import.meta.url)),
      Utils: fileURLToPath(new URL("./src/Utils", import.meta.url)),
    },
  },
});
