/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    API_KEY:'AIzaSyDsKrmDcrJcAD06GLPTy103O59xWw8ti88',
AUTH_DOMAIN:'stl-store-d1df0.firebaseapp.com',
PROJECT_ID:'stl-store-d1df0',
STORERAGE_BUCKET:'stl-store-d1df0.appspot.com',
MESSAGING_SENDER:'570762115321',
APP_ID:'1:570762115321:web:4c7b507d0170fe69c34a28',
MEASUREMENT_ID:'G-VJ9C7RVX9X',
  },
}

module.exports = nextConfig
