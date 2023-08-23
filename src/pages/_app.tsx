import type { AppProps } from 'next/app';

import '@assets/scss/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;