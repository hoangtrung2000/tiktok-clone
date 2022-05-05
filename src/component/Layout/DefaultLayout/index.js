import Header from '../components/Header';
import Sidebar from './SideBar';

import React from 'react';

function DefaulLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaulLayout;
