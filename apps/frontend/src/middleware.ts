// export { default } from 'next-auth/middleware';

// /*
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ['/'] };
// */

/*
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // const { pathname, searchParams } = req.nextUrl;

  // if (pathname === '/') {
  //   console.log(pathname, JSON.stringify(searchParams));
  //   if (!searchParams.get('page')) {
  //     console.log('asdasds');

  //     console.log('srp', JSON.stringify(req.nextUrl.searchParams));
  //     req.nextUrl.searchParams.set('page', '1');
  //     console.log('srp', JSON.stringify(req.nextUrl.searchParams));

  //     return NextResponse.rewrite(req.nextUrl + '/?page=1');
  //   }
  // }

  return NextResponse.next();
}

// */
