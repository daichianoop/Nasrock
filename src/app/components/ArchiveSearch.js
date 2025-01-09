'use client';
import React, { useEffect, useState } from 'react';
import './styles/SearchBar.css';
import '../globals.css';

const baseUrl = 'https://images-api.nasa.gov/search';

const ArchiveSearch = () => {
  const [query, setQuery] = useState('');
  const [mediaType, setMediaType] = useState('image');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchMedia = async () => {
    setLoading(true);
    setError('');
    const url = `${baseUrl}?q=${encodeURIComponent(query)}&media_type=${mediaType}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      displayResults(data.collection.items);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const displayResults = (items) => {
    setResults(items);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      searchMedia();
    }
  };

  return (
      <div className="container p-4 lg:p-8 rounded-lg shadow-lg text-white border border-neutral-800 bg-black bg-opacity-50">
        <h1 className="text-3xl font-bold mb-4 title-text-multi">Welcome to NASA&#39;s Image and Video Library</h1>
        <p className="mb-10">
          NASA&#39;s Image and Video Library is a comprehensive online resource that provides access
          to a vast collection of images, videos, and audio files related to NASA&#39;s missions,
          research, and discoveries. This initiative aims to promote public engagement and education
          by making NASA&#39;s visual content readily accessible to everyone, from educators to
          enthusiasts.
        </p>
        <div className="brutalist-container mt-3 flex flex-col md:flex-row justify-center gap-x-5 mb-4">
          <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleSearch}
              placeholder="Enter search term..."
              className="brutalist-input smooth-type w-full md:w-72"
          />
          <label className="brutalist-label title-text-multi">Nasrock Media Search</label>
          <button
              onClick={handleSearch}
              className="text-white p-2 px-5 rounded-lg hover:bg-opacity-80 transition duration-300"
          >
            Search
          </button>
        </div>
        <div className="flex radio-buttons justify-center mb-6 mx-0 md:mx-40">
          <label className="mr-4">
            <input
                type="radio"
                name="mediaType"
                value="image"
                checked={mediaType === 'image'}
                onChange={() => setMediaType('image')}
                className="mr-1"
            />
            Images
          </label>
          <label>
            <input
                type="radio"
                name="mediaType"
                value="video"
                checked={mediaType === 'video'}
                onChange={() => setMediaType('video')}
                className="mr-1"
            />
            Videos
          </label>
        </div>

        {loading && <p className="text-emerald-400 font-bold text-center">Loading...</p>}
        {error && <p className="text-red-400 font-bold text-center">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {results.map((item) => {
            const imageData = item.links.find(link => link.render === 'image');
            const title = item.data[0].title || 'Untitled';
            const description = item.data[0].description || 'No description available.';

            return (
                <div key={item.data[0].nasa_id} className="card-bg shadow-neutral-700 shadow-2xl p-3 rounded-lg overflow-hidden">
                  {imageData ? (
                      <img
                          src={imageData.href}
                          alt={title}
                          className="w-full h-auto hover:scale-105 transition-transform duration-300 transform"
                      />
                  ) : (
                      <div className="w-full h-64 bg-gray-700 flex items-center justify-center">
                        <p className="text-gray-400">Image not found</p>
                      </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-gray-300 line-clamp-6 mb-4">{description}</p>
                    <div className="flex justify-between mt-2">
                      <button
                          onClick={() => {
                            getAsset(item.data[0].nasa_id);
                          }}
                          className="bg-blue-600 text-white w-full px-3 py-1 rounded hover:bg-blue-700 transition duration-300 mr-2"
                      >
                        Get Asset
                      </button>
                      <button
                          onClick={() => {
                            getMetadata(item.data[0].nasa_id);
                          }}
                          className="bg-green-600 text-white w-full px-3 py-1 rounded hover:bg-green-700 transition duration-300"
                      >
                        Get Metadata
                      </button>
                    </div>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
  );
};

const getAsset = (nasaId) => {
  fetch(`https://images-api.nasa.gov/asset/${nasaId}`)
      .then(response => response.json())
      .then(data => {
        copyToClipboard(data);
      })
      .catch(error => {
        console.error('Error fetching asset:', error);
      });
};

const getMetadata = (nasaId) => {
  fetch(`https://images-api.nasa.gov/metadata/${nasaId}`)
      .then(response => response.json())
      .then(data => {
        copyToClipboard(data);
      })
      .catch(error => {
        console.error('Error fetching metadata:', error);
      });
};

const copyToClipboard = (data) => {
  navigator.clipboard.writeText(JSON.stringify(data, null, 2))
      .then(() => {
        alert('JSON data has been copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
};

export default ArchiveSearch;