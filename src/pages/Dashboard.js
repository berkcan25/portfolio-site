import React, { useState, useContext } from 'react';
import Box from '../components/Box'; // Adjust the path as needed
import '../index.css'; // Adjust the path to your CSS file
import "@fontsource/roboto-mono";
import { AppContext } from '../AppContext';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion

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

const getRadialPosition = (index, total) => {
  const radius = 85; // Distance from the center button (pixels)
  const startAngle = 180; // Start at 9 o'clock (Left)
  const endAngle = 0;     // End at 3 o'clock (Right)
  
  // Calculate angle for this specific item
  const step = (startAngle - endAngle) / (total - 1);
  const angleInDegrees = startAngle - (index * step);
  
  // Convert to radians
  const angleInRadians = (angleInDegrees * Math.PI) / 180;

  return {
    x: Math.cos(angleInRadians) * radius,
    y: -Math.sin(angleInRadians) * radius 
  };
};

const Dashboard = () => {
  const { theme, setTheme, setLanguage, t } = useContext(AppContext);
  const [isLangHovered, setIsLangHovered] = useState(false);

  const clickToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // Common transition class for all icons
  const iconTransitionClass = `transition-all duration-300 ease-in-out ${theme === 'dark' ? 'invert brightness-0' : ''}`;

  return (
    <div className={`p-8 
      ${theme === 'dark' ? 'bg-bg-dark' : 'bg-bg-light'}
    flex flex-col overflow-auto
    sm:grid sm:grid-cols-3 sm:grid-rows-2 gap-5
    min-h-screen max-h-screen min-w-screen max-w-screen
    transition duration-300 ease-in-out`}>
      {/* Profile Section */}
      <Box className="flex flex-col items-start space-y-4 col-span-1 row-span-1">
        <h1 className={textSizes.title}>Berk Can Tunçtan</h1>
        <p className={textSizes.medium}>{t.role}</p>
        <p className={`flex items-center space-x-2 ${textSizes.medium}`}>
          <span role="img" aria-label="pin">📍</span>
          <span>Atlanta, Georgia</span>
        </p>
        <div className="flex justify-around w-full gap-2">
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
      <Box isClickable={true} to="/projects" className="col-span-1 row-span-2 flex flex-col">
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
      <Box className="col-span-1 flex flex-col justify-between">
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
      <Box isClickable={true} to="/tools" className="col-span-1">
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

        <div className="flex flex-row gap-6">
          <Box isClickable={true} className='w-1/2 flex items-center justify-center' onClickFunc={clickToggleTheme}>
             {/* Sun/Moon icons are usually different shapes, so we keep the source toggle here instead of inverting */}
            <img src={`/${theme === 'dark' ? "sun" : "moon"}icon.svg`} alt="Toggle Theme" className='min-h-8 min-w-8'/>
          </Box>
        
          {/* Animated Language Selector */}
          <div 
            className="w-1/2 relative flex items-center justify-center"
            onMouseEnter={() => setIsLangHovered(true)}
            onMouseLeave={() => setIsLangHovered(false)}
          >
            {/* The Main Trigger Button */}
            <Box isClickable={false} className='w-full h-full flex items-center justify-center cursor-pointer relative z-20'>
              <img 
                src="/lighticons/globeicon.svg" 
                alt="Toggle Language" 
                className={`${iconTransitionClass} min-h-8 min-w-8`}
              />
            </Box>

            <AnimatePresence>
              {isLangHovered && (
                <div className="absolute top-1/2 left-1/2 w-0 h-0">
                  <motion.div
                      className="absolute -bottom-10 -left-32 w-64 h-40 bg-transparent rounded-t-full cursor-default z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                  />
                  {languages.map((lang, index) => (
                    <motion.button
                      key={lang.code}
                      custom={index}
                      onClick={(e) => {
                          e.stopPropagation();
                          setIsLangHovered(false);
                          setLanguage(lang.code);
                      }}
                      className={`
                        absolute -top-6 -left-6
                        w-12 h-12 rounded-lg z-50
                        flex items-center justify-center text-2xl shadow-md
                        border-4 border-borders
                        transition-colors duration-300 ease-in-out
                        bg-bg-light text-black hover:bg-hover-bg-light
                        dark:bg-bg-dark dark:text-white 
                        dark:hover:border-hover-borders-dark dark:hover:bg-sky-950
                        dark:hover:shadow-blue-950
                        hover:shadow-orange-200
                      `}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={{
                        hidden: { opacity: 0, scale: 0, x: 0, y: 0 },
                        visible: (i) => {
                          const pos = getRadialPosition(i, languages.length);
                          return { 
                            opacity: 1, 
                            scale: 1, 
                            x: pos.x, 
                            y: pos.y,
                            transition: { 
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                              delay: i * 0.05
                            }
                          };
                        }
                      }}
                      whileHover={{ scale: 1.2, zIndex: 50 }}
                      whileTap={{ scale: 0.9 }}
                      title={lang.label}
                    >
                      {lang.flag}
                    </motion.button>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>

          <Box isClickable={true} to='/' className='w-1/2 flex items-center justify-center'>
            <img 
              src="/lighticons/returnicon.svg" 
              alt="Back" 
              className={`min-h-8 min-w-8 ${iconTransitionClass}`} 
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;