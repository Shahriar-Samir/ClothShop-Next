'use client'

import React, { useEffect, useState } from 'react';
import PriceDetails from './PriceDetails'
import Card from './Card'

const CartData = () => {
    const [cart,setCart] = useState([])
    const [cartForPrice,setCartForPrice] = useState([])

  useEffect(()=>{
      const cartData = JSON.parse(localStorage.getItem('cart'))
      if(cartData){
        setCart(cartData)
      }
      else{
        setCart([])
      }
  },[])
  useEffect(()=>{
    const cartData = JSON.parse(localStorage.getItem('cart'))
    if(cartData){
      setCartForPrice(cartData)
    }
    else{
      setCartForPrice([])
    }
},[])
const addItem = (item,itemsCount,setItemsCount)=>{
             
  setItemsCount(itemsCount+1)
  const newCart = cart.map(product=>{
            if(product.productName === item.productName){
                product.amount+=1
                return product
            }
            return product
  })
  const newCart2 = newCart.sort((a,b)=>{
    return new Date(a.position) - new Date(b.position)
  })
  setCart(newCart2)
//   if(updateCart){
//     updateCart(newCart2) 
//   } 
  localStorage.setItem('cart',JSON.stringify(newCart2))

}



const removeItem = (item,itemsCount,setItemsCount)=>{
const minimum = 1 
if(itemsCount>minimum ){
setItemsCount(itemsCount-1)
const newCart = cart.map(product=>{
  if(product.productName === item.productName){
      product.amount-=1
      return product
  }
  return product
})
const newCart2 = newCart.sort((a,b)=>{
return new Date(a.position) - new Date(b.position)
})
//   if(updateCart){
//     updateCart(newCart2) 
//   } 
return localStorage.setItem('cart',JSON.stringify(newCart2))
}
}

  const removeWholeItem = (item)=>{
    const newCart = cart.filter(productItem=>{
      return item.productName !== productItem.productName
  })
  const newCart2 = newCart.sort((a,b)=>{
    return new Date(a.position) - new Date(b.position)
  })
  localStorage.setItem('cart',JSON.stringify(newCart2))
  }

  const updateCart = (cartData)=>{
    return setCartForPrice(cartData)
  }

    return (
        <>
        <section className='flex flex-col gap-5 w-2/4'>
        {cart.map(item=>{
          return <Card key={item._key} addItem={addItem} removeItem={removeItem} removeWholeItem={removeWholeItem} item={item}/>
        })}
        </section>
        <PriceDetails cartData={cartForPrice} addItem={addItem} removeItem={removeItem}/>
        </>
        
    );
};

export default CartData;