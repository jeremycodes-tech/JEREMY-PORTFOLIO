import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,        // 👈 Exposes it to the network
    port: 5173,        // 👈 Optional: keep default port
    strictPort: true,  // 👈 Optional: prevents fallback to another port
  },
});
