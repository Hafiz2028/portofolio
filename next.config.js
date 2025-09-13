// File: next.config.js

const nextBundleAnalyzer = require('@next/bundle-analyzer')
const nextSafe = require('next-safe')

const i18nextConfig = require('./next-i18next.config.js')
const { i18n } = i18nextConfig

const isDev = process.env.NODE_ENV !== 'production'

const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        ...nextSafe({
          isDev,
          referrerPolicy: 'strict-origin-when-cross-origin',
          contentSecurityPolicy: false,
        }),
      ],
    },
  ],
  redirects: async () => [
    {
      source: '/github',
      destination: 'https://github.com/hafiz2028',
      permanent: true,
    },
  ],
  rewrites: async () => [
    {
      source: '/ingest/static/:path*',
      destination: 'https://us-assets.i.posthog.com/static/:path*',
    },
    {
      source: '/ingest/:path*',
      destination: 'https://us.i.posthog.com/:path*',
    },
    {
      source: '/ingest/decide',
      destination: 'https://us.i.posthog.com/decide',
    },
  ],
  skipTrailingSlashRedirect: true,
}

module.exports = withBundleAnalyzer(nextConfig)
