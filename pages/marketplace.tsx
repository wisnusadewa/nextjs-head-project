
import React from 'react'
import Layout from '@/components/Layout'
import PageWrapper from '@/components/PageWrapper'
import Head from 'next/head'
import styles from '../styles/marketplace.module.css'
import Image from 'next/image'
import nikeHitam from '../public/nike-hitam.jpg'



export default function Marketplace() {
  return (
    <>
    <Head>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
        </link>
    </Head>
    <PageWrapper>
    <Layout pageTitle='My Project'>

      <div className='flex h-screen bg-gray-400 items-center justify-center'>
        <div className='card'>
          <Image className='h-full w-full object-cover' src={nikeHitam} alt='/' />
        </div>
      </div>

    </Layout>
    </PageWrapper>
    </>
  )
}
