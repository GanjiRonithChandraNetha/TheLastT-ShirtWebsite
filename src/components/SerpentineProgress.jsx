import React, { useState } from 'react';
import '../css/SerpentineProgress.css';

const steps = [
  { id: 1, title: 'Problem', content: 'Identifying the core challenges and pain points. Our current workflow requires manual synchronization across 4 different platforms, leading to errors and delays in delivering final assets.' },
  { id: 2, title: 'Approach', content: 'We evaluated several integration strategies and decided on a centralized messaging bus to orchestrate events in real-time, matching our fast-paced iteration needs.' },
  { id: 3, title: 'Execution', content: 'Building the infrastructure layer using modern Node.js edge functions and implementing the neo-brutalism frontend to make user interactions satisfying and instantaneous.' },
  { id: 4, title: 'Intent', content: 'Our primary goal is to cut down redundant tasks by 80% and give creators more time to focus on what they do best: creating. We prioritize reliability and aesthetics equally.' },
  { id: 5, title: 'Actions', content: 'Deployed phase 1 of the integration, migrated legacy databases to edge-compatible stores, and pushed the new UI design system across the entire application.' },
  { id: 6, title: 'Contact', content: 'Ready to learn more or integrate this into your workflow? Reach out to our technical team at engineering@thelastsign.com or use the support terminal in your dashboard.' },
];

const SerpentineProgress = ({ activeStep, setActiveStep }) => {
  return (
    <div className="sp-container">
      <div className="sp-grid">
        {/* Draw the connecting line behind the grid natively using CSS SVG background or pseudo elements in CSS */}
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isPast = index < activeStep;

          return (
            <div
              key={step.id}
              className={`sp-item sp-item-${index + 1}`}
              onClick={() => setActiveStep(index)}
            >
              <div className={`sp-node ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}>
                <span className="sp-node-number">{step.id}</span>
              </div>
              <div className={`sp-label ${isActive ? 'active-label' : ''}`}>
                {step.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SerpentineProgress;
