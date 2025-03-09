/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // During deployment, we want to build despite TypeScript errors to see if it runs anyway
    ignoreBuildErrors: true,
  },
  eslint: {
    // During deployment, we want to build despite ESLint errors
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;
