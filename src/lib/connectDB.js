import { MongoClient, ServerApiVersion } from "mongodb";

let db

const connectDB = async () => {
    if(db) return db;
    try{
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI
        const client = new MongoClient(uri, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            },
            maxPoolSize: 50,    
            minPoolSize: 5,     
            maxIdleTimeMS: 30000,
       
          });
          db = client.db('GentStyle')
          return db
    }
    finally {
      // Ensures that the client will close when you finish/error
      // await client.close();
    }

};

export default connectDB;