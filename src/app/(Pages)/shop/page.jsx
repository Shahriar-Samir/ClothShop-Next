import axios from "axios";
import Image from "next/image";
import Link from "next/link";


const Shop = async () => {

  try{
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/shop/api`)
    const products = await res.data

    return (
        <main className='w-full'>
            <h1 className='mt-5 text-center text-2xl'>All Products</h1>
            <section className='grid grid-cols-3 w-11/12 mx-auto max-w-[1000px] gap-10 mt-10'>
            {products.map(item=>{
                    return   <article key={item._id} className="card bg-base-100 shadow-xl">
  <figure>
    <Image
      src={item.imageURL}
      width={1000}
      height={1000}
      alt={item.productName} className="w-full h-[300px] object-cover" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.productName}</h2>
    <p>{item.description}</p>
    <div className="card-actions justify-end w-full">
      <Link href={`/shop/productDetails/${item._id}`} className="w-full"><button className="btn bg-blue-500 hover:bg-blue-600 text-white w-full">Details</button></Link>
    </div>
  </div>
</article>})}
            </section>
        </main>
    );
   }
   catch(err){
    console.log(err)
   }
};

export default Shop;