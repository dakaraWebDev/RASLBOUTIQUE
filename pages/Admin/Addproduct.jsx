import Link from "next/link"

export default function Addproduct() {

   return(
      <div className="w-full grid overflow-x-hidden">
         <Link href='/Admin'>
            Back
         </Link>
         <div className="p-12 lg:px-[20%] grid gap-6">
            <h1 className="text-4xl text-slate-600 font-semibold">Tambah produk</h1>
            <form method="post" className="grid gap-6">
               <input type="file" placeholder="Upload foto" />
               <input type="text" placeholder="Nama Produk" />
               <input type="text" placeholder="Size" />
               <button className="bg-slate-600 text-white font-semibold w-[100px] h-[45px] rounded" type="submit">Submit</button>
            </form>
         </div>
      </div>
   )
}
