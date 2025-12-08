import React, { useContext } from 'react';
import Box from '../components/Box'; // Adjust the path as needed
import '../index.css'; // Adjust the path to your CSS file
import "@fontsource/roboto-mono";
import { Typewriter } from 'react-simple-typewriter'
import { AppContext } from '../AppContext';

const StartPage = () => {

  const { theme, setTheme, setLanguage, t } = useContext(AppContext);

  return (
      <div className={`p-8 ${theme === 'dark' ? 'bg-bg-dark' : 'bg-bg-light'} h-screen w-screen`}>
        <Box isClickable={true} theme={theme} to='/dashboard' className='h-full w-full flex flex-col justify-between p-10 sm:p-20'>
            <div className="text-5xl sm:text-8xl lg:text-9xl">
              <Typewriter words={["Merhaba", "Hello", "Bonjour", "Salam", "Привет"]}cursor={true} loop={false}/>
            </div>
            <h1 className="text-7xl sm:text-7xl lg:text-8xl">{t.greeting}</h1>
            <p className="text-5xl sm:text-6xl lg:text-7xl">{t.clickStart}</p>
        </Box>
      </div>
  );
};

export default StartPage;
