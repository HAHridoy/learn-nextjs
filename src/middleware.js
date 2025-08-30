import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const dummyUser ={
    role: "user",
    email: "test@gmail.com"
  }
  let isServicePage = request.nextUrl.pathname.startsWith("/services")
  let isAdmin = dummyUser.role == 'user';

  if(isServicePage && !isAdmin){
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}
 
