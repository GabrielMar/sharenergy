import { PropsWithChildren } from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="relative min-h-[calc(100vh_-_5rem)] bg-white pt-16 pb-8">
        <div className="container mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
}
