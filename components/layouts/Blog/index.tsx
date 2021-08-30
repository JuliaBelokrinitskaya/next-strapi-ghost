import { ReactNode } from 'react';

export default function Landing({ children }: { children: ReactNode }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
