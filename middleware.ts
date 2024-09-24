import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware"


// export function middleware(request: NextRequest){
//     return NextResponse.redirect(new URL("/new-page", request.url))
// }

// export default middleware
//By using matcher if we pass a string or an array of endpoints
//The redirect will replace the endpoint /users with the "/new-page" endpoint
export const config = {
    //* means 0 or more parameters
    //add star means we will be redirected to the /new-page
    //whether /users, /users/1

    //+: one or more
    //?: zero or one
    matcher: ["/users/:id*"]
}