/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/api/v1/:path*",
				destination: `${process.env.EXTERNAL_API_URL}/:path*`,
			},
		];
	},
};

module.exports = nextConfig;
