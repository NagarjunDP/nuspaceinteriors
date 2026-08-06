const https = require("https");
const fs = require("fs");
const path = require("path");

const titles = [
  "File:Hettich_(Unternehmen)_logo.svg",
  "File:Häfele_GmbH_&_Co_KG_Logo.svg",
  "File:Saint-Gobain_logo.svg",
  "File:Saint-Gobain_Logo.svg",
  "File:Logo_Saint-Gobain.svg"
];

function apiQuery() {
  const titlesStr = titles.map((t) => encodeURIComponent(t)).join("|");
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${titlesStr}&prop=imageinfo&iiprop=url&format=json`;

  https.get(apiUrl, { headers: { "User-Agent": "NuspaceApp/1.0 (contact@nuspace.in)" } }, (res) => {
    let data = "";
    res.on("data", (c) => (data += c));
    res.on("end", async () => {
      const json = JSON.parse(data);
      const pages = json.query.pages;
      for (const k in pages) {
        const page = pages[k];
        if (page.imageinfo && page.imageinfo[0]) {
          const imgUrl = page.imageinfo[0].url;
          console.log(`FOUND: ${page.title} -> ${imgUrl}`);
          let filename = "";
          if (page.title.includes("Hettich")) filename = "hettich.svg";
          else if (page.title.includes("Häfele")) filename = "hafele.svg";
          else if (page.title.toLowerCase().includes("saint")) filename = "saintgobain.svg";

          if (filename) {
            const dest = path.join(__dirname, "../public/images/partners", filename);
            await downloadDirect(imgUrl, dest);
          }
        }
      }
    });
  });
}

function downloadDirect(url, dest) {
  return new Promise((resolve) => {
    https.get(url, { headers: { "User-Agent": "NuspaceApp/1.0 (contact@nuspace.in)" } }, (res) => {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on("finish", () => {
        file.close(() => {
          console.log(`Saved ${dest} (${fs.statSync(dest).size} bytes)`);
          resolve(true);
        });
      });
    });
  });
}

apiQuery();
