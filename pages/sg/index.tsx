import { ReactNode } from 'react';
import { GetStaticProps } from 'next';
import { useAmp } from 'next/amp';
import { NextSeo } from 'next-seo';
import { getPage } from 'utils/strapi';
import { getPost } from 'utils/ghost';
import { getAmp } from 'utils/ghost-amp';

import { Img } from 'components/atoms/Img';
import Layout from 'components/layouts/Landing';

import css from 'styled-jsx/css';

export const config = { amp: 'hybrid' };

const Custom = css.global`
  .page {
    .header {
      background-color: #b9d2e7;
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const page = await getPage('sg-main');
  const post = await getPost(
    'renting-your-first-office-space-in-singapore-a-step-by-step-guide',
  );
  const amp = await getAmp(post && post.html);

  return {
    props: { page, post, amp },
  };
};

interface PageProps {
  page: Page;
  post: any;
  amp: string;
}

export default function Page({ page, post, amp }: PageProps) {
  const isAmp = useAmp();

  return (
    <>
      <NextSeo title={page.meta.title} />
      <h1>{page.name}</h1>

      <Img
        src="https://osome.com/assets/new/img/avatar/osome/helena@2x.jpg"
        width={160}
        height={160}
        priority={true}
        layout="fixed"
        alt="Helena"
        amp={isAmp}
      />

      <h2>{post.title}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: isAmp ? amp : post.html,
        }}
      />

      <style jsx global>
        {Custom}
      </style>
    </>
  );
}

Page.getLayout = function getLayout(pageNode: ReactNode) {
  return <Layout locale="sg">{pageNode}</Layout>;
};
