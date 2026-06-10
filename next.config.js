/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/BOCRA",
        assetPrefix: "/BOCRA/",
        images: {
          unoptimized: true,
        },
      }
    : {}),
};

module.exports = nextConfig;
