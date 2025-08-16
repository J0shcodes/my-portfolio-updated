/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media2.dev.to",
        port: "",
        // pathname: '/account123/**',
        search: "",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: '/photos/**',
        search: "",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        port: "",
        // pathname: '/account123/**',
        search: "",
      },
    ],
  },
};

export default nextConfig
