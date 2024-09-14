import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="layout w-full h-full">
      <Navbar />
      <main>{children}</main>
      <div className=''>

      <Footer />
      </div>
    </div>
  );
};

export default Layout;
