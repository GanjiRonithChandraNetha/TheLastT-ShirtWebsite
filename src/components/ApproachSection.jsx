import React, { useState } from 'react';
import '../css/ApproachSection.css';

import imgBeforeConn from '../assets/beforeConnection.png';
import imgIdeaExp from '../assets/IdeaExpectation.png';
import imgAfterConn from '../assets/AfterConnect.png';
import imgSlamBook from '../assets/SlamBook.png';
import imgHighQual from '../assets/HigherQuality.png';
import imgTshirt from '../assets/t-shirt.png';
import imgActSlamBook from '../assets/actSlamBook.png';

const advantages = [
  { id: 1, title: "Safe, judgment-free space", desc: "Since interactions happen privately, users can express themselves without feeling watched or judged.", img: imgBeforeConn, color: "var(--accent1)" },
  { id: 2, title: "Higher participation and reach", desc: "You can connect with and collect messages from many people at once, not just those physically present.", img: imgIdeaExp, color: "var(--secondary)" },
  { id: 3, title: "Faster and more convenient", desc: "The process is quicker and doesn’t depend on everyone being in the same place at the same time.", img: imgAfterConn, color: "var(--primary)" },
  { id: 4, title: "Better expression with enough time", desc: "Users can take their time to write meaningful messages and accurately express their thoughts.", img: imgSlamBook, color: "var(--accent2)" },
  { id: 5, title: "Higher quality messages", desc: "Messages are more genuine and thoughtful, rather than rushed or written just for the sake of it.", img: imgHighQual, color: "var(--accent1)" },
  { id: 6, title: "Visually appealing and creative output", desc: "Instead of plain scribbles, users get a vibrant t-shirt with well-designed elements like stickers and colors that add meaning.", img: imgTshirt, color: "var(--secondary)" }
];

const ApproachSection = () => {
  const [selectedAdvantage, setSelectedAdvantage] = useState(null);

  return (
    <>
    <div className="approach-section">
      <div className="approach-header">
        <h2 className="approach-main-title">Advantages of This Solution</h2>
        <div className="title-underline-alt"></div>
      </div>

      <div className="advantages-grid">
        {advantages.map((adv) => (
          <div 
            className="advantage-card clickable-card" 
            key={adv.id} 
            style={{ '--adv-bg': adv.color }}
            onClick={() => setSelectedAdvantage(adv)}
          >
            <div className="advantage-image-wrapper">
              <img src={adv.img} alt={adv.title} className="advantage-image" />
            </div>
            <div className="advantage-content">
              <h3 className="advantage-title">✦ {adv.title}</h3>
              <p className="advantage-desc">{adv.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="deliverables-header" style={{ marginTop: '80px' }}>
        <h2 className="approach-main-title">What Users Can Get From This Application</h2>
        <div className="title-underline-alt" style={{ backgroundColor: 'var(--accent2)' }}></div>
      </div>

      <div className="deliverables-grid">
        {/* Deliverable 1 */}
        <div className="deliverable-card">
          <div className="deliverable-image-wrapper" style={{ backgroundColor: 'var(--primary)' }}>
            <img src={imgTshirt} alt="Personal T-shirt" className="deliverable-image" />
          </div>
          <div className="deliverable-content">
            <h3 className="deliverable-title">👕 Personal T-shirt</h3>
            <ul className="neo-list">
              <li>A clean, well-designed t-shirt</li>
              <li>Messages that are intentional, meaningful, and neatly presented</li>
              <li>A final product that truly reflects relationships and memories</li>
            </ul>
          </div>
        </div>

        {/* Deliverable 2 */}
        <div className="deliverable-card">
          <div className="deliverable-image-wrapper" style={{ backgroundColor: 'var(--accent1)' }}>
            <img src={imgActSlamBook} alt="Slam Book" className="deliverable-image" />
          </div>
          <div className="deliverable-content">
            <h3 className="deliverable-title">📖 Slam Book</h3>
            <ul className="neo-list">
              <li>A collection of personalized messages from friends</li>
              <li>A structured way to preserve memories</li>
              <li>A keepsake that helps maintain connections even after college</li>
              <li>You can also get a digital slam book</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Zoom Modal */}
    {selectedAdvantage && (
      <div className="zoom-modal-overlay" onClick={() => setSelectedAdvantage(null)}>
        <div className="zoom-modal-content" onClick={e => e.stopPropagation()}>
          <div className="zoom-modal-header" style={{ backgroundColor: selectedAdvantage.color }}>
            <button className="btn-close-modal" onClick={() => setSelectedAdvantage(null)}>
              ← Back
            </button>
          </div>
          <div className="zoom-modal-body">
            <div className="zoom-modal-image-wrapper">
              <img src={selectedAdvantage.img} alt={selectedAdvantage.title} className="zoom-modal-image" />
            </div>
            <div className="zoom-modal-text">
              <h2 className="zoom-modal-title">✦ {selectedAdvantage.title}</h2>
              <p className="zoom-modal-desc">{selectedAdvantage.desc}</p>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default ApproachSection;
