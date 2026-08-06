/**
 * Helper to convert image paths to jsDelivr CDN URLs for GitHub repository assets.
 */
export function getCdnUrl(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return cleanPath;
}

