import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const VITE_BUSINESS_NAME = import.meta.env.VITE_BUSINESS_NAME || "ENV NOT LOADED";
const VITE_REFUND_SUPPORT_NUMBER = import.meta.env.VITE_REFUND_SUPPORT_NUMBER || "ENV NOT LOADED";
const VITE_EMAIL = import.meta.env.VITE_EMAIL || "ENV NOT LOADED";
const VITE_GST_PIN = import.meta.env.VITE_GST_PIN || "ENV NOT LOADED";

console.log(VITE_BUSINESS_NAME);
console.log(VITE_REFUND_SUPPORT_NUMBER);
console.log(VITE_EMAIL);
console.log(VITE_GST_PIN);


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
    <p>We respect your privacy and are committed to protecting it. The Last Sign is operated by {VITE_BUSINESS_NAME}. We only collect the data absolutely necessary for the core functionality of our application. We never sell your personal data.</p>
    <div className="msg-block">
      <div className="msg-label">1. Information We Collect</div>
      <div className="msg-text">
        To provide our services, we collect the following information:
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '8px' }}>
          <li>Name (if provided)</li>
          <li>Email address and/or phone number</li>
          <li>Profile pictures</li>
          <li>User-generated content (including custom stickers and images)</li>
          <li>Order details and transaction statuses</li>
        </ul>
      </div>
    </div>

    <div className="msg-block">
      <div className="msg-label">2. Information We Do NOT Collect</div>
      <div className="msg-text">
        We believe in minimal data collection. We currently do not collect:
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '8px' }}>
          <li>Device information</li>
          <li>Usage analytics or tracking data</li>
          <li>Location data</li>
        </ul>
      </div>
    </div>

    <div className="msg-block">
      <div className="msg-label">3. Data Storage and Security</div>
      <div className="msg-text">
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '8px' }}>
          <li><b>Media:</b> Profile pictures and stickers are stored securely in cloud object storage.</li>
          <li><b>Passwords:</b> Your passwords are strictly encrypted and are never stored or viewed in plain text. If you forget your password, we will send an email with a secure token, allowing you to reset your password via our website rather than within the application.</li>
          <li><b>Encryption:</b> All communication within the app is protected using standard HTTPS encryption.</li>
        </ul>
      </div>
    </div>

    <div className="msg-block">
      <div className="msg-label">4. Payments and Financial Data</div>
      <div className="msg-text">We use trusted third-party payment gateways, specifically Razorpay and PhonePe, to handle payment processing securely. We do not collect or store your credit card details or banking information. We only store basic order details and statuses for account management. Please refer to the respective privacy policies of Razorpay and PhonePe for more information on how they handle your financial data.</div>
    </div>

    <div className="msg-block">
      <div className="msg-label">5. Data Sharing</div>
      <div className="msg-text">
        We value your privacy. We only share your data under the following circumstances:
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '8px' }}>
          <li>When required by law or legal obligations.</li>
          <li>When necessary for secure payment processing with our partners.</li>
          <li>When required for essential app functionality.</li>
        </ul>
      </div>
    </div>

    <div className="msg-block">
      <div className="msg-label">6. Data Retention and Deletion</div>
      <div className="msg-text">
        We retain your data only for a limited period:
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '8px' }}>
          <li><b>Automatic Deletion:</b> All user data is automatically deleted after 1 to 3 months.</li>
          <li><b>Manual Deletion:</b> Data may be deleted earlier if you request account deletion.</li>
          <li><b>Exceptions:</b> Some minimal data (such as transaction records) may be retained beyond this period only if strictly required by legal obligations.</li>
        </ul>
      </div>
    </div>
  </PoliciesLayout>
);

export const TermsConditions = () => (
  <PoliciesLayout>
    <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Terms of Service</h3>

    <div className="msg-block">
      <div className="msg-label">1. Acceptance of Terms</div>
      <div className="msg-text">By downloading, accessing, or using The Last Sign, you agree to be bound by these Terms of Service. This application is provided and operated by {VITE_BUSINESS_NAME}.</div>
    </div>

    <div className="msg-block">
      <div className="msg-label">2. User-Generated Content (UGC)</div>
      <div className="msg-text">You may upload content such as stickers and profile pictures. Depending on app functionality, this content may be visible to other users. You retain ownership of your content, but you are solely responsible for the content you upload. You agree not to upload media that is illegal, abusive, or infringes on the rights of others.</div>
    </div>

    <div className="msg-block">
      <div className="msg-label">3. Account Security and Password Resets</div>
      <div className="msg-text">You are responsible for safeguarding your account credentials. In the event of a forgotten password, recovery is handled via an email token that will direct you to our website to securely reset your credentials.</div>
    </div>

    <div className="msg-block">
      <div className="msg-label">4. Payments and Subscriptions</div>
      <div className="msg-text">Any transactions made within the app are processed by our trusted third-party partners (Razorpay and PhonePe). By making a purchase, you agree to their terms of service. We are only responsible for fulfilling the order status within the app and do not handle or store your underlying financial data.</div>
    </div>

    <div className="msg-block">
      <div className="msg-label">5. Data Retention Limitation</div>
      <div className="msg-text">By using this service, you acknowledge and agree to our strict data retention policy. Your user data, including uploaded content, is automatically permanently deleted after 1 to 3 months. We are not liable for the loss of any stickers, images, or account history resulting from this automatic deletion cycle.</div>
    </div>
  </PoliciesLayout>
);

export const ReturnPolicy = () => (
  <PoliciesLayout>
    <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Return Policy</h3>
    <p>We strive to deliver your items in perfect condition. You may request a return or replacement exclusively for goods that sustained damage prior to delivery.</p>

    <div className="msg-block">
      <div className="msg-label">Conditions for Return</div>
      <div className="msg-text">
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '8px' }}>
          <li>The damage must be inspected and verified by the delivery personnel at the time of drop-off.</li>
          <li>All return requests must be submitted within one (1) day of delivery and must include clear photographic proof of the damage.</li>
        </ul>
      </div>
    </div>
  </PoliciesLayout>
);

export const ShippingPolicy = () => (
  <PoliciesLayout>
    <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Shipping Policy</h3>
    <p>We offer localized delivery tailored specifically for our community. Orders are typically processed and delivered within 2-3 business days directly on campus (subject to college administration permission) or at convenient meeting points just outside the college grounds.</p>

    <div className="msg-block">
      <div className="msg-label">Delivery Network</div>
      <div className="msg-text">
        Our delivery network exclusively covers a 15km radius around the campus, as well as specific designated areas including address:
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '8px', marginBottom: '16px' }}>
          <li>Secunderabad General Bazar</li>
          <li>Tobacco Bazar</li>
          <li>ShankarMahadev Textiles</li>
        </ul>
        Estimated transit times and corresponding delivery costs are dynamically calculated at checkout.
      </div>
    </div>
  </PoliciesLayout>
);

export const RefundPolicy = () => (
  <PoliciesLayout>
    <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Refund / Cancellation Policy</h3>
    <p>We are committed to ensuring you receive your items exactly as expected. Refunds are strictly evaluated and will only be issued in the event that an eligible replacement for a damaged item is unsuccessful or unavailable.</p>

    <div className="msg-block">
      <div className="msg-label">Contact Support</div>
      <div className="msg-text">
        For any further requests or to inquire about your specific case, please contact our support team at:
        <br /><br />
        <b>Email:</b> {VITE_EMAIL}<br />
        <b>Phone:</b> +91 {VITE_REFUND_SUPPORT_NUMBER}<br />
        <b>GST PIN:</b> {VITE_GST_PIN}
      </div>
    </div>
  </PoliciesLayout>
);
