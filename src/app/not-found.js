import React from 'react';
import Link from 'next/link';
const NotFound = () => {
  return (
      <div className="flex items-center justify-center h-screen bg-black bg-opacity-70">
        <section className="flex items-center p-16 text-white">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto">
            <div className="max-w-md text-center">
              <h2 className="mb-8 text-9xl font-extrabold opacity-80">
                <span className="sr-only">Error</span>404
              </h2>
              <p className="text-2xl font-semibold">Sorry, we couldn&#39;t find this page.</p>
              <p className="mt-4 mb-8 text-lg">But don&#39;t worry, you can find plenty of other things on our homepage.</p>
              <Link
                  rel="noopener noreferrer"
                  href="/" // Updated to link back to your homepage
                  className="px-8 py-3 mt-4 bg-emerald-600 text-black font-bold rounded-lg shadow-lg transition duration-200 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
};

export default NotFound;