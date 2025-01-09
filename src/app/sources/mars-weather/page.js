import React from 'react';
import MarsWeather from "@/app/components/MarsWeather";
import Link from "next/link";

const Page = () => {
  return (
      <div className="">
        <div className="flex items-center justify-center mt-28">
          <MarsWeather />
        </div>
        <section className="text-white bg-[url('/assets/topobg.png')] bg-fixed bg-cover bg-no-repeat">
          <div className="p-5 md:p-10 bg-black bg-opacity-50">
            <div className="container mx-auto p-4 md:p-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 title-text-multi">NASA&#39;s Mars Weather Data API</h1>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Introduction</h2>
              <p className="mt-2 text-sm md:text-base">
                NASA&#39;s Mars Weather Data API provides real-time weather information gathered from the InSight lander
                on Mars. This initiative aims to keep the public informed about the Martian atmosphere and surface
                conditions, enhancing our understanding of the Red Planet.
              </p>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Key Features of NASA&#39;s Mars Weather Data API</h2>
              <ol className="list-decimal list-inside mt-2">
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Real-Time Data:</strong>
                  <p>
                    Access to up-to-date weather data, including temperature, pressure, wind speed, and more, directly
                    from Mars.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Comprehensive Metrics:</strong>
                  <p>
                    Detailed metrics covering various atmospheric conditions, allowing users to analyze Martian weather
                    patterns.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">User -Friendly API:</strong>
                  <p>
                    An easy-to-use API for developers and researchers to integrate Mars weather data into their
                    applications and projects.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Educational Value:</strong>
                  <p>
                    Provides valuable resources for educators and students interested in planetary science and atmospheric
                    studies.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Public Engagement:</strong>
                  <p>
                    Encourages public interest and engagement in Mars exploration and science through accessible data.
                  </p>
                </li>
              </ol>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Applications of NASA&#39;s Mars Weather Data API</h2>
              <ul className="list-disc list-inside mt-2">
                <li><strong className="title-text-multi-sub">Research:</strong> Used by scientists and researchers to
                  study Martian weather and its impact on exploration missions.
                </li>
                <li><strong className="title-text-multi-sub">Education:</strong> Incorporated into educational programs
                  to teach students about Mars and planetary weather systems.
                </li>
                <li><strong className="title-text-multi-sub">Public Awareness:</strong> Enhancing public awareness of
                  Mars exploration and the challenges of studying another planet.
                </li>
                <li><strong className="title-text-multi-sub">Development:</strong> Aiding developers in creating
                  applications that utilize real-time Martian weather data for various purposes.
                </li>
              </ul>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Challenges and Future Directions</h2>
              <p className="mt-2 text-sm md:text-base">
                While NASA&#39;s Mars Weather Data API serves as a crucial resource for understanding Martian conditions,
                challenges include ensuring data accuracy and accessibility. Future directions may focus on expanding the
                types of data available and improving the API's integration capabilities with other NASA resources.
              </p>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Resources for Further Information</h2>
              <p className="mt-2 text-sm md:text-base">Here are two top resources that provide in-depth information about NASA&#39;s Mars Weather Data API:</p>
              <ol className="list-decimal list-inside mt-2">
                <li className="mt-2">
                  <strong className="title-text-multi-sub">NASA&#39;s Mars Weather Data API Documentation:</strong>
                  <p>
                    The official documentation provides detailed information on how to access and utilize the API.<br/>
                    <Link href="https://mars.nasa.gov/insight/weather/" className="title-text-multi hover:underline">NASA&#39;s Mars Weather Data API</Link>
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">NASA Mars Exploration Program:</strong>
                  <p>
                    This page includes resources and updates related to Mars exploration missions.<br/>
                    <Link href="https://mars.nasa.gov/" className="title-text-multi hover:underline">NASA Mars Exploration</Link>
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