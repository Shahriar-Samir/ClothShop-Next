'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CartBtns from '../shop/productDetails/[_id]/CartBtns';

const CartData = () => {
    const [cart,setCart] = useState([])
  useEffect(()=>{
      const cartData = JSON.parse(localStorage.getItem('cart'))
      if(cartData){
        setCart(cartData)
      }
      else{
        setCart([])
      }
  },[])
    return (
        <section className='flex flex-col gap-5 '>
        {cart.map(item=>{
          return <article key={item} className="card items-center p-4 border lg:card-side bg-base-100 h-[200px]">
          <figure>
          <Image
    width={1000} 
    height={1000}
    className='w-[200px] h-[200px] object-cover' 
    src={item.imageURL} 
    alt={item.productName} 
/>
          </figure>
          <div className="flex flex-col items justify-center p-0 gap-4">
            <h2 className="card-title">{item.productName}</h2>
           <h1>Price: ${item.price}</h1>
            <div className="card-actions justify-end items-center">
            <CartBtns productData={item}/>
              <button className="btn btn-warning text-white">Purchase</button>
            </div>
          </div>
        </article>
        })}
        </section>
    );
};

export default CartData;