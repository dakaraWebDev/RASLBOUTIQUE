import Head from 'next/head'
import Layout from "../components/Layout.jsx"
import Link from "next/link"
import logo from '../public/rasllogo.png'
import Image from 'next/image'

export default function Home() {
  return(
    <Layout>
      <Head>
        <title>Raslboutique</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <div className='overflow-x-hidden'>
        <div className="h-screen w-full flex flex-col lg:justify-center lg:items-end lg:px-24 px-5 justify-center">
          <h1 className="lg:text-[4em] font-bold text-5xl text-zinc-600 z-20">Welcome to</h1>
          <h1 className="lg:text-[4em] font-bold text-5xl text-zinc-600 z-20">Raslboutique website.</h1>
          <br />
          <Link href='/Product' passHref>
            <p className="flex cursor-pointer justify-center items-center rounded text-neutral-50 font-bold bg-[#EE7B8C] px-4 py-3 w-[120px] text-[1.2rem] z-20">Product</p>
          </Link>
        </div>
        <div className='lg:absolute lg:translate-x-[-10vh] lg:translate-y-0 translate-x-[17vh] translate-y-[-48vh] z-[-2] lg:top-0 lg:right-[40vw] left-0 lg:w-[110vh] lg:h-[110vh]'>
          <Image src={logo} />
        </div>
        <div id='location' className='absolute lg:relative top-[100vh] w-full h-[50vh] p-4 lg:w-full lg:h-50'>
          <h1 className='text-2xl lg:text-5xl font-bold text-zinc-700'>Location</h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9376369667707!2d106.53622801497214!3d-6.139080561894727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a010dfe958bbb%3A0x7c75594087b585e7!2sRASL%20BOUTIQUE!5e0!3m2!1sid!2sid!4v1644151319792!5m2!1sid!2sid" width="100%" height='80%' loading="lazy"></iframe>
        </div>
      </div>
    </Layout>
  )
}

// lg:items-center flex flex-col py-[275px] h-[100vh] justify-end items-center px-4 lg:px-20