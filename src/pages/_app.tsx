import type { AppProps } from 'next/app';

import Layout from '@components/Layout';

import '@assets/scss/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout preview={pageProps.preview}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
