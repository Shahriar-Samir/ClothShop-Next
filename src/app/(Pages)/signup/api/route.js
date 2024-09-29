
import { NextResponse } from 'next/server';
import connectDB from '../../../../lib/connectDB'




export const POST = async (request) => {
    const newUser = await request.json()
    try{
        const client =await connectDB()
        const db = client.db('GentStyle')
        const userCollection = db.collection('users')
        const userExist = await userCollection.findOne({email:newUser.query.email})
        if(userExist){
            return new NextResponse('user already exist',{status:409})
        }
        const userCreated = await userCollection.insertOne(newUser.query)
        if(userCreated){
            return new NextResponse('userCreated',{status:200})
        }
    }
    catch(err){
        console.log(err)
    }
};
