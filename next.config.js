/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  // Don't let `next dev` generate an AGENTS.md in the repo root.
  agentRules: false,
};

module.exports = nextConfig;
