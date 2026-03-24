import React from 'react';
import '../css/IntentSection.css';

const strengths = [
  {
    id: 1,
    title: "Technical Skills",
    subtitle: "(Full Stack Development)",
    desc: "Designed and built a complete system involving frontend, backend, and deployment.",
    color: "var(--primary)"
  },
  {
    id: 2,
    title: "Design Thinking",
    subtitle: "",
    desc: "Focused on user pain points like hesitation, time pressure, and lack of expression.",
    color: "var(--accent1)"
  },
  {
    id: 3,
    title: "Business Thinking",
    subtitle: "",
    desc: "Identified real problems in traditional signature day experiences and designed a scalable solution.",
    color: "var(--secondary)"
  },
  {
    id: 4,
    title: "System Thinking",
    subtitle: "",
    desc: "Structured the application with clear flows: permissions, message handling, and user relationships.",
    color: "var(--accent2)"
  },
  {
    id: 5,
    title: "Progressive Deployment",
    subtitle: "(Mindset)",
    desc: "Developed and iterated the product step-by-step, adapting based on constraints and learning during the process.",
    color: "var(--primary)"
  },
  {
    id: 6,
    title: "Creativity & Innovation",
    subtitle: "",
    desc: "Reimagined a common college activity into a hybrid digital + physical experience.",
    color: "var(--accent1)"
  },
  {
    id: 7,
    title: "Collaboration Ability",
    subtitle: "",
    desc: "Worked with others during development; when challenges arose, I adapted and ensured the project moved forward by independently handling critical phases.",
    color: "var(--secondary)"
  },
  {
    id: 8,
    title: "User Understanding",
    subtitle: "",
    desc: "Built features that directly address real user behavior (shyness, social pressure, need for meaningful expression).",
    color: "var(--accent2)"
  }
];

const expectations = [
  {
    id: 1,
    title: "Create a memorable and impactful signature day experience",
    desc: "Make it more meaningful, creative, and inclusive than traditional methods.",
    color: "var(--primary)"
  },
  {
    id: 2,
    title: "Demonstrate my capabilities",
    desc: "Use this project as proof of my skills across product thinking, development, and execution.",
    color: "var(--accent1)"
  },
  {
    id: 3,
    title: "Secure a high-quality opportunity",
    desc: "Leverage this work to get hired into a strong company with a competitive package.",
    color: "var(--secondary)"
  }
];

const IntentSection = () => {
  return (
    <div className="intent-section">
      <div className="intent-header">
        <h2 className="intent-main-title">Intent & Expectation</h2>
        <div className="title-underline-intent"></div>
      </div>
      
      <div className="intent-intro-box">
        <p>I built this application not just as a product, but as a way to demonstrate my core strengths:</p>
      </div>

      <div className="strengths-grid">
        {strengths.map((str) => (
          <div className="strength-card" key={str.id} style={{ '--str-bg': str.color }}>
            <div className="strength-header">
              <h3 className="strength-title">{str.title}</h3>
              {str.subtitle && <span className="strength-subtitle">{str.subtitle}</span>}
            </div>
            <div className="strength-body">
              <p>{str.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="expectations-header" style={{ marginTop: '80px' }}>
        <h2 className="intent-main-title">Expectations from This Project</h2>
        <div className="title-underline-intent" style={{ backgroundColor: 'var(--accent2)' }}></div>
      </div>

      <div className="expectations-grid">
        {expectations.map((exp, idx) => (
          <div className="expectation-card" key={exp.id}>
            <div className="exp-number" style={{ backgroundColor: exp.color }}>0{idx + 1}</div>
            <div className="exp-content">
              <h3 className="exp-title">{exp.title}</h3>
              <p className="exp-desc">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default IntentSection;
