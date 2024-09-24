import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@styles",
        replacement: fileURLToPath(new URL("./src/styles", import.meta.url)),
      },
      {
        find: "@components",
        replacement: fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
      },
      {
        find: "@pages",
        replacement: fileURLToPath(new URL("./src/pages", import.meta.url)),
      },
      {
        find: "@utils",
        replacement: fileURLToPath(new URL("./src/utils", import.meta.url)),
      },
      {
        find: "@composables",
        replacement: fileURLToPath(
          new URL("./src/composables", import.meta.url)
        ),
      },
      {
        find: "@css",
        replacement: fileURLToPath(new URL("./src/css", import.meta.url)),
      },
      {
        find: "@interface",
        replacement: fileURLToPath(new URL("./src/interface", import.meta.url)),
      },
      {
        find: "@enum",
        replacement: fileURLToPath(new URL("./src/enum", import.meta.url)),
      },
      {
        find: "@store",
        replacement: fileURLToPath(new URL("./src/store", import.meta.url)),
      },
    ],
  },
});
