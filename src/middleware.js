import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (req) => {

  const token = cookies(req).get('__Secure-next-auth.session-token');
  const { pathname } = req.nextUrl;

  
  if (token && pathname === '/api/auth/signin') {
    return NextResponse.redirect(new URL('/', req.url)); 
  }
  if (token && pathname === '/signin') {
    return NextResponse.redirect(new URL('/', req.url)); 
  }
  if (token && pathname === '/signup') {
    return NextResponse.redirect(new URL('/', req.url)); 
  }

  
  if (!token && (pathname.startsWith('/shop') || pathname.startsWith('/cart'))) {
    return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  }

  return NextResponse.next();
};


export const config = {
  matcher: [
    '/shop/productDetails/:_id*',
    '/cart',
    '/api/auth/signin',  
    '/signin',  
    '/signup',  
  ]
};
