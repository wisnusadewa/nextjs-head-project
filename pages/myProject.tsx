
import React from 'react'
import Layout from '@/components/Layout'
import PageWrapper from '@/components/PageWrapper'
import Head from 'next/head'


export default function MyProject() {
  return (
    <>
    <Head>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
        </link>
    </Head>
    <PageWrapper>
    <Layout pageTitle='My Project'>

      <div className='grid text-white h-screen bg-black '>
        <div className='grid grid-rows-1 grid-cols-2'>
          
          <div className='mt-20 border'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ex at ab autem consequuntur amet, nemo id aperiam ratione qui optio exercitationem accusantium officiis ipsam, voluptatibus in eveniet fuga temporibus iure repellendus architecto illum eius? Totam, magni rerum obcaecati accusantium ad est nobis repudiandae aut quas. Aliquid autem, iure, molestiae consequatur eos, est recusandae quasi delectus accusamus corrupti sequi natus dignissimos odit impedit aliquam iusto assumenda! Qui odit ullam enim perferendis a facere quia dolorum consequuntur. Laudantium rem molestiae eos assumenda, quibusdam accusantium explicabo ratione aspernatur, dolore reprehenderit ducimus dolorum, pariatur at quod doloribus nobis impedit unde exercitationem. Incidunt, iure.</p>
          </div>
          
          <div className='mt-20 border'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur eveniet sapiente beatae neque vitae tempore reprehenderit repellendus, consectetur voluptatum architecto ratione nihil labore minus omnis cum? Aliquam, optio quibusdam assumenda libero labore, ipsam hic vero sunt similique ab rem sed quas animi eaque facere minus at aliquid inventore ea porro est esse commodi? Voluptate nostrum doloribus eos sit! Omnis, nam, assumenda aperiam velit suscipit cum recusandae tenetur quod dicta alias illo sint est culpa iure, fugiat adipisci pariatur eum rem neque hic. Aperiam sunt officia quia rerum quibusdam odit non, harum accusamus, molestiae ea vel, culpa architecto unde corporis.
          </div>

        </div>
      </div>

    </Layout>
    </PageWrapper>
    </>
  )
}
