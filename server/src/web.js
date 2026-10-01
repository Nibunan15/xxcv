// Serves the approved Cybernaut website (web/) exactly as designed, with clean URLs.
import express from 'express';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const WEB = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../web');
const SPECIAL = { 'Home': '', 'About Company': 'about', 'Cybernaut SaaS': 'saas' };
const PARTIALS = new Set(['Navbar', 'Footer', 'Course Card', 'CyberMascot', 'EventOrbit', 'TeamScene']);
const slug = (n) => (n in SPECIAL ? SPECIAL[n] : n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));

export const routes = fs.readdirSync(WEB)
  .filter((f) => f.endsWith('.dc.html') && !PARTIALS.has(f.replace('.dc.html', '')))
  .map((f) => ({ file: f, url: '/' + slug(f.replace('.dc.html', '')) }));

export function mountWeb(app) {
  const r = express.Router();
  for (const { file, url } of routes) r.get(url === '/' ? '/' : [url, url + '/'], (_q, res) => res.sendFile(path.join(WEB, file)));
  r.get('/sitemap.json', (_q, res) => res.json(routes));
  r.use(express.static(WEB, {
    extensions: ['html'],
    setHeaders(res, p) {
      if (/\/assets\//.test(p) || /\.(mp4|webp|png|jpe?g|woff2?|ttf)$/.test(p)) res.setHeader('Cache-Control', 'public, max-age=2592000');
      else if (p.endsWith('.js')) res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
      else res.setHeader('Cache-Control', 'no-cache');
    }
  }));
  r.use((req, res, next) => (req.method === 'GET' && !req.path.startsWith('/api') ? res.status(404).sendFile(path.join(WEB, 'Coming Soon.dc.html')) : next()));
  app.use(r);
}
