import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware =async (req) => {
    // __Secure-
        const token = cookies(req).get('next-auth.session-token')
        if(!token){
            return NextResponse.redirect(new URL('/api/auth/signin',req.url))
        }
        return NextResponse.next()
};
 
export const config = {
    matcher: ['/shop/productDetails/:_id*','/cart']
}