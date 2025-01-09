'use client'
import React, { useState } from 'react';
import EOSDIS from "@/app/components/EOSDIS";
import "../../components/styles/ModalLaunchButton.css"
import "../../globals.css"
import Link from "next/link";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
      <div className="text-white">
        <div className="w-5/6 mt-5 mx-auto text-center h-screen flex items-center justify-center">
          <div className="bg-black py-10 px-5 md:px-20 bg-opacity-50 border border-neutral-700 shadow-xl shadow-neutral-800 rounded">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 title-text-multi">Welcome to NASA EYES</h1>
            <p className="mb-6 text-sm md:text-base">
              NASA&#39;s Eyes is a vital initiative designed to provide an interactive platform for exploring Earth and other celestial bodies using real-time data from NASA&#39;s missions. Originally developed to support public engagement and education in space science, NASA&#39;s Eyes ensures accessible and immersive experiences for users interested in understanding our planet and the universe.
            </p>
            <p className="title-text-multi">For more information. Please Visit -&gt;</p>
            <div className="mb-6">
              <div className="mb-1.5 text-zinc-400 font-bold hover:bg-opacity-60 hover:bg-neutral-800 mt-1 duration-300">
                <Link href="https://appel.nasa.gov/critical-knowledge/case-studies/appel-case-studies/eosdis-html/">appel.nasa.gov/critical-knowledge/case-studies/appel-case-studies/eosdis-html</Link>
              </div>
              <div className="mb-1.5 text-zinc-400 font-bold hover:bg-opacity-60 hover:bg-neutral-800 mt-1 duration-300">
                <Link href="https://www.earthdata.nasa.gov/about/esdis/eosdis">www.earthdata.nasa.gov/about/esdis/eosdis</Link>
              </div>
              <div className="mb-1.5 text-zinc-400 font-bold hover:bg-opacity-60 hover:bg-neutral-800 mt-1 duration-300">
                <Link href="https://en.wikipedia.org/wiki/EOSDIS">en.wikipedia.org/wiki/EOSDIS</Link>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <button className="btn" type="button" onClick={openModal}>
                <span className="span1">Launch EYES</span>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>
                <div id="glow">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Fullscreen Modal for EOSDIS */}
        {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
              <div className="relative w-full h-full">
                <EOSDIS />
                <button
                    onClick={closeModal}
                    className="absolute  lg:top-1 lg:right-16 top-8 right-2 z-100  text-red-600 text-5xl transition-transform duration-300 transform hover:scale-125"
                >
                  &times;
                </button>
              </div>
            </div>
        )}

        <section className="text-white bg-[url('/assets/topobg.png')] bg-fixed bg-cover bg-no-repeat">
          <div className="p-5 md:p-10 bg-black bg-opacity-50">
            <div className="container mx-auto p-4 md:p-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 title-text-multi">NASA&#39;s Eyes</h1>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Introduction</h2>
              <p className="mt-2 text-sm md:text-base">
                NASA&#39;s Eyes is an interactive visualization tool that allows users to explore Earth, the solar system,
                and beyond in real -time. It provides stunning 3D graphics and animations, enabling users to experience
                NASA&#39;s missions and data in an engaging and educational way. Whether tracking the International Space
                Station, observing climate changes on Earth, or exploring distant planets, NASA&#39;s Eyes brings space
                science to life.
              </p>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Key Features of NASA&#39;s Eyes</h2>
              <ol className="list-decimal list-inside mt-2">
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Real-Time Visualization:</strong>
                  <p>
                    Users can view real-time data from various NASA missions, including satellite positions and planetary
                    movements, providing an immersive experience of space science.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Interactive Exploration:</strong>
                  <p>
                    The tool allows users to navigate through space, zoom into specific locations, and interact with data
                    visualizations, making complex scientific concepts more accessible.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Educational Resources:</strong>
                  <p>
                    NASA&#39;s Eyes includes educational content designed for students and educators, helping to explain
                    various scientific phenomena and the missions behind them.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Mission Tracking:</strong>
                  <p>
                    Users can track ongoing NASA missions, such as Mars rovers or the Artemis program, seeing live updates
                    and mission milestones in a visually engaging manner.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Cross-Platform Compatibility:</strong>
                  <p>
                    NASA&#39;s Eyes is available on multiple platforms, including desktop and mobile devices, ensuring
                    accessibility for a wide audience.
                  </p>
                </li>
              </ol>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Applications of NASA&#39;s Eyes</h2>
              <ul className="list-disc list-inside mt-2">
                <li><strong className="title-text-multi-sub">Education:</strong> Used in classrooms to teach students
                  about space science and astronomy.
                </li>
                <li><strong className="title-text-multi-sub">Public Engagement:</strong> Engaging the public with
                  NASA&#39;s missions and discoveries, inspiring interest in space exploration.
                </li>
                <li><strong className="title-text-multi-sub">Research:</strong> Providing scientists with visual tools
                  to analyze data from missions and understand planetary processes.
                </li>
                <li><strong className="title-text-multi-sub">Outreach Programs:</strong> Supporting various outreach
                  initiatives to promote STEM education and awareness of space science.
                </li>
              </ul>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Challenges and Future Directions</h2>
              <p className="mt-2 text-sm md:text-base">
                While NASA&#39;s Eyes provides a unique and engaging platform, challenges include keeping the software
                updated with the latest mission data and improving user interface elements for better accessibility.
                Future directions may focus on enhancing the realism of visualizations, integrating more interactive
                features, and expanding educational content to reach a broader audience.
              </p>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Resources for Further Information</h2>
              <p className="mt-2 text-sm md:text-base">Here are two top resources that provide in-depth information about NASA&#39;s Eyes:</p>
              <ol className="list-decimal list-inside mt-2">
                <li className="mt-2">
                  <strong className="title-text-multi-sub">NASA&#39;s Eyes on the Solar System:</strong>
                  <p>
                    The official website provides access to the application and detailed information about how to use
                    it.<br/>
                    <Link href="https://eyes.nasa.gov/" className="title-text-multi hover:underline">NASA&#39;s
                      Eyes</Link>
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">NASA Education Resources:</strong>
                  <p>
                    This page includes educational resources and activities related to space science and NASA
                    missions.<br/>
                    <Link href="https://www.nasa.gov/education" className="title-text-multi hover:underline">NASA
                      Education</Link>
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Page;