import React from 'react';
import '../css/ContactSection.css';
import VideoEmbed from './VideoEmbed';

const generalEmail = import.meta.env.VITE_GENERAL_EMAIL || "some-email@example.com";
const hireEmail = import.meta.env.VITE_HIRE_EMAIL || "hire-me-specific-email@example.com";

const contactSubjects = [
  {
    id: 1,
    title: "Suggestion",
    desc: "I will see what you would want to suggest for improvements.",
    email: generalEmail,
    color: "var(--primary)",
    icon: "💡"
  },
  {
    id: 2,
    title: "Want Demo",
    desc: "Vendors, CR's, or other leaders who want a demo: please send an email with this subject. I will see if I can allow you to experience the application in person.",
    email: generalEmail,
    color: "var(--accent1)",
    icon: "🚀"
  },
  {
    id: 3,
    title: "Want To Hire You",
    desc: "So recruiters can hire me! (Will use a separate dedicated email for this context.)",
    email: hireEmail,
    color: "var(--secondary)",
    icon: "💼"
  },
  {
    id: 4,
    title: "Lets Make it Happen",
    desc: "If a vendor wants to collaborate with me, just send me a mail with this subject.",
    email: generalEmail,
    color: "var(--accent2)",
    icon: "🤝"
  }
];

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-header">
        <h2 className="contact-main-title">Point Of Contact</h2>
        <div className="title-underline-contact"></div>
      </div>
      
      <VideoEmbed 
        videoId="yZENg085lL0" 
        title="Point of Contact" 
        description="Details on how to contact me."
        color="var(--secondary)"
      />
      
      <div className="contact-intro-card">
        <div className="contact-intro-content">
          <h3>Primary Email Address</h3>
          <p className="contact-email-text">{generalEmail}</p>

          <div className="msg-block" style={{ backgroundColor: 'var(--white)', textAlign: 'left', marginTop: '16px', marginBottom: '16px', border: '2px solid var(--black)' }}>
            <div className="msg-label">Business Details</div>
            <div className="msg-text">
              <strong>Operating Business:</strong> [Registered Business Name]<br />
              <strong>GST PIN / Registration:</strong> [Your GST Number details here]<br />
              <strong>Registered Address:</strong> [Mom's Registered Business Address]
            </div>
          </div>

          <span className="contact-note">Click any of the cards below to automatically draft an email with the correct subject line!</span>
        </div>
      </div>

      <div className="contact-grid">
        {contactSubjects.map((sub) => (
          <a 
            key={sub.id}
            href={`mailto:${sub.email}?subject=${encodeURIComponent(sub.title)}`}
            className="contact-card"
            style={{ '--contact-bg': sub.color }}
          >
            <div className="contact-card-header">
              <span className="contact-icon">{sub.icon}</span>
              <h3 className="contact-card-title">Subject: "{sub.title}"</h3>
            </div>
            <div className="contact-card-body">
              <p>{sub.desc}</p>
            </div>
            <div className="contact-card-footer">
              <span>Send Email ➔</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
