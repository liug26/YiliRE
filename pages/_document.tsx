import { Html, Head, Main, NextScript } from 'next/document'
import '@/styles/app.css'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="YL Real Estate"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
