import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app'
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <main className="container">
        <Header />
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}

export default MyApp;
