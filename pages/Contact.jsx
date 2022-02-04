import Layout from '../components/Layout'
import Head from 'next/head'

const Contact = () => {
   return (
      <Layout>
         <Head>
            <title>Contact us</title>
         </Head>
         <div className='grid place-content-center h-screen w-full'>
            <a href="https://api.whatsapp.com/send?phone=085607200065">Whatsapp</a>
         </div>
      </Layout>
   )
}

export default Contact
