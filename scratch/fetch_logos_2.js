const https = require("https");
const http = require("http");

const sites = [
  { name: "merino", url: "https://www.merinolaminates.com/en/" },
  { name: "hettich", url: "https://www.hettich.com/en-in/home" },
  { name: "ebco", url: "https://www.ebco.in/" },
  { name: "saintgobain", url: "https://www.saint-gobain.co.in/" }
];

function fetchUrl(siteUrl) {
  return new Promise((resolve) => {
    const mod = siteUrl.startsWith("https") ? https : http;
    const req = mod.get(
      siteUrl,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve({ body: data, url: siteUrl }));
      }
    );
    req.on("error", (err) => resolve({ error: err.message }));
  });
}

async function run() {
  for (const s of sites) {
    const res = await fetchUrl(s.url);
    if (res.body) {
      const allImgs = [...res.body.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map((m) => m[1]);
      const logoImgs = allImgs.filter((src) => /logo|brand|header|ebco|merino|hettich|saint/i.test(src));
      console.log(`=== ${s.name} === (${logoImgs.length} matched out of ${allImgs.length} images)`);
      logoImgs.slice(0, 10).forEach((img) => console.log("  - " + img));
      if (logoImgs.length === 0) {
        // Print first 5 images
        allImgs.slice(0, 5).forEach((img) => console.log("  (img) - " + img));
        // Check for svg tags
        const svgMatches = [...res.body.matchAll(/<svg[^>]*>([\s\S]*?)<\/svg>/gi)];
        console.log(`  SVG count: ${svgMatches.length}`);
      }
    }
  }
}
run();
