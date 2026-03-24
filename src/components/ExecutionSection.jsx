import React, { useState } from 'react';
import '../css/ExecutionSection.css';

import imgUserModes from '../assets/userModes.png';
import imgSignModes from '../assets/SignModes.png';
import imgAnonymousRouting from '../assets/AnonymousSignRoutingLogic.png';
import imgNonAnonymousRouting from '../assets/NonAnonymousSignRoutingLogic.png';
import imgMaintainAnonymous from '../assets/MainTainAnonymous.png';
import imgImmutability from '../assets/immutablity.png';
import imgPlanB1 from '../assets/plan_B.1.png';
import imgSignClassification from '../assets/SignClassification.png';

const ruleCards = [
  {
    id: 1,
    title: "Receiving Modes (User Privacy Settings)",
    img: imgUserModes,
    color: "var(--accent2)",
    content: (
      <ul className="exec-list">
        <li><strong>Anonymous Mode</strong>
          <ul>
            <li>Anyone can send messages</li>
            <li>Sender identity is hidden</li>
          </ul>
        </li>
        <li><strong>Non-Anonymous Mode</strong>
          <ul>
            <li>Anyone can send messages</li>
            <li>Sender details are visible</li>
          </ul>
        </li>
        <li><strong>Friends Only Mode</strong>
          <ul>
            <li>Only accepted friends can send messages</li>
          </ul>
        </li>
      </ul>
    )
  },
  {
    id: 2,
    title: "Sending Modes (Sender Choice)",
    img: imgSignModes,
    color: "var(--accent1)",
    content: (
      <ul className="exec-list">
        <li><strong>Anonymous Sign</strong> is sent without identity</li>
        <li><strong>Non-Anonymous Sign</strong> is sent with sender details</li>
      </ul>
    )
  },
  {
    id: 3,
    title: "Anonymous Routing Logic",
    img: imgAnonymousRouting,
    color: "var(--secondary)",
    content: (
      <ul className="exec-list">
        <li>It will be delivered only if the receiver allows anonymous Sign</li>
        <li>Also depends on anonymous limit (see below)</li>
      </ul>
    )
  },
  {
    id: 4,
    title: "Non-Anonymous Routing Logic",
    img: imgNonAnonymousRouting,
    color: "var(--accent2)",
    content: (
      <ul className="exec-list">
        <li>If sender is a friend → classified as Friend Sign</li>
        <li>If not a friend → classified as General Non-Anonymous Sign</li>
      </ul>
    )
  },
  {
    id: 5,
    title: "Maintain Anonymous Limit",
    img: imgMaintainAnonymous,
    color: "var(--secondary)",
    content: (
      <ul className="exec-list">
        <li>One must maintain anonymous limit</li>
        <li>If your limit is crossed you wont be able to receive anonymous limit (messages)</li>
        <li>You can relive your limit by deleting existing anonymous messages</li>
      </ul>
    )
  },
  {
    id: 6,
    title: "Message Immutability",
    img: imgImmutability,
    color: "var(--accent1)",
    content: (
      <ul className="exec-list">
        <li>❌ It cannot be edited or re-sent</li>
        <li>A sender cannot send another message to the same receiver</li>
        <li><em>(optional future feature, if you want this to be implemented vote for plan_B.1)</em> Unless the receiver deletes the previous message</li>
      </ul>
    )
  },
  {
    id: 7,
    title: "Plan_B.1",
    img: imgPlanB1,
    color: "var(--secondary)",
    content: (
      <ul className="exec-list">
        <li><em>(optional future feature, if you want this to be implemented vote for plan_B.1)</em> Unless the receiver deletes the previous message</li>
      </ul>
    )
  },
  {
    id: 8,
    title: "Friend-Based Message Classification",
    img: imgSignClassification,
    color: "var(--accent2)",
    content: (
      <p className="exec-desc">If a message is sent when two users are friends, it will always remain a Friend Message Even if they unfriend later.</p>
    )
  },
  {
    id: 9,
    title: "Friend System",
    img: null,
    color: "var(--accent1)",
    content: (
      <ul className="exec-list">
        <li>Send friend requests</li>
        <li>Cancel pending requests (if no response yet)</li>
        <li>Accept or reject requests</li>
        <li>Unfriend existing friends</li>
      </ul>
    )
  }
];

const ExecutionSection = () => {
  const [selectedRule, setSelectedRule] = useState(null);

  return (
    <>
    <div className="execution-section">
      <div className="execution-header">
        <h2 className="execution-main-title">Execution & Rules</h2>
        <div className="title-underline-exec"></div>
      </div>
      
      <div className="execution-grid">
        {ruleCards.map((rule) => (
          <div 
            className="exec-card clickable-card" 
            key={rule.id} 
            style={{ '--exec-bg': rule.color }}
            onClick={() => setSelectedRule(rule)}
          >
            {rule.img ? (
              <div className="exec-image-wrapper">
                <img src={rule.img} alt={rule.title} className="exec-image" />
              </div>
            ) : (
              <div style={{ height: '16px', backgroundColor: 'var(--exec-bg)', borderBottom: '4px solid var(--black)' }}></div>
            )}
            <div className="exec-content">
              <h3 className="exec-title">{rule.title}</h3>
              {rule.content}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Zoom Modal */}
    {selectedRule && selectedRule.img && (
      <div className="zoom-modal-overlay" onClick={() => setSelectedRule(null)}>
        <div className="zoom-modal-content" onClick={e => e.stopPropagation()}>
          <div className="zoom-modal-header" style={{ backgroundColor: selectedRule.color }}>
            <button className="btn-close-modal" onClick={() => setSelectedRule(null)}>
              ← Back
            </button>
          </div>
          <div className="zoom-modal-body">
            <div className="zoom-modal-image-wrapper">
              <img src={selectedRule.img} alt={selectedRule.title} className="zoom-modal-image" />
            </div>
            <div className="zoom-modal-text">
              <h2 className="zoom-modal-title">{selectedRule.title}</h2>
              <div className="zoom-modal-desc">
                {selectedRule.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Special case for card without image */}
    {selectedRule && !selectedRule.img && (
      <div className="zoom-modal-overlay" onClick={() => setSelectedRule(null)}>
        <div className="zoom-modal-content" style={{ maxWidth: '500px' }} onClick={e => e.stopPropagation()}>
          <div className="zoom-modal-header" style={{ backgroundColor: selectedRule.color }}>
            <button className="btn-close-modal" onClick={() => setSelectedRule(null)}>
              ← Back
            </button>
          </div>
          <div className="zoom-modal-body" style={{ display: 'block' }}>
            <div className="zoom-modal-text">
              <h2 className="zoom-modal-title">{selectedRule.title}</h2>
              <div className="zoom-modal-desc">
                {selectedRule.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default ExecutionSection;
