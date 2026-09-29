// Lokale Vorschau des vite-ssg Builds (dist/) – verhält sich wie deploy/nginx.conf:
// /seite → seite/index.html, /seite/ → 301 auf /seite, unbekannte Pfade → 404.html mit Status 404.
// (`vite preview` liefert bei /seite ohne Schrägstrich immer die Startseite aus.)
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = fileURLToPath(new URL('../dist', import.meta.url))
const port = Number(process.env.PORT) || 4173
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
}

if (!fs.existsSync(path.join(dist, 'index.html'))) {
  console.error('dist/ fehlt – zuerst `npm run build` ausführen.')
  process.exit(1)
}

http
  .createServer((req, res) => {
    const url = decodeURIComponent(req.url.split('?')[0])
    if (url !== '/' && url.endsWith('/')) {
      res.writeHead(301, { Location: url.slice(0, -1) })
      return res.end()
    }
    let file = path.join(dist, path.normalize(url))
    let status = 200
    if (!file.startsWith(dist)) file = ''
    else if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html')
    if (!file || !fs.existsSync(file)) {
      file = path.join(dist, '404.html')
      status = 404
    }
    res.writeHead(status, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' })
    fs.createReadStream(file).pipe(res)
  })
  .listen(port, () => console.log(`Vorschau des SSG-Builds: http://localhost:${port}`))
