'use client';
import { useEffect, useState } from 'react';
import '../globals.css';
import SmallLoader from "@/app/components/ui/SmallLoader";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

const AstroPicOfTheDay = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;

  const fetchData = async () => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return (
        <div className="flex items-center justify-center h-screen">
          <div className="loader"><SmallLoader /></div>
        </div>
    );
  }

  return (
      <div className="max-w-6xl mx-auto p-6 bg-opacity-80 border mt-24 border-neutral-700 border-r-2 bg-neutral-950 rounded-lg shadow-lg text-white flex flex-col md:flex-row">
        <div className="flex-1 p-5 bg-neutral-700 bg-opacity-40">
          <img
              src={data.url}
              alt={data.title}
              className="w-full h-auto rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
              onClick={handleImageClick}
          />
        </div>
        <div className="flex-1 md:ml-6 my-6">
          <h2 className="text-3xl title-text-multi font-bold mb-2">{data.title}</h2>
          <div className="text-gray-300 mb-4">
            <TextGenerateEffect words={data.explanation} />
          </div>
          <div className="text-sm text-gray-400">Date: {data.date}</div>
        </div>

        {/* Modal for Fullscreen Image */}
        {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 transition-opacity duration-300">
              <div className="relative">
                <img
                    src={data.url}
                    alt={data.title}
                    className="max-w-full max-h-screen object-contain transition-transform duration-300 transform"
                />
                <button
                    className="absolute top-4 right-4 text-red-700 font-bold text-4xl transition-transform duration-300 transform hover:scale-125"
                    onClick={closeModal}
                >
                  &times;
                </button>
              </div>
            </div>
        )}
      </div>
  );
};

export default AstroPicOfTheDay;