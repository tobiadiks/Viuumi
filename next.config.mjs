/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: true,
    compress: true,
    images: {
        domains: ['img.freepik.com'], // Add the external domain here
    },
};

export default nextConfig;
