const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const partnerAssets = [
  {
    name: "greenply",
    urls: [
      "https://www.greenply.com/assets/images/logo.svg",
      "https://seeklogo.com/images/G/greenply-logo-4A053C2D7B-seeklogo.com.png"
    ],
    ext: ".svg"
  },
  {
    name: "centuryply",
    urls: [
      "https://www.centuryply.com/uploads/logo_6f13da0c06.png",
      "https://www.centuryply.com/img/logo-new.png"
    ],
    ext: ".png"
  },
  {
    name: "merino",
    urls: [
      "https://www.merinolaminates.com/en/wp-content/uploads/2022/01/Merino-Logo.png",
      "https://www.merinolaminates.com/wp-content/uploads/2021/04/merino-logo.png",
      "https://seeklogo.com/images/M/merino-laminates-logo-5DDF5CE735-seeklogo.com.png"
    ],
    ext: ".png"
  },
  {
    name: "greenlam",
    urls: [
      "https://www.greenlam.com/logo.png",
      "https://www.greenlam.com/assets/images/logo.png"
    ],
    ext: ".png"
  },
  {
    name: "hettich",
    urls: [
      "https://www.hettich.com/fileadmin/templates/images/hettich_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/8/86/Logo_of_Hettich_%28company%29.svg",
      "https://seeklogo.com/images/H/hettich-logo-B76296A8EF-seeklogo.com.png"
    ],
    ext: ".png"
  },
  {
    name: "actiontesa",
    urls: [
      "https://www.actiontesa.com/wp-content/uploads/2024/08/fianl-logo.png",
      "https://www.actiontesa.com/wp-content/uploads/2021/09/logo.png"
    ],
    ext: ".png"
  },
  {
    name: "hafele",
    urls: [
      "https://www.hafeleindia.com/hap-live/static/WFS/Haefele-HIN-Site/-/Haefele-HIN/en_IN/images/haefele_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/8/87/H%C3%A4fele_GmbH_%26_Co_KG_Logo.svg"
    ],
    ext: ".png"
  },
  {
    name: "ebco",
    urls: [
      "https://ebco.in/assets/images/logo.png",
      "https://www.ebco.in/images/ebco_logo.png",
      "https://seeklogo.com/images/E/ebco-logo-C1196144DE-seeklogo.com.png"
    ],
    ext: ".png"
  },
  {
    name: "asianpaints",
    urls: [
      "https://www.asianpaints.com/content/dam/apcolourcatalogue/asset/ap-revamp/header-unification/ap_logo_black_revamp.svg",
      "https://static.asianpaints.com/etc.clientlibs/apcolourcatalogue/clientlibs/clientlib-global-unification/resources/images/header/asian-paints-logo.webp",
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Asian_Paints_Logo.svg"
    ],
    ext: ".svg"
  },
  {
    name: "saintgobain",
    urls: [
      "https://www.saint-gobain.co.in/themes/custom/saintgobain/logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Saint-Gobain_logo.svg",
      "https://www.saint-gobain.com/themes/custom/saintgobain/logo.svg"
    ],
    ext: ".svg"
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve) => {
    const mod = url.startsWith("https") ? https : http;
    const req = mod.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        },
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          let loc = res.headers.location;
          if (!loc.startsWith("http")) {
            const u = new URL(url);
            loc = u.origin + loc;
          }
          return downloadFile(loc, dest).then(resolve);
        }
        if (res.statusCode !== 200) {
          return resolve({ success: false, status: res.statusCode, url });
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => {
          file.close(() => {
            const stats = fs.statSync(dest);
            if (stats.size > 100) {
              resolve({ success: true, size: stats.size, url });
            } else {
              fs.unlinkSync(dest);
              resolve({ success: false, reason: "file too small", size: stats.size, url });
            }
          });
        });
      }
    );
    req.on("error", (err) => resolve({ success: false, error: err.message, url }));
    req.setTimeout(8000, () => {
      req.destroy();
      resolve({ success: false, error: "timeout", url });
    });
  });
}

async function run() {
  const targetDir = path.join(__dirname, "../public/images/partners");
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  for (const item of partnerAssets) {
    console.log(`\n--- Fetching real logo for: ${item.name} ---`);
    let downloaded = false;
    for (const url of item.urls) {
      // Determine file extension from URL if possible
      let ext = item.ext;
      if (url.endsWith(".svg")) ext = ".svg";
      else if (url.endsWith(".png")) ext = ".png";
      else if (url.endsWith(".webp")) ext = ".webp";
      else if (url.endsWith(".jpg") || url.endsWith(".jpeg")) ext = ".jpeg";

      const targetPath = path.join(targetDir, `${item.name}${ext}`);
      console.log(`Trying ${url}...`);
      const res = await downloadFile(url, targetPath);
      if (res.success) {
        console.log(`SUCCESS! Saved ${item.name}${ext} (${res.size} bytes) from ${res.url}`);
        downloaded = true;
        break;
      } else {
        console.log(`Failed (${res.status || res.error || res.reason}) for ${url}`);
      }
    }
    if (!downloaded) {
      console.log(`[WARNING] Could not download direct file for ${item.name}`);
    }
  }
}

run();
