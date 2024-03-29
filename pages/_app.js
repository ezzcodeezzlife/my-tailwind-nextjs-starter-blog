/* eslint-disable */ 
import '@/css/tailwind.css'
import '@/css/prism.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        
        <script
          data-ad-client="ca-pub-8251732556629149"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>

        <meta name="a.validate.02" content="89R6kzDWSmqYAhdl3dKYy9rN1lLBPMQ3UZBO" />
        
        <meta name="propeller" content="ebe430599df2a2febe7f528b0fe34869" />
      </Head>

      <Script
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
    (function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://inklinkor.com/tag.min.js',5303388,document.body||document.documentElement)
  `,
  }}
/>

      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
