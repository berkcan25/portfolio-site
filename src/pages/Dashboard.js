import React, { useState, useContext, useRef } from 'react';
import Box from '../components/Box'; // Adjust the path as needed
import '../index.css'; // Adjust the path to your CSS file
import "@fontsource/roboto-mono";
import { AppContext } from '../AppContext';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'; // Import Framer Motion

const textSizes = {
  title: 'dashboard-name',
  subtitle: 'dashboard-heading',
  medium: 'dashboard-medium',
  normal: 'dashboard-copy',
};

// Language Data
const languages = [
  { code: 'en', flag: '🇺🇸', label: 'English' },
  { code: 'tr', flag: '🇹🇷', label: 'Türkçe' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'ru', flag: '🇷🇺', label: 'Русский' },
  { code: 'az', flag: '🇦🇿', label: 'Azərbaycan' },
];

const Dashboard = () => {
  const { theme, setTheme, language, setLanguage, t } = useContext(AppContext);
  const [isLangHovered, setIsLangHovered] = useState(false);
  const languageTrigger = useRef(null);
  const reduceMotion = useReducedMotion();

  const clickToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // Common transition class for all icons
  const iconTransitionClass = `transition-all duration-300 ease-in-out ${theme === 'dark' ? 'invert brightness-0' : ''}`;

  return (
    <main className="dashboard">
      {/* Profile Section */}
      <Box entranceDelay={0} className="profile-card">
        <div className="profile-graphic" aria-hidden="true"><span className="profile-mark">bc<span>/</span></span><span className="glyph glyph-one">Aa</span><span className="glyph glyph-two">Ж</span><span className="glyph glyph-three">ç</span></div>
        <h1 className={textSizes.title}>Berk Can Tunçtan</h1>
        <p className="profile-role">{t.role}</p>
        <p className={`profile-location flex items-center gap-2 ${textSizes.medium}`}>
          <span role="img" aria-label="pin">📍</span>
          <span>Atlanta, Georgia</span>
        </p>
        <div className="social-links flex gap-3">
          <a href="https://github.com/berkcan25" target="_blank" rel="noopener noreferrer">
            <img
              src="/lighticons/githubvector.svg"
              alt="Github"
              className={`w-8 h-8 ${iconTransitionClass}`}
            />
          </a>
          <a href="https://www.linkedin.com/in/berk-c-tunctan/" target="_blank" rel="noopener noreferrer">
            <img
              src="/lighticons/linkedinvector.svg"
              alt="LinkedIn"
              className={`w-8 h-8 ${iconTransitionClass}`}
            />
          </a>
          <a href="mailto:bctunctan@gmail.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/lighticons/emailvector.svg"
              alt="Email"
              className={`w-8 h-8 ${iconTransitionClass}`}
            />
          </a>
        </div>
      </Box>

      {/* Latest Projects Section */}
      <Box entranceDelay={0.07} isClickable={true} to="/projects" className="projects-card">
        <div className="project-list"> {/* space-y yerine gap ve flex kullandık */}

          {/* Header */}
          <div className="flex items-center justify-between shrink-0"> {/* shrink-0 başlığın ezilmesini engeller */}
            <h2 className={textSizes.subtitle}>{t.projects}</h2>
          </div>

          {/* Project 1: Scriptle */}
          <div className="project-item">
            <div className="item-heading">
              <p className={`font-bold ${textSizes.medium}`}><span className="project-symbol" aria-hidden="true">Aa</span>Scriptle</p>
              <div className="tech-icons">
                <img src="/coding_icon_svgs/reactvector.svg" alt="React" className="w-6 h-6" /> {/* İkonları küçülttük */}
                <img src="/coding_icon_svgs/tailwindvector.svg" alt="Tailwind" className="w-6 h-6" />
              </div>
            </div>
            <p className={`${textSizes.normal}`}>
              {t.scriptleDesc}
            </p>
          </div>

          {/* Project 2: İsimBul */}
          <div className="project-item">
            <div className="item-heading">
              <p className={`font-bold ${textSizes.medium}`}><span className="project-symbol" aria-hidden="true">İ</span>İsimBul</p>
              <div className="tech-icons">
                <img src="/coding_icon_svgs/pythonvector.svg" alt="Python" className="w-6 h-6" />
                <img src="/coding_icon_svgs/reactvector.svg" alt="React" className="w-6 h-6" />
                <img src="/coding_icon_svgs/tailwindvector.svg" alt="Tailwind" className="w-6 h-6" />
              </div>
            </div>
            <p className={`${textSizes.normal}`}>
               {t.isimbulDesc}
            </p>
          </div>


          {/* Project 2: İsimBul */}
          <div className="project-item">
            <div className="item-heading">
              <p className={`font-bold ${textSizes.medium}`}><span className="project-symbol" aria-hidden="true">tr</span>TR Morph Analyzer</p>
              <div className="tech-icons">
                <img src="/coding_icon_svgs/pythonvector.svg" alt="Python" className="w-6 h-6" />
                <img src="/coding_icon_svgs/reactvector.svg" alt="React" className="w-6 h-6" />
                <img src="/coding_icon_svgs/tailwindvector.svg" alt="Tailwind" className="w-6 h-6" />
              </div>
            </div>
            <p className={`${textSizes.normal}`}>
               {t.posTaggerDesc}
            </p>
          </div>

        </div>
      </Box>

      {/* About Me Section */}
      <Box entranceDelay={0.14} className="about-card">
        <div className="item-heading">
          <h2 className={textSizes.subtitle}>{t.about}</h2>
        </div>
        <p className={textSizes.normal}>
          {t.aboutBody}
        </p>
        <p className={textSizes.normal}>
          {t.languages}: <span title='English' className='cursor-default'> 🇺🇸 </span>
           <span title='Turkish' className='cursor-default'> 🇹🇷 </span>
           <span title='French' className='cursor-default'> 🇫🇷 </span>
           <span title='Azerbaijani' className='cursor-default'> 🇦🇿 </span>
           <span title='Russian' className='cursor-default'> 🇷🇺 </span>
        </p>
        <div className="flex items-center">
          <a href="/resumes/resume.pdf" download="Berk_Tunctan_Resume.pdf" className={`mt-auto underline ${textSizes.normal}`}>{t.resume}</a>
          <a href="/resumes/resume.pdf" download="Berk_Tunctan_Resume.pdf" className={`mt-auto ${textSizes.normal}`}>
            <img
              src="/lighticons/downloadbtn.svg"
              alt="Download"
              className={`w-5 h-5 ml-3 ${iconTransitionClass}`}
            />
          </a>
        </div>
      </Box>

      {/* Tools Section */}
      <Box entranceDelay={0.21} isClickable={true} to="/tools" className="tools-card">
        <div className="tools-content">
          <div className="item-heading">
            <h2 className={textSizes.subtitle}>{t.tools}</h2>
          </div>
          <div className="tool-list">
            <div className="item-heading">
              <p className={textSizes.medium}>Python</p>
              <img src="/coding_icon_svgs/pythonvector.svg" alt="Python" className="w-8 h-8" />
            </div>
            <div className="item-heading">
              <p className={textSizes.medium}>React</p>
              <img src="/coding_icon_svgs/reactvector.svg" alt="React" className="w-8 h-8" />
            </div>
            <div className="item-heading">
              <p className={textSizes.medium}>TailwindCSS</p>
              <img src="/coding_icon_svgs/tailwindvector.svg" alt="Tailwind" className="w-8 h-8" />
            </div>
            <div className="flex flex-wrap items-center justify-between pt-2">
              <p className={textSizes.normal}>{t.clickMore}...</p>
            </div>
          </div>
        </div>
      </Box>

      <div className="controls-card">
        <div className="dashboard-controls grid grid-cols-3 gap-3">
          <Box entranceDelay={0.28} aria-label='Toggle color theme' aria-pressed={theme === 'dark'} isClickable={true} className='flex-1 min-w-0 flex items-center justify-center' onClickFunc={clickToggleTheme}>
             {/* Sun/Moon icons are usually different shapes, so we keep the source toggle here instead of inverting */}
            <motion.img key={theme} initial={reduceMotion ? false : { rotate: -60, scale: 0.7, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 0.25 }} src={`/${theme === 'dark' ? "sun" : "moon"}icon.svg`} alt="Toggle Theme" className='h-7 w-7'/>
          </Box>

          {/* A disclosure works with mouse, touch, and keyboard. */}
          <div
            className="language-control flex-1 min-w-0 relative flex items-center justify-center"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setIsLangHovered(false);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                setIsLangHovered(false);
                languageTrigger.current?.focus();
              }
            }}
          >
            <Box entranceDelay={0.35} className="w-full h-full flex items-center justify-center relative z-20"
              isClickable onClickFunc={() => setIsLangHovered(open => !open)}
              ref={languageTrigger} aria-label="Choose language"
              aria-expanded={isLangHovered} aria-controls="dashboard-languages">
              <img src="/lighticons/globeicon.svg" alt=""
                className={`${iconTransitionClass} h-7 w-7`} />
            </Box>
            <AnimatePresence>
              {isLangHovered && (
                <motion.div id="dashboard-languages" role="group" aria-label="Languages"
                  className="language-options absolute bottom-full mb-3 left-1/2 z-50 flex gap-1 p-2 rounded-xl border-2 border-borders bg-bg-light dark:bg-bg-dark shadow-xl"
                  initial={reduceMotion ? false : { opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, transition: { duration: reduceMotion ? 0 : 0.12 } }}
                  transition={{ duration: reduceMotion ? 0 : 0.2 }}>
                  {languages.map(lang => (
                    <button type="button" key={lang.code} title={lang.label}
                      aria-label={lang.label} aria-pressed={language === lang.code}
                      className="language-option w-11 h-11 flex items-center justify-center rounded-lg text-2xl text-black dark:text-white"
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangHovered(false);
                        languageTrigger.current?.focus();
                      }}>
                      <span className="text-sm font-semibold">{lang.code.toUpperCase()}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Box entranceDelay={0.42} isClickable={true} to='/' className='flex-1 min-w-0 flex items-center justify-center'>
            <img
              src="/lighticons/returnicon.svg"
              alt="Back"
              className={`h-7 w-7 ${iconTransitionClass}`}
            />
          </Box>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
