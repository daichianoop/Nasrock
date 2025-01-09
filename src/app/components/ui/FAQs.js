import React from 'react';
import "../../globals.css";

const FaQs = () => {
  return (
      <section className="text-white">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl title-text-multi">Frequently Asked Questions</h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32">
            <details className="mb-4">
              <summary className="py-2 outline-none cursor-pointer text-lg font-bold title-text-multi">
                What motivated the development of Nasrock?
              </summary>
              <div className="px-4 pb-4">
                <p>Nasrock was created to aid in educational purposes related to space and to provide users with real-time data from NASA. It serves as a platform for learning and exploration, making space information accessible to everyone.</p>
              </div>
            </details>
            <details className="mb-4">
              <summary className="py-2 outline-none cursor-pointer text-lg font-bold title-text-multi">Who developed Nasrock, and what technologies were used for its creation?
              </summary>
              <div className="px-4 pb-4">
                <p>Nasrock was developed by Daichianoop using a combination of technologies, including Next.js, Tailwind, Yarn, MongoDB, APIs, React, Three.js, Framer Motion, and many more. This diverse tech stack allows for a dynamic and interactive user experience.</p>
              </div>
            </details>
            <details className="mb-4">
              <summary className="py-2 outline-none cursor-pointer text-lg font-bold title-text-multi">Is Nasrock free to use, and what does this mean for users?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>Yes, Nasrock is completely free to use! This accessibility allows anyone interested in space and science to explore real-time data and educational resources without any cost.</p>
              </div>
            </details>
            <details className="mb-4">
              <summary className="py-2 outline-none cursor-pointer text-lg font-bold title-text-multi">Where does Nasrock get its data, and how is its reliability ensured?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>The data on Nasrock is sourced from official NASA APIs and JSON data sent by NASA. This ensures that users receive accurate and up-to-date information directly from trusted space exploration sources.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
  );
};

export default FaQs;