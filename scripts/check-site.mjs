import { readFile, access } from "node:fs/promises";

const required = [
  "dist/index.html",
  "dist/styles.css",
  "dist/app.js",
  "dist/favicon.svg",
  "dist/assets/whole-system.png",
];

await Promise.all(required.map((file) => access(file)));

const [html, css, js] = await Promise.all([
  readFile("dist/index.html", "utf8"),
  readFile("dist/styles.css", "utf8"),
  readFile("dist/app.js", "utf8"),
]);

for (const reference of ["styles.css", "app.js", "favicon.svg"]) {
  if (!html.includes(reference)) throw new Error(`Missing HTML reference: ${reference}`);
}

for (const site of ["articial", "utuh", "patch", "intake", "nett", "proof", "relay", "rove", "span"]) {
  if (!js.includes(`${site}:`)) throw new Error(`Missing site configuration: ${site}`);
}

if (!css.includes("prefers-reduced-motion")) throw new Error("Missing reduced-motion support");
if (js.includes("UTUH /")) throw new Error("Product sites still use nested UTUH branding");
if (!js.includes("A focused operational product")) throw new Error("Missing restrained product-to-UTUH relationship");
console.log("Site checks passed.");
