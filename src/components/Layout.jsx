import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Policies', path: '/privacy' },
    { name: 'Reset Password', path: '/reset-password' }
  ];

  const VITE_BUSINESS_NAME = import.meta.env.VITE_BUSINESS_NAME || "ENV NOT LOADED";
  const VITE_PHONE = import.meta.env.VITE_PHONE || "ENV NOT LOADED";
  const VITE_EMAIL = import.meta.env.VITE_EMAIL || "ENV NOT LOADED";
  const VITE_GST_PIN = import.meta.env.VITE_GST_PIN || "ENV NOT LOADED";
  const VITE_REGISTERED_ADDRESS = import.meta.env.VITE_REGISTERED_ADDRESS || "ENV NOT LOADED";

  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-list">
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
        </div>
        <button
          className="btn-primary"
          onClick={() => setIsContactOpen(true)}
          style={{ margin: 0, padding: '8px 16px', fontSize: '13px', whiteSpace: 'nowrap' }}
        >
          CONTACT US
        </button>
      </nav>

      <div className="main-content">
        {children}
      </div>

      <footer style={{
        marginTop: '40px',
        padding: '32px',
        backgroundColor: 'var(--gray)',
        border: '2px solid var(--border)',
        borderRadius: '16px',
      }}>
        <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Contact Us</h3>
        <p style={{ marginBottom: '24px', fontSize: '15px' }}>
          For any questions regarding our policies, your data, or your orders, please contact our support desk:
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px'
        }}>
          <div className="msg-block" style={{ marginBottom: 0, backgroundColor: 'var(--white)' }}>
            <div className="msg-label">Operating Business</div>
            <div className="msg-text">{VITE_BUSINESS_NAME}</div>
          </div>

          <div className="msg-block" style={{ marginBottom: 0, backgroundColor: 'var(--white)' }}>
            <div className="msg-label">Email</div>
            <div className="msg-text">{VITE_EMAIL}</div>
          </div>

          <div className="msg-block" style={{ marginBottom: 0, backgroundColor: 'var(--white)' }}>
            <div className="msg-label">Phone</div>
            <div className="msg-text">+91 {VITE_PHONE}</div>
          </div>

          <div className="msg-block" style={{ marginBottom: 0, backgroundColor: 'var(--white)' }}>
            <div className="msg-label">Registered Address</div>
            <div className="msg-text">{VITE_REGISTERED_ADDRESS}</div>
          </div>

          <div className="msg-block" style={{ marginBottom: 0, backgroundColor: 'var(--white)' }}>
            <div className="msg-label">GST PIN / Registration</div>
            <div className="msg-text">{VITE_GST_PIN}</div>
          </div>
        </div>
      </footer>

      {isContactOpen && (
        <div className="zoom-modal-overlay" onClick={() => setIsContactOpen(false)}>
          <div className="zoom-modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px', padding: '0' }}>
            <div className="zoom-modal-header" style={{ backgroundColor: 'var(--primary)' }}>
              <h3 style={{ margin: 0, fontSize: '24px' }}>Contact Details</h3>
              <button className="btn-close-modal" onClick={() => setIsContactOpen(false)} style={{ marginLeft: 'auto', padding: '4px 12px' }}>
                X
              </button>
            </div>
            <div className="zoom-modal-body" style={{ flexDirection: 'column', gap: '16px', padding: '24px' }}>
              <div className="msg-block" style={{ width: '100%', marginBottom: 0, backgroundColor: 'var(--gray)' }}>
                <div className="msg-label">Operating Business</div>
                <div className="msg-text">{VITE_BUSINESS_NAME}</div>
              </div>
              <div className="msg-block" style={{ width: '100%', marginBottom: 0, backgroundColor: 'var(--gray)' }}>
                <div className="msg-label">Email</div>
                <div className="msg-text">{VITE_EMAIL}</div>
              </div>
              <div className="msg-block" style={{ width: '100%', marginBottom: 0, backgroundColor: 'var(--gray)' }}>
                <div className="msg-label">Phone</div>
                <div className="msg-text">+91 {VITE_PHONE}</div>
              </div>
              <div className="msg-block" style={{ width: '100%', marginBottom: 0, backgroundColor: 'var(--gray)' }}>
                <div className="msg-label">Registered Address</div>
                <div className="msg-text">{VITE_REGISTERED_ADDRESS}</div>
              </div>
              <div className="msg-block" style={{ width: '100%', marginBottom: 0, backgroundColor: 'var(--gray)' }}>
                <div className="msg-label">GST PIN / Registration</div>
                <div className="msg-text">{VITE_GST_PIN}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Layout;
