import React from 'react';

const Page = () => {
  return (
      <div className="bg-[url('/assets/moon.jpg')] bg-fixed">
        <div className="bg-black bg-opacity-50 text-white p-8 md:p-16 lg:p-32">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 title-text-multi">About NasRock</h1>
          <p className="text-base md:text-lg mb-8">
            NasRock is a cutting-edge space exploration application that leverages the power of NASA&#39;s APIs and
            real-time technologies to provide users with an immersive experience in understanding our planet and beyond.
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 title-text-multi">Key Features:</h2>
          <div className="mb-8">
            <div className="mb-2">Integration with Rapid API for enhanced data access.</div>
            <div className="mb-2">Utilization of NASA&#39;s open APIs, including Eyes on Earth and EOSDIS (Earth Observing System Data and Information System).</div>
            <div className="mb-2">Real-time data visualization and exploration capabilities.</div>
            <div className="mb-2">Database management using MongoDB for efficient data storage and retrieval.</div>
            <div className="mb-2">Responsive design powered by Tailwind CSS for a seamless user experience across devices.</div>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 title-text-multi">Technologies Used:</h2>
          <p className="text-base md:text-lg mb-8">
            NasRock is built using modern web technologies, including:
          </p>
          <div className="mb-8">
            <div className="mb-2">Next.js for server-side rendering and static site generation.</div>
            <div className="mb-2">Tailwind CSS for utility-first styling.</div>
            <div className="mb-2">MongoDB for database management.</div>
            <div className="mb-2">Various APIs for accessing space-related data.</div>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 title-text-multi">Join Us on This Journey!</h2>
          <p className="text-base md:text-lg">
            Explore the wonders of space and our planet with NasRock. Whether you&#39;re a space enthusiast, a student,
            or just curious about the universe, NasRock has something for everyone!
          </p>
        </div>
      </div>
  );
};

export default Page;