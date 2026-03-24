import React, { useState } from 'react';
import heroImage from '../assets/hero.png';
import tShirtImage from '../assets/t-shirt.png';
import SerpentineProgress from '../components/SerpentineProgress';
import ProblemsSection from '../components/ProblemsSection';
import ApproachSection from '../components/ApproachSection';
import ExecutionSection from '../components/ExecutionSection';
import IntentSection from '../components/IntentSection';
import ActionsSection from '../components/ActionsSection';
import ContactSection from '../components/ContactSection';

const HeroImageDisplay = () => {
  return (
    <div style={{
      position: 'relative',
      height: '240px',
      width: '100%',
      maxWidth: '380px',
      margin: '0 auto 24px auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Background Soft Glow matching image vibe (yellow/greenish hint) */}
      <div className="animate-float" style={{
        position: 'absolute',
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #F9E79F, #DCE775)',
        opacity: 0.3,
        filter: 'blur(35px)',
        zIndex: 0
      }}></div>

      <div className="animate-float" style={{ zIndex: 1 }}>
        <img
          src={tShirtImage}
          alt="Hero Graphic"
          style={{
            maxWidth: '100%',
            maxHeight: '220px',
            transform: 'rotate(-30deg)',
            transformOrigin: 'center'
          }}
        />
      </div>
    </div>
  );
};

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <div className="card-shell">
      <div className="card" style={{ textAlign: 'center', padding: '60px 40px' }}>
        <div className="card-accent"></div>

        {/* Insert beautifully animated hero graphic */}
        <HeroImageDisplay />

        <h1 style={{ background: 'linear-gradient(to right, var(--textPrimary), #4B5563)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>The Last Sign</h1>
        <p style={{ maxWidth: '500px', margin: '0 auto 40px auto', fontSize: '18px' }}>
          Elevate your daily workflow with our beautifully crafted applications. Built for speed, designed for scale.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px', margin: '0 auto' }}>
          <a href="#" style={{ textDecoration: 'none' }}>
            <button className="btn-primary btn-block">
              Download for Android (APK)
            </button>
          </a>

          <a href="#" style={{ textDecoration: 'none' }}>
            <button className="btn-secondary btn-block">
              Get it on Google Play
            </button>
          </a>

          <a href="#" style={{ textDecoration: 'none' }}>
            <button className="btn-secondary btn-block">
              Download on the App Store
            </button>
          </a>
        </div>

        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '12px', margin: 0 }}>
            By downloading, you agree to our <a href="/terms" style={{ color: 'var(--primary)', fontWeight: 500 }}>Terms of Service</a> & <a href="/privacy" style={{ color: 'var(--primary)', fontWeight: 500 }}>Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>

    {activeStep === 0 && (
      <div style={{ width: '100%', padding: '16px 8px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
        <ProblemsSection />
      </div>
    )}

    {activeStep === 1 && (
      <div style={{ width: '100%', padding: '16px 8px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
        <ApproachSection />
      </div>
    )}

    {activeStep === 2 && (
      <div style={{ width: '100%', padding: '16px 8px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
        <ExecutionSection />
      </div>
    )}

    {activeStep === 3 && (
      <div style={{ width: '100%', padding: '16px 8px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
        <IntentSection />
      </div>
    )}

    {activeStep === 4 && (
      <div style={{ width: '100%', padding: '16px 8px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
        <ActionsSection />
      </div>
    )}

    {activeStep === 5 && (
      <div style={{ width: '100%', padding: '16px 8px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
        <ContactSection />
      </div>
    )}

    <div style={{ marginTop: '60px', marginBottom: '60px', padding: '0 20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '16px', fontSize: '32px' }}>Our Process</h2>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px auto' }}>Follow our proven path from identifying pain points to taking actionable steps.</p>
      <SerpentineProgress activeStep={activeStep} setActiveStep={setActiveStep} />
    </div>
    </>
  );
};
export default Home;
