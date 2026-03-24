import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      textAlign: 'center',
      marginTop: '20px'
    }}>
      <div className="card-shell" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="card" style={{ padding: '60px 40px' }}>
          <div className="card-accent" style={{ background: 'linear-gradient(90deg, var(--accent1), var(--accent2), var(--primary))' }}></div>
          
          <h1 style={{
            fontSize: '100px',
            fontWeight: 800,
            margin: '0 0 8px 0',
            lineHeight: 1,
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent1) 50%, var(--accent2) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            404
          </h1>
          
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>
            Page not found
          </h2>
          
          <p style={{ fontSize: '16px', color: 'var(--textSecondary)', marginBottom: '32px' }}>
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed in the first place.
          </p>
          
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button className="btn-primary" style={{ padding: '14px 32px' }}>
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
