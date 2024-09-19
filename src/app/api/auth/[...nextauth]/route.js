import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
    session:{
        strategy:'jwt',
    },
    secret:process.env.NEXT_AUTH_SECRET,
    providers:[
        CredentialsProvider({
            credentials:{
                email:{},
                password:{}
            },
            async authorize (credentials){
               const {email,pass} = credentials
                if(!email || !pass){
                    return null
                }
                return {email,pass}
            }
        })
    ],
    callbacks:[
        
    ],
    pages:{
        signIn:'/signin'
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST};