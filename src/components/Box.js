import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const MotionLink = motion.create(Link);

const Box = ({ children, className = '', isClickable = false, to = '', onClickFunc,
  entranceDelay = null, ...props }) => {
  const reduceMotion = useReducedMotion();
  const animated = entranceDelay !== null;
  const Component = isClickable && to ? MotionLink : isClickable ? motion.button : motion.div;

  const highlight = (event) => {
    if (!animated || reduceMotion || event.pointerType !== 'mouse') return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
    card.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
  };

  return (
    <Component
      {...props}
      {...(isClickable && to ? { to } : isClickable ? { type: 'button', onClick: onClickFunc } : {})}
      onPointerMove={highlight}
      initial={animated && !reduceMotion ? { opacity: 0, y: 18 } : false}
      animate={animated ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : entranceDelay || 0 }}
      whileHover={animated && isClickable && !reduceMotion ? { y: -4, transition: { duration: 0.2, delay: 0 } } : undefined}
      whileTap={animated && isClickable && !reduceMotion ? { scale: 0.98, transition: { duration: 0.1, delay: 0 } } : undefined}
      className={`box border-4 border-borders rounded-lg p-6 shadow-md text-left
        transition-colors duration-300 ease-in-out sm:no-scrollbar
        bg-bg-light text-black hover:bg-hover-bg-light
        dark:bg-bg-dark dark:text-white dark:hover:border-hover-borders-dark
        dark:hover:bg-sky-950 dark:hover:shadow-blue-950 hover:shadow-orange-200
        ${animated ? 'dashboard-card' : ''}
        ${isClickable ? 'cursor-pointer' : ''} ${className.trim()}`}
    >
      {children}
    </Component>
  );
};

export default Box;
