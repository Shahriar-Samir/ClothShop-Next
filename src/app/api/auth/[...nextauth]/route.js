import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import connectDB from "../../../../lib/connectDB";
import { MongoDBAdapter } from "@auth/mongodb-adapter";


const authOptions = {
    session:{
        strategy:'jwt',
    },
    adapter: MongoDBAdapter(connectDB),
    secret:process.env.NEXTAUTH_SECRET,
    providers:[
        CredentialsProvider({
            credentials:{
                email:{},
                password:{}
            },
            async authorize (credentials){
                const client =await connectDB()
                const db = client.db('GentStyle')
               const userCollection = db.collection('users')
               const {email,pass} = credentials
                if(!email || !pass){
                    return null
                }
                const userExist = await userCollection.findOne({email:email})
                if(!userExist){
                    return null
                }
                else{
                    if(pass === userExist.pass){
                        return {email,pass,uid:userExist._id}
                    }
                    return null
                }
                    

            }
        })
    ],
    callbacks:{
        async jwt({ token, account, user }) {

            if (account) {    
              token.uid = user.uid
            }
            return token
          },
          async session({session,user,token}){
            session.user.uid = token.uid
            return session
          }
},
    pages:{
        signIn:'/signin'
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST, authOptions};