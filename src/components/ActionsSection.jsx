import React from 'react';
import '../css/ActionsSection.css';

const roadmap = [
  { 
    stage: 'Stage 1', 
    title: 'Launch & Scale',
    items: ['App Store publishing', 'Play Store publishing', 'Enhance deployment to a server which can take a load of 1000+ users for both database and backend'], 
    color: 'var(--primary)' 
  },
  { 
    stage: 'Stage 2', 
    title: 'Storage Optimization',
    items: ['Integrate Object storage for efficient storage of images/stickers'], 
    color: 'var(--accent1)' 
  },
  { 
    stage: 'Stage 3', 
    title: 'Core Features & Workers',
    items: ['Make forgot password live (create a redis server, enable email worker, cron jobs as well)'], 
    color: 'var(--secondary)' 
  },
  { 
    stage: 'Stage 4', 
    title: 'Monetization & Merch',
    items: ['Implement Personal t-shirt Module', 'Implement Slam-Book Module', 'Integrate payment gateway', 'Implement orders module'], 
    color: 'var(--accent2)' 
  },
  { 
    stage: 'Stage 5', 
    title: 'Unknown Frontiers',
    items: ['Coming soon (surely not for 2026 graduates)'], 
    color: 'var(--primary)' 
  }
];

const timeline = [
  { time: 'Now', details: 'Regular registration to get regular t-shirt but have space for big QR code print on the back', color: 'var(--white)' },
  { time: '27th - 1st', details: 'Stage 1 and Stage 2 implementation', color: 'var(--gray)' },
  { time: '1st - 3rd', details: '(Give logins to everyone and ask everyone to make friends with everyone) and (Stage 3 implementation)', color: 'var(--white)' },
  { time: '4th - 7th', details: '(Send signs to each other) and (Push Stage 3 and implement Stage 4)', color: 'var(--gray)' },
  { time: '7th - 9th', details: '(Make orders for personal t-shirt and Slam Book) and (Push Stage 4)', color: 'var(--white)' },
  { time: '10th - 12th', details: '(Delivery of goodies (in-college delivery))', color: 'var(--primary)' }
];

const ActionsSection = () => {
  return (
    <div className="actions-section">
      {/* Roadmap Section */}
      <div className="actions-header">
        <h2 className="actions-main-title">Product Roadmap (Line of Action)</h2>
        <div className="title-underline-acts"></div>
      </div>
      
      <div className="roadmap-grid">
        {roadmap.map((block, index) => (
          <div className="roadmap-card" key={index} style={{ '--rm-color': block.color }}>
            <div className="roadmap-badge">{block.stage}</div>
            <div className="roadmap-content">
              {/* <h3 className="roadmap-title">{block.title}</h3> */}
              <ul className="neo-bullet-list">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline Section */}
      <div className="timeline-header" style={{ marginTop: '80px' }}>
        <h2 className="actions-main-title">Expected Timeline</h2>
        <div className="title-underline-acts" style={{ backgroundColor: 'var(--accent1)', transform: 'rotate(1deg)' }}></div>
      </div>

      <div className="timeline-container">
        {timeline.map((step, index) => (
          <div className="timeline-row" key={index}>
            <div className="timeline-time">
              <span>{step.time}</span>
            </div>
            <div className="timeline-connector">
              <div className="connector-dot"></div>
              {index !== timeline.length - 1 && <div className="connector-line"></div>}
            </div>
            <div className="timeline-content-box" style={{ backgroundColor: step.color }}>
              <p>{step.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionsSection;
