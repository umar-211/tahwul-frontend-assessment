import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Header from '../Header';
import './Layout.css';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="layout__main">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <div className="layout__content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
