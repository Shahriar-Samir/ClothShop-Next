'use client'

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise =  loadStripe(process.env.NEXT_PUBLIC_KEY);




const PaymentId =  () => {
  const searchParams = useSearchParams();
  const uid = searchParams.get('uid'); 
  const id = searchParams.get('id'); 
  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(()=>{
       const cart = JSON.parse(localStorage.getItem(uid))
       const product = cart?.cart?.filter(item=>{
            return item._id === id
       })
       const [prod] = product
       const price = parseInt(prod?.amount)*parseInt(prod?.price)
       setTotalPrice(price)
       
  },[])
  
    return (
        <SessionProvider>
          <div className='h-[100vh] w-full flex justify-center items-center'>
         <Elements stripe={stripePromise}  >
      <CheckoutForm  totalPrice={totalPrice} uid={uid}/>
    </Elements>
        </div>
        </SessionProvider>
    );
};

export default PaymentId;