'use client'

import React, { useEffect, useState } from 'react';
import PriceDetails from './PriceDetails'
import Card from './Card'

const CartData = ({uid}) => {
    const [cart,setCart] = useState()
    const [cartForPrice,setCartForPrice] = useState()
    const [trigger,setTrigger] = useState(false)

  useEffect(()=>{
      const cartData = JSON.parse(localStorage.getItem(uid))
      if(cartData){
        setCart(cartData)
      }
      else{
        setCart({})
      }
  },[])
  useEffect(()=>{
    const cartData = JSON.parse(localStorage.getItem(uid))
    if(cartData){
      setCartForPrice(cartData)
    }
    else{
      setCartForPrice({})
    }
},[])
const addItem = (item,itemsCount,setItemsCount)=>{
             
  setItemsCount(itemsCount+1)
  const newCart = cart?.cart.map(product=>{
            if(product.productName === item.productName){
                product.amount+=1
                return product
            }
            return product
  })
  const newCart2 = newCart.sort((a,b)=>{
    return new Date(a.position) - new Date(b.position)
  })
  setCart({uid:uid,cart:newCart2})

     updateCart({uid:uid,cart:newCart2}) 

  localStorage.setItem(uid,JSON.stringify({uid:uid,cart:newCart2}))

}



const removeItem = (item,itemsCount,setItemsCount)=>{
const minimum = 1 
if(itemsCount>minimum ){
setItemsCount(itemsCount-1)
const newCart = cart.cart.map(product=>{
  if(product.productName === item.productName){
      product.amount-=1
      return product
  }
  return product
})
const newCart2 = newCart.sort((a,b)=>{
return new Date(a.position) - new Date(b.position)
})

    updateCart({uid:uid,cart:newCart2}) 

return localStorage.setItem(uid,JSON.stringify({uid:uid,cart:newCart2}))
}
}

  const removeWholeItem = (item)=>{
    const newCart = cart?.cart.filter(productItem=>{
      return item.productName !== productItem.productName
  })
  const newCart2 = newCart.sort((a,b)=>{
    return new Date(a.position) - new Date(b.position)
  })
  updateCart({uid:uid,cart:newCart2})
  setCart({uid:uid,cart:newCart2})
  localStorage.setItem(uid,JSON.stringify({uid:uid,cart:newCart2}))
  setTrigger(!trigger)
  }

  const updateCart = (cartData)=>{
    return setCartForPrice(cartData)
  }
  


    return (
        <>
        {cart && cart?.cart?.length>0?  <section className='flex flex-col gap-5 w-2/4'>
        {cart.cart.map(item=>{
          return <Card key={item._key} addItem={addItem} removeItem={removeItem} removeWholeItem={removeWholeItem} item={item} trigger={trigger} uid={uid}/>
        })}
        </section>:
        <section className='w-2/4 flex justify-center items-center'>
        <p className='text-lg font-semibold'>Cart is empty</p>

        </section>
}
        <PriceDetails cartData={cartForPrice}/>
        </>
        
    );
};

export default CartData;