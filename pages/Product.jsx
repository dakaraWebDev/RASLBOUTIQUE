import Layout from '../components/Layout'
import Head from 'next/head'
import img1 from '../product-images/0b0f6b76-9ec1-4ed5-9fc6-78e27ac57db7.JPG'
import img2 from '../product-images/1d4b06bb-7ee1-4dfa-9983-3c88ecba01e4.JPG'
import img3 from '../product-images/1fd195c0-7d73-424d-bc31-cb842c36a21f.JPG'
import img4 from '../product-images/2a0e54c0-e24d-4fb4-8b98-895e100a4a82.JPG'
import img5 from '../product-images/2bab3dae-7110-4b9f-a80a-3bc43cd11527.JPG'
import img6 from '../product-images/5ac08c9d-3db0-45d2-881a-5dda13190cd3.JPG'
import img7 from '../product-images/6fb1b263-2f75-4ea8-af9f-47813f4e0fa3.JPG'
import img8 from '../product-images/7ee62180-1e05-4141-b807-82c3bea40663.JPG'
import img9 from '../product-images/8ffeeb16-7390-4fb9-86f8-4fe4f7af0507.JPG'
// import img10 from '../product-images/17d8585c-8b0c-4cce-a917-fb3d131379e3.JPG'
import img11 from '../product-images/22ab88a5-337e-4166-bf44-4f304d2ca084.JPG'
import img12 from '../product-images/37a9f10e-4959-4ca9-95f3-127feac15a6e.JPG'
import img13 from '../product-images/57a865fb-083b-4a97-8bf4-2a11e92322b4.JPG'
import img14 from '../product-images/60a56639-11e8-42c9-946f-b64f3a6a5b94.JPG'
import img15 from '../product-images/94a758bf-c441-4b02-a763-e521afec376a.JPG'
import img16 from '../product-images/128c2957-922a-461a-9374-641187d530bb.JPG'
import img17 from '../product-images/210ca157-0b9b-4e9e-8ee4-077aea122e54.JPG'
import img18 from '../product-images/4893b8e1-b2dd-4572-9545-e0ea2144591e.JPG'
import img19 from '../product-images/95267d19-bb0d-4d16-bfd2-e58a3280f1ea.JPG'
import img20 from '../product-images/454160f3-da26-4de6-8997-8f9441b9b573.JPG'
import img21 from '../product-images/a23404fa-04c5-4806-a556-d38969014654.JPG'
import img22 from '../product-images/b2cdba37-c416-4ab0-a094-40721ec4fb22.JPG'
import img23 from '../product-images/b1356f5d-4217-4594-b0fe-c49d4c934b26.JPG'
import img24 from '../product-images/bd8079ba-7ff0-4949-8181-7a4bd3b6abd9.JPG'
import img25 from '../product-images/c28be98a-2051-4880-963e-6159e60651cd.JPG'
import img26 from '../product-images/c50eca67-d282-4b3d-b818-7dd6e16561f2.JPG'
import img27 from '../product-images/c07631bd-593f-4f8e-af88-41c1ddd1babf.JPG'
import img28 from '../product-images/cd63c8cf-3e57-4fdb-b222-8907627c55a7.JPG'
import img29 from '../product-images/ce0d8a60-8689-495b-9cb8-45ca3e732373.JPG'
import img30 from '../product-images/da3e68fb-acfd-433d-a1f7-6a05cf424e47.JPG'
import img31 from '../product-images/e4c87ab4-19f8-4d50-8c71-147e56a0d310.JPG'
import img32 from '../product-images/e5198ea2-520e-4bf0-bba8-25c0b78a0773.JPG'
import img33 from '../product-images/fb5b893d-d202-4a53-a9a2-3a9e4b0afa1c.JPG'

import Image from 'next/image'

const Product = () => {
   return (
      <Layout>
         <Head>
            <title>Our Products</title>
         </Head>
         <div className='flex flex-col px-6 pt-10 h-[20vh]'>
            <h1 className='font-bold text-3xl lg:text-4xl pt-28 lg:pt-32 text-zinc-600'>Our products</h1>
         </div>
         <div className='grid gap-5 grid-cols-3 pt-24 lg:pt-28 px-4 lg:grid-cols-4 lg:gap-12'>
            <a href="https://www.tokopedia.com/rasl/gamis-premium-dior-silk-gamis-motif-batik-ld-105-110-pb-140"><Image src={img2} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/homewear-homedress-bordir"><Image src={img3} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/gamis-premium-gamis-motif-kotak-fasya-pink-mn-square-monalisa"><Image src={img4} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/gamis-premium-gamis-kotak-biru-gamis-monalisa-mn-square-soft-blue-biru-muda"><Image src={img5} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/mini-french-khimar"><Image src={img6} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/gamis-premium-gamis-pesta-mewah-bahan-jaguar-gamis-pink"><Image src={img7} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/gamis-alesha"><Image src={img8} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/gamis-premium-dior-silk-gamis-motif-batik-ld-105-110-pb-140"><Image src={img9} alt='raslboutique'/></a>            
            <a href="https://www.tokopedia.com/rasl/gamis-premium-gamis-kotak-biru-gamis-monalisa-mn-square-soft-blue-biru-muda"><Image src={img12} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/gamis-premium-gamis-pesta-mewah-bahan-jaguar-gamis-pink"><Image src={img13} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/homewear-homedress-bordir"><Image src={img14} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/gamis-premium-gamis-ceruty-ceruty-luxury-gamis-hijau-mint"><Image src={img15} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/gamis-premium-dior-silk-gamis-motif-batik-ld-105-110-pb-140"><Image src={img17} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/gamis-premium-gamis-kotak-biru-gamis-monalisa-mn-square-soft-blue-biru-muda"><Image src={img18} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/gamis-premium-gamis-kotak-biru-gamis-monalisa-mn-square-soft-blue-biru-muda"><Image src={img20} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/homewear-homedress-bordir"><Image src={img22} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/homewear-homedress-bordir"><Image src={img23} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/gamis-premium-gamis-pesta-mewah-bahan-jaguar-gamis-pink"><Image src={img24} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/gamis-premium-gamis-ceruty-ceruty-luxury-gamis-hijau-mint"><Image src={img25} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/gamis-premium-gamis-motif-kotak-fasya-pink-mn-square-monalisa"><Image src={img27} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/gamis-alesha"><Image src={img28} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/khimar-long-long-khimar-khimar-ceruty-khimar-bigsize"><Image src={img29} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/gamis-premium-gamis-ceruty-ceruty-luxury-gamis-hijau-mint"><Image src={img30} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/gamis-alesha"><Image src={img32} alt='raslboutique'/></a>
            <a href="https://www.tokopedia.com/rasl/gamis-alesha"><Image src={img33} alt='raslboutique'/></a>
         </div>
      </Layout>
   )
}

export default Product
