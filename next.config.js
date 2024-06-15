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
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
                pathname: '/wikipedia/commons/thumb/**',
            },
            {
                protocol: 'https',
                hostname: 'dbdb.io',
                port: '',
                pathname: '/media/logos/**',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '/**',
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
