/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        "source": "/index",
        "destination": "/",
        "permanent": true
      },
      {
        "source": "/home",
        "destination": "/",
        "permanent": true
      },
      {
        "source": "/homepage",
        "destination": "/",
        "permanent": true
      },
      {
        "source": "/play",
        "destination": "/",
        "permanent": false
      },
      {
        "source": "/brand",
        "destination": "/press",
        "permanent": true
      },
      {
        "source": "/branding",
        "destination": "/press",
        "permanent": true
      },
      {
        "source": "/presskit",
        "destination": "/press",
        "permanent": true
      },
      {
        "source": "/press-kit",
        "destination": "/press",
        "permanent": true
      },
      {
        "source": "/mediakit",
        "destination": "/press",
        "permanent": true
      },
      {
        "source": "/media-kit",
        "destination": "/press",
        "permanent": true
      },
      {
        "source": "/privacypolicy",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/privacy-policy",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/cookie",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/cookies",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/cookiepolicy",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/cookie-policy",
        "destination": "/privacy",
        "permanent": true
      }
    ]
  }
}

module.exports = nextConfig
