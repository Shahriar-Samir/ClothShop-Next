import connectDB from "@/lib/connectDB";


export const GET = async () => {
    return Response.json({
        message: 'First api'
    })
};



export const POST = async (request) => {
    const newUser = await request.json()
    try{
        const db = await connectDB()
        const userCollection = db.collection('users')
        const res = await userCollection.insertOne(newUser.query)
        return Response.json(res)
    }
    catch(err){
        console.log(err)
    }
};
