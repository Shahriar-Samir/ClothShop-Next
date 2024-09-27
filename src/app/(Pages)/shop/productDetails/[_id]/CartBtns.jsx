'use client'

import Link from "next/link";
import { useState } from "react";

const CartBtns = ({productData,cartPage}) => {
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
              return item.productName !== cartProData.productName
            })
            setCart([...newCart,cartProData])
            return localStorage.setItem('cart',JSON.stringify([...newCart,cartProData]))
           }
           else{
            setItemsCount(1)
            productData.amount = 1
            return localStorage.setItem('cart',JSON.stringify([...cartData,productData]))
           }

        }
    }


    const removeItem = ()=>{
      const minimum = cartPage? 1 : 0
       if(productDataArray.length>0 && itemsCount>minimum && itemsCount!==1){
        const [cartProData] = productDataArray
        cartProData.amount-=1
        setItemsCount(itemsCount-1)
        const newCart = cartItems.filter(item=>{
          return item.productName !== cartProData.productName
        })
        return localStorage.setItem('cart',JSON.stringify([...newCart,cartProData]))
       }
       if(productDataArray.length>0 && itemsCount>minimum && itemsCount===1){
          return removeFullItem(productData)
       }
    }

    const removeFullItem = (item)=>{
      const newCart = cartItems.filter(productItem=>{
          return item.productName !== productItem.productName
      })
      localStorage.setItem('cart',JSON.stringify(newCart))
      setCart(newCart)
      setItemsCount(0)
}
    
    return (
      <div className='flex items-center gap-5 border p-2'>
      <button className='bg-gray-100 h-[40px] w-[40px] rounded-full' onClick={addItem}>+</button>
      <p>{itemsCount}</p>
      <button onClick={removeItem} className='bg-gray-100 h-[40px] w-[40px] rounded-full'>-</button>
      </div>
    );
};

export default CartBtns;