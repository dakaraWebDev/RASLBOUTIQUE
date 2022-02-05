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
      </div>
    </Layout>
  )
}

// lg:items-center flex flex-col py-[275px] h-[100vh] justify-end items-center px-4 lg:px-20