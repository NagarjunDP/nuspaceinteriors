/**
 * Helper to convert image paths to web relative paths.
 * Next.js & Vercel serve all public/ files directly via Vercel Edge CDN.
 */
export function getCdnUrl(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  // Clean leading slash
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `/${cleanPath}`;
}
