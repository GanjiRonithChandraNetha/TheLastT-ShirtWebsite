import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Policies', path: '/privacy' },
    { name: 'Reset Password', path: '/reset-password' }
  ];

  return (
    <div className="container">
      <nav className="navbar" style={{ borderRadius: '16px' }}>
        {navItems.map(item => {
          const isActive = location.pathname === item.path || (item.name === 'Policies' && ['/privacy', '/terms', '/return', '/shipping', '/refund'].includes(location.pathname));
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};
export default Layout;
