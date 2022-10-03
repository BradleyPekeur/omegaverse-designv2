/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	trailingSlash: true,
	images: {
		domains: ["usembleit.co.za"],
		loader: "akamai",
		path: "",
	},
};

module.exports = nextConfig;
