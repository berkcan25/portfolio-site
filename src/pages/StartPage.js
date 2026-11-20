import React, { useContext } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useReducedMotion } from 'framer-motion';
import { AppContext } from '../AppContext';
import Box from '../components/Box';

export default function StartPage() {
  const { t } = useContext(AppContext);
  const reduceMotion = useReducedMotion();
  return (
    <main className="dashboard welcome-page">
      <Box entranceDelay={0} className="welcome-card profile-card" isClickable to="/dashboard">
        <div className="welcome-top"><span className="profile-mark" aria-hidden="true">bc/</span><span>Berk Can Tunçtan</span></div>
        <div className="welcome-message">
          <div className="welcome-hello" aria-hidden="true">
            {reduceMotion ? 'Hello' : <Typewriter words={['Merhaba', 'Hello', 'Bonjour', 'Salam', 'Привет']} cursor loop={false} />}
          </div>
          <h1>{t.greeting}</h1>
        </div>
        <div className="welcome-bottom">
          <span className="welcome-cta">{t.clickStart}</span>
          <div className="welcome-glyphs" aria-hidden="true"><span>Aa</span><span>Ж</span><span>ç</span></div>
        </div>
      </Box>
    </main>
  );
}
