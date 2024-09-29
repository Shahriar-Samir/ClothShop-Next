import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
    // __Secure-
  const token = cookies(req).get('next-auth.session-token');
  const { pathname } = req.nextUrl;

  // If user is logged in (token exists) and tries to access login page, redirect them
  if (token && pathname === '/api/auth/signin') {
    return NextResponse.redirect(new URL('/', req.url)); // Redirect to homepage or dashboard
  }
  if (token && pathname === '/signin') {
    return NextResponse.redirect(new URL('/', req.url)); // Redirect to homepage or dashboard
  }
  if (token && pathname === '/signup') {
    return NextResponse.redirect(new URL('/', req.url)); // Redirect to homepage or dashboard
  }

  // If user is not logged in and tries to access protected routes, redirect to login
  if (!token && (pathname.startsWith('/shop') || pathname.startsWith('/cart'))) {
    return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  }

  return NextResponse.next();
};

// Define matchers for which the middleware should run
export const config = {
  matcher: [
    '/shop/productDetails/:_id*',
    '/cart',
    '/api/auth/signin',  // Include the login route
    '/signin',  // Include the login route
    '/signup',  // Include the login route
  ]
};
