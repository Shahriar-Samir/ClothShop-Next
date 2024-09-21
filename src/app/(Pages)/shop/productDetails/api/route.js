import { NextResponse } from 'next/server';
import connectDB from '../../../../../lib/connectDB';
import { ObjectId } from 'mongodb';

const GET =async (req) => {
    const url = new URL(req.url)
    const params = new URLSearchParams(url.searchParams)

    try{
        const db =await connectDB()
        const productsCollection = db.collection('products')
        const id = new ObjectId(params.get('id'))
        const product = await productsCollection.findOne({_id:id})
        if(product){
            console.log(product)
            return NextResponse.json(product,{status:200})
        }
        else{
            return new NextResponse('Could not found')
        }
    }
    catch(err){
        console.log(err)
    }
};

export  {GET};