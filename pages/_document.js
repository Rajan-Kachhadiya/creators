import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en' className='!scroll-smooth scroll-pt-80'>
      <Head />
      <body className='text-primary text-base font-base'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}