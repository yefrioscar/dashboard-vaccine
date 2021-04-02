import '../styles/globals.css'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Covid vaccines by country</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
