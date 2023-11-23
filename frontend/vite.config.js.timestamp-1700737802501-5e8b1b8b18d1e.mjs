// vite.config.js
import { defineConfig } from "file:///C:/Users/User/OneDrive/Skrivbord/ITHS%2022-24/Software%20lifecycle/Labb3/Labb3/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/User/OneDrive/Skrivbord/ITHS%2022-24/Software%20lifecycle/Labb3/Labb3/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    // VitePWA({
    //   manifest: {
    //     background_color: "#d8d8d857;",
    //     display: "standalone",
    //     icons: [
    //       {
    //         purpose: "any",
    //         sizes: "192x192",
    //         src: "manifest-icon-192.maskable.png",
    //         type: "image/png",
    //       },
    //       {
    //         purpose: "maskable",
    //         sizes: "192x192",
    //         src: "manifest-icon-192.maskable.png",
    //         type: "image/png",
    //       },
    //       {
    //         purpose: "any",
    //         sizes: "512x512",
    //         src: "manifest-icon-512.maskable.png",
    //         type: "image/png",
    //       },
    //       {
    //         purpose: "maskable",
    //         sizes: "512x512",
    //         src: "manifest-icon-512.maskable.png",
    //         type: "image/png",
    //       },
    //     ],
    //     name: "Journal Jive",
    //     short_name: "Journal",
    //     start_url: "http://localhost:3000/",
    //   },
    //   registerType: "autoUpdate",
    //   workbox: {
    //     globPatterns: ["assets/**", "index.html", "manifest.webmanifest"],
    //   },
    //   // runtimeCaching: [
    //   //   {
    //   //     urlPattern: "http://localhost:3000/blog",
    //   //     handler: "NetworkFirst",
    //   //   },
    //   // ],
    // }),
    react()
  ],
  server: {
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXE9uZURyaXZlXFxcXFNrcml2Ym9yZFxcXFxJVEhTIDIyLTI0XFxcXFNvZnR3YXJlIGxpZmVjeWNsZVxcXFxMYWJiM1xcXFxMYWJiM1xcXFxmcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxPbmVEcml2ZVxcXFxTa3JpdmJvcmRcXFxcSVRIUyAyMi0yNFxcXFxTb2Z0d2FyZSBsaWZlY3ljbGVcXFxcTGFiYjNcXFxcTGFiYjNcXFxcZnJvbnRlbmRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1VzZXIvT25lRHJpdmUvU2tyaXZib3JkL0lUSFMlMjAyMi0yNC9Tb2Z0d2FyZSUyMGxpZmVjeWNsZS9MYWJiMy9MYWJiMy9mcm9udGVuZC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbi8vIGltcG9ydCB7IFZpdGVQV0EgfSBmcm9tIFwidml0ZS1wbHVnaW4tcHdhXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgLy8gVml0ZVBXQSh7XHJcbiAgICAvLyAgIG1hbmlmZXN0OiB7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZF9jb2xvcjogXCIjZDhkOGQ4NTc7XCIsXHJcbiAgICAvLyAgICAgZGlzcGxheTogXCJzdGFuZGFsb25lXCIsXHJcbiAgICAvLyAgICAgaWNvbnM6IFtcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJhbnlcIixcclxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxyXG4gICAgLy8gICAgICAgICBzcmM6IFwibWFuaWZlc3QtaWNvbi0xOTIubWFza2FibGUucG5nXCIsXHJcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgICAge1xyXG4gICAgLy8gICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXHJcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgIC8vICAgICAgICAgc3JjOiBcIm1hbmlmZXN0LWljb24tMTkyLm1hc2thYmxlLnBuZ1wiLFxyXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJhbnlcIixcclxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxyXG4gICAgLy8gICAgICAgICBzcmM6IFwibWFuaWZlc3QtaWNvbi01MTIubWFza2FibGUucG5nXCIsXHJcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgICAge1xyXG4gICAgLy8gICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXHJcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcclxuICAgIC8vICAgICAgICAgc3JjOiBcIm1hbmlmZXN0LWljb24tNTEyLm1hc2thYmxlLnBuZ1wiLFxyXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICBdLFxyXG4gICAgLy8gICAgIG5hbWU6IFwiSm91cm5hbCBKaXZlXCIsXHJcbiAgICAvLyAgICAgc2hvcnRfbmFtZTogXCJKb3VybmFsXCIsXHJcbiAgICAvLyAgICAgc3RhcnRfdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIixcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcclxuICAgIC8vICAgd29ya2JveDoge1xyXG4gICAgLy8gICAgIGdsb2JQYXR0ZXJuczogW1wiYXNzZXRzLyoqXCIsIFwiaW5kZXguaHRtbFwiLCBcIm1hbmlmZXN0LndlYm1hbmlmZXN0XCJdLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICAvLyBydW50aW1lQ2FjaGluZzogW1xyXG4gICAgLy8gICAvLyAgIHtcclxuICAgIC8vICAgLy8gICAgIHVybFBhdHRlcm46IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2Jsb2dcIixcclxuICAgIC8vICAgLy8gICAgIGhhbmRsZXI6IFwiTmV0d29ya0ZpcnN0XCIsXHJcbiAgICAvLyAgIC8vICAgfSxcclxuICAgIC8vICAgLy8gXSxcclxuICAgIC8vIH0pLFxyXG4gICAgcmVhY3QoKSxcclxuICBdLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgcHJveHk6IHtcclxuICAgICAgXCIvYXBpXCI6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1jLFNBQVMsb0JBQW9CO0FBRWhlLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE4Q1AsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
