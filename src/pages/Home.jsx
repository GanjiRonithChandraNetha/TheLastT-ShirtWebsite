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
import VideoEmbed from '../components/VideoEmbed';

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
            Join in Lets Have Some <b>Actual Fun</b> on Our <b>Signatuer Day</b>.
            <b>Not</b> the <b>BORING</b> way for Signature Day.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px', margin: '0 auto' }}>
            <a href="https://expo.dev/accounts/ronithganji/projects/merch/builds/f6101e2f-a3ee-4083-97f9-228ef7789faf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button className="btn-primary btn-block" style={{ flexDirection: 'column', gap: '4px', padding: '12px 16px' }}>
                <span style={{ fontSize: '15px', lineHeight: 1.2 }}>Install via Expo Go</span>
                <span style={{ fontSize: '11px', fontWeight: 600, opacity: 0.7, letterSpacing: '0.5px', lineHeight: 1.2 }}>(ANDROID ONLY)</span>
              </button>
            </a>

            <div style={{ cursor: 'not-allowed' }}>
              <button className="btn-secondary btn-block" disabled style={{ 
                pointerEvents: 'none', 
                backgroundColor: 'var(--gray)', 
                color: 'var(--textSecondary)', 
                borderColor: 'var(--textSecondary)', 
                boxShadow: '3px 3px 0px var(--textSecondary)' 
              }}>
                Google Play (Coming Soon)
              </button>
            </div>

            <div style={{ cursor: 'not-allowed' }}>
              <button className="btn-secondary btn-block" disabled style={{ 
                pointerEvents: 'none', 
                backgroundColor: 'var(--gray)', 
                color: 'var(--textSecondary)', 
                borderColor: 'var(--textSecondary)', 
                boxShadow: '3px 3px 0px var(--textSecondary)' 
              }}>
                App Store (Coming Soon)
              </button>
            </div>
          </div>

          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '12px', margin: 0 }}>
              By downloading, you agree to our <a href="/terms" style={{ color: 'var(--primary)', fontWeight: 500 }}>Terms of Service</a> & <a href="/privacy" style={{ color: 'var(--primary)', fontWeight: 500 }}>Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '60px', marginBottom: '60px', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '16px', fontSize: '32px' }}>Know About The App</h2>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px auto' }}>All the information you need to know about the app.</p>

        <VideoEmbed
          videoId="RBZfhtol9sE"
          title="Introduction to The Last Sign"
          description={`Main Video ask every visitor to watch it.

• Explains the problem with the existing method
• Introduces the application to the user
• Expected result if the application is implemented`}
          color="var(--accent1)"
        />

        {/* Navigation Instruction */}
        <div style={{
          backgroundColor: 'var(--accent2)',
          border: '4px solid var(--black)',
          borderRadius: '12px',
          padding: '16px 24px',
          boxShadow: '4px 4px 0px var(--black)',
          maxWidth: '600px',
          margin: '0 auto 40px auto',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '18px',
          color: 'var(--textPrimary)'
        }}>
          👇 Click to navigate through the steps below to explore each section and corresponding video!
        </div>

        <SerpentineProgress activeStep={activeStep} setActiveStep={setActiveStep} />
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
    </>
  );
};
export default Home;
