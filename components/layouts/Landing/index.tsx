import { ReactNode } from 'react';
import Header from './Header';

import { Page } from 'components/Page.styled';

export function StoryWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <style jsx>{Page}</style>
    </>
  );
}

export default function Landing({
  locale = 'sg',
  children,
}: {
  locale: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <style jsx>{Page}</style>
    </>
  );
}
