'use client';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import "../components/styles/ModalLaunchButton.css";

const SpaceNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchNews = async () => {
    const url = 'https://spacenews.p.rapidapi.com/news';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        'x-rapidapi-host': 'spacenews.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
      <div className="container mx-auto p-6 bg-opacity-80 border border-neutral-700 border-r-2 bg-neutral-950 rounded-lg shadow-lg text-white">
        <h1 className="text-3xl font-bold text-center mb-4 animate-pulse">Today&#39;s Space News</h1>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="gap-6 mt-4 grid place-content-center">
          {news.map((article) => (
              <div key={article.id} className="rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
                <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full md:w-1/2 h-[80vh] object-cover cursor-pointer"
                    onClick={() => openModal(article.image_url)} // Open modal on image click
                />
                <div className="p-4 flex-1 md:w-1/2">
                  <h3 className="text-xl font-semibold title-text-multi mb-2">{article.title}</h3>
                  <p className="text-gray-300 mb-4">{article.news_summary_short}</p>
                  <p className="text-sm text-gray-400 mb-4">Published on: {new Date(article.timestamp).toLocaleString()}</p>
                  <Link href={article.site_url} target="_blank" rel="noopener noreferrer">
                    <button className="btn" type="button">
                      <span className={"span1"}>Read More</span>
                      <div id="container-stars">
                        <div id="stars"></div>
                      </div>
                      <div id="glow">
                        <div className="circle"></div>
                        <div className="circle"></div>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
          ))}
        </div>

        {/* Modal for displaying the image in full size */}
        {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
              <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen object-contain" />
              <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-red-700 text-4xl font-bold transition-transform duration-300 transform hover:scale-125"
              >
                &times;
              </button>
            </div>
        )}
      </div>
  );
};

export default SpaceNews;