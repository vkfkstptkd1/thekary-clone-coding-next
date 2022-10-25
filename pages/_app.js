import Header from '../components/header';
import '../styles/globals.css';
import Head from 'next/head';

import Footer from '../components/footer';
import Layout from '../components/layout';
import Admin from './admin';
import Router, { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  return (
    router.pathname==="/admin" ? 
    <Admin/>
    :
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
