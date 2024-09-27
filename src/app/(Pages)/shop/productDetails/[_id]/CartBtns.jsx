'use client'

import { useEffect, useState } from "react";

const CartBtns = ({productData}) => {
    const cartData = JSON.parse(localStorage.getItem('cart'))
    const productDataArray = cartData? cartData.filter(item=>{
      return item.productName === productData.productName
    }) : []
    const [cartItems,setCart] = useState(cartData)
    const [itemsCount,setItemsCount] = useState(productDataArray.length<1? 0 : productDataArray[0].amount)

    const addItem = ()=>{
        if(!cartItems || cartItems<1){
            productData.amount = 1
            setItemsCount(1)
            setCart([productData])
            return localStorage.setItem('cart',JSON.stringify([productData]))
        }
        if(cartItems.length>0){
           if(productDataArray.length>0){
            const [cartProData] = productDataArray
            cartProData.amount+=1
            setItemsCount(itemsCount+1)
            const newCart = cartItems.filter(item=>{
              return item.productName === cartProData.name
            })
            return localStorage.setItem('cart',JSON.stringify([...newCart,cartProData]))
           }
           else{
            productData.amount = 1
            setItemsCount(1)
            return localStorage.setItem('cart',JSON.stringify([...cartData,productData]))
           }

        }
    }


    const removeItem = ()=>{
       if(productDataArray.length>0 && itemsCount>0){
        const [cartProData] = productDataArray
        cartProData.amount-=1
        setItemsCount(itemsCount-1)
        const newCart = cartItems.filter(item=>{
          return item.productName === cartProData.name
        })
        return localStorage.setItem('cart',JSON.stringify([...newCart,cartProData]))
       }
    }
    
    return (
        <div className="card-actions gap-2 flex-col">
      <div className='flex items-center gap-5 border p-2'>
      <button className='bg-gray-100 h-[40px] w-[40px] rounded-full' onClick={addItem}>+</button>
      <p>{itemsCount}</p>
      <button onClick={removeItem} className='bg-gray-100 h-[40px] w-[40px] rounded-full'>-</button>
      </div>
      <button className="btn bg-[#DC2626] text-white hover:bg-[#8f1919] w-[300px]" >Add to Cart</button>
    </div>
    );
};

export default CartBtns;