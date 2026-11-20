import React, { useState, useContext, useRef } from 'react';
import Box from '../components/Box'; // Adjust the path as needed
import '../index.css'; // Adjust the path to your CSS file
import "@fontsource/roboto-mono";
import { AppContext } from '../AppContext';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'; // Import Framer Motion

const textSizes = {
  title: 'text-3xl md:text-4xl lg:text-5xl font-bold',
  subtitle: 'text-2xl md:text-3xl font-semibold',
  medium: 'text-2xl', 
  normal: 'text-xl leading-relaxed',
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
    <div className={`dashboard p-4 sm:p-8
      ${theme === 'dark' ? 'bg-bg-dark' : 'bg-bg-light'}
    flex flex-col overflow-auto
    lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-5
    min-h-screen max-h-screen min-w-screen max-w-screen
    transition duration-300 ease-in-out`}>
      {/* Profile Section */}
      <Box entranceDelay={0} className="flex flex-col items-start space-y-4 col-span-1 row-span-1">
        <h1 className={textSizes.title}>Berk Can Tunçtan</h1>
        <p className={textSizes.medium}>{t.role}</p>
        <p className={`flex items-center space-x-2 ${textSizes.medium}`}>
          <span role="img" aria-label="pin">📍</span>
          <span>Atlanta, Georgia</span>
        </p>
        <div className="social-links flex justify-around w-full gap-2">
          <a href="https://github.com/berkcan25" target="_blank" rel="noopener noreferrer">
            <img 
              src="/lighticons/githubvector.svg" 
              alt="Github" 
              className={`w-12 h-12 ${iconTransitionClass}`} 
            />
          </a>
          <a href="https://www.linkedin.com/in/berk-c-tunctan/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/lighticons/linkedinvector.svg" 
              alt="LinkedIn" 
              className={`w-12 h-12 ${iconTransitionClass}`} 
            />
          </a>
          <a href="mailto:bctunctan@gmail.com" target="_blank" rel="noopener noreferrer">
            <img 
              src="/lighticons/emailvector.svg" 
              alt="Email" 
              className={`w-12 h-12 ${iconTransitionClass}`} 
            />
          </a>
        </div>
      </Box>

      {/* Latest Projects Section */}
      <Box entranceDelay={0.07} isClickable={true} to="/projects" className="col-span-1 row-span-2 flex flex-col">
        <div className="flex flex-col h-full gap-6"> {/* space-y yerine gap ve flex kullandık */}
          
          {/* Header */}
          <div className="flex items-center justify-between shrink-0"> {/* shrink-0 başlığın ezilmesini engeller */}
            <h2 className={textSizes.subtitle}>{t.projects}</h2>
            <img 
              src="/lighticons/navarrow.svg" 
              alt="Arrow" 
              className={`w-5 h-5 ${iconTransitionClass}`} 
            />
          </div>

          {/* Project 1: Scriptle */}
          <div className="flex flex-col gap-1 overflow-hidden">
            <div className="flex flex-wrap items-center justify-between">
              <p className={`font-bold ${textSizes.medium}`}>Scriptle</p>
              <div className="flex gap-2">
                <img src="/coding_icon_svgs/reactvector.svg" alt="React" className="w-10 h-10" /> {/* İkonları küçülttük */}
                <img src="/coding_icon_svgs/tailwindvector.svg" alt="Tailwind" className="w-10 h-10" />
              </div>
            </div>
            <p className={`${textSizes.normal} line-clamp-4`}>
              {t.scriptleDesc}
            </p>
          </div>

          {/* Project 2: İsimBul */}
          <div className="flex flex-col gap-1 overflow-hidden">
            <div className="flex flex-wrap items-center justify-between">
              <p className={`font-bold ${textSizes.medium}`}>İsimBul</p>
              <div className="flex gap-2">
                <img src="/coding_icon_svgs/pythonvector.svg" alt="Python" className="w-10 h-10" />
                <img src="/coding_icon_svgs/reactvector.svg" alt="React" className="w-10 h-10" />
                <img src="/coding_icon_svgs/tailwindvector.svg" alt="Tailwind" className="w-10 h-10" />
              </div>
            </div>
            <p className={`${textSizes.normal} line-clamp-4`}>
               {t.isimbulDesc}
            </p>
          </div>


          {/* Project 2: İsimBul */}
          <div className="flex flex-col gap-1 overflow-hidden">
            <div className="flex items-center justify-between">
              <p className={`font-bold max-w-[50%] ${textSizes.medium}`}>TR Morph Analyzer</p>
              <div className="flex gap-2">
                <img src="/coding_icon_svgs/pythonvector.svg" alt="Python" className="w-10 h-10" />
                <img src="/coding_icon_svgs/reactvector.svg" alt="React" className="w-10 h-10" />
                <img src="/coding_icon_svgs/tailwindvector.svg" alt="Tailwind" className="w-10 h-10" />
              </div>
            </div>
            <p className={`${textSizes.normal} line-clamp-4`}>
               {t.posTaggerDesc}
            </p>
          </div>

        </div>
      </Box>

      {/* About Me Section */}
      <Box entranceDelay={0.14} className="col-span-1 flex flex-col justify-between">
        <div className="flex items-center justify-between">
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
          <a href="/resumes/resume.pdf" download="Berk_Tunctan_Resume.docx" className={`mt-auto underline ${textSizes.normal}`}>{t.resume}</a>
          <a href="/resumes/resume.pdf" download="Berk_Tunctan_Resume.docx" className={`mt-auto ${textSizes.normal}`}>
            <img 
              src="/lighticons/downloadbtn.svg" 
              alt="Download" 
              className={`w-5 h-5 ml-3 ${iconTransitionClass}`} 
            />
          </a>
        </div>
      </Box>

      {/* Tools Section */}
      <Box entranceDelay={0.21} isClickable={true} to="/tools" className="col-span-1">
        <div className="space-y-4 h-full ">
          <div className="flex items-center justify-between">
            <h2 className={textSizes.subtitle}>{t.tools}</h2>
            <img 
              src="/lighticons/navarrow.svg" 
              alt="Arrow" 
              className={`w-4 h-4 ${iconTransitionClass}`} 
            />
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between">
              <p className={textSizes.medium}>Python</p>
              <img src="/coding_icon_svgs/pythonvector.svg" alt="Python" className="w-12 h-12" />
            </div>
            <div className="flex flex-wrap items-center justify-between">
              <p className={textSizes.medium}>React</p>
              <img src="/coding_icon_svgs/reactvector.svg" alt="React" className="w-12 h-12" />
            </div>
            <div className="flex flex-wrap items-center justify-between">
              <p className={textSizes.medium}>TailwindCSS</p>
              <img src="/coding_icon_svgs/tailwindvector.svg" alt="Tailwind" className="w-12 h-12" />
            </div>
            <div className="flex flex-wrap items-center justify-between pt-2">
              <p className={textSizes.normal}>{t.clickMore}...</p>
            </div>
          </div>
        </div>
      </Box>

      <div className="col-span-1 flex flex-col justify-between gap-5">
        {/* <Box isClickable={true} to='/blog'>
          <div className="flex items-center justify-between">
            <h2 className={textSizes.subtitle}>{t.lingProjects}</h2>
            <img 
              src="/lighticons/navarrow.svg" 
              alt="Arrow" 
              className={`w-4 h-4 ${iconTransitionClass}`} 
            />
          </div>
        </Box> */}

        <div className="dashboard-controls grid grid-cols-3 gap-3 sm:gap-6">
          <Box entranceDelay={0.28} aria-label='Toggle color theme' aria-pressed={theme === 'dark'} isClickable={true} className='flex-1 min-w-0 flex items-center justify-center' onClickFunc={clickToggleTheme}>
             {/* Sun/Moon icons are usually different shapes, so we keep the source toggle here instead of inverting */}
            <motion.img key={theme} initial={reduceMotion ? false : { rotate: -60, scale: 0.7, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 0.25 }} src={`/${theme === 'dark' ? "sun" : "moon"}icon.svg`} alt="Toggle Theme" className='h-10 w-10'/>
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
                className={`${iconTransitionClass} h-10 w-10`} />
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
                      {lang.flag}
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
              className={`h-10 w-10 ${iconTransitionClass}`}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;