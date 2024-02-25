'use client';
import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Variants, motion } from 'framer-motion';
import Link from 'next/link';
import './index.scss';
import Image from 'next/image';

type ButtonProps = {
  children: ReactNode;
  type: 'button' | 'a';
  size: 'sm' | 'md' | 'lg';
  icon?: boolean;
  href?: string;
  variants?: Variants;
  className?: string;
};

const Button = ({ children, type, size, href, icon, ...props }: ButtonProps) => {
  if (type === 'button') {
    return (
      <motion.button
        className={clsx('button', size, props?.className)}
        {...props}
      >
        {children}
        {icon && (
          <Image
            className={clsx('icon', size)}
            src='/icons/arrow-right.png'
            width={24}
            height={24}
            alt='arrow'
          />
        )}
      </motion.button>
    );
  }

  return (
    <motion.div {...props}>
      <Link
        className={clsx('button', size)}
        href={href ? href : '#'}
      >
        {children}
        {icon && (
          <Image
            className={clsx('icon', size)}
            src='/icons/arrow-right.png'
            width={24}
            height={24}
            alt='arrow'
          />
        )}
      </Link>
    </motion.div>
  );
};

export default Button;
