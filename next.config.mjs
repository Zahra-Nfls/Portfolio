/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
        // ignoreDuringDevelopment: false,
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
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com', 
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "developer.mozilla.org", 
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "sass-lang.com", 
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "getbootstrap.com", 
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "tailwindcss.com", 
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "wordpress.org", 
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "reactjs.org", 
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "nextjs.org",  
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: `next/image`,  
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "www.figma.com",  
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "www.postman.com",  
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "www.typescriptlang.org",  
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "www.php.net",  
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "www.mysql.com" ,  
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname:  "www.docker.com",  
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "nodejs.org",  
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "www.linux.org",  
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "ubuntu.com",  
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "git-scm.com",  
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "code.visualstudio.com",  
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "www.gnu.org",  
                port: '',
                pathname: '/**',
            },
            // {
            //     protocol: 'https',
            //     hostname: ,  
            //     port: '',
            //     pathname: '/**',
            // },
            // {
            //     protocol: 'https',
            //     hostname: ,  
            //     port: '',
            //     pathname: '/**',
            // },
        ],
    },
};

export default nextConfig;
