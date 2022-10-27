import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/layout';
import { useRouter } from 'next/router';
import Admin from './admin/login';
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  return (
   <>
      <Head>
        <title>TheKARY</title>
        <meta name="description" content="TheKARY 데모 홈페이지 입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      </>
  )
}

export default MyApp
