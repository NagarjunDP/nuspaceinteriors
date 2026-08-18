/**
 * Helper to convert image paths to jsDelivr CDN URLs for GitHub repository assets.
 */
const CDN_BASE_URL = "https://cdn.jsdelivr.net/gh/NagarjunDP/nuspaceinteriors@main/public";

export function getCdnUrl(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (process.env.NODE_ENV === "production") {
    return `${CDN_BASE_URL}${cleanPath}`;
  }
  return cleanPath;
}

