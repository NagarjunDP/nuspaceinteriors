const https = require("https");
const fs = require("fs");

const sites = [
  { name: "merino", url: "https://www.merinolaminates.com" },
  { name: "hettich", url: "https://www.hettich.com/en-in/home" },
  { name: "saintgobain", url: "https://www.saint-gobain.co.in" }
];

function getHtml(url) {
  return new Promise((resolve) => {
    https.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => resolve(body));
      }
    ).on("error", () => resolve(""));
  });
}

async function run() {
  for (const s of sites) {
    const html = await getHtml(s.url);
    console.log(`\n=== ${s.name} === HTML len: ${html.length}`);
    const matches = [...html.matchAll(/(https?:[^\s"']+\.(?:png|svg|webp|jpeg|jpg))/gi)].map((m) => m[1]);
    console.log(`Found ${matches.length} image URLs:`);
    matches.slice(0, 15).forEach((m) => console.log("  - " + m));
  }
}
run();
