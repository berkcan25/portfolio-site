import React, { useContext } from 'react';
import Box from '../../components/Box'; // Adjust the path as needed
import '../../index.css'; // Adjust the path to your CSS file
import "@fontsource/roboto-mono";
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

  console.log(theme);

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
        <p className={textSizes.normal}>Software Developer</p>
        <p className={`flex items-center space-x-2 ${textSizes.normal}`}>
          <span role="img" aria-label="pin">📍</span>
          <span>Atlanta, Georgia</span>
        </p>
        <div className="flex justify-around w-full gap-2">
          <a href="https://github.com/berkcan25" target="_blank" rel="noopener noreferrer">
            <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/githubvector.svg`} alt="Clickable SVG" className="w-12 h-12 transition duration-300 ease-in-out" />
          </a>
          <a href="https://www.linkedin.com/in/berk-c-tunctan/" target="_blank" rel="noopener noreferrer">
            <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/linkedinvector.svg`} alt="Clickable SVG" className="w-12 h-12 transition duration-300 ease-in-out" />
          </a>
          <a href="mailto:bctunctan@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/emailvector.svg`} alt="Clickable SVG" className="w-12 h-12 transition duration-300 ease-in-out" />
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
              <div className="flex justify-between gap-2">
                <img src="/coding_icon_svgs/reactvector.svg" alt="SVG" className="w-12 h-12" />
                <img src="/coding_icon_svgs/tailwindvector.svg" alt="SVG" className="w-12 h-12" />
              </div>



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
              <div className="flex justify-between gap-2">
                <svg viewBox="0 0 128 128" className='w-12 h-12'>
                  <path fill="#6D6D6D" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
                </svg>
                <svg viewBox="0 0 128 128" className='w-12 h-12'>
                  <path fill="#6D6D6D" d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499L108.431 27H19.569zM91.61 47.471l-.507 5.834L90.88 56H48.311l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69L64 106.964v-.005l-.027.012-22.777-5.916L39.65 84h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649L77.708 79H39.153l-2.734-30.836L36.152 45h55.724l-.266 2.471zM27.956 1.627h5.622v5.556h5.144V1.627h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.513V1.627z"></path>
                </svg>
                <svg viewBox="0 0 128 128" className='w-12 h-12'>
                  <path fill="#6D6D6D" d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063L108.33 26H19.67zm69.21 50.488L86.53 98.38l.009 1.875L64 106.55v.001l-.018.015-22.719-6.225L39.726 83h11.141l.79 8.766 12.347 3.295-.004.015v-.032l12.394-3.495L77.702 77H51.795l-.222-2.355-.506-5.647L50.802 66h27.886l1.014-11H37.229l-.223-2.589-.506-6.03L36.235 43h55.597l-.267 3.334-2.685 30.154M89 14.374L81.851 6H89V1H73v4.363L81.39 13H73v5h16zm-19 0L63.193 6H70V1H55v4.363L62.733 13H55v5h15zM52 13h-8V6h8V1H38v17h14z"></path>
                </svg>

              </div>


            </div>
            <p className={textSizes.medium}>Clone of the popular Wordle Game using Turkish words.</p>
          </div>

        </div>
      </Box>


      {/* About Me Section */}
      <Box className="col-span-1 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <h2 className={textSizes.subtitle}>About Me!</h2>
          {/* <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/navarrow.svg`} alt="Arrow SVG" className="w-4 h-4" /> */}
        </div>
        <p className={textSizes.normal}>
          I am a Software Developer studying CS at Georgia Tech with a love of languages and linguistics!
        </p>
        <div className="flex items-center">
          <a href="/resumes/resume.pdf" download="Berk_Tunctan_Resume.docx" className={`mt-auto underline ${textSizes.normal}`}>Résumé</a>
          <a href="/resumes/resume.pdf" download="Berk_Tunctan_Resume.docx" className={`mt-auto ${textSizes.normal}`}>
            <img src={`/${theme === 'dark' ? 'dark' : 'light'}icons/downloadbtn.svg`} alt="Download" className='w-5 h-5 ml-3 transition duration-300 ease-in-out' />
          </a>

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
