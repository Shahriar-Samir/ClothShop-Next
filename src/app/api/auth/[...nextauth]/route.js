import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
    session:{
        strategy:'jwt',
    },
    secret:'asfd',
    providers:[
        CredentialsProvider({
            credentials:{
                email:{},
                password:{}
            },
            async authorize (credentials){
               const {email,password} = credentials
                if(!email || !password){
                    return null
                }
                return true
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