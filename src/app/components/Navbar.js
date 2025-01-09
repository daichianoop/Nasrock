'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import './Navbar.css'; // You can keep this if you have other styles, but we will minimize its use.

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },
      );
  return (
      <div
          className={`flex justify-between items-center h-20 py-5 px-10 fixed top-0 left-0 right-0 z-50 ${scrolled ? ' backdrop-blur-lg' : 'bg-transparent'} transition-all duration-300`}>
        <div className="nav-left w-52">
         <Link href={"/"}>
           <Image src={"/assets/logo.png"} alt={""} width={190} height={100}/>
         </Link>
        </div>
        <div className="nav-mid">
          <div className="nav-items hidden md:flex justify-between items-center gap-5 text-xl">
            <Link href={"/"}>
              <button className="button1 hover:translate-y-1 duration-300">Home</button>
            </Link>
            <Link href={"/article"}>
              <button className="button1 hover:translate-y-1 duration-300">About</button>
            </Link>
            <Link href={"/navigation"}>
              <button className="button1 hover:translate-y-1 duration-300">Navigation</button>
            </Link>
            <Link href={"/documentation"}>
              <button className="button1 hover:translate-y-1 duration-300">Docs</button>
            </Link>
            <Link href={"/contact"}>
              <button className="button1 hover:translate-y-1 duration-300">Contact</button>
            </Link>
          </div>
        </div>
        <div className="nav-right w-52 flex justify-end z-50 text-white">
          <Link href={"/navigation"}>
            <button className="button1 animate-bounce hover:translate-y-1 duration-1200">
              <Image src={"/ham.svg"} alt={""} width={50} height={50}/>
            </button>
          </Link>
        </div>

        {/* Modal */}
        {isModalOpen && (
            <div className="fixed inset-0 flex justify-center items-center modal-overlay bg-black bg-opacity-50 z-100"
                 onClick={handleOverlayClick}>
              <div className="bg-black text-white p-6 rounded-lg w-96">
                <h2 className="text-lg font-bold mb-4">Nasrock Utilities</h2>
                <div className="flex flex-col gap-3">
                  <Link href={"/sources/eyes-nasa-system"}>
                    <button className="button1 hover:translate-y-1 duration-300" onClick={handleLinkClick}>Eyes Observation System
                    </button>
                  </Link>
                  <Link href={"/sources/astronomical-picture-of-the-day"}>
                    <button className="button1 hover:translate-y-1 duration-300" onClick={handleLinkClick}>Astronomical Picture of the Day</button>
                  </Link>
                  <Link href={"/sources/search-from-archives"}>
                    <button className="button1 hover:translate-y-1 duration-300" onClick={handleLinkClick}>Archive Search
                    </button>
                  </Link>
                  <Link href={"/sources/mars-weather"}>
                    <button className="button1 hover:translate-y-1 duration-300" onClick={handleLinkClick}>Mars Weather</button>
                  </Link>
                  <Link href={"/sources/eyes-on-earth"}>
                    <button className="button1 hover:translate-y-1 duration-300" onClick={handleLinkClick}>Eyes On Earth</button>
                  </Link>
                  <Link href={"/sources/space-news-daily"}>
                    <button className="button1 hover:translate-y-1 duration-300" onClick={handleLinkClick}>Space News</button>
                  </Link>
                </div>
              </div>
            </div>
        )}
      </div>
  );
};

export default Navbar;