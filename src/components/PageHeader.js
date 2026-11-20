import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
import Box from './Box';

export default function PageHeader({ title }) {
  const { theme, setTheme } = useContext(AppContext);
  return (
    <Box entranceDelay={0} className="page-header">
      <Link to="/dashboard" className="page-back" aria-label="Back to dashboard">
        <img src="/lighticons/returnicon.svg" alt="" className={theme === 'dark' ? 'invert' : ''} />
      </Link>
      <h1 className="page-title">{title}</h1>
      <button type="button" className="page-theme" aria-label="Toggle color theme"
        aria-pressed={theme === 'dark'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <img src={theme === 'dark' ? '/sunicon.svg' : '/moonicon.svg'} alt="" />
      </button>
    </Box>
  );
}
