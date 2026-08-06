/**
 * Helper to convert image paths to jsDelivr CDN URLs for GitHub repository assets.
 */
export function getCdnUrl(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  // Clean leading slash
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `https://cdn.jsdelivr.net/gh/NagarjunDP/nuspaceinteriors@main/public/${cleanPath}`;
}

