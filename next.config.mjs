// next.config.js (ESM format)
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
 },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;