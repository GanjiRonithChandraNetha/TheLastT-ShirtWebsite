import React from 'react';
import '../css/ExecutionSection.css';

import imgUserModes from '../assets/userModes.png';
import imgSignModes from '../assets/SignModes.png';
import imgAnonymousRouting from '../assets/AnonymousSignRoutingLogic.png';
import imgNonAnonymousRouting from '../assets/NonAnonymousSignRoutingLogic.png';
import imgMaintainAnonymous from '../assets/MainTainAnonymous.png';
import imgImmutability from '../assets/immutablity.png';
import imgPlanB1 from '../assets/plan_B.1.png';
import imgSignClassification from '../assets/SignClassification.png';

const ExecutionSection = () => {
  return (
    <div className="execution-section">
      <div className="execution-header">
        <h2 className="execution-main-title">Execution & Rules</h2>
        <div className="title-underline-exec"></div>
      </div>
      
      <div className="execution-grid">
        {/* Card 1 */}
        <div className="exec-card" style={{ '--exec-bg': 'var(--accent2)' }}>
          <div className="exec-image-wrapper">
            <img src={imgUserModes} alt="Receiving Modes" className="exec-image" />
          </div>
          <div className="exec-content">
            <h3 className="exec-title">Receiving Modes (User Privacy Settings)</h3>
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
          </div>
        </div>

        {/* Card 2 */}
        <div className="exec-card" style={{ '--exec-bg': 'var(--accent1)' }}>
          <div className="exec-image-wrapper">
            <img src={imgSignModes} alt="Sending Modes" className="exec-image" />
          </div>
          <div className="exec-content">
            <h3 className="exec-title">Sending Modes (Sender Choice)</h3>
            <ul className="exec-list">
              <li><strong>Anonymous Sign</strong> is sent without identity</li>
              <li><strong>Non-Anonymous Sign</strong> is sent with sender details</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="exec-card" style={{ '--exec-bg': 'var(--secondary)' }}>
          <div className="exec-image-wrapper">
            <img src={imgAnonymousRouting} alt="Anonymous Routing Logic" className="exec-image" />
          </div>
          <div className="exec-content">
            <h3 className="exec-title">Anonymous Routing Logic</h3>
            <ul className="exec-list">
              <li>It will be delivered only if the receiver allows anonymous Sign</li>
              <li>Also depends on anonymous limit (see below)</li>
            </ul>
          </div>
        </div>

        {/* Card 4 */}
        <div className="exec-card" style={{ '--exec-bg': 'var(--accent2)' }}>
          <div className="exec-image-wrapper">
            <img src={imgNonAnonymousRouting} alt="Non-Anonymous Routing Logic" className="exec-image" />
          </div>
          <div className="exec-content">
            <h3 className="exec-title">Non-Anonymous Routing Logic</h3>
            <ul className="exec-list">
              <li>If sender is a friend → classified as Friend Sign</li>
              <li>If not a friend → classified as General Non-Anonymous Sign</li>
            </ul>
          </div>
        </div>

        {/* Card 5 */}
        <div className="exec-card" style={{ '--exec-bg': 'var(--secondary)' }}>
          <div className="exec-image-wrapper">
            <img src={imgMaintainAnonymous} alt="Maintain Anonymous Limit" className="exec-image" />
          </div>
          <div className="exec-content">
            <h3 className="exec-title">Maintain Anonymous Limit</h3>
            <ul className="exec-list">
              <li>One must maintain anonymous limit</li>
              <li>If your limit is crossed you wont be able to receive anonymous limit (messages)</li>
              <li>You can relive your limit by deleting existing anonymous messages</li>
            </ul>
          </div>
        </div>

        {/* Card 6 */}
        <div className="exec-card" style={{ '--exec-bg': 'var(--accent1)' }}>
          <div className="exec-image-wrapper">
            <img src={imgImmutability} alt="Message Immutability" className="exec-image" />
          </div>
          <div className="exec-content">
            <h3 className="exec-title">Message Immutability</h3>
            <ul className="exec-list">
              <li>❌ It cannot be edited or re-sent</li>
              <li>A sender cannot send another message to the same receiver</li>
              <li><em>(optional future feature, if you want this to be implemented vote for plan_B.1)</em> Unless the receiver deletes the previous message</li>
            </ul>
          </div>
        </div>

        {/* Card 7 */}
        <div className="exec-card" style={{ '--exec-bg': 'var(--secondary)' }}>
          <div className="exec-image-wrapper">
            <img src={imgPlanB1} alt="Plan B.1" className="exec-image" />
          </div>
          <div className="exec-content">
            <h3 className="exec-title">Plan_B.1</h3>
            <ul className="exec-list">
              <li><em>(optional future feature, if you want this to be implemented vote for plan_B.1)</em> Unless the receiver deletes the previous message</li>
            </ul>
          </div>
        </div>

        {/* Card 8 */}
        <div className="exec-card" style={{ '--exec-bg': 'var(--accent2)' }}>
          <div className="exec-image-wrapper">
            <img src={imgSignClassification} alt="Friend-Based Message Classification" className="exec-image" />
          </div>
          <div className="exec-content">
            <h3 className="exec-title">Friend-Based Message Classification</h3>
            <p className="exec-desc">If a message is sent when two users are friends, it will always remain a Friend Message Even if they unfriend later.</p>
          </div>
        </div>

        {/* Card 9 - Text Only (No Image) */}
        <div className="exec-card" style={{ '--exec-bg': 'var(--accent1)' }}>
          {/* No image wrapper for this one, but we can give it a colorful top border to match the others */}
          <div style={{ height: '16px', backgroundColor: 'var(--exec-bg)', borderBottom: '4px solid var(--black)' }}></div>
          <div className="exec-content">
            <h3 className="exec-title">Friend System</h3>
            <ul className="exec-list">
              <li>Send friend requests</li>
              <li>Cancel pending requests (if no response yet)</li>
              <li>Accept or reject requests</li>
              <li>Unfriend existing friends</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ExecutionSection;
