import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';


const Box = ({ children, className = '', isClickable = false, to = '', onClickFunc }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isClickable && to) {
      navigate(to);
    } else if (isClickable && onClickFunc) {
      onClickFunc()
    }
  };

  const { theme } = useContext(AppContext);

  return (
    <div
      onClick={handleClick}
      className={` box
        border-4 border-borders rounded-lg 
        p-6 shadow-md
        ${theme === 'dark' ? 'bg-bg-dark text-white hover:border-hover-borders-dark hover:bg-sky-950' : 'bg-bg-light text-black hover:bg-hover-bg-light'} 
        transition duration-300 ease-in-out
        sm:overflow-scroll sm:no-scrollbar
        ${isClickable ? 'cursor-pointer' : ''}
        ${className ? className.trim() : ''}
      `}
    >
      {children}
    </div>
  );
};

export default Box;
