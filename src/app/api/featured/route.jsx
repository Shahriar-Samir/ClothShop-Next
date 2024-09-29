import { NextResponse } from 'next/server';
import connectDB from '../../../lib/connectDB'


const GET =async () => {
   try{
    const db = await connectDB()
    const productsCollection = db.collection('products')
    const getProducts = await productsCollection.find().sort({price:-1}).limit(3).toArray()
    if(getProducts.length>0){
        return NextResponse.json(getProducts,{status:200})
    }
    else{
        return new NextResponse(null,{status:200})
    }
   }
   catch(err){
    console.log(err)
   }
};

export {GET};