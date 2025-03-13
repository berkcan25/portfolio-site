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
  normal: 'text-xl md:text-2xl',
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
              transition duration-150 ease-in-out
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
            <div className="flex flex-col items-center justify-between text-left gap-3">
              <h2 className={`${textSizes.subtitle} font-bold`}>Tools</h2>
              <p className={textSizes.normal}>A snapshot of the tools and technologies I use daily, along with those I'm familiar with. </p>
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


          <div className="flex items-center gap-5 flex-wrap">

            <svg viewBox="0 0 128 128" className='h-12 w-12'>
              <path fill='#6D6D6D' d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
            </svg>

            <p className={textSizes.normal}>Figma</p>
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            <img src="/coding_icon_svgs/pythonvector.svg" alt="Clickable SVG" className="w-12 h-12" />
            <p className={textSizes.normal}>Python</p>
          </div>

            <div className="flex flex-wrap items-center gap-5">
              <img src="/coding_icon_svgs/reactvector.svg" alt="SVG" className="w-12 h-12" />
              <p className={textSizes.normal}>React</p>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <img src="/coding_icon_svgs/tailwindvector.svg" alt="SVG" className="w-12 h-12" />
              <p className={textSizes.normal}>TailwindCSS</p>
            </div>

            <div className="flex items-center gap-5 flex-wrap">
              <svg viewBox="0 0 128 128" className='w-12 h-12'>
                <path fill="#6D6D6D" d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499L108.431 27H19.569zM91.61 47.471l-.507 5.834L90.88 56H48.311l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69L64 106.964v-.005l-.027.012-22.777-5.916L39.65 84h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649L77.708 79H39.153l-2.734-30.836L36.152 45h55.724l-.266 2.471zM27.956 1.627h5.622v5.556h5.144V1.627h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.513V1.627z"></path>
              </svg>
              <svg viewBox="0 0 128 128" className='w-12 h-12'>
                <path fill="#6D6D6D" d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063L108.33 26H19.67zm69.21 50.488L86.53 98.38l.009 1.875L64 106.55v.001l-.018.015-22.719-6.225L39.726 83h11.141l.79 8.766 12.347 3.295-.004.015v-.032l12.394-3.495L77.702 77H51.795l-.222-2.355-.506-5.647L50.802 66h27.886l1.014-11H37.229l-.223-2.589-.506-6.03L36.235 43h55.597l-.267 3.334-2.685 30.154M89 14.374L81.851 6H89V1H73v4.363L81.39 13H73v5h16zm-19 0L63.193 6H70V1H55v4.363L62.733 13H55v5h15zM52 13h-8V6h8V1H38v17h14z"></path>
              </svg>
              <p className={textSizes.normal}>HTML5/CSS3</p>
          </div>




        </div>
      </Box>

      <Box className="col-span-1 row-span-2 max-w-full max-h-full">
        <div className="space-y-4 h-full gap-8 flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className={`${textSizes.subtitle} font-bold`}>Familiar With</h2>
          </div>

          {/* Tool 1*/}
            <div className="flex items-center gap-5 flex-wrap">
              <svg viewBox="0 0 128 128" className='h-12 w-12'>
                <path fill="#6D6D6D" d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379-1.293.547-3.355.559-3.566 2.18.711.746.82 1.859 1.387 2.777 1.086 1.754 2.922 4.113 4.559 5.352 1.789 1.348 3.633 2.793 5.551 3.961 3.414 2.082 7.223 3.27 10.504 5.352 1.938 1.23 3.859 2.777 5.75 4.164.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391 2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152-4.441-3.781-9.285-7.555-14.273-10.703-2.766-1.746-6.184-2.883-9.117-4.363-.988-.496-2.719-.758-3.371-1.586-1.539-1.961-2.379-4.449-3.566-6.738-2.488-4.793-4.93-10.023-7.137-15.066-1.504-3.437-2.484-6.828-4.359-9.91-9-14.797-18.687-23.73-33.695-32.508-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539.688 1.492.805 2.984 1.391 4.559 1.438 3.883 2.695 8.109 4.559 11.695.941 1.816 1.98 3.727 3.172 5.352.727.996 1.98 1.438 2.18 2.973-1.227 1.715-1.297 4.375-1.984 6.543-3.098 9.77-1.926 21.91 2.578 29.137 1.383 2.223 4.641 6.98 9.117 5.156 3.918-1.598 3.043-6.539 4.164-10.902.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699 2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781-1.551-1.523-3.277-3.414-4.559-5.156-3.613-4.902-6.805-10.27-9.711-15.855-1.391-2.668-2.598-5.609-3.77-8.324-.453-1.047-.445-2.633-1.387-3.172-1.281 1.988-3.172 3.598-4.164 5.945-1.582 3.754-1.789 8.336-2.375 13.082-.348.125-.195.039-.398.199-2.762-.668-3.73-3.508-4.758-5.949-2.594-6.164-3.078-16.09-.793-23.191.59-1.836 3.262-7.617 2.18-9.316-.516-1.691-2.219-2.672-3.172-3.965-1.18-1.598-2.355-3.703-3.172-5.551-2.125-4.805-3.113-10.203-5.352-15.062-1.07-2.324-2.875-4.676-4.359-6.738-1.645-2.289-3.484-3.977-4.758-6.742-.453-.984-1.066-2.559-.398-3.566.215-.684.516-.969 1.191-1.191 1.148-.887 4.352.297 5.547.793 3.18 1.32 5.832 2.578 8.527 4.363 1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988 4.609 1.402 8.738 3.582 12.488 5.949 11.422 7.215 20.766 17.48 27.156 29.734 1.027 1.973 1.473 3.852 2.379 5.945 1.824 4.219 4.125 8.559 5.941 12.688 1.816 4.113 3.582 8.27 6.148 11.695 1.348 1.801 6.551 2.766 8.918 3.766 1.66.699 4.379 1.43 5.949 2.379 3 1.809 5.906 3.965 8.723 5.945 1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164.199-.195c1.227-.867 1.789-2.25 1.781-4.363-.492-.52-.562-1.164-.992-1.785-.562-.824-1.66-1.289-2.375-1.98zm0 0"></path>
              </svg>
              <p className={textSizes.normal}>MySQL</p>
            </div>

          {/* Tool 2 */}
            <div className="flex items-center gap-5 flex-wrap">
              <svg viewBox="0 0 128 128" className='h-12 w-12'>
                <path fill="#6D6D6D" d="M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zm33.189-10.46c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zm11.319-60.575c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zm9.998 81.144s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.964-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644C17.455 81.134 61.958 83.958 85 77.896zm5.609 15.145c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559C89.459 14.563 76.492 1.587 76.492 1.587c5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zm27.274 51.748c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z"></path>
              </svg>
              <p className={textSizes.normal}>Java</p>
            </div>

          {/* Tool 3 */}
            <div className="flex items-center gap-5 flex-wrap">
              <svg viewBox="0 0 128 128" className='h-12 w-12'>
                <path fill="#6D6D6D" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path>
              </svg>
              <p className={textSizes.normal}>Git</p>
            </div>

          {/* Tool 4 */}
            <div className="flex items-center gap-5 flex-wrap">
              <svg viewBox="0 0 128 128" className='h-12 w-12'>
                <path fill="#6D6D6D" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM64 88.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5z"></path>
              </svg>
              <p className={textSizes.normal}>C</p>
            </div>


          {/* Tool 5 */}
            <div className="flex items-center gap-5 flex-wrap">
              <svg viewBox="0 0 128 128" className='h-12 w-12'>
                <path fill="#6D6D6D" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path>
              </svg>
              <p className={textSizes.normal}>TypeScript</p>
            </div>

        </div>
      </Box>
    </div>

  );
};

export default Dashboard;
