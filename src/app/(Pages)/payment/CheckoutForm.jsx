'use client'
import {useStripe, useElements, PaymentElement, CardElement} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const CheckoutForm = ({totalPrice,user}) => {
  const session = useSession()
  const router = useRouter()
  const email = session.data?.user?.email

  const stripe = useStripe();
  const elements = useElements();
  const [cardError,setCardError] = useState('')
  const [clientSecret,setClientSecret] = useState()
  


  useEffect(()=>{
    axios.post(`/payment/api`, {price:totalPrice? totalPrice : 1})
    .then(res=>{
        setClientSecret(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
},[totalPrice])





  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
   const card = elements.getElement(CardElement)
   if(card === null){
    return
}
const {error,paymentMethod} = await stripe.createPaymentMethod({
  type: 'card',
  card
})



    if (error) {
      setCardError(error.message)
    }  else{
      console.log(paymentMethod)
      setCardError('')
  }
  const {paymentIntent,error:errorPayment} = await stripe.confirmCardPayment(clientSecret, {
    payment_method:{
        card: card,
        billing_details: {
            email : email || 'anon',
            name : user?.displayName || 'anon' ,
        }
    }
})
if(errorPayment){
  console.log(errorPayment.message)
}

   if(paymentIntent.status==='succeeded'){
    router.push('/payment/success')
   }



  };

  return (
    <form onSubmit={handleSubmit}>
        <h1 className='text-4xl font-bold text-center'>Payment</h1>
      <CardElement className='mt-4 border p-2 rounded-lg w-[250px]'
      options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }} />
      <button type="submit" className='btn mt-5 w-full bg-bgCommon text-white' >
      Pay Now
    </button>
    </form>
  )
};

export default CheckoutForm;