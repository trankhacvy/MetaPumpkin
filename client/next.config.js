require("dotenv").config();

module.exports = {
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    CHAIN_NAME: process.env.CHAIN_NAME,
    SUPPORTED_CHAIN_ID: process.env.SUPPORTED_CHAIN_ID,
    RPC_URL: process.env.RPC_URL,
    BLOCK_EXPLORER_URL: process.env.BLOCK_EXPLORER_URL,
    REACT_APP_PINATA_API_KEY: process.env.REACT_APP_PINATA_API_KEY,
    REACT_APP_PINATA_API_SECRET: process.env.REACT_APP_PINATA_API_SECRET,
    GRAPHQL_URL: process.env.GRAPHQL_URL,
    NFT_CONTRACT_ADDRESS: process.env.NFT_CONTRACT_ADDRESS,
    MARKETPLACE_CONTRACT_ADDRESS: process.env.MARKETPLACE_CONTRACT_ADDRESS,
    METAPUMPKIN_CONTRACT_ADDRESS: process.env.METAPUMPKIN_CONTRACT_ADDRESS,
    TOTAL_PUMPKINS: process.env.TOTAL_PUMPKINS,
    APP_URL: process.env.APP_URL,
    IPFS_GATEWAY: process.env.IPFS_GATEWAY,
    NFT_BASE_URI: process.env.NFT_BASE_URI,
  },
  images: {
    domains: ["pbs.twimg.com", "cloudflare-ipfs.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
