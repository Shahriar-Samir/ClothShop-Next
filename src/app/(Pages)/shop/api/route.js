import { NextResponse } from 'next/server';
import connectDB from '../../../../lib/connectDB'


const GET =async () => {
   try{
    const client =await connectDB()
    const db = client.db('GentStyle')
    const productsCollection = db.collection('products')
    const getProducts = await productsCollection.find().toArray()
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