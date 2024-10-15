/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github-production-user-asset-6210df.s3.amazonaws.com',
          port: '',
          pathname: '/144638566/**',
        },
      ],
    },
  };
  
  export default nextConfig;