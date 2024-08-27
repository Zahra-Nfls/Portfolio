    /** @type {import('next').NextConfig} */
    const nextConfig = {
        eslint:{
            ignoreDuringBuilds: true,
        },
        images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'user-images.githubusercontent.com',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'github.com',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'github-production-user-asset-6210df.s3.amazonaws.com',
            port: '',
            pathname: '/**',
            },
        ],
        },
    };
    
    export default nextConfig;
    