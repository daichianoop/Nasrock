import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
      <div>
        <footer className="px-4 divide-y bg-black text-white">
          <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            <div className="lg:w-1/3">
              <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                <div className="flex items-center justify-center rounded-full">
                  <Image src={"/assets/logo.png"} alt={"logo"} width={200} height={200} />
                </div>
              </a>
            </div>
            <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
              <div className="space-y-3">
                <h3 className="tracking-wide uppercase title-text-multi font-bold">Products</h3>
                <div>
                  <Link href={"/sources/eyes-nasa-system"}>
                    <div className="hover:translate-y-1 duration-300 hover:text-rose-600">Eyes OS</div>
                  </Link>
                  <Link href={"/sources/astronomical-picture-of-the-day"}>
                    <div className="hover:translate-y-1 duration-300 hover:text-rose-600">Astronomical POD</div>
                  </Link>
                  <Link href={"/sources/search-from-archives"}>
                    <div className="hover:translate-y-1 duration-300 hover:text-rose-600">Archive Search</div>
                  </Link>
                  <Link href={"/sources/mars-weather"}>
                    <div className="hover:translate-y-1 duration-300 hover:text-rose-600">Mars Weather</div>
                  </Link>
                  <Link href={"/sources/eyes-on-earth"}>
                    <div className="hover:translate-y-1 duration-300 hover:text-rose-600">Eyes On Earth</div>
                  </Link>
                  <Link href={"/sources/space-news-daily"}>
                    <div className="hover:translate-y-1 duration-300 hover:text-rose-600">Space News</div>
                  </Link>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="tracking-wide uppercase dark:text-gray-900 title-text-multi font-bold">Company</h3>
                <div className="space-y-1">
                  <Link href={"/terms-of-service"}>
                    <div className={"hover:translate-y-1 duration-300 hover:text-rose-600"}>
                      Terms of Service
                    </div>
                  </Link>
                  <Link href={"/privacy-policy"}>
                    <div className={"hover:translate-y-1 duration-300 hover:text-rose-600"}>
                      Privacy Policy
                    </div>
                  </Link>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="uppercase title-text-multi font-bold">Developers</h3>
                <div className="">
                  <Link href={"https://api.nasa.gov/"}>
                    <div className={"hover:translate-y-1 duration-300 hover:text-rose-600"}>
                      APIs
                    </div>
                  </Link>
                  <Link href={"/documentation"}>
                    <div className={"hover:translate-y-1 duration-300 hover:text-rose-600"}>
                      Documentation
                    </div>
                  </Link>
                  <Link href={"/contact"}>
                    <div className={"hover:translate-y-1 duration-300 hover:text-rose-600"}>
                      Contact
                    </div>
                  </Link>
                </div>
              </div>
              <div className="space-y-3">
                <div className="uppercase dark:text-gray-900 title-text-multi font-bold">Social media</div>
                <div className="flex justify-start space-x-3">
                  <Link href={"https://www.instagram.com/"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-instagram">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry ="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </Link>
                  <Link href={"https://github.com/daichianoop"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-github">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                  </Link>
                  <Link href={"https://www.linkedin.com/in/anoop-kumar-42b527285/"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-linkedin">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </Link>
                  <Link href={"https://linktr.ee/_Anoop_Kumar"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-link">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 text-sm text-center title-text-multi animate-pulse">&copy; {new Date().getFullYear()} Daichianoop. All rights reserved.
          </div>
        </footer>
      </div>
  );
};

export default Footer;