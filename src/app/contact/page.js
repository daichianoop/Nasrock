import React from 'react';
import ContactForm from "@/app/components/ui/ContactForm";
import "../globals.css"
const Page = () => {
  return (
      <>
        <div className={"bg-black bg-opacity-50"}>
          <div>
          <div className={"text-white h-screen w-screen pt-20 px-20"}>
            <div className={"text-2xl md:text-3xl lg:text-3xl xl:text-3xl text-center font-bold "}>We&#39;d love to hear <span className={"title-text-multi"}>from you</span>
            </div>
            <div className={"flex items-center justify-center"}>
              <ContactForm/>
            </div>
          </div>
        </div>
          <div className={"flex justify-center"}>
            <iframe
                className={"h-96 w-screen p-4 "}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14433.837877398124!2d82.96516838940941!3d25.255124692775077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33ca4b0a63b9%3A0x4cd9311c5255e930!2sSusuwahi%2C%20Varanasi%2C%20Uttar%20Pradesh%20221011!5e0!3m2!1sen!2sin!4v1720465594720!5m2!1sen!2sin"
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </>
  );
};

export default Page;