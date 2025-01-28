'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { openPoppup } from '../action/index';
import { Menu } from 'lucide-react'; // Hamburger icon from lucide-react

export default function Navbar({
  selectedData,
  onContactsClick,
  aboutMore,
  serviceArea,
}: {
  selectedData: any;
  onContactsClick: () => void;
  aboutMore: () => void;
  serviceArea: () => void;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mySTatte = useSelector((state: any) => state.changeTheNumber);
  console.log('mySTatte---->', mySTatte);
  const dispatch = useDispatch();

  return (
    <nav
      className={`transition-all duration-300 p-4 w-full fixed top-0 z-50 ${
        isScrolled ? 'bg-white shadow-lg text-black/90' : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <h1 className="text-xl font-bold">
            <img
              className="h-12"
              src="https://mrmargarita.com/skin/tiki/img/mr-margarita-logo.gif"
              alt="Logo"
            />
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <button
            className="pr-0 md:pr-8 cursor-pointer hover:text-gray-400 transition"
            onClick={aboutMore}
          >
            About More
          </button>
          <button
            className="pr-0 md:pr-8 cursor-pointer hover:text-gray-400 transition"
            onClick={serviceArea}
          >
            Our Service Area
          </button>
          <button
            className="p-2 px-6 rounded hover:bg-black hover:text-white transition bg-red-600 text-white cursor-pointer"
            onClick={onContactsClick}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu size={28} className="text-current" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white text-black/90 shadow-lg rounded p-4 flex flex-col">
          <button
            className=" text-center mb-2 hover:text-gray-400 transition"
            onClick={() => {
              setIsMobileMenuOpen(false);
              aboutMore();
            }}
          >
            About More
          </button>
          <button
            className=" text-center mb-2 hover:text-gray-400 transition"
            onClick={() => {
              setIsMobileMenuOpen(false);
              serviceArea();
            }}
          >
            Our Service Area
          </button>
          <button
            className=" text-center p-2 px-6 rounded bg-red-600 text-white hover:bg-black hover:text-white transition"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onContactsClick();
            }}
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
