'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import "../globals.css"

const Page = () => {
  return (
      <div className="text-white bg-[url('/assets/topobg.png')] bg-fixed bg-cover bg-no-repeat flex items-center justify-center">
        <div className="pt-24 pb-10 bg-black bg-opacity-50 px-20 w-screen">
          <div className="text-3xl font-bold mb-10 text-center title-text-multi">Welcome to the Nasrock Navigation Page</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href={"/sources/eyes-nasa-system"}>
              <div className="bg-[url('/assets/moon.jpg')] shadow-indigo-950 shadow-xl bg-center bg-no-repeat hover:bg-opacity-80 rounded-lg p-3 border-zinc-600 border transition duration-300 flex flex-col items-center">
                <Image
                    width={250}
                    height={100}
                    src="/Pages/SpaceView.png"
                    alt="Eyes Observation System"
                    className="w-full h-auto rounded-t-lg hover:scale-105 duration-300"
                />
                <span className="p-2 text-center uppercase font-bold title-text-multi">Eyes Observation System</span>
              </div>
            </Link>
            <Link href={"/sources/astronomical-picture-of-the-day"}>
              <div className="bg-[url('/assets/moon.jpg')] shadow-indigo-950 shadow-xl bg-center bg-no-repeat hover:bg-opacity-80 rounded-lg p-3 border-zinc-600 border transition duration-300 flex flex-col items-center">
                <Image
                    width={250}
                    height={100}
                    src="/Pages/apod.png"
                    alt="Astronomical Picture of the Day"
                    className="w-full h-auto rounded-t-lg hover:scale-105 duration-300"
                />
                <span className="p-2 text-center uppercase font-bold title-text-multi">Astronomical Picture of the Day</span>
              </div>
            </Link>
            <Link href={"/sources/search-from-archives"}>
              <div className="bg-[url('/assets/moon.jpg')] shadow-indigo-950 shadow-xl bg-center bg-no-repeat hover:bg-opacity-80 rounded-lg p-3 border-zinc-600 border transition duration-300 flex flex-col items-center">
                <Image
                    width={250}
                    height={100}
                    src="/Pages/Archive.png"
                    alt="Archive Search"
                    className="w-full h-auto rounded-t-lg hover:scale-105 duration-300"
                />
                <span className="p-2 text-center uppercase font-bold title-text-multi">Archive Search</span>
              </div>
            </Link>
            <Link href={"/sources/mars-weather"}>
              <div className="bg-[url('/assets/moon.jpg')] shadow-indigo-950 shadow-xl bg-center bg-no-repeat hover:bg-opacity-80 rounded-lg p-3 border-zinc-600 border transition duration-300 flex flex-col items-center">
                <Image
                    width={250}
                    height={100}
                    src="/Pages/mars.png"
                    alt="Mars Weather"
                    className="w-full h-auto rounded-t-lg hover:scale-105 duration-300"
                />
                <span className="p-2 text-center uppercase font-bold title-text-multi">Mars Weather</span>
              </div>
            </Link>
            <Link href={"/sources/eyes-on-earth"}>
              <div className="bg-[url('/assets/moon.jpg')] shadow-indigo-950 shadow-xl bg-center bg-no-repeat hover:bg-opacity-80 rounded-lg p-3 border-zinc-600 border transition duration-300 flex flex-col items-center">
                <Image
                    width={250}
                    height={100}
                    src="/Pages/eoe.png"
                    alt="Eyes On Earth"
                    className="w-full h-auto rounded-t-lg hover:scale-105 duration-300"
                />
                <span className="p-2 text-center uppercase font-bold title-text-multi">Eyes On Earth</span>
              </div>
            </Link>
            <Link href={"/sources/space-news-daily"}>
              <div className="bg-[url('/assets/moon.jpg')] shadow-indigo-950 shadow-xl bg-center bg-no-repeat hover:bg-opacity-80 rounded-lg p-3 border-zinc-600 border transition duration-300 flex flex-col items-center">
                <Image
                    width={250}
                    height={100}
                    src="/Pages/news.png"
                    alt="Space News"
                    className="w-full h-auto rounded-t-lg hover:scale-105 duration-300"
                />
                <span className="p-2 text-center uppercase font-bold title-text-multi">Space News</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Page;