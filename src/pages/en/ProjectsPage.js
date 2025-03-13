import React, { useContext, useState } from 'react';
import Box from '../../components/Box'; // Adjust the path as needed
import '../../index.css'; // Adjust the path to your CSS file
import "@fontsource/roboto-mono";
import { AppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';


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
      <Box theme={theme} className='h-full w-full flex flex-col justify-between p-20'>
        <div className="flex flex-row gap-4 items-center">
          <div onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            className={`
              flex items-center justify-center
              border-4 border-${theme === "dark" ? "hover-borders-dark" : "borders"} rounded-2xl
              h-20 w-20 aspect-square
              p-3 hover:bg-${theme === "dark" ? "hover-borders-dark" : "borders"} 
              hover:cursor-pointer
               `}>
            <img src={`/${(!isHovered && theme === 'dark') || (isHovered && theme === "light") ? 'dark' : 'light'}icons/returnicon.svg`} alt="Back" />
          </div>
          <h1 className='text-4xl font-bold'>Latest Projects</h1>

        </div>

      </Box>
    </div>
  );
};

export default ProjectsPage;
