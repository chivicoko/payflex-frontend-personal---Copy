"use client";

import { Menu, Close } from '@mui/icons-material';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ButtonLinkOne from '../button/ButtonLinkOne';
import ButtonLinkNeutral from '../button/ButtonLinkNeutral';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState('/');

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Dashoard', href: '/dashboard' },
    { name: 'Services', href: '/#services' },
    { name: 'Virtual Cards', href: '/#virtualCards' },
    { name: 'Gift Cards', href: '/#giftcards' },
    { name: 'Testimonials', href: '/#testimonials' },
  ];

  const handleNavigation = (href: string) => {
    setIsActive(href);
    router.push(href);
    if (isOpen){
        setIsOpen(false);
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 xl:px-24 flex justify-between items-center">
        <Link href="#" className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-fintech bg-clip-text text-transparent">
                PayFlex
            </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
            <li key={index} className='group'>
              <button
                onClick={() => handleNavigation(link.href)}
                className=""
              >
                <span className="flex items-center gap-2 overflow-hidden">
                  <span className="">
                    <span className={`${isActive === link.href ? 'text-primary' : 'text-gray-700 group-hover:text-blue-700'} text-[15px] font-semibold`}>{link.name}</span>
                    <div className={`${isActive === link.href ? '-translate-x-0 bg-primary' : '-translate-x-full group-hover:-translate-x-0 bg-transparent group-hover:bg-primary'} transform h-[1.7px] w-full transition-all duration-300 ease-in-out`}></div>
                  </span>
                </span>
              </button>
            </li>
            ))}
          </ul>
          
          <div className="hidden md:flex items-center space-x-4">
            <ButtonLinkNeutral
                href='/login'
                btnText1='Sign In'
                classes="py-2 px-4 rounded-radius-12 border border-primary text-primary hover:bg-primary/10 font-semibold group"
            />
            <ButtonLinkOne
                href='/register'
                btnText1='Get Started'
                classes="py-2 px-4"
            />
          </div>
        </div>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isOpen ? <Close style={{fontSize: '24px'}} /> : <Menu style={{fontSize: '24px'}} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white absolute w-full shadow-md`}>
        <div className="container mx-auto px-4 py-4 flex flex-col">
          <ul className="flex flex-col space-y-4 mb-4">
            {navLinks.map((link, index) => (
              <li key={index} className='group'>
              <button
                onClick={() => handleNavigation(link.href)}
                className=""
              >
                <span className="flex items-center gap-2 overflow-hidden">
                  <span className="">
                    <span className={`${isActive === link.href ? 'text-primary' : 'text-gray-700 group-hover:text-blue-700'} text-[15px] font-semibold`}>{link.name}</span>
                    <div className={`${isActive === link.href ? '-translate-x-0 bg-primary' : '-translate-x-full group-hover:-translate-x-0 bg-transparent group-hover:bg-primary'} transform h-[1.7px] w-full transition-all duration-300 ease-in-out`}></div>
                  </span>
                </span>
              </button>
            </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 flex-wrap">
            <ButtonLinkNeutral
                href='/login'
                btnText1='Sign In'
                classes="py-2 px-4 rounded-radius-12 border border-primary text-primary hover:bg-primary/10 font-semibold group"
            />
            <ButtonLinkOne
                btnText1='Get Started'
                href='/register'
                classes="py-2 px-4"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
