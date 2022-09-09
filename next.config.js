/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['usembleit.co.za'],
    loader: 'akamai',
    path: '',
    
 
  },

  
  
}



module.exports = nextConfig
