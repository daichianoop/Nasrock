"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import './globals.css';
import FeaturesSection from "@/app/components/ui/FeaturesSection";
import FAQs from "@/app/components/ui/FAQs";
import Link from "next/link";

const imageSources = [
  "/assets/nasa.jpg",
  "/assets/digiearth.jpg",
  "/assets/next.png",
  "/assets/framer.png",
  "/assets/mongodb.png",
  "/assets/rapidapi.jpg",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(imageSources[0]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setFade(true); // Start fade out
      setTimeout(() => {
        index = (index + 1) % imageSources.length; // Loop back to the first image
        setCurrentImage(imageSources[index]);
        setFade(false); // Start fade in
      }, 500); // Match this duration with the CSS transition duration
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
      <>
        <div className="section-1 text-white">
          <div className="bg-black bg-opacity-20">
            <div className="flex flex-col md:flex-row items-center px-4 md:px-28 gap-x-10 gap-y-10 h-screen">
              <div className="flex-1">
                <div className="text-4xl text-center md:text-left">
                  Discover the Universe, One Data Point at a Time with <br />
                  <span className="text-6xl title-text-multi font-bold">Nasrock</span>
                </div>
                <Link href="/navigation">
                  <div className="mt-6 flex items-center justify-center md:justify-start">
                    <button className="btn" type="button">
                      <span className="span1">See More</span>
                      <div id="container-stars">
                        <div id="stars"></div>
                      </div>
                      <div id="glow">
                        <div className="circle"></div>
                        <div className="circle"></div>
                      </div>
                    </button>
                  </div>
                </Link>
                <div className="mt-6 text-xl text-center md:text-left">
                  <div>Visit our Documentation for more details. <br />
                    <Link href="/documentation">
                      <span className="title-text-multi font-bold">Docs</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-black p-3 rounded-xl border-2 border-zinc-800 bg-opacity-80 flex flex-col items-center justify-center">
                  <div className="pb-2 text-center">
                    <span className="title-text-multi font-bold">Nasrock</span> is powered by-
                  </div>
                  <div className={`display-image rounded-xl border-2 overflow-hidden border-zinc-800 h-52 w-full md:w-96 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                    <Image src={currentImage} alt="" width={1000} height={1000} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-2 bg-[url('/assets/topobg.png')] bg-fixed bg-cover bg-no-repeat">
          <div className="bg-black bg-opacity-60 pt-8">
            <FeaturesSection />
          </div>
        </section>
        <section className="section-2 bg-[url('/assets/moon.jpg')] bg-fixed bg-cover bg-no-repeat">
          <div className="bg-black bg-opacity-40 pt-16">
            <FAQs />
          </div>
        </section>
      </>
  );
}