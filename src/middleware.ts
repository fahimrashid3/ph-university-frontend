// middleware.ts
import { NextResponse, type NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

const authRoutes = ["/login"];

const roleBasedRoutes = {
  admin: [/^\/admin/],
  student: [/^\/student/],
  faculty: [/^\/faculty/],
} as const;

type Role = keyof typeof roleBasedRoutes;

type DecodedToken = {
  role: Role;
};

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("accessToken")?.value;

  if (!token) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    }

    return NextResponse.redirect(
      new URL(`/login?redirectTo=${pathname}`, request.url)
    );
  }

  try {
    const decoded = jwtDecode<DecodedToken>(token);
    const userRole = decoded.role;

    if (authRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    const allowedRoutes = roleBasedRoutes[userRole];

    const isAllowed = allowedRoutes?.some((pattern) =>
      pattern.test(pathname)
    );

    if (isAllowed) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/", request.url));
  } catch {
    return NextResponse.redirect(
      new URL(`/login?redirectTo=${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/student/:path*",
    "/faculty/:path*",
    "/login"
  ],
};