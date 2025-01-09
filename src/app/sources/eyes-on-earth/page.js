'use client'
import React, {useState} from 'react';
import Eoe from "@/app/components/EOE";
import Link from "next/link";
import "../../components/styles/ModalLaunchButton.css"
import "../../globals.css"

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
      <div className=" text-white">
        <div className="w-5/6 mx-auto text-center h-screen flex items-center justify-center">
          <div className={"bg-black py-10 px-10 bg-opacity-50 border border-neutral-700 shadow-xl shadow-neutral-800 rounded"}>
            <div className=" text-center">
              <h1 className="text-3xl font-bold mb-4 title-text-multi">Welcome to EOE</h1>
              <p className="mb-6">
                NASA&#39;s Eyes is a suite of 3D visualization applications that allows users to explore
                and understand real NASA data and imagery. It provides a fun and interactive way to
                learn about Earth, our solar system, and the universe, including tracking Earth science
                satellites in real-time as they orbit the planet.
              </p>

              <p className={"title-text-multi"}>For more information. Please Visit -&gt;</p>

              <div className={"mb-6"}>
                <div
                    className={"mb-1.5 text-zinc-400 font-bold hover:bg-opacity-60 hover:bg-neutral-800 mt-1 duration-300"}>
                  <Link
                      href={"https://science.nasa.gov/eyes/"}>science.nasa.gov/eyes</Link>
                </div>
                <div
                    className={"mb-1.5 text-zinc-400 font-bold hover:bg-opacity-60 hover:bg-neutral-800 mt-1 duration-300"}>
                  <Link
                      href={"https://en.wikipedia.org/wiki/NASA%27s_Eyes"}>en.wikipedia.org/wiki/NASA%27s_Eyes</Link>
                </div>
                <div
                    className={"mb-1.5 text-zinc-400 font-bold hover:bg-opacity-60 hover:bg-neutral-800 mt-1 duration-300"}>
                  <Link
                      href={"https://nasa.fandom.com/wiki/Eyes_on_the_Earth"}>nasa.fandom.com/wiki/Eyes_on_the_Earth</Link>
                </div>
              </div>
              <div className={"flex items-center justify-center"}>
                <button className="btn" type="button" onClick={openModal}>
                  <span className={"span1"}>Launch EOE</span>
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


            {/* Fullscreen Modal for EOE */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                  <div className="relative" style={{width: '100%', height: '100%'}}>
                    <Eoe/>
                    <button
                        onClick={closeModal}
                        className="absolute lg:top-16 lg:right-12 top-10 right-3 text-red-600 text-5xl transition-transform duration-300 transform hover:scale-125"
                    >
                      &times;
                    </button>
                  </div>
                </div>
            )}
          </div>
        </div>
        <section className={"text-white bg-[url('/assets/topobg.png')] bg-fixed bg-cover bg-no-repeat "}>
          <div className={"p-10 bg-black bg-opacity-50"}>
          <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 title-text-multi">NASA&#39;s Eye on Earth Technology</h1>

            <h2 className="text-xl font-semibold mt-6 title-text-multi">Introduction</h2>
            <p className="mt-2">
              NASA&#39;s Eye on Earth technology leverages a suite of Earth observation tools and data to monitor and
              analyze the planet&#39;s changing environment. This technology encompasses advanced satellite systems, data
              processing techniques, and visualization tools that aid in understanding complex Earth processes, from
              climate change to natural disasters and human impact on the environment. By integrating satellite data
              with advanced analysis and visualization tools, Eye on Earth technology serves as a vital resource for
              addressing the challenges our planet faces, playing a crucial role in research, disaster response, and
              policy-making related to climate change and environmental protection.
            </p>

            <h2 className="text-xl font-semibold mt-6 title-text-multi">Key Features of Eye on Earth Technology</h2>
            <ol className="list-decimal list-inside mt-2">
              <li className="mt-2">
                <strong className={"title-text-multi-sub"}>Satellite Observation:</strong>
                <p>
                  <strong>Satellites</strong> like Landsat, MODIS, and Sentinel play a crucial role in collecting data
                  about the Earth&#39;s surface. These satellites capture images and data across various wavelengths,
                  allowing scientists to monitor land use changes, deforestation, urbanization, and more.
                </p>
              </li>
              <li className="mt-2">
                <strong className={"title-text-multi-sub"}>Data Integration:</strong>
                <p>
                  The integration of different datasets from various Earth-observing satellites ensures comprehensive
                  analysis. For example, combining data from several sources can help track the effects of climate
                  change or evaluate natural disaster impacts.
                </p>
              </li>
              <li className="mt-2">
                <strong className={"title-text-multi-sub"}>Visualization Tools:</strong>
                <p>
                  NASA provides various visualization tools that make data accessible and understandable to the public.
                  These tools create interactive maps and visualizations that highlight environmental changes over time,
                  such as glacial melt or coastal erosion.
                </p>
              </li>
              <li className="mt-2">
                <strong className={"title-text-multi-sub"}>Real-time Monitoring:</strong>
                <p>
                  Eye on Earth enables real-time data analysis, which is invaluable during emergencies like hurricanes,
                  wildfires, or floods. It helps provide timely information to first responders and government agencies
                  to manage and mitigate disasters effectively.
                </p>
              </li>
              <li className="mt-2">
                <strong className={"title-text-multi-sub"}>Research Applications:</strong>
                <p>
                  The technology supports a wide range of research fields including climatology, oceanography, and
                  geology. It aids researchers in understanding Earth systems and their interactions, which is crucial
                  for sustainable development and conservation efforts.
                </p>
              </li>
            </ol>

            <h2 className="text-xl font-semibold mt-6 title-text-multi">Applications of Eye on Earth Technology</h2>
            <ul className="list-disc list-inside mt-2">
              <li><strong className={"title-text-multi-sub"}>Climate Change:</strong> Monitoring rising temperatures, sea level changes, and greenhouse gas
                emissions.
              </li>
              <li><strong className={"title-text-multi-sub"}>Disaster Management:</strong> Providing crucial information during natural disasters to aid in
                response and recovery efforts.
              </li>
              <li><strong className={"title-text-multi-sub"}>Sustainability:</strong> Assisting policymakers in making informed decisions related to land
                use and resource management.
              </li>
              <li><strong className={"title-text-multi-sub"}>Ecosystem Monitoring:</strong> Observing changes in ecosystems and biodiversity, essential for
                conservation efforts.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 title-text-multi">Challenges and Future Directions</h2>
            <p className="mt-2">
              Despite its advancements, the Eye on Earth technology faces challenges such as data overload, the need for
              inter-agency collaboration, and ensuring data accessibility to underserved communities. Future directions
              may involve enhancing machine learning algorithms for better data analysis, increasing the frequency and
              resolution of satellite data, and fostering international partnerships for global monitoring initiatives.
            </p>

            <h2 className="text-xl font-semibold mt-6 title-text-multi">Resources for Further Information</h2>
            <p className="mt-2">Here are two top resources that provide in-depth information about NASA&#39;s Eye on Earth
              technology:</p>
            <ol className="list-decimal list-inside mt-2">
              <li className="mt-2">
                <strong className={"title-text-multi-sub"}>NASA Earth Observing System Data and Information System (EOSDIS):</strong>
                <p>
                  This site offers comprehensive resources on satellite imagery, datasets, and tools provided by NASA
                  for Earth observation.<br/>
                  <Link href="https://earthdata.nasa.gov/" className="title-text-multi hover:underline">NASA EOSDIS</Link>
                </p>
              </li>
              <li className="mt-2">
                <strong className={"title-text-multi-sub"}>NASA&#39;s Global Change Research Program:</strong>
                <p>
                  This page includes information on the importance of Earth observations and data applications in
                  understanding global changes and supporting scientific research.<br/>
                  <Link href="https://science.nasa.gov/earth-science/oceanography/living-oceans/earth-observations"
                     className="title-text-multi hover:underline">NASA Global Change</Link>
                </p>
              </li>
            </ol>
          </div>
          </div>
        </section>
      </div>


  )
      ;
};

export default Page;