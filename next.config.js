/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_KEY:'',
AUTH_DOMAIN:'',
PROJECT_ID:'',
STORERAGE_BUCKET:'',
MESSAGING_SENDER:'',
APP_ID:'',
MEASUREMENT_ID: '',
  },
}

module.exports = nextConfig
