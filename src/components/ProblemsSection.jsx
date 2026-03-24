import React, { useState } from 'react';
import '../css/ProblemsSection.css';

import imgHesitation from '../assets/Hesitation.png';
import imgBoyGirl from '../assets/BoyGirlHesitation.png';
import imgTakingLong from '../assets/TakingTooLong.png';
import imgJudgement from '../assets/judgement.png';
import imgBoring from '../assets/BoringVsCool.png';
import imgLackOfSpace from '../assets/LackOfSpace.png';

const problems = [
  {
    id: 1,
    title: "Low participation due to hesitation",
    description: "Many people hold back from signing because they feel shy or unsure, leading to less involvement.",
    image: imgHesitation,
    color: "var(--primary)" // Yellow
  },
  {
    id: 2,
    title: "Uncertainty about consent",
    description: "It’s often unclear whether someone is comfortable having their t-shirt signed, which creates awkwardness.",
    image: imgBoyGirl,
    color: "var(--accent1)" // Pink
  },
  {
    id: 3,
    title: "Limited time to express meaningfully",
    description: "The fast-paced environment makes it difficult to write or draw something thoughtful and personal.",
    image: imgTakingLong,
    color: "var(--secondary)" // Teal
  },
  {
    id: 4,
    title: "Lack of a safe, judgment-free space",
    description: "People may feel observed or judged by others around them, preventing them from expressing themselves freely.",
    image: imgJudgement,
    color: "var(--accent2)" // Purple
  },
  {
    id: 5,
    title: "Aesthetic Limitations and visual appeal",
    description: "Using only a marker results in plain, less attractive t-shirts with little room for creativity.",
    image: imgBoring,
    color: "var(--primary)" // Yellow
  },
  {
    id: 6,
    title: "Running Out of Space",
    description: "We might not fit all the messages into the t-shirt due to running out of space.",
    image: imgLackOfSpace,
    color: "var(--secondary)" // Teal
  }
];

const ProblemsSection = () => {
  const [selectedProblem, setSelectedProblem] = useState(null);

  return (
    <>
    <div className="problems-section">
      <div className="problems-header">
        <h2 className="problems-main-title">Problems with Traditional T-shirt Signing</h2>
        <div className="title-underline"></div>
      </div>

      <div className="problems-grid">
        {problems.map((prob, idx) => (
          <div 
            className="problem-card clickable-card" 
            key={prob.id} 
            style={{ '--card-bg': prob.color }}
            onClick={() => setSelectedProblem(prob)}
          >
            <div className="problem-image-wrapper">
              <img src={prob.image} alt={prob.title} className="problem-image" />
            </div>
            <div className="problem-content">
              <div className="problem-number">0{prob.id}</div>
              <h3 className="problem-title">{prob.title}</h3>
              <p className="problem-desc">{prob.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Zoom Modal */}
    {selectedProblem && (
      <div className="zoom-modal-overlay" onClick={() => setSelectedProblem(null)}>
        <div className="zoom-modal-content" onClick={e => e.stopPropagation()}>
          <div className="zoom-modal-header" style={{ backgroundColor: selectedProblem.color }}>
            <button className="btn-close-modal" onClick={() => setSelectedProblem(null)}>
              ← Back
            </button>
          </div>
          <div className="zoom-modal-body">
            <div className="zoom-modal-image-wrapper">
              <img src={selectedProblem.image} alt={selectedProblem.title} className="zoom-modal-image" />
            </div>
            <div className="zoom-modal-text">
              <h2 className="zoom-modal-title">{selectedProblem.title}</h2>
              <p className="zoom-modal-desc">{selectedProblem.description}</p>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default ProblemsSection;
