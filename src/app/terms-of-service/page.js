import React from 'react';
import "../globals.css"; // Ensure you have the necessary global styles

const TermsOfServicePage = () => {
  return (
      <div className="bg-[url('/assets/darkwall.jpg')] bg-fixed bg-cover bg-no-repeat">
        <div className="bg-black bg-opacity-70">
          <div className="min-h-screen flex flex-col text-white pt-20">
            <header className="text-white py-6">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold title-text-multi">Terms of Service</h1>
                <p className="text-lg mt-2 animate-pulse">Last updated: January 7, 2025</p>
              </div>
            </header>

            <main className="flex-grow container mx-auto px-4 pb-10">
              <section className="shadow rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 title-text-multi">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to NasRock, a project by Daichianoop. These Terms of Service govern your access to and use of our services. By using our services, you agree to comply with and be bound by these terms. Please read them carefully.
                </p>

                <h2 className="text-2xl font-semibold mb-4 title-text-multi">2. Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing and utilizing NasRock, you confirm that you have read, understood, and accepted these terms and conditions. If you do not agree with any part of these terms, you must refrain from using our services.
                </p>

                <h2 className="text-2xl font-semibold mb-4 title-text-multi">3. Use of Service</h2>
                <p className="mb-4">
                  You are responsible for your conduct and any content that you create, submit, or share while using NasRock. You agree to use the service in compliance with all applicable laws and regulations.
                </p>

                <h2 className="text-2xl font-semibold mb-4 title-text-multi">4. User Accounts</h2>
                <p className="mb-4">
                  To access certain features of NasRock, you may need to create an account. You agree to provide accurate information, maintain the security of your account, and notify us immediately of any unauthorized use of your account.
                </p>

                <h2 className="text-2xl font-semibold mb-4 title-text-multi">5. Intellectual Property</h2>
                <p className="mb-4">
                  All content, trademarks, and other intellectual property related to NasRock are owned by Daichianoop or our licensors. Unauthorized use of any content from NasRock is strictly prohibited and may result in legal action.
                </p>

                <h2 className="text-2xl font-semibold mb-4 title-text-multi">6. Limitation of Liability</h2>
                <p className="mb-4">
                  In no event shall Daichianoop be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your access to or use of NasRock. This includes any damages resulting from errors, omissions, or interruptions in service.
                </p>

                <h2 className="text-2xl font-semibold mb-4 title-text-multi">7. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new terms on this page. Your continued use of NasRock after the changes take effect constitutes your acceptance of the new terms.
                </p>

                <h2 className="text-2xl font-semibold mb-4 title-text-multi">8. Governing Law</h2>
                <p className="mb-4">
                  These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Daichianoop operates, without regard to its conflict of law provisions.
                </p>

                <h2 className="text-2xl font-semibold mb-4 title-text-multi">9. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions regarding this Privacy Policy, please contact us at <a href ="mailto:kuganoop2005@gmail.com" className="title-text-multi">kuganoop2005@gmail.com</a>.
                </p>
              </section>
            </main>
          </div>
        </div>
      </div>
  );
};

export default TermsOfServicePage;