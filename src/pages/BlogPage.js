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

const BlogPage = () => {

  const { theme, setTheme, setLanguage, t } = useContext(AppContext);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard")
  };

  return (


    <div className={`p-8 ${theme === 'dark' ? 'bg-bg-dark' : 'bg-bg-light'} min-h-screen min-w-screen`}>
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
          <h1 className={textSizes.title}>Linguistics</h1>
        </div>
        <div className="
          flex flex-col 
          sm:pl-20 sm:pr-20
          ">
          <div className="mb-8">
            <a href="#" target="_blank" rel="noreferrer" className={`${textSizes.subtitle} underline flex items-center`}>
              Turkish Word Origins Analysis
              <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/externallink.svg`} alt="External link icon" className="w-4 h-4 ml-1.5" />
            </a>

            <p className={`${textSizes.normal} pt-3 pb-3`}>
              Data analysis project visualizing the etymological origins of the Turkish language. Loanwords were grouped by source and categorized into 'Eastern' and 'Western' groups to highlight historical linguistic influences.
            </p>
            
            <p>Python, Pandas, Matplotlib</p>
          </div>



          <div className="mb-8">
              <a href="https://github.com/berkcan25/turkish-wordle" target="_blank" rel="noreferrer" className={`${textSizes.subtitle} underline flex`}>
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

export default BlogPage;
