import Head from 'next/head'
import Layout from "../components/Layout.jsx"
import favicon from '../public/icon.png'
import Link from "next/link"

export default function Home() {
  return(
    <Layout>
      <Head>
        <title>Raslboutique</title>
        <link rel="icon" href={favicon} />
      </Head>
      <div>
        <div className="lg:items-center lg:py-[250px] flex flex-col py-[275px] h-[100vh] justify-evenly px-4 lg:px-20">
          <h1 className="lg:text-[5em] font-bold text-5xl text-zinc-600">Welcome to our website.</h1>
          <Link href='/Product'>
            <p className="flex cursor-pointer justify-center items-center rounded text-neutral-50 font-bold bg-blue-400 px-4 py-3 w-[130px]">Our Product</p>
          </Link>
        </div>
      </div>
    </Layout>
  )
}