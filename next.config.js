/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'aceternity.com',
                port: '',
                pathname: '/images/products/thumbnails/new/**',
            },
        ],
    },
    logging: {
        fetches: {
            fullUrl: true
        }
    }
}


module.exports = nextConfig
