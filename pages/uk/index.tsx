import { ReactNode } from 'react';
import { GetStaticProps } from 'next';
import { useAmp } from 'next/amp';
import { NextSeo } from 'next-seo';
import { getPage } from 'utils/strapi';
import Layout from 'components/layouts/Landing';

export const config = { amp: 'hybrid' };

export const getStaticProps: GetStaticProps = async () => {
  const page = await getPage('uk-main');

  return {
    props: { page },
  };
};

export default function Page({ page }: { page: Page }) {
  const isAmp = useAmp();

  return (
    <>
      <NextSeo title={page.meta.title} />
      <h1>{page.name}</h1>
      <p>{isAmp ? 'AMP Page' : 'Normal Page'}</p>
    </>
  );
}

Page.getLayout = function getLayout(pageNode: ReactNode) {
  return <Layout locale="uk">{pageNode}</Layout>;
};
