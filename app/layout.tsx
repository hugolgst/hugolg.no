import type { Metadata } from 'next'

import Providers from '@/providers'

export const metadata: Metadata = {
  title: 'Hugo Lageneste',
  description: 'Portfolio'

  // icons: [
  //   { rel: 'apple-touch-icon', url: '/images/icon512_maskable.png' },
  //   { rel: 'icon', url: '/images/icon512_maskable.png' },
  // ],
  // openGraph: {
  //   url: '',
  //   images: [
  //     {
  //       url: '',
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  //   locale: 'en_US',
  //   type: 'website',
  // },
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang='en'>
      <head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
        >
        </meta>
        <meta
          name='apple-mobile-web-app-capable'
          content='yes'
        >
        </meta>
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
        <meta
          name='theme-color'
          content='#fff'
        />
      </head>

      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
