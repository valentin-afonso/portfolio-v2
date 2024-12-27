/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  transpilePackages: ["geist"],
};

export default nextConfig;
