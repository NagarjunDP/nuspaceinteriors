const https = require("https");
const fs = require("fs");
const path = require("path");

const items = [
  { name: "hettich.svg", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hettich_(Unternehmen)_logo.svg" },
  { name: "saintgobain.svg", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Saint-Gobain_logo.svg" },
  { name: "hafele.svg", url: "https://commons.wikimedia.org/wiki/Special:FilePath/H%C3%A4fele_GmbH_%26_Co_KG_Logo.svg" },
  { name: "merino.png", url: "https://www.merinoservices.com/wp-content/uploads/2020/09/merino-logo-1.png" }
];

function download(url, dest, redirects = 0) {
  return new Promise((resolve) => {
    if (redirects > 5) return resolve(false);
    https.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return download(res.headers.location, dest, redirects + 1).then(resolve);
        }
        if (res.statusCode !== 200) return resolve(false);
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => {
          file.close(() => resolve(fs.statSync(dest).size > 100));
        });
      }
    ).on("error", () => resolve(false));
  });
}

async function run() {
  const dir = path.join(__dirname, "../public/images/partners");
  for (const item of items) {
    const dest = path.join(dir, item.name);
    console.log(`Downloading ${item.name} from ${item.url}...`);
    const ok = await download(item.url, dest);
    console.log(`Result for ${item.name}: ${ok ? "SUCCESS" : "FAILED"}`);
  }
}
run();
