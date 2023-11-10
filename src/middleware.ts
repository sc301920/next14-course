// import { request } from 'http'
import { NextResponse } from 'next/server' 
import type { NextRequest } from 'next/server'
const isLogin:Boolean = true
export function middleware(request: NextRequest) {
    // return NextResponse.json({
    //     hello: 'world'
    // })
    // if(!isLogin && request.url == 'http://localhost:3000/profile'){
    //     return NextResponse.redirect(new URL('/', request.url));
    // }
    let cookie = request.cookies.get('my-cookie')
    let headers = new Headers(request.headers)
    if(isLogin){
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
    matcher: ['/polife']
}