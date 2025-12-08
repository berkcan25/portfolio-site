import React, { createContext, useState, useEffect } from 'react';
import { translations } from './translations';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Check local storage or system preference on load (Optional but recommended)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [language, setLanguage] = useState('en'); 

  const t = translations[language];

  // This Effect toggles the class on the HTML tag
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Optional: Save preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, setTheme, language, setLanguage, t }}>
      {children}
    </AppContext.Provider>
  );
};