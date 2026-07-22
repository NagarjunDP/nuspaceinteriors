/**
 * Helper to convert local image paths to jsDelivr CDN URLs.
 * Repository: NagarjunDP/nuspaceinteriors
 *
 * NOTE: jsDelivr serves files from GitHub commits on remote.
 * When running in local development or before git push, we return the local path
 * so Next.js serves local public/ files directly (preventing 404s).
 */
const GITHUB_REPO = "NagarjunDP/nuspaceinteriors";
const BRANCH = "main";

export function getCdnUrl(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  // Clean leading slash
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // Use local relative path in development or unless explicitly forced
  const isDev = process.env.NODE_ENV === "development";
  const forceCdn = process.env.NEXT_PUBLIC_USE_JSDELIVR === "true";

  if (isDev && !forceCdn) {
    return `/${cleanPath}`;
  }

  // jsDelivr URL mapping for production / git pushed commit
  return `https://cdn.jsdelivr.net/gh/${GITHUB_REPO}@${BRANCH}/public/${cleanPath}`;
}
