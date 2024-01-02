/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    poweredByHeader: false,
    distDir: "build",    
    images: {
        domains: [
          ""
        ],
      },
      async redirects() {
        return [
          {
            source: '/custom-404',
            destination: '/404',
            permanent: true,
          },
        ];
      },
}

module.exports = nextConfig
