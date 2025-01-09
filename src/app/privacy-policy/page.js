import React from 'react';
import Link from "next/link";

const Page = () => {
  return (
      <div className="bg-[url('/assets/darkwall.jpg')] bg-fixed bg-cover bg-no-repeat">
        <div className="bg-black bg-opacity-70">
          <div className="min-h-screen flex flex-col text-white pt-20">
            <header className="text-white py-6">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold title-text-multi">Privacy Policy</h1>
                <p className="text-lg mt-2 animate-pulse">Last updated: January 7, 2025</p>
              </div>
            </header>

            <main className="flex-grow container mx-auto px-4 pb-10">
              <section className="shadow rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 title-text-multi">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to NasRock, a project by Daichianoop. Your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and safeguard your information when you utilize our services.
                </p>

                <h2 className="text-2xl font-semibold mb-4 title-text-multi">2. Information We Collect</h2>
                <p className="mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>Personal Information: Information that can be used to identify you, such as your name and email address.</li>
                  <li>Usage Data: Information about how you use our services, including your IP address, browser type, and access times.</li>
                  <li>Cookies: Small files that are stored on your device to enhance your experience.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 title-text-multi">3. How We Use Your Information</h2>
                <p className="mb-4">
                  We may utilize the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>To provide and maintain our services.</li>
                  <li>To inform you about changes to our services.</li>
                  <li>To enable you to participate in interactive features of our services when you choose to do so.</li>
                  <li>To offer customer support.</li>
                  <li>To gather analysis or valuable information to improve our services.</li>
                  <li>To monitor the usage of our services.</li>
                  <li>To detect, prevent, and address technical issues.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 title-text-multi">4. Data Security</h2>
                <p className="mb-4">
                  The security of your data is paramount to us; however, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>

                <h2 className="text-2xl font-semibold mb-4 title-text-multi">5. Your Rights</h2>
                <p className="mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>The right to access, update, or delete the information we hold about you.</li>
                  <li>The right to request that we restrict the processing of your personal information.</li>
                  <li>The right to object to our processing of your personal information.</li>
                  <li>The right to data portability.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4 title-text-multi">6. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                  We may update our Privacy Policy periodically. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
                <h2 className="text-2xl font-semibold mb-4 title-text-multi">7. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions regarding this Privacy Policy, please contact us at <a href="mailto:kuganoop2005@gmail.com" className="title-text-multi">kuganoop2005@gmail.com</a>.
                </p>
              </section>
            </main>
          </div>
        </div>
      </div>
  );
};

export default Page;