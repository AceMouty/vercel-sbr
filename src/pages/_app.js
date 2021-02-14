import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import Layout from '@components/layout/Layout'
import Head from 'next/Head'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  console.log("UI THEME", theme)
  return (
    <>
      <Head>
        <title>Sweetbriar Rose | 290</title>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
