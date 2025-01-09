import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "../../globals.css";
import "../styles/ModalLaunchButton.css";

const FeaturesSection = () => {
  return (
      <>
        <section className="p-4 lg:p-8 text-white">
          <div className="container mx-auto space-y-12">
            <div className={"text-4xl title-text-multi font-bold text-center"}>Features</div>
            <div className=" flex-col flex gap-16">
              <div className="flex flex-wrap overflow-hidden rounded-md shadow-sm">
                <Image src="/Pages/apod.png" alt="" height={320} width={500} className="aspect-video" />
                <div className="flex flex-col justify-center flex-1 p-6">
                  <span className="text-xs uppercase text-gray-500">Powered by NASA Open APIs</span>
                  <h3 className="text-3xl font-bold title-text-multi">Astro POD</h3>
                  <p className="my-6 text-gray-500">Delight in a daily dose of cosmic inspiration! The Astronomy Picture
                    of the Day API brings iconic images and their stories to your fingertips.</p>
                  <Link href={"/sources/astronomical-picture-of-the-day"}>
                    <div className={"flex items-center justify-start"}>
                      <button className="btn" type="button">
                        <span className={"span1"}>Redirect</span>
                        <div id="container-stars">
                          <div id="stars"></div>
                        </div>
                        <div id="glow">
                          <div className="circle"></div>
                          <div className="circle"></div>
                        </div>
                      </button>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap-reverse overflow-hidden rounded-md shadow-sm ">
                <div className="flex flex-col justify-center flex-1 p-6">
                  <span className="text-xs uppercase text-gray-500">Powered by NASA Open APIs</span>
                  <h3 className="text-3xl font-bold title-text-multi">Archive Search</h3>
                  <p className="my-6 text-gray-500">Unlock a treasure trove of cosmic beauty! NASA&#39;s library offers
                    breathtaking images and videos that capture the wonders of space exploration.</p>
                  <Link href={"/sources/search-from-archives"}>
                    <div className={"flex items-center justify-start"}>
                      <button className="btn" type="button">
                        <span className={"span1"}>Redirect</span>
                        <div id="container-stars">
                          <div id="stars"></div>
                        </div>
                        <div id="glow">
                          <div className="circle"></div>
                          <div className="circle"></div>
                        </div>
                      </button>
                    </div>
                  </Link>
                </div>
                <Image src="/Pages/Archive.png" alt="" height={320} width={500} className="aspect-video" />
              </div>

              <div className="flex flex-wrap overflow-hidden rounded-md shadow-sm">
                <Image src="/Pages/eoe.png" alt="" height={320} width={500} className="aspect-video" />
                <div className="flex flex-col justify-center flex-1 p-6">
                  <span className="text-xs uppercase text-gray-500">Powered by NASA EOE Vault</span>
                  <h3 className="text-3xl font-bold title-text-multi">Eyes on Earth</h3>
                  <p className="my-6 text-gray-500">Explore our planet like never before! Eyes on Earth offers stunning
                    satellite imagery to monitor global changes and natural wonders.</p>
                  <Link href={"/sources/eyes-on-earth"}>
                    <div className={"flex items-center justify-start"}>
                      <button className="btn" type="button">
                        <span className={"span1"}>Redirect</span>
                        <div id="container-stars">
                          <div id="stars"></div>
                        </div>
                        <div id="glow">
                          <div className="circle"></div>
                          <div className="circle"></div>
                        </div>
                      </button>
                    </div>
                  </Link>
                </div>
              </div>

              <div className=" flex flex-wrap-reverse overflow-hidden rounded-md shadow-sm ">
                <div className="flex flex-col justify-center flex-1 p-6">
                  <span className="text-xs uppercase text-gray-500">Powered by NASA Eyes</span>
                  <h3 className="text-3xl font-bold title-text-multi">NASA Eyes System</h3>
                  <p className="my-6 text-gray-500">Experience the universe from your screen! NASA Eyes transports you
                    through space, showcasing missions and celestial events in real-time.</p>
                  <Link href={"/sources/eyes-nasa-system"}>
                    <div className={"flex items-center justify-start"}>
                      <button className="btn" type="button">
                        <span className={"span1"}>Redirect</span>
                        <div id="container-stars">
                          <div id="stars"></div>
                        </div>
                        <div id="glow">
                          <div className="circle"></div>
                          <div className="circle"></div>
                        </div>
                      </button>
                    </div>
                  </Link>
                </div>
                <Image src="/Pages/SpaceView.png" alt="" height={320} width={500} className="aspect-video" />
              </div>

              <div className="flex flex-wrap overflow-hidden rounded-md shadow-sm">
                <Image src="/Pages/news.png" alt="" height={320} width={500} className="aspect-video" />
                <div className="flex flex-col justify-center flex-1 p-6">
                  <span className="text-xs uppercase text-gray-500">Powered by Rapid API</span>
                  <h3 className="text-3xl font-bold title-text-multi">Space News</h3>
                  <p className="my-6 text-gray-500">Stay in the loop with the latest cosmic happenings! Space News
                    delivers timely updates and breakthroughs in space science and exploration.</p>
                  <Link href={"/sources/space-news-daily"}>
                    <div className={"flex items-center justify-start"}>
                      <button className="btn" type="button">
                        <span className={"span1"}>Redirect</span>
                        <div id="container-stars">
                          <div id="stars"></div>
                        </div>
                        <div id="glow">
                          <div className="circle"></div>
                          <div className="circle"></div>
                        </div>
                      </button>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap-reverse overflow-hidden rounded-md shadow-sm ">
                <div className="flex flex-col justify-center flex-1 p-6">
                  <span className="text-xs uppercase text-gray-500">Powered by NASA Open APIs</span>
                  <h3 className="text-3xl font-bold title-text-multi">Mars Weather</h3>
                  <p className="my-6 text-gray-500">Stay ahead of Martian weather with real-time insights! Discover
                    temperature swings and atmospheric changes on the Red Planet.</p>
                  <Link href={"/sources/mars-weather"}>
                    <div className={"flex items-center justify-start"}>
                      <button className="btn" type="button">
                        <span className={"span1"}>Redirect</span>
                        <div id="container-stars">
                          <div id="stars"></div>
                        </div>
                        <div id="glow">
                          <div className="circle"></div>
                          <div className="circle"></div>
                        </div>
                      </button>
                    </div>
                  </Link>
                </div>
                <Image src="/Pages/mars.png" alt="" height={320} width={500} className="aspect-video" />
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default FeaturesSection;