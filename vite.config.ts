import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/aq/',
  server: {
    open: true, // 启动时自动打开浏览器
  },
});
