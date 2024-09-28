import CartBtns from '../shop/productDetails/[_id]/CartBtns';
import { MdOutlineCancel } from "react-icons/md";
import React, { useEffect, useState } from 'react';

import Image from 'next/image';

const Card = ({item,addItem,removeItem,removeWholeItem}) => {
  const [itemsCount,setItemsCount] = useState(item.amount)
  const [hide,setHide] = useState(false)
  const hideItem = ()=>{
      setHide(true)
  }
   
 
    return (
        <article  className={`card items-center p-4 border lg:card-side bg-base-100  w-full justify-center gap-10 ${hide? 'hidden':''} `}>
            <MdOutlineCancel onClick={()=>{
              removeWholeItem(item)
              hideItem()
            }}  className={`absolute top-2 text-xl right-2 `}/>
          <figure className="w-[200px] h-[200px]">
          <Image
    width={1000} 
    height={1000}
    className='w-full h-full object-cover' 
    src={item.imageURL} 
    alt={item.productName} 
/>
          </figure>
          <div className="flex flex-col items justify-center p-0 gap-4">
            <h2 className="card-title">{item.productName}</h2>
           <h1>Price: ${item.price}</h1>
            <div className="card-actions justify-end items-center">
            <div className='flex items-center gap-5 border p-2'>
      <button className='bg-gray-100 h-[40px] w-[40px] rounded-full' onClick={()=>addItem(item,itemsCount,setItemsCount)}>+</button>
      <p>{itemsCount}</p>
      <button onClick={()=>removeItem(item,itemsCount,setItemsCount)} className='bg-gray-100 h-[40px] w-[40px] rounded-full'>-</button>
      </div>
             
            </div>
          </div>
        </article>
    );
};

export default Card;