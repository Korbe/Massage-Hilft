import fs from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

const SITE = 'https://www.massage-hilft.at'
const outDir = fileURLToPath(new URL('./dist', import.meta.url))

// Wird in includedRoutes befüllt und in onFinished für die sitemap.xml genutzt
const sitemapPaths = []

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    // Port per Umgebungsvariable PORT überschreibbar (z. B. vom Preview-Tool), sonst 5173
    port: Number(process.env.PORT) || 5173,
  },
  define: {
    // HYDRATION_DEBUG=1 npm run build → genaue Hydration-Warnungen auch im Produktions-Build
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: process.env.HYDRATION_DEBUG === '1',
  },
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  ssgOptions: {
    entry: 'src/main.js',
    dirStyle: 'nested', // /heilmassage → dist/heilmassage/index.html
    formatting: 'none',
    script: 'async',
    beastiesOptions: false,
    // alle statischen Routen + /404 (Catch-all-Route → eigene 404-Seite)
    includedRoutes(paths, routes) {
      const staticPaths = paths.filter((p) => !p.includes(':'))
      const noindex = new Set(routes.filter((r) => r.meta?.noindex).map((r) => r.path))
      sitemapPaths.splice(0, Infinity, ...staticPaths.filter((p) => !noindex.has(p)))
      return [...staticPaths, '/404']
    },
    // /404 als dist/404.html statt dist/404/index.html (für den Webserver als Fehlerseite)
    htmlFileName: (file) => (file.replace(/\\/g, '/').replace(/^\//, '') === '404/index.html' ? '404.html' : undefined),
    onFinished() {
      const today = new Date().toISOString().slice(0, 10)
      const urls = sitemapPaths.map(
        (p) => `  <url>\n    <loc>${SITE}${p}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${p === '/' ? '1.0' : '0.8'}</priority>\n  </url>`,
      )
      fs.writeFileSync(
        `${outDir}/sitemap.xml`,
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
      )
      fs.writeFileSync(`${outDir}/robots.txt`, `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)
      console.log(`sitemap.xml (${urls.length} URLs) und robots.txt erstellt`)
    },
  },
})
