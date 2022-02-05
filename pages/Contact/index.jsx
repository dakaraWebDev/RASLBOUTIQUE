import Layout from '../../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import logoWA from '../../public/whatsapp-logo.png'
import logoIG from '../../public/instagram.png'

const Contact = () => {
   return (
      <Layout>
         <Head>
            <title>Contact us</title>
         </Head>
         <div className='flex justify-center items-center h-screen w-full'>
            <a className='h-[20vh] w-[20vh]' href="https://wa.me/+6281398467317">
               <Image src={logoWA} alt='whatsapp' /> 
            </a>
            <a className='h-[13vh] w-[13vh]' href="https://www.instagram.com/rasl_catalog/">
               <Image src={logoIG} alt='instagram' /> 
            </a>
         </div>
      </Layout>
   )
}

export default Contact
