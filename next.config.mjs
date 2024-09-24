/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "bit.ly",
                //For security purpose 
                //we set up this config because if not
                //anyone can take advantage of the endpoint
                //that nextjs provides for optimised images

                //If u
            }
        ]
    }
};

export default nextConfig;
