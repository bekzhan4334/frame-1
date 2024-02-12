/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
      return [
        {
          source: '/redstone',
          destination: 'https://redstone.finance/',
          permanent: false
        },
        {
          source: '/pinatacloud',
          destination: 'https://www.pinata.cloud/blog/how-to-make-a-frame-on-farcaster-using-ipfs',
          permanent: false
        },
        {
          source: '/video',
          destination: 'https://youtu.be/wUt5NjXHSO4',
          permanent: false
        }
      ]
    }
  };
  
  export default nextConfig;