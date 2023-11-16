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
        "source": "/download",
        "destination": "/play",
        "permanent": true
      },
      {
        "source": "/dl",
        "destination": "/play",
        "permanent": true
      },
      {
        "source": "/install",
        "destination": "/play",
        "permanent": true
      },
      {
        "source": "/buy",
        "destination": "/play",
        "permanent": true
      },
      {
        "source": "/purchase",
        "destination": "/play",
        "permanent": true
      },
      {
        "source": "/get",
        "destination": "/play",
        "permanent": true
      },
      {
        "source": "/game",
        "destination": "/play",
        "permanent": true
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
        "source": "/privacypolicywebsite",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/privacy-policy-website",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/privacypolicywiki",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/privacy-policy-wiki",
        "destination": "/privacy",
        "permanent": true
      },
      {
        "source": "/privacypolicygame",
        "destination": "/privacygame",
        "permanent": true
      },
      {
        "source": "/privacy-policy-game",
        "destination": "/privacygame",
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
