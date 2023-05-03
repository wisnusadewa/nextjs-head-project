import Head from 'next/head'
import Footer from '../Footer';
import Header from '../Header';
import { ReactNode } from 'react';
import styles from '../Layout/layout.module.css'

interface LayoutProps{
    children: ReactNode;
    pageTitle: string;
}

export default function layout(props: LayoutProps) {
    const { children, pageTitle } = props;

    return (

    <>
    <Head>
        <title>
            CodeFreak |
            {' '}
            {pageTitle}
        </title>
        <meta name="description" content="Website NextJs" />
    </Head>

    <div>
        <Header />
        <div className='bg-white'>{children}</div>
        <Footer/>
    </div>



    </>
  )
}
