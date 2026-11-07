/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Emit about/index.html instead of about.html. Required: the export also
  // creates about/ for nested routes, and nginx try_files always prefers the
  // directory, so flat .html siblings are unreachable (301 -> 403).
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
};

export default nextConfig;