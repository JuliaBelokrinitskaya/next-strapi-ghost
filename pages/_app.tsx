import { ReactNode, useEffect } from 'react';
import { AppLayoutProps } from 'next/app';

function OsomeApp({ Component, pageProps }: AppLayoutProps) {
  const lang = pageProps.page
    ? `${pageProps.page.lang}-${pageProps.page.branch}`
    : 'en-SG';

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return getLayout(<Component {...pageProps} />);
}

export default OsomeApp;
