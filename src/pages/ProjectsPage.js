import React, { useContext, useState } from 'react';
import Box from '../components/Box'; // Adjust the path as needed
import '../index.css'; // Adjust the path to your CSS file
import "@fontsource/roboto-mono";
import { AppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';

const textSizes = {
  title: 'text-3xl md:text-4xl font-bold',
  subtitle: 'text-2xl md:text-3xl',
  normal: 'text-xl md:text-2xl',
  medium: 'text-base sm:text-lg md:text-xl pt-5 pb-5',
};

const ProjectsPage = () => {

  const { theme, t } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const navigate = useNavigate();
  const handleClick = () => navigate("/dashboard");

  return (
    <div className={`p-8 ${theme === 'dark' ? 'bg-bg-dark' : 'bg-bg-light'} min-h-screen min-w-screen`}>
      <Box theme={theme} className='h-full w-full flex flex-col gap-10 p-20'>
        
        {/* Header Section */}
        <div className="flex flex-row gap-4 items-center">
          <div onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            className={`
              flex items-center justify-center
              border-4 border-${theme === "dark" ? "hover-borders-dark" : "borders"} rounded-2xl
              h-20 w-20 aspect-square
              p-3 bg-${(!isHovered && theme === 'dark') || (isHovered && theme === "light") ? 'borders' : 'hover-borders-dark'}
              hover:cursor-pointer hover:bg-current
              transition duration-150 ease-in-out
                `}>
            <img src={`/${(!isHovered && theme === 'dark') || (isHovered && theme === "light") ? 'dark' : 'light'}icons/returnicon.svg`} alt="Back" />
          </div>
          <h1 className={textSizes.title}>{t.projects}</h1>
        </div>

        {/* Projects Grid */}
        <div className="
          flex flex-col 
          md:grid md:grid-cols-3 gap-12
          sm:pl-10 sm:pr-10
          ">

          {/* 1. Scriptle */}
          <div className="col-span-1 flex flex-col h-full">
            <a href="https://github.com/berkcan25/scriptle" target="_blank" rel="noreferrer" className={`${textSizes.subtitle} underline flex`}>
              Scriptle
              <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/externallink.svg`} alt="Link" className="w-4 h-4 ml-2" />
            </a>
            <p className={`${textSizes.normal} pt-3 pb-3 flex-grow`}>
              {t.scriptleDescLong}
            </p>
            <p className="font-mono text-sm opacity-80 mt-auto">React, TypeScript, Tailwind, Vite</p>
          </div>

          {/* 2. İsimBul */}
          <div className="col-span-1 flex flex-col h-full">
            <a href="https://github.com/berkcan25/isimbul" target="_blank" rel="noreferrer" className={`${textSizes.subtitle} underline flex`}>
              İsimBul
              <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/externallink.svg`} alt="Link" className="w-4 h-4 ml-2" />
            </a>
            <p className={`${textSizes.normal} pt-3 pb-3 flex-grow`}>
              {t.isimbulDescLong}
            </p>
            <p className="font-mono text-sm opacity-80 mt-auto">React 19, Tailwind, Recharts, D3 Force</p>
          </div>

          {/* 3. TR Morphological Analyzer */}
          <div className="col-span-1 flex flex-col h-full">
            <a href="https://github.com/berkcan25/tr-pos-tagger" target="_blank" rel="noreferrer" className={`${textSizes.subtitle} underline flex`}>
              TR Morph Analyzer
              <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/externallink.svg`} alt="Link" className="w-4 h-4 ml-2" />
            </a>
            <p className={`${textSizes.normal} pt-3 pb-3 flex-grow`}>
              {t.posTaggerDescLong}
            </p>
            <p className="font-mono text-sm opacity-80 mt-auto">Python, FastAPI, Zemberek, JavaScript</p>
          </div>

          {/* 4. Budgetize */}
          <div className="col-span-1 flex flex-col h-full">
            <a href="https://github.com/berkcan25/Budgetize" target="_blank" rel="noreferrer" className={`${textSizes.subtitle} underline flex`}>
              Budgetize
              <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/externallink.svg`} alt="Link" className="w-4 h-4 ml-2" />
            </a>
            <p className={`${textSizes.normal} pt-3 pb-3 flex-grow`}>
              {t.budgetizeDescLong}
            </p>
            <p className="font-mono text-sm opacity-80 mt-auto">React, TailwindCSS, ExpressJS, Puppeteer</p>
          </div>

          {/* 5. Hecele! */}
          <div className="col-span-1 flex flex-col h-full">
              <a href="https://github.com/berkcan25/Turkish-Bomb-Party-Game" target="_blank" rel="noreferrer" className={`${textSizes.subtitle} underline flex`}>
              Hecele!
              <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/externallink.svg`} alt="Link" className="w-4 h-4 ml-2" />
              </a>
            <p className={`${textSizes.normal} pt-3 pb-3 flex-grow`}>
              {t.heceleDescLong}
            </p>
            <p className="font-mono text-sm opacity-80 mt-auto">JavaScript, HTML5, CSS3, Python</p>
          </div>

          {/* 6. Turkish Wordle */}
          <div className="col-span-1 flex flex-col h-full">
              <a href="https://github.com/berkcan25/turkish-wordle" target="_blank" rel="noreferrer" className={`${textSizes.subtitle} underline flex`}>
              Turkish Wordle
              <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/externallink.svg`} alt="Link" className="w-4 h-4 ml-2" />
              </a>
            <p className={`${textSizes.normal} pt-3 pb-3 flex-grow`}>
              {t.wordleDescLong}
            </p>
            <p className="font-mono text-sm opacity-80 mt-auto">JavaScript, HTML5, CSS3</p>
          </div>

        </div>
      </Box>
    </div>
  );
};

export default ProjectsPage;