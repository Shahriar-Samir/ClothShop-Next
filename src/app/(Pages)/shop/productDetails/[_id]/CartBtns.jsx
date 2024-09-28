'use client'

import Link from "next/link";
import { useState } from "react";

const CartBtns = ({productData,cartPage,updateCart,uid}) => {
  const cartData = JSON.parse(localStorage.getItem(uid))
  const productDataArray = cartData? cartData?.cart?.filter(item=>{
        return item.productName === productData.productName
      }) : []
  const [cartItems,setCart] = useState(cartData)
  const [itemsCount,setItemsCount] = useState(productDataArray?.length<1 || !productDataArray? 0 : productDataArray[0]?.amount)
 

  const addItem = ()=>{
          const date = new Date()
            if(!cartItems?.cart || cartItems?.cart.length<1){
                productData.amount = 1
                productData.position = date.toISOString() 
                setItemsCount(1)
                setCart({uid:uid,cart:[productData]})
                return localStorage.setItem(uid,JSON.stringify({uid:uid,cart:[productData]}))
            }
            if(cartItems?.cart.length>0){
               if(productDataArray.length>0){
                const [cartProData] = productDataArray
                cartProData.amount+=1
                setItemsCount(itemsCount+1)
                const newCart = cartItems.cart.filter(item=>{
                  return item.productName !== cartProData.productName
                })
                const newCart2 = [...newCart,cartProData].sort((a,b)=>{
                  return new Date(a.position) - new Date(b.position)
                })
                setCart({uid:uid,cart:newCart2})
                if(updateCart){
                  updateCart({uid:uid,cart:newCart2}) 
               }
               return localStorage.setItem(uid,JSON.stringify({uid:uid,cart:newCart2}))
              }
               else{
                setItemsCount(1)
                productData.amount = 1
                productData.position = date.toISOString() 
                return localStorage.setItem(uid,JSON.stringify({uid:uid,cart:[...cartData.cart,productData]}))
               }
    
            
        }}


    const removeItem = ()=>{
      const minimum = cartPage? 1 : 0
       if(productDataArray.length>0 && itemsCount>minimum && itemsCount!==1){
        const [cartProData] = productDataArray
        cartProData.amount-=1
        setItemsCount(itemsCount-1)
        const newCart = cartItems.cart.filter(item=>{
          return item.productName !== cartProData.productName
        })
        const newCart2 = [...newCart,cartProData].sort((a,b)=>{
          return new Date(a.position) - new Date(b.position)
        })
        if(updateCart){
          updateCart({uid:uid,cart:newCart2}) 
        } 
        return localStorage.setItem(uid,JSON.stringify({uid:uid,cart:newCart2}))
       }
       if(productDataArray.length>0 && itemsCount>minimum && itemsCount===1){
          return removeFullItem(productData)
       }
    }

    const removeFullItem = (item)=>{
      const newCart = cartItems.cart.filter(productItem=>{
          return item.productName !== productItem.productName
      })
      const newCart2 = newCart.sort((a,b)=>{
        return new Date(a.position) - new Date(b.position)
      })
      localStorage.setItem(uid,JSON.stringify({uid:uid,cart:newCart2}))
      setCart({uid:uid,cart:newCart2})
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





// const CartBtns = ({productData,cartPage,updateCart,uid}) =>{
//   const cartData = JSON.parse(localStorage.getItem(uid))
//   const productDataArray = cartData? cartData?.cart?.filter(item=>{
//     return item.productName === productData.productName
//   }) : []
//   const [cartItems,setCart] = useState(cartData)
//   const [itemsCount,setItemsCount] = useState(productDataArray?.length<1? 0 : productDataArray[0]?.amount)
 

//     const addItem = ()=>{
//       const date = new Date()
//         if(!cartItems || cartItems?.cart.length<1){
//             productData.amount = 1
//             productData.position = date.toISOString() 
//             setItemsCount(1)
//             setCart({uid:uid,cart:[productData]})
//             return localStorage.setItem(uid,JSON.stringify({uid:uid,cart:[productData]}))
//         }
//         if(cartItems?.cart.length>0){
//            if(productDataArray.length>0){
//             const [cartProData] = productDataArray
//             cartProData.amount+=1
//             setItemsCount(itemsCount+1)
//             const newCart = cartItems.cart.filter(item=>{
//               return item.productName !== cartProData.productName
//             })
//             const newCart2 = [...newCart,cartProData].sort((a,b)=>{
//               return new Date(a.position) - new Date(b.position)
//             })
//             setCart({uid:uid,cart:newCart2})
//             if(updateCart){
//               updateCart({uid:uid,cart:newCart2}) 
//             return localStorage.setItem(uid,JSON.stringify({uid:uid,cart:newCart2}))
//            }
//            else{
//             setItemsCount(1)
//             productData.amount = 1
//             productData.position = date.toISOString() 
//             return localStorage.setItem(uid,JSON.stringify({uid:uid,cart:[...cartData.cart,productData]}))
//            }

//         }
//     }


//     const removeItem = ()=>{
//       const minimum = cartPage? 1 : 0
//        if(productDataArray.length>0 && itemsCount>minimum && itemsCount!==1){
//         const [cartProData] = productDataArray
//         cartProData.amount-=1
//         setItemsCount(itemsCount-1)
//         const newCart = cartItems.cart.filter(item=>{
//           return item.productName !== cartProData.productName
//         })
//         const newCart2 = [...newCart,cartProData].sort((a,b)=>{
//           return new Date(a.position) - new Date(b.position)
//         })
//         if(updateCart){
//           updateCart({uid:uid,cart:newCart2}) 
//         } 
//         return localStorage.setItem(uid,JSON.stringify({uid:uid,cart:newCart2}))
//        }
//        if(productDataArray.length>0 && itemsCount>minimum && itemsCount===1){
//           return removeFullItem(productData)
//        }
//     }

//     const removeFullItem = (item)=>{
//       const newCart = cartItems.cart.filter(productItem=>{
//           return item.productName !== productItem.productName
//       })
//       const newCart2 = newCart.sort((a,b)=>{
//         return new Date(a.position) - new Date(b.position)
//       })
//       localStorage.setItem(uid,JSON.stringify({uid:uid,cart:newCart2}))
//       setCart({uid:uid,cart:newCart2})
//       setItemsCount(0)
// }
    
//     return (
//       <div className='flex items-center gap-5 border p-2'>
//       <button className='bg-gray-100 h-[40px] w-[40px] rounded-full' onClick={addItem}>+</button>
//       <p>{itemsCount}</p>
//       <button onClick={removeItem} className='bg-gray-100 h-[40px] w-[40px] rounded-full'>-</button>
//       </div>
//     );
// };

// export default CartBtns