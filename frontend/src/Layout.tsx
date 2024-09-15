import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import useUserStore from './store/store';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  const { fetchUser, getContent } = useUserStore();

  useEffect(() => {
    getContent();
    fetchUser();
}, []);

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

