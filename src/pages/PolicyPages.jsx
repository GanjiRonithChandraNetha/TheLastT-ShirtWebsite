import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const PoliciesLayout = ({ children }) => {
  const location = useLocation();
  const tabs = [
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
    { name: 'Return', path: '/return' },
    { name: 'Shipping', path: '/shipping' },
    { name: 'Refund', path: '/refund' }
  ];

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <div className="msg-block" style={{ backgroundColor: '#FEF2F2', borderColor: '#FCA5A5', marginBottom: '24px' }}>
        <div className="msg-label" style={{ color: '#991B1B' }}>Important Disclaimer</div>
        <div className="msg-text" style={{ color: '#991B1B' }}>Please note that these policies are not actual legal policies; it's just dummy data.</div>
      </div>
      <h2 style={{ marginBottom: '24px' }}>Legal Center</h2>
      
      <div style={{ display: 'flex', overflowX: 'auto', gap: '12px', paddingBottom: '16px', marginBottom: '24px', msOverflowStyle: 'none', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch', borderBottom: '1px solid var(--border)' }}>
        {tabs.map(tab => {
          const isActive = location.pathname === tab.path;
          return (
            <Link key={tab.path} to={tab.path} style={{ textDecoration: 'none', flexShrink: 0 }}>
              <div className={`policy-pill ${isActive ? 'active' : 'inactive'}`}>
                {tab.name}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="card-shell">
         <div className="card" style={{ padding: '32px' }}>
            {children}
         </div>
      </div>
    </div>
  );
};

export const PrivacyPolicy = () => (
  <PoliciesLayout>
    <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Privacy Policy</h3>
    <p>We respect your privacy. All your data is encrypted and stored securely using industry-standard protocols.</p>
    <div className="msg-block">
      <div className="msg-label">1. Data Collection</div>
      <div className="msg-text">We collect necessary technical information for app functionality. We never sell your personal footprint.</div>
    </div>
    <div className="msg-block">
      <div className="msg-label">2. Data Usage</div>
      <div className="msg-text">We use product telemetry exclusively to provide a flawless user experience and stabilize our services.</div>
    </div>
  </PoliciesLayout>
);

export const TermsConditions = () => (
  <PoliciesLayout>
    <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Terms & Conditions</h3>
    <p>By accessing or using our services, you agree to be bound by these terms.</p>
    <div className="msg-block">
      <div className="msg-label">Account Security</div>
      <div className="msg-text">You are responsible for safeguarding the credentials that you use to access the service architecture.</div>
    </div>
    <div className="msg-block">
      <div className="msg-label">Termination</div>
      <div className="msg-text">We reserve the right to suspend or terminate accounts that violate our comprehensive usage guidelines.</div>
    </div>
  </PoliciesLayout>
);

export const ReturnPolicy = () => (
  <PoliciesLayout>
    <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Return Policy</h3>
    <p>Our commitment to excellence ensures you may return physical goods within 30 days of receipt.</p>
    <p>Items must be securely packaged in original condition with all manufacturing tags attached.</p>
  </PoliciesLayout>
);

export const ShippingPolicy = () => (
  <PoliciesLayout>
    <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Shipping Policy</h3>
    <p>We leverage a global logistics network. Orders are processed consistently within 2-3 business days.</p>
    <p>Estimated transit times and corresponding costs are dynamically calculated at checkout.</p>
  </PoliciesLayout>
);

export const RefundPolicy = () => (
  <PoliciesLayout>
    <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Refund / Cancellation Policy</h3>
    <p>Digital infrastructure subscriptions can be canceled at any time from your billing dashboard.</p>
    <p>Refunds for digital products are evaluated on a case-by-case basis. To request a review, please contact our support desk.</p>
  </PoliciesLayout>
);
