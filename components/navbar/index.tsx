'use client';
import Link from 'next/link';
import './index.scss';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../button';
import { clsx } from 'clsx';
import Hamburger from './Hamburger';

const navList = [
  {
    name: 'Home',
    link: '#home',
  },
  {
    name: 'Sevices',
    link: '#services',
  },
  {
    name: 'Project',
    link: '#project',
  },
  {
    name: 'About Us',
    link: '#about',
  },
];

const navListVariants = {
  hidden: {
    x: '-110%',
  },
  show: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <Link href='/'>
          <Image
            src='/logo-white.png'
            width={170}
            height={34}
            alt='Agenone'
          />
        </Link>

        {/* Show this navlist when on desktop view */}
        <NavList
          type='desktop'
          showMenu={showMenu}
        />

        {/* Show this navlist when on mobile view */}
        <Hamburger
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
        <NavList
          type='mobile'
          showMenu={showMenu}
        />
      </div>
    </nav>
  );
};

// This is NavList component that contain the navigation list like home, project etc.
// And this component has 2 type where the first one is for mobile and second one for desktop.
type NavListProps = {
  type: 'mobile' | 'desktop';
  showMenu: boolean;
};

const NavList = ({ type, showMenu }: NavListProps) => {
  const isMobile = type === 'mobile' ? showMenu : true;
  const listClass = type === 'mobile' ? 'mobile' : 'desktop';

  return (
    <AnimatePresence>
      {/* When is on desktop the ul element would be always active */}
      {isMobile && (
        <motion.ul
          className={clsx('navbar__list', listClass)}
          variants={navListVariants}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          {navList.map((nav) => (
            <li key={nav.name}>
              <a href={nav.link}>{nav.name}</a>
              <div className='underline'></div>
            </li>
          ))}

          {/* When is on Mobile this CTA button would be rendered */}
          {type === 'mobile' && (
            <Button
              type='a'
              href='/contact'
              size='md'
            >
              Contact Us
            </Button>
          )}
        </motion.ul>
      )}

      {/* When is on Desktop this CTA button would be rendered */}
      {type === 'desktop' && (
        <Button
          type='a'
          href='/contact'
          size='md'
        >
          Contact Us
        </Button>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
