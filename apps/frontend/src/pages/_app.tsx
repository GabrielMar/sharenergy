import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Head from '../components/Head';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { useUser } from '../lib/hooks/useUser';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const layout = (Component as any).layout;

  const { token } = useUser((state) => ({ token: state.token }));

  return (
    <>
      <Head />
      <QueryClientProvider client={queryClient}>
        {layout ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </QueryClientProvider>
    </>
  );
}

export default App;
