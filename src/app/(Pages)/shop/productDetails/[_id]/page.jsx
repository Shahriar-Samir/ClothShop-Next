import axios from 'axios';
import Image from 'next/image';
import React from 'react';

const ProductDetails = async ({params}) => {
   const productId = params._id
   const res = await axios.get(`http://localhost:3000/api/productDetails?id=${productId}`)
   const productData = res.data
    return (
        <main className='mt-10 mx-auto w-11/12 max-w-[1200px]'>
            <section className="card lg:card-side rounded-none h-[450px] gap-20">
  <figure className='w-1/3 rounded-none'>
    <Image
      width={1000}
      height={1000}
      className='w-full h-full '
      src={productData.imageURL}
      alt={productData.productName} />
  </figure>
  <div className="card-body w-1/2 gap-3 flex flex-col">
    <h2 className="font-bold text-2xl">{productData.productName}</h2>
    <h2 className="font-semibold text-lg">Description: {productData.description}</h2>
    <h2 className='text-lg font-semibold'>Category: {productData.category}</h2>
    <h2 className='text-lg font-semibold'>Size: {productData.size}</h2>
    <h2 className='text-lg font-semibold'>Color: {productData.color}</h2>
    <h2 className='text-lg font-semibold'>Material: {productData.material}</h2>
    <h2 className='text-2xl font-bold text-yellow-500'>${productData.price}</h2>
    <div className="card-actions gap-2 flex-col">
      <div className='flex items-center gap-5 border p-2'>
      <button className='bg-gray-100 h-[40px] w-[40px] rounded-full'>+</button>
      <p>0</p>
      <button className='bg-gray-100 h-[40px] w-[40px] rounded-full'>-</button>
      </div>
      <button className="btn bg-[#DC2626] text-white hover:bg-[#8f1919] w-[300px]">Add to Cart</button>
    </div>
  </div>
</section>
        </main>
    );
};

export default ProductDetails;