import React, { ReactNode } from 'react';

import Header from '@components/Layout/Header';
import Preview from '@components/common/Preview';

interface LayoutProps {
  children: ReactNode;
  preview: boolean;
}

const Layout = ({ children, preview }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <Preview preview={preview} />
      <main className="main-content">{children}</main>
      {/* // Footer */}
    </div>
  );
};

export default Layout;
