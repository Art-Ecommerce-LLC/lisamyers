/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'd1izb07g2ul2j2.cloudfront.net',
          port: '',
          pathname: '/bliss/**', // First path
        },
        {
          protocol: 'https',
          hostname: 'd1izb07g2ul2j2.cloudfront.net',
          port: '',
          pathname: '/**', // Second path
        },
      ],
    },
  };
  
  export default nextConfig;