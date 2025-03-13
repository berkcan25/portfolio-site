import React, { useState, useContext } from 'react';
import Box from '../../components/Box'; // Adjust the path as needed
import '../../index.css'; // Adjust the path to your CSS file
import "@fontsource/roboto-mono";
import { BrowserRouter, Router } from 'react-router-dom';
import { AppContext } from '../../AppContext';

const textSizes = {
  title: 'text-2xl md:text-3xl lg:text-5xl',
  subtitle: 'text-xl md:text-2xl lg:text-3xl',
  normal: 'text-base md:text-lg lg:text-xl',
  medium: 'text-base md:text-lg lg:text-xl pt-5 pb-5',
};

const Dashboard = () => {

  const { theme, setTheme } = useContext(AppContext);

  const clickToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const { lang, setLang } = useContext(AppContext);

  console.log(theme);

  return (
    <div className={`p-8 
      ${theme == 'dark' ? 'bg-bg-dark' : 'bg-bg-light'}
    flex flex-col overflow-auto
    sm:grid sm:grid-cols-3 sm:grid-rows-2 gap-5
    min-h-screen max-h-screen min-w-screen max-w-screen`}>
      {/* Profile Section */}
      <Box className="flex flex-col items-start space-y-4 col-span-1 row-span-1">
        <h1 className={textSizes.title}>Berk Can Tunçtan</h1>
        <p className={textSizes.normal}>Software Developer</p>
        <p className={`flex items-center space-x-2 ${textSizes.normal}`}>
          <span role="img" aria-label="pin">📍</span>
          <span>Atlanta, Georgia</span>
        </p>
        <div className="flex justify-around w-full gap-2">
          <a href="https://github.com/berkcan25" target="_blank" rel="noopener noreferrer">
            <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/githubvector.svg`} alt="Clickable SVG" className="w-12 h-12" />
          </a>
          <a href="https://www.linkedin.com/in/berk-c-tunctan/" target="_blank" rel="noopener noreferrer">
            <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/linkedinvector.svg`} alt="Clickable SVG" className="w-12 h-12" />
          </a>
          <a href="mailto:bctunctan@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/emailvector.svg`} alt="Clickable SVG" className="w-12 h-12" />
          </a>
        </div>
      </Box>

      {/* Latest Projects Section */}
      <Box isClickable={true} to="/en/projects" className="col-span-1 row-span-2 max-w-full max-h-full">
        <div className="space-y-4 h-full ">
          <div className="flex items-center justify-between">
            <h2 className={textSizes.subtitle}>Latest Projects</h2>
            <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/navarrow.svg`} alt="Arrow SVG" className="w-4 h-4" />
          </div>

          {/* Project 1 */}
          <div className="">
            <div className="flex flex-wrap flex-row items-center justify-between gap-2">
              <p className={textSizes.normal}>Budgetize</p>
              <img src="/coding_icon_svgs/reactvector.svg" alt="SVG" className="w-12 h-12" />
              <img src="/coding_icon_svgs/tailwindvector.svg" alt="SVG" className="w-12 h-12" />
              


            </div>
            <p className={textSizes.medium}>
              Full-stack webapp allowing users to compare grocery prices in various grocery stores and products, 
              automatic data collection through webscraping and various APIs.
            </p>
          </div>

          {/* Project 2 */}
          <div className="">
            <div className="flex flex-wrap flex-row items-center justify-between gap-2">
              <p className={textSizes.normal}>Turkish Wordle</p>
              
            </div>
            <p className={textSizes.medium}>Clone of the popular Wordle Game using Turkish words.</p>
          </div>

        </div>
      </Box>


      {/* About Me Section */}
      <Box className="col-span-1 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <h2 className={textSizes.subtitle}>About Me!</h2>
          <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/navarrow.svg`} alt="Arrow SVG" className="w-4 h-4" />
        </div>
        <p className={textSizes.normal}>
          I am a Software Developer studying CS at Georgia Tech with a love of linguistics!
        </p>
        <div className="flex items-center">
          <a href="/resumes/Berk_Can_Tunctan_intern.docx" download="Berk_Tunctan_Resume.docx" className={`mt-auto underline ${textSizes.normal}`}>Résumé</a>
          <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/downloadbtn.svg`} alt="Download" className='w-5 h-5 ml-3' />

        </div>
      </Box>

      {/* Tools Section */}
      <Box isClickable={true} to="/en/tools" className="col-span-1">
        <div className="space-y-4 h-full ">
          <div className="flex items-center justify-between">
            <h2 className={textSizes.subtitle}>Tools</h2>
            <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/navarrow.svg`} alt="Arrow SVG" className="w-4 h-4" />
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between">
              <p className={textSizes.normal}>Python</p>
              <img src="/coding_icon_svgs/pythonvector.svg" alt="SVG" className="w-12 h-12" />
            </div>
            <div className="flex flex-wrap items-center justify-between">
              <p className={textSizes.normal}>React</p>
              <img src="/coding_icon_svgs/reactvector.svg" alt="SVG" className="w-12 h-12" />
            </div>
            <div className="flex flex-wrap items-center justify-between">
              <p className={textSizes.normal}>TailwindCSS</p>
              <img src="/coding_icon_svgs/tailwindvector.svg" alt="SVG" className="w-12 h-12" />
            </div>
            <div className="flex flex-wrap items-center justify-between pt-2">
              <p className={textSizes.normal}>Click for more...</p>
            </div>
          </div>
        </div>
      </Box>

      {/* Placeholder Click Section */}
      <div className="col-span-1 flex flex-col justify-between gap-5">
        <Box isClickable={true} to='/en'>
          <div className="flex items-center justify-between">
            <h2 className={textSizes.subtitle}>Back to start screen!</h2>
          </div>
        </Box>

        <div className="flex flex-row gap-6">
          <Box isClickable={true} className='w-1/2 flex items-center justify-center' onClickFunc={clickToggleTheme}>
            <img src={`/${theme === 'dark' ? "sun" : "moon"}icon.svg`} alt="Toggle Theme" />
          </Box>
          {/* <Box isClickable={true} to='/tr/dashboard' className='w-1/2 flex items-center justify-center'>
            <img src={`../${theme === 'dark' ? 'dark' : 'light'}icons/globeicon.svg`} alt="Toggle Language" />
          </Box> */}
        </div>


      </div>

    </div>
  );
};

export default Dashboard;
