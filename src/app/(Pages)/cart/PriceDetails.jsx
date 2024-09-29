'use client'

import { useEffect, useState } from "react";

const PriceDetails = ({cartData}) => {
    const [totalPrice,setTotalPrice] = useState(cartData)
    const calculatePrice = ()=>{
        let total = 0
        if(cartData?.cart){
          for(let product of cartData.cart){
            const price = Math.ceil(parseFloat(product.price))*product.amount
            total+=price
        }
        }
        setTotalPrice(total)
    }

    useEffect(()=>{
            calculatePrice()
    },[cartData])

    return (
        <aside className='w-11/12 mx-auto max-w-[300px] md:w-1/4'>
        <div className="w-full border py-3">
          <h1 className='text-center text-lg font-semibold'>Price Details</h1>
<table className="table w-full mt-2">
  {/* row 1 */}
  <tbody>
  <tr >
    <td>Subtotal price</td>
    <td className='text-end'>{totalPrice}</td>
  </tr>
  {/* row 2 */}
  <tr>
    <td>Discount</td>
    <td className='text-end'>0</td>
  </tr>
  {/* row 3 */}
  <tr className='border-t '>
    <td className='font-bold'>Total Price</td>
    <td className='text-end font-bold'>{totalPrice}</td>
  </tr>
  </tbody>
</table>
</div>
        </aside>
    );
};

export default PriceDetails;