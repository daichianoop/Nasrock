import React from 'react';
import Link from "next/link";

const Page = () => {
  return (
      <div className="w-screen text-white bg-[url('/assets/moon.jpg')] bg-fixed">
        <div className="bg-black bg-opacity-50 px-4 py-10 pt-32 md:px-20">
          <h1 className="text-4xl font-bold mb-6 title-text-multi text-center">NASA Open APIs Documentation</h1>

          <p className="mb-4 text-center">
            The NASA Open APIs provide access to a variety of data related to space exploration, astronomy, and NASA projects. Below are some key APIs and their usage.
          </p>

          <h2 className="text-3xl font-semibold mt-6 title-text-multi">1. Mars Weather API</h2>
          <p className="mt-2">
            The Mars Weather API provides weather data collected by the Curiosity Rover on Mars. Users can retrieve daily weather reports and monitor the environmental conditions on the Martian surface.
          </p>
          <h3 className="text-xl mt-4">Usage</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Get current weather reports, including temperature, wind, and humidity.</li>
            <li>Access historical weather data for research and analysis.</li>
            <li>Integrate with applications to visualize Mars weather data.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6 title-text-multi">2. Image and Video Library API</h2>
          <p className="mt-2">
            The Image and Video Library API grants access to NASA&#39;s extensive collection of images and videos from various missions and events.
          </p>
          <h3 className="text-xl mt-4">Usage</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Search and access high-resolution images and videos of space missions.</li>
            <li>Filter results by categories, such as mission, date, or media type.</li>
            <li>Incorporate media into educational materials and applications.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6 title-text-multi">3. Space News API</h2>
          <p className="mt-2">
            The Space News API provides the latest news updates related to space exploration, discoveries, and NASA missions.
          </p>
          <h3 className="text-xl mt-4">Usage</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Retrieve recent news articles and updates from various sources.</li>
            <li>Stay informed about upcoming space missions, launches, and events.</li>
            <li>Use in news aggregation platforms to cover space-related topics.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6 title-text-multi">4. Astronomy Picture of the Day (APOD) API</h2>
          <p className="mt-2">
            The APOD API delivers a new astronomy-related image or video every day, along with a brief explanation.
          </p>
          <h3 className="text-xl mt-4">Usage</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Display the daily astronomy picture on websites or applications.</li>
            <li>Access past APOD images and their descriptions for educational purposes.</li>
            <li>Create engaging content for astronomy enthusiasts.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6 title-text-multi">5. NASA Eyes</h2>
          <p className="mt-2">
            NASA Eyes allows users to visualize and interact with NASA missions, providing 3D views of space missions in real-time.
          </p>
          <h3 className="text-xl mt-4">Usage</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Visualize spacecraft locations and trajectories.</li>
            <li>Explore interactive simulations of planetary missions.</li>
            <li>Create immersive educational experiences for users.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6 title-text-multi">6. NASA EOSDIS API</h2>
          <p className=" mt-2">
            The Earth Observing System Data and Information System (EOSDIS) API provides access to a wealth of Earth science data.
          </p>
          <h3 className="text-xl mt-4">Usage</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Explore Earth science data, including satellite imagery and weather data.</li>
            <li>Analyze environmental changes over time using historical data.</li>
            <li>Integrate data into research projects and applications focused on Earth science.</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-6">Resources</h2>
          <p className="mt-2 text-center">
            For more information and access to the APIs, please visit the official NASA API website:
          </p>
          <Link href="https://api.nasa.gov/" className="title-text-multi hover:underline text-center block mt-4">NASA Open API</Link>
        </div>
      </div>
  );
};

export default Page;