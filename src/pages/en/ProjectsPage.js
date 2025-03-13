import React, { useContext, useState } from 'react';
import Box from '../../components/Box'; // Adjust the path as needed
import '../../index.css'; // Adjust the path to your CSS file
import "@fontsource/roboto-mono";
import { AppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';

const textSizes = {
  title: 'text-3xl md:text-4xl font-bold',
  subtitle: 'text-2xl md:text-3xl',
  normal: 'text-xl md:text-2xl',
  medium: 'text-base sm:text-lg md:text-xl pt-5 pb-5',
};

const ProjectsPage = () => {

  const { theme, setTheme } = useContext(AppContext);

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


    <div className={`p-8 ${theme == 'dark' ? 'bg-bg-dark' : 'bg-bg-light'} h-screen w-screen`}>
      <Box theme={theme} className='h-full w-full flex flex-col gap-10 p-20'>
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
          <h1 className={textSizes.title}>Latest Projects</h1>
        </div>
        <div className="
          flex flex-col 
          md:grid md:grid-cols-3 md:grid-rows-3 gap-5
          sm:pl-20 sm:pr-20
          ">
          <div className="col-span-1 row-span-1">
            <a href="https://github.com/berkcan25/Budgetize" target="_blank" className={`${textSizes.subtitle} underline flex`}>Budgetize
              <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/externallink.svg`} alt="Arrow SVG" className="w-4 h-4" />
            </a>

            <p className={`${textSizes.normal} pt-3 pb-3`}>Full-stack webapp allowing users to compare grocery prices in various grocery stores and products.
              Automatic data collection through webscraping and APIs.
            </p>
            <p> React, TailwindCSS, ExpressJS, Puppeteer, Axios</p>
          </div>



          <div className="col-span-1 row-span-1">
              <a href="https://github.com/berkcan25/turkish-wordle" target="_blank" className={`${textSizes.subtitle} underline flex`}>
              Turkish Wordle
              <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/externallink.svg`} alt="Arrow SVG" className="w-4 h-4" />
              </a>
            <p className={`${textSizes.normal} pt-3 pb-3`}>A version of the popular Wordle game using Turkish words.
            </p>
            <p> JavaScript, HTML5, CSS3</p>
          </div>

        </div>

      </Box>
    </div>
  );
};

export default ProjectsPage;
