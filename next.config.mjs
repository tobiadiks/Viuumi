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


// // Import necessary modules
// import path from 'path';

// // Combine your existing Next.js configuration settings
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
//     optimizeFonts: true,
//     compress: true,
//     webpack: (config) => {
//         config.resolve.alias = {
//             ...config.resolve.alias,
//             '@': path.resolve(__dirname, './'),
//         };
//         return config;
//     },
// };

// export default nextConfig;
