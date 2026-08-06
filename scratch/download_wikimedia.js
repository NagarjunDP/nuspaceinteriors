const https = require("https");
const fs = require("fs");
const path = require("path");

const files = [
  { name: "hettich.svg", url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hettich_%28Unternehmen%29_logo.svg" },
  { name: "saintgobain.svg", url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Saint-Gobain_logo.svg" },
  { name: "hafele.svg", url: "https://upload.wikimedia.org/wikipedia/commons/8/87/H%C3%A4fele_GmbH_%26_Co_KG_Logo.svg" }
];

function fetchWM(url, dest) {
  return new Promise((resolve) => {
    const req = https.get(
      url,
      {
        headers: {
          "User-Agent": "NuspacePartnerLogoBot/1.0 (https://nuspace.in; contact@nuspace.in) Node.js/18.0",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/svg+xml,image/*,*/*;q=0.8"
        }
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetchWM(res.headers.location, dest).then(resolve);
        }
        if (res.statusCode !== 200) {
          console.log(`HTTP ${res.statusCode} for ${url}`);
          return resolve(false);
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => {
          file.close(() => {
            const sz = fs.statSync(dest).size;
            console.log(`Saved ${dest} (${sz} bytes)`);
            resolve(sz > 100);
          });
        });
      }
    );
    req.on("error", (e) => {
      console.log(`Err: ${e.message}`);
      resolve(false);
    });
  });
}

async function run() {
  const dir = path.join(__dirname, "../public/images/partners");
  for (const f of files) {
    const dest = path.join(dir, f.name);
    console.log(`Downloading ${f.name}...`);
    await fetchWM(f.url, dest);
  }
}

run();
