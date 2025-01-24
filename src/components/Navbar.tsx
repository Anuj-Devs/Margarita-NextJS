'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {openPoppup} from '../action/index'
export default function Navbar({ selectedData, onContactsClick, aboutMore, serviceArea,  }: { selectedData: any, onContactsClick: () => void, aboutMore: () => void, serviceArea: () => void }) { 
  console.log('selectedData', selectedData)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Listen for scroll events
    const handleScroll = () => {
      console.log('window.scrollY', window.scrollY)
      if (window.scrollY > 0) {
        setIsScrolled(true); // Set to true if user scrolls down
      } else {
        setIsScrolled(false); // Set to false when at the top
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mySTatte = useSelector((state: any) => state.changeTheNumber)
  console.log('mySTatte---->', mySTatte)
  const dispatch = useDispatch();
  return (
    <nav
      className={`transition-all duration-300 p-4 w-full absolute pb-2 mt-5 bg-transparent text-black`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold"><img className='h-12' src='https://mrmargarita.com/skin/tiki/img/mr-margarita-logo.gif'/></h1>
        </div>
        <div className='flex items-center text-white'>
        <button className='pr-8  cursor-pointer hover:text-gray-400 transition' onClick={aboutMore}>About More</button>
        <button className='pr-8  cursor-pointer hover:text-gray-400 transition' onClick={serviceArea}>Our Service Area</button>
        {/* <button className='pr-8  cursor-pointer hover:text-gray-400 transition ' onClick={() => dispatch(openPoppup(true))}>Our Service Area</button> */}
        <button className='p-2 px-6 rounded hover:bg-white hover:text-black transition bg-red-600  cursor-pointer' onClick={onContactsClick}>Contact Us</button>
          {/* <div className='font-semibold font-mono heading5'>
            <div><i className='fa-solid fa-location-dot pr-2'></i>{selectedData.name}</div>
            <div><i className='fas fa-phone pr-1'></i>{selectedData.number}</div>
          </div> */}
      </div>
        {/* <ul className="flex space-x-4">
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/buy">Buy Now</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}
