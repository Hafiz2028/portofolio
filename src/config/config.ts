import type { DefaultSeoProps } from 'next-seo'
import { i18n } from '../../next-i18next.config'

export const NAME = 'Muhammad Hafiz Aulia Rahmadoni'

const VERCEL_URL = 'https://portfolio-hafiz-aulia.vercel.app'

export const config: Config = {
  isDev: process.env.NODE_ENV === 'development',
  defaultLocale: i18n.defaultLocale,
  revalidateDelay: 30,
  copyright: `© ${new Date().getFullYear()} ${NAME}`,
  seo: {
    title: `${NAME} | Full-Stack Developer & Web Solutions`,
    description:
      'A Full-Stack Developer specializing in the Laravel ecosystem to build efficient, end-to-end web applications. Passionate about translating business requirements into scalable technical solutions.',
    canonical: VERCEL_URL,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: VERCEL_URL,
      title: `${NAME} | Full-Stack Developer & Web Solutions`,
      description:
        'Portfolio of Muhammad Hafiz Aulia Rahmadoni, a Full-Stack Developer with expertise in Laravel, PHP, and Next.js.',
      site_name: `${NAME} | Full-Stack Developer & Web Solutions`,
      images: [
        {
          url: '${VERCEL_URL}/img/banner.png',
          width: 1200,
          height: 630,
          alt: 'Portfolio Banner for ${NAME}',
        },
      ],
    },
    twitter: {
      cardType: 'summary_large_image',
    },
    additionalMetaTags: [
      { httpEquiv: 'x-ua-compatible', content: 'IE=edge; chrome=1' },
      { property: 'msapplication-TileColor', content: '#ffc40d' },
      { property: 'msapplication-config', content: '/icons/browserconfig.xml' },
      { property: 'theme-color', content: '#ffffff' },
    ],
    additionalLinkTags: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png',
      },
      { rel: 'manifest', href: 'site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#ffc40d',
      },
      { rel: 'shortcut icon', href: '/icons/favicon.ico' },
    ],
  },
  email: 'hafizauliarahmadoni@gmail.com',
  email_link: 'mailto:hafizauliarahmadoni@gmail.com',
  github: 'https://github.com/Hafiz2028',
  linkedin: 'https://www.linkedin.com/in/hafiz-aulia/',
}

interface Config {
  isDev: boolean
  defaultLocale: string
  revalidateDelay: number
  copyright: string
  seo: DefaultSeoProps
  email: string
  email_link: string
  github: string
  linkedin: string
}
