/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/video/:path*',
        destination: '/:path*', // Rewrite to the video URL
      },
    ];
  },
  // Configure headers to prevent download
  async headers() {
    return [
      {
        source: '/video-player',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'inline',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;