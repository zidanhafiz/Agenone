'use client';
import './hamburger.scss';
import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';

// This is hamburger toggle button for mobile screen
type HamburgerProps = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};

const Hamburger = ({ showMenu, setShowMenu }: HamburgerProps) => {
  const rotate = showMenu ? 45 : 0;
  const y = showMenu ? 5.5 : 0;
  const x = showMenu ? 0 : 0;

  const toggleShow = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className='hamburger'
      onClick={toggleShow}
    >
      <motion.div
        className='hamburger__line'
        style={{
          rotate: rotate,
          y: y,
          x: x,
        }}
      ></motion.div>
      <motion.div
        className='hamburger__line'
        style={{
          rotate: rotate * -1,
          y: y * -1,
          x: x * -1,
        }}
      ></motion.div>
    </div>
  );
};

export default Hamburger;
