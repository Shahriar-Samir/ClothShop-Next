import axios from "axios";


const Shop = async () => {
   try{
    let res = await axios.get('http://localhost:3000/shop/api')
    let products = await res.data
   
    return (
        <main className='w-full'>
            <h1 className='mt-5 text-center text-2xl'>All Products</h1>
            <section className='grid grid-cols-3 w-11/12 mx-auto max-w-[1000px] gap-10 mt-10'>
            {products.map(item=>{
                    return   <article key={item} className="card bg-base-100 shadow-xl">
  <figure>
    <img
      src={item.imageURL}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
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