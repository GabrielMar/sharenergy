import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from '../../../lib/prismadb';

export default NextAuth({
  // session: {
  //   strategy: 'jwt',
  // },
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/signin',
    newUser: '/signup',
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
        remember: { label: 'Remember', type: 'checkbox' },
      },
      async authorize(credentials, _req) {
        return credentials;
        // const res = await fetch('/your/endpoint', {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { 'Content-Type': 'application/json' },
        // });
        // const user = await res.json();

        // if (res.ok && user) return user;

        // return null;
      },
    }),
  ],

  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   const isAllowedToSignIn = true;
    //   if (isAllowedToSignIn) {
    //     return true;
    //   } else {
    //     // Return false to display a default error message
    //     // return false;
    //     // Or you can return a URL to redirect to:
    //     // return '/unauthorized'
    //     return '/logggggggggggggg';
    //   }
    // },
  },
});
