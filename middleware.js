import { auth } from "@/auth";
import { authRoutes, dashboardRoute } from "./routes";

export default auth(async (req) => {
  const { nextUrl } = req;
  const session = await auth();
  const isLoggedIn = !!req.auth;
  const isAuthRoute = authRoutes.includes(nextUrl.pathname); 


  const isDashboardRoute = nextUrl.pathname.startsWith(dashboardRoute)

  if (isAuthRoute){
    if (isLoggedIn){
            return Response.redirect( new URL("/dashboard", nextUrl.origin));
    }
    // else{
    //   return Response.redirect( new URL("/login", nextUrl.origin));
    // }
}


  if(isDashboardRoute){
    if(!isLoggedIn){
      return Response.redirect( new URL("/login", nextUrl.origin));
    }
    // else{
    //   return Response.redirect( new URL("/dashboard", nextUrl.origin));
    // }
  }
  
  
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};