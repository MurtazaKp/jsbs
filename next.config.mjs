/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  output: "export",
  images: {
    unoptimized: true, // <-- ADD THIS LINE
  },
};

export default nextConfig;
