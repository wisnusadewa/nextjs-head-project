import Head from 'next/head'
import Hero from '../components/Hero'
import Layout from '@/components/Layout'
import Slider from '@/components/Slider'
import Instagram from '@/components/Instagram/Instagram'
import PageWrapper from '@/components/PageWrapper'



export default function Home() {
  return (
    
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
        </link>
      </Head>
      <PageWrapper>
      <Layout pageTitle='Homepage'>
       <Hero heading='My Name is Wisnu Sadewa' message='See My Project.' message2='See it.'/>
       {/* <Slider/> */}
       <Instagram/>
       </Layout>
       </PageWrapper>
    </>
    
  )
}
