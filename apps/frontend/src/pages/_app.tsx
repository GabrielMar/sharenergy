import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Head from '../components/Head';
import '../styles/globals.css';
import Layout from '../components/Layout';

const queryClient = new QueryClient();

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const layout = (Component as any).layout;

  return (
    <>
      <Head />
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          {layout ? (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
}

export default App;
