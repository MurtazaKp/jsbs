// app/middleware.js
import { NextResponse } from "next/server";

const protectedRoutes = [
  "/campus-facilities",
  "/graduate-profile",
  "/fees-structure",
];

export function middleware(request) {
  const isLoggedIn = request.cookies.get("isLogin")?.value === "true";
  const { pathname } = request.nextUrl;

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}
