import { ReactNode } from 'react';

import { Header } from '@landing-page/pages/home/layout/header';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;