import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(rootDir, "dist");
const ssrDir = path.join(rootDir, "dist-ssr");

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")));
const appHtml = render();

const indexPath = path.join(distDir, "index.html");
const original = fs.readFileSync(indexPath, "utf8");
const marker = '<div id="root"></div>';
if (!original.includes(marker)) {
  throw new Error(`prerender.mjs: expected to find ${JSON.stringify(marker)} in dist/index.html`);
}
fs.writeFileSync(indexPath, original.replace(marker, `<div id="root">${appHtml}</div>`));

fs.rmSync(ssrDir, { recursive: true, force: true });

console.log("Prerendered homepage content injected into dist/index.html");
