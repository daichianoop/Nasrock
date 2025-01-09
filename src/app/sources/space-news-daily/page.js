import React from 'react';
import SpaceNews from "@/app/components/SpaceNews";
import Link from "next/link";

const Page = () => {
  return (
      <div>
        <div className=" flex items-center justify-center">
          <div className="flex items-center justify-center mt-24 mb-10">
            <SpaceNews />
          </div>
        </div>
        <section className="text-white bg-[url('/assets/topobg.png')] bg-fixed bg-cover bg-no-repeat">
          <div className="p-5 md:p-10 bg-black bg-opacity-50">
            <div className="container mx-auto p-4 md:p-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 title-text-multi">NASA&#39;s Space News</h1>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Introduction</h2>
              <p className="mt-2 text-sm md:text-base">
                NASA&#39;s Space News provides up-to-date information about the agency&#39;s missions, discoveries, and
                innovative projects. This initiative aims to keep the public informed and engaged with the latest
                advancements in space exploration and scientific research.
              </p>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Key Features of NASA&#39;s Space News</h2>
              <ol className="list-decimal list-inside mt-2">
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Latest Updates:</strong>
                  <p>
                    Regular updates on current missions, projects, and events, ensuring users receive the most recent
                    information directly from NASA.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Diverse Topics:</strong>
                  <p>
                    Coverage of a wide range of topics, including planetary exploration, human spaceflight, Earth science,
                    and technology advancements.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Media Resources:</strong>
                  <p>
                    Access to videos, images, and other media resources that enhance storytelling and provide a visual
                    context to the news.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Public Engagement:</strong>
                  <p>
                    Opportunities for the public to interact with scientists and engineers through events, webinars, and
                    Q&A sessions.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Educational Content:</strong>
                  <p>
                    Educational articles and materials aimed at promoting STEM engagement and enhancing public
                    understanding of space science.
                  </p>
                </li>
              </ol>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Applications of NASA&#39;s Space News</h2>
              <ul className="list-disc list-inside mt-2">
                <li><strong className="title-text-multi-sub">Education:</strong> Used in classrooms and educational
                  programs to provide students with the latest in space science and exploration.
                </li>
                <li><strong className="title-text-multi-sub">Public Awareness:</strong> Increasing public awareness and
                  interest in NASA&#39;s activities and contributions to science and technology.
                </li>
                <li><strong className="title-text-multi-sub">Media Reporting:</strong> Serving as a reliable source for
                  journalists and media organizations covering space-related news.
                </li>
                <li><strong className="title-text-multi-sub">Community Engagement:</strong> Engaging with community
                  organizations to promote STEM initiatives and discussions.
                </li>
              </ul>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Challenges and Future Directions</h2>
              <p className="mt-2 text-sm md:text-base">
                While NASA&#39;s Space News remains an essential resource for the public, challenges include keeping pace
                with the fast-moving developments in space exploration and ensuring the information remains accessible and
                engaging. Future directions may involve expanding multimedia content, enhancing interactivity with
                audiences, and strengthening collaboration with educational institutions.
              </p>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Resources for Further Information</h2>
              <p className="mt-2">Here are two top resources that provide in-depth information about NASA&#39;s Space
                News:</p>
              <ol className="list-decimal list-inside mt-2">
                <li className="mt-2">
                  <strong className="title-text-multi-sub">NASA&#39;s Space News Page:</strong>
                  <p>
                    The official website provides access to the latest news and updates about NASA missions and
                    projects.<br/>
                    <Link href="https://www.nasa.gov/news" className="title-text-multi hover:underline">NASA&#39;s Space
                      News</Link>
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">NASA Education Resources:</strong>
                  <p>
                    This page includes educational resources and activities related to current missions and science.<br/>
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