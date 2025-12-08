// src/components/Box.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Box = ({ children, className = '', isClickable = false, to = '', onClickFunc }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isClickable && to) {
      navigate(to);
    } else if (isClickable && onClickFunc) {
      onClickFunc()
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`
        box
        border-4 border-borders rounded-lg 
        p-6 shadow-md
        transition-all duration-300 ease-in-out
        sm:overflow-scroll sm:no-scrollbar
        
        /* Light Mode Styles (Default) */
        bg-bg-light text-black hover:bg-hover-bg-light

        /* Dark Mode Styles (Applied when 'dark' class is on html tag) */
        dark:bg-bg-dark dark:text-white 
        dark:hover:border-hover-borders-dark dark:hover:bg-sky-950
        dark:hover:shadow-blue-950
        hover:shadow-orange-200
        ${isClickable ? 'cursor-pointer' : ''}
        ${className ? className.trim() : ''}
      `}
    >
      {children}
    </div>
  );
};

export default Box;