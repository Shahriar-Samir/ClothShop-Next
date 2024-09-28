
import { NextResponse } from 'next/server';
import Stripe from 'stripe'

const stripe = new Stripe(process.env.NEXT_SECRET_KEY)

export const POST = async (req) => {
    const request = await req.json()
    const {price} = request
    const amount = parseInt(price*100)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
              currency: 'usd',
              payment_method_types: ['card']
    })
    return new NextResponse(paymentIntent.client_secret)

};

