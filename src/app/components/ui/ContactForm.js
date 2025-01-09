'use client';
import { useState } from "react";

const ContactForm = () => {
  const [user, setUser ] = useState({
    username: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser ((prevUser ) => ({ ...prevUser , [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/DataFetch", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message
        })
      });
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser ({
          username: "",
          email: "",
          phone: "",
          message: ""
        });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
      <>
        <div className="flex justify-center mt-5 p-6 bg-[url('/assets/topobg.png')] bg-opacity-50 bg-fixed bg-cover rounded-xl backdrop-blur-lg bg-blend-luminosity shadow-zinc-900 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="text-white text-sm font-bold md:text-md lg:text-md xl:text-md">
              <label htmlFor="username" className="pl-2">
                Name <br />
                <input
                    className="w-72 rounded-sm bg-zinc-400 border-zinc-500 border-2 my-0.5 text-black text-sm md:text-md lg:text-md xl:text-md px-2 placeholder-black"
                    type="text"
                    name="username"
                    placeholder="Enter your name"
                    id="username"
                    value={user.username}
                    onChange={handleChange}
                    required
                />
              </label>
            </div>
            <div className="text-white text-sm font-bold md:text-md lg:text-md xl:text-md">
              <label htmlFor="email" className="pl-2">
                Email <br />
                <input
                    className="w-72 rounded-sm bg-zinc-400 border-zinc-500 border-2 my-0.5 text-black text-sm md:text-md lg:text-md xl:text-md px-2 placeholder-black"
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    id="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
              </label>
            </div>
            <div className="text-white text-sm font-bold md:text-md lg:text-md xl:text-md">
              <label htmlFor="phone" className="pl-2">
                Contact no. <br />
                <input
                    className="w-72 rounded-sm bg-zinc-400 border-zinc-500 border-2 my-0.5 text-black text-sm md:text-md lg:text-md xl:text-md px-2 placeholder-black"
                    type="number"
                    name="phone"
                    placeholder="Enter your phone number"
                    id="phone"
                    value={user.phone}
                    onChange={handleChange}
                    required
                />
              </label>
            </div>
            <div className="text-white text-sm font-bold md:text-md lg:text-md xl:text-md">
              <label htmlFor="message" className="pl-2">
                Message <br />
                <textarea
                    className="w-72 rounded-sm bg-zinc-400 border-zinc-500 border-2 my-0.5 text-black text-sm md:text-md lg:text-md xl:text-md px-2 placeholder-black"
                    name="message"
                    rows={10}
                    placeholder="Enter your message"
                    id="message"
                    value={user.message}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                />
              </label>
            </div>
            <div className="text-center">
              {status === 'success' && <p className="text-sm text-green-500">Thank you for your message!</p>}
              { status === 'error' && <p className="text-sm text-red-500">There was an error!</p>}
            </div>
            <div className="flex items-center justify-center">
              <button className="shadow-white bg-[url('/assets/nebula.gif')] bg-bottom shadow-2xl bg- w-52 mt-2 py-1 px-2 text-sm active:translate-y-0.5 border-zinc-500 border-2" type="submit">Send Message</button>
            </div>
          </form>
        </div>
        <style jsx>{`
        input::placeholder,
        textarea::placeholder {
          color: black; /* Set placeholder text color to black */
        }
      `}</style>
      </>
  );
};

export default ContactForm;