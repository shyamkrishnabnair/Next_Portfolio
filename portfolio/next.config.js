const nextConfig = {
  // Add this section to allow external images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      // You may need to add this for YouTube thumbnail images if you decide to use them later
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/**',
      },
      // Add any other image hosts you use (e.g., cdn.my-host.com)
    ],
  },
};

module.exports = nextConfig;
