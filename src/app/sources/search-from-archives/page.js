import React from 'react';
import ArchiveSearch from "@/app/components/ArchiveSearch";
import Link from "next/link";

const Page = () => {
  return (
      <div>
        <div className="h-screen w-screen overflow-scroll mt-20">
          <div className="flex items-center justify-center">
            <ArchiveSearch />
          </div>
        </div>
        <section className="text-white bg-[url('/assets/topobg.png')] bg-fixed bg-cover bg-no-repeat">
          <div className="p-5 md:p-10 bg-black bg-opacity-50">
            <div className="container mx-auto p-4 md:p-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 title-text-multi">NASA&#39;s Image and Video Library Search</h1>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Introduction</h2>
              <p className="mt-2 text-sm md:text-base">
                NASA&#39;s Image and Video Library Search is a comprehensive online resource that provides access to a
                vast collection of images, videos, and audio files related to NASA&#39;s missions, research, and discoveries.
                This initiative aims to promote public engagement and education by making NASA&#39;s visual content readily
                accessible to everyone, from educators to enthusiasts.
              </p>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Key Features of NASA&#39;s Image and Video Library</h2>
              <ol className="list-decimal list-inside mt-2">
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Extensive Collection:</strong>
                  <p>
                    The library contains millions of images and videos, covering a wide range of topics from space
                    exploration to Earth science.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Advanced Search Functionality:</strong>
                  <p>
                    Users can easily search for specific content using keywords, categories, and filters, making it simple
                    to find relevant material.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">High-Quality Media:</strong>
                  <p>
                    All images and videos are available in high resolution, allowing users to explore details and enhance
                    their understanding of the content.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">Educational Resources:</strong>
                  <p>
                    The library includes educational materials and resources that support teachers and learners in
                    exploring NASA&#39;s work and scientific concepts.
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">User -Friendly Interface:</strong>
                  <p>
                    The library is designed to be intuitive and user-friendly, ensuring that users of all ages and
                    backgrounds can navigate it easily.
                  </p>
                </li>
              </ol>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Applications of NASA&#39;s Image and Video Library</h2>
              <ul className="list-disc list-inside mt-2">
                <li><strong className="title-text-multi-sub">Education:</strong> Used in classrooms to teach students
                  about space science, technology, and exploration through visual content.
                </li>
                <li><strong className="title-text-multi-sub">Public Engagement:</strong> Engaging the public with NASA&#39;s
                  achievements and discoveries, inspiring interest in science and technology.
                </li>
                <li><strong className="title-text-multi-sub">Research:</strong> Providing researchers and scientists
                  with visual data to support their studies and presentations.
                </li>
                <li><strong className="title-text-multi-sub">Media and Outreach:</strong> Supporting media organizations
                  and outreach programs with high-quality visuals for storytelling and educational purposes.
                </li>
              </ul>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Challenges and Future Directions</h2>
              <p className="mt-2 text-sm md:text-base">
                While NASA&#39;s Image and Video Library continues to be an invaluable resource, challenges include managing the vast amount of content and ensuring that all media is accurately cataloged and easily accessible. Future directions may focus on improving search algorithms, enhancing user experience, and expanding the collection to include more recent missions and discoveries.
              </p>

              <h2 className="text-lg md:text-xl font-semibold mt-6 title-text-multi">Resources for Further Information</h2>
              <p className="mt-2">Here are two top resources that provide in-depth information about NASA&#39;s Image and Video Library:</p>
              <ol className="list-decimal list-inside mt-2">
                <li className="mt-2">
                  <strong className="title-text-multi-sub">NASA&#39;s Image and Video Library:</strong>
                  <p>
                    The official website provides access to the extensive collection of images and videos.<br/>
                    <Link href="https://images.nasa.gov/" className="title-text-multi hover:underline">NASA&#39;s Image
                      and Video Library</Link>
                  </p>
                </li>
                <li className="mt-2">
                  <strong className="title-text-multi-sub">NASA Education Resources:</strong>
                  <p>
                    This page includes educational resources and activities related to NASA missions and science.<br/>
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