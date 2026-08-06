const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const sites = [
  { name: "greenply", url: "https://www.greenply.com" },
  { name: "centuryply", url: "https://www.centuryply.com" },
  { name: "merino", url: "https://www.merinolaminates.com" },
  { name: "greenlam", url: "https://www.greenlam.com" },
  { name: "hettich", url: "https://www.hettich.com" },
  { name: "actiontesa", url: "https://www.actiontesa.com" },
  { name: "hafele", url: "https://www.hafeleindia.com" },
  { name: "ebco", url: "https://www.ebco.in" },
  { name: "asianpaints", url: "https://www.asianpaints.com" },
  { name: "saintgobain", url: "https://www.saint-gobain.co.in" }
];

function fetchUrl(siteUrl, redirects = 0) {
  return new Promise((resolve) => {
    if (redirects > 5) return resolve({ error: "too many redirects" });
    const mod = siteUrl.startsWith("https") ? https : http;
    const req = mod.get(
      siteUrl,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        },
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          let loc = res.headers.location;
          if (!loc.startsWith("http")) {
            const u = new URL(siteUrl);
            loc = u.origin + loc;
          }
          return fetchUrl(loc, redirects + 1).then(resolve);
        }
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body: data, finalUrl: siteUrl }));
      }
    );
    req.on("error", (err) => resolve({ error: err.message }));
    req.setTimeout(8000, () => {
      req.destroy();
      resolve({ error: "timeout" });
    });
  });
}

async function run() {
  for (const s of sites) {
    console.log(`Fetching ${s.name} (${s.url})...`);
    const res = await fetchUrl(s.url);
    if (res.body) {
      const ogMatch =
        res.body.match(/property=["']og:image["']\s+content=["']([^"']+)["']/i) ||
        res.body.match(/content=["']([^"']+)["']\s+property=["']og:image["']/i);
      
      const logoMatches = [...res.body.matchAll(/<img[^>]+src=["']([^"']*(?:logo|brand|header)[^"']*\.(?:png|svg|webp|jpg|jpeg)[^"']*)["']/gi)];
      
      console.log(`=== ${s.name} ===`);
      console.log(`Final URL: ${res.finalUrl}`);
      console.log(`og:image: ${ogMatch ? ogMatch[1] : "none"}`);
      console.log(`logo matches (${logoMatches.length}):`);
      logoMatches.slice(0, 5).forEach((m) => console.log("  - " + m[1]));
    } else {
      console.log(`=== ${s.name} === Error: ${res.error || res.status}`);
    }
  }
}

run();
