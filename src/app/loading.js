import React from 'react';
import './globals.css';
import LoaderPyramid from "@/app/components/ui/LoaderPyramid";

const Loading = () => {
  return (
      <div className="bg-[url('/assets/moon.jpg')] bg-fixed h-screen w-screen flex items-center justify-center">
        <div className="bg-black bg-opacity-50 text-white p-32 flex items-center justify-center h-full w-full">
          <LoaderPyramid />
        </div>
      </div>
  );
};

export default Loading;