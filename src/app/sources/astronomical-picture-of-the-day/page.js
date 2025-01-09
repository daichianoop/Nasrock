import React from 'react';
import AstroPicOfTheDay from "@/app/components/AstroPicOfTheDay";
import Link from "next/link";

const Page = () => {
  return (
      <div className="">
        <div className="flex mb-10 items-center justify-center">
          <AstroPicOfTheDay />
        </div>
        <section className="text-white bg-[url('/assets/topobg.png')] bg-fixed bg-cover bg-no-repeat">
          <div className="p-5 md:p-10 bg-black bg-opacity-50 ">
            <div className="container mx-auto p-4 md:p-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 title-text-multi">NASA&#39;s Astronomy Picture of the Day</h1>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Introduction</h2>
              <p className="mt-2 text-sm md:text-base">
                NASA&#39;s Astronomy Picture of the Day (APOD) is a popular initiative that showcases a new astronomical
                image or photograph each day, accompanied by a brief explanation written by a professional astronomer.
                This program aims to promote public interest in astronomy and space science, providing a daily dose of
                stunning visuals that highlight the beauty and complexity of the universe.
              </p>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Key Features of NASA&#39;s APOD</h2>
              <ol className="list-decimal list-inside mt-2">
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Daily Updates:</strong>
                  <p>
                    Each day, a new image or video is featured, ensuring a fresh and engaging experience for users
                    interested in astronomy.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Educational Content:</strong>
                  <p>
                    Each image comes with a detailed explanation, providing context and scientific insights that enhance
                    the viewer&#39;s understanding of the subject.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Wide Range of Topics:</strong>
                  <p>
                    APOD covers a diverse range of astronomical phenomena, including celestial events, deep-sky objects,
                    and images from space missions, appealing to a broad audience.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Community Engagement:</strong>
                  <p>
                    Users can submit their own images for consideration, fostering a sense of community among astronomy
                    enthusiasts and amateur astronomers.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Accessibility:</strong>
                  <p>
                    NASA&#39;s APOD is available on multiple platforms, including websites and mobile apps, making it easy
                    for users to access daily content.
                  </p>
                </li>
              </ol>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Applications of NASA&#39;s APOD</h2>
              <ul className="list-disc list-inside mt-2">
                <li><strong className="title-text-multi-sub">Education:</strong> Used in classrooms and educational
                  settings to inspire students and teach them about astronomy and space science.
                </li>
                <li><strong className="title-text-multi-sub">Public Engagement:</strong> Engaging the public with
                  beautiful astronomical images, sparking interest in science and exploration.
                </li>
                <li><strong className="title-text-multi-sub">Research:</strong> Providing scientists and researchers
                  with high-quality images and data for analysis and study.
                </li>
                <li><strong className="title-text-multi-sub">Outreach Programs:</strong> Supporting outreach initiatives
                  aimed at promoting STEM education and awareness of space science.
                </li>
              </ul>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Challenges and Future Directions</h2>
              <p className="mt-2 text-sm md:text-base">
                While NASA&#39;s APOD continues to be a valuable resource, challenges include ensuring the quality and
                diversity of submitted images and maintaining public interest over time. Future directions may focus on
                integrating more interactive features, expanding educational resources, and increasing collaboration with
                educational institutions to enhance outreach efforts.
              </p>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Resources for Further Information</h2>
              <p className="mt-2 text-sm md:text-base">Here are two top resources that provide in-depth information about NASA&#39;s APOD:</p>
              <ol className="list-decimal list-inside mt-2">
                <li className="mt-2">
                  <strong className="title-text-multi-sub">NASA&#39;s Astronomy Picture of the Day:</strong>
                  <p>
                    The official website provides access to the daily images and explanations.<br/>
                    <Link href="https://apod.nasa.gov/apod/astropix.html"
                          className="title-text-multi hover:underline">NASA&#39;s APOD</Link>
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">NASA Education Resources:</strong>
                  <p>
                    This page includes educational resources and activities related to astronomy and NASA missions.<br/>
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