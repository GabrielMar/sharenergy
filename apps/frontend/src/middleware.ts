import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.has('access_token');
  const signinPage = new URL('/signin', req.url);

  // if (!req.url.startsWith(signinPage.toString()) && !token)
  //   return NextResponse.redirect(signinPage.toString());

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|_next/static|_next/image|public|favicon.ico).*)'],
};
