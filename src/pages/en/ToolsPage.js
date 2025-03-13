import React, { useState, useContext } from 'react';
import Box from '../../components/Box'; // Adjust the path as needed
import '../../index.css'; // Adjust the path to your CSS file
import "@fontsource/roboto-mono";
import { BrowserRouter, Router } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';

const textSizes = {
  title: 'text-3xl md:text-4xl font-bold',
  subtitle: 'text-2xl md:text-3xl',
  normal: 'text-lg sm:text-xl md:text-2xl',
  medium: 'text-base sm:text-lg md:text-xl pt-5 pb-5',
};

const Dashboard = () => {

  const { theme, setTheme } = useContext(AppContext);

  const clickToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/en/dashboard")
  };

  return (
    <div className={`p-8 
      ${theme == 'dark' ? 'bg-bg-dark' : 'bg-bg-light'}
    flex flex-col overflow-auto
    sm:grid sm:grid-cols-3 sm:grid-rows-1 gap-5
    min-h-screen max-h-screen min-w-screen max-w-screen`}>
      <div className="col-span-1 flex flex-col gap-5 max-w-full max-h-full">

        {/* Return Box */}
        <Box className="col-span-1 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap flex-row gap-4 items-center">
              <div onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                className={`
              flex items-center justify-center
              border-4 border-${theme === "dark" ? "hover-borders-dark" : "borders"} rounded-2xl
              h-20 w-20 aspect-square
              p-3 bg-${(!isHovered && theme === 'dark') || (isHovered && theme === "light") ? 'borders' : 'hover-borders-dark'}
              hover:cursor-pointer hover:bg-current
               `}>
                <img src={`/${(!isHovered && theme === 'dark') || (isHovered && theme === "light") ? 'dark' : 'light'}icons/returnicon.svg`} alt="Back" />
              </div>
              <h1 className={textSizes.title}>Tools</h1>

            </div>
          </div>
        </Box>

        {/* Tools Section */}
        <Box className="col-span-1">
          <div className="space-y-4 h-full ">
            <div className="flex items-center justify-between">
              <h2 className={`${textSizes.subtitle} font-bold`}>Tools</h2>
            </div>

          </div>
        </Box>
      </div>


      {/* Everyday Tools Section */}
      <Box className="col-span-1 row-span-2 max-w-full max-h-full">
        <div className="space-y-4 h-full gap-8 flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className={`${textSizes.subtitle} font-bold`}>My Everyday</h2>
          </div>

          {/* Tool 1*/}
          <div className="">
            <div className="flex items-center gap-5">
              <img src="/coding_icon_svgs/pythonvector.svg" alt="Clickable SVG" className="w-12 h-12" />
              <p className={textSizes.normal}>Python</p>
            </div>
          </div>

          {/* Tool 2 */}
          <div className="">
            <div className="flex items-center gap-5">
              <img src="/coding_icon_svgs/pythonvector.svg" alt="Clickable SVG" className="w-12 h-12" />
              <p className={textSizes.normal}>Python</p>
            </div>
          </div>

          {/* Tool 3 */}
          <div className="">
            <div className="flex items-center gap-5">
              <img src="/coding_icon_svgs/pythonvector.svg" alt="Clickable SVG" className="w-12 h-12" />
              <p className={textSizes.normal}>Python</p>
            </div>
          </div>

          {/* Tool 4 */}
          <div className="">
            <div className="flex items-center gap-5">
              <img src="/coding_icon_svgs/pythonvector.svg" alt="Clickable SVG" className="w-12 h-12" />
              <p className={textSizes.normal}>Python</p>
            </div>
          </div>


          {/* Tool 5 */}
          <div className="">
            <div className="flex items-center gap-5">
              <img src="/coding_icon_svgs/pythonvector.svg" alt="Clickable SVG" className="w-12 h-12" />
              <p className={textSizes.normal}>Python</p>
            </div>
          </div>

        </div>
      </Box>

      <Box className="col-span-1 row-span-2 max-w-full max-h-full">
        <div className="space-y-4 h-full gap-8 flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className={`${textSizes.subtitle} font-bold`}>Familiar With</h2>
          </div>

          {/* Tool 1*/}
          <div className="">
            <div className="flex items-center gap-5">
              <img src="/coding_icon_svgs/pythonvector.svg" alt="Clickable SVG" className="w-12 h-12" />
              <p className={textSizes.normal}>Python</p>
            </div>
          </div>

          {/* Tool 2 */}
          <div className="">
            <div className="flex items-center gap-5">
              <img src="/coding_icon_svgs/pythonvector.svg" alt="Clickable SVG" className="w-12 h-12" />
              <p className={textSizes.normal}>Python</p>
            </div>
          </div>

          {/* Tool 3 */}
          <div className="">
            <div className="flex items-center gap-5">
              <img src="/coding_icon_svgs/pythonvector.svg" alt="Clickable SVG" className="w-12 h-12" />
              <p className={textSizes.normal}>Python</p>
            </div>
          </div>

          {/* Tool 4 */}
          <div className="">
            <div className="flex items-center gap-5">
              <img src="/coding_icon_svgs/pythonvector.svg" alt="Clickable SVG" className="w-12 h-12" />
              <p className={textSizes.normal}>Python</p>
            </div>
          </div>


          {/* Tool 5 */}
          <div className="">
            <div className="flex items-center gap-5">
              <img src="/coding_icon_svgs/pythonvector.svg" alt="Clickable SVG" className="w-12 h-12" />
              <p className={textSizes.normal}>Python</p>
            </div>
          </div>

        </div>
      </Box>
    </div>

  );
};

export default Dashboard;
