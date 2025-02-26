import React from "react";
import Navbar from "./component/Navbar";
import emailIcon from "./assets/email-1-svgrepo-com.svg";
import phoneIcon from "./assets/phone-svgrepo-com.svg";
import locationIcon from "./assets/location-1-svgrepo-com.svg";

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col">

      {/* Navbar here imported from Navbar.tsx */}
      <Navbar />


      <main className="flex-1 py-12">
        <section className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 mt-8">
            <h1 className="text-4xl font-bold mb-4 max-w-sm mx-auto">
              Have a project in mind! Book a demo.
            </h1>
            <p className="text-gray-600 max-w-[310px] lg:max-w-lg mx-auto">
              Got a project? Drop me a line if you want to work together on something exciting. Or do you need our help? Feel free to contact us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-full">
            <div className="bg-[#1B2A3B] text-white p-8 lg:p-16 rounded-t-[32px] lg:rounded-l-[32px] lg:rounded-tr-none w-full">
              <h2 className="text-3xl font-semibold mb-12 text-center lg:text-left">Get in touch</h2>

              <div className="space-y-8 mb-12">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center space-x-6 w-full max-w-xs">
                    <div className="bg-white/10 p-3 rounded-full">
                      <img 
                        src={emailIcon} 
                        alt="Email" 
                        className="h-6 w-6 [filter:brightness(0)_invert(1)]"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 ">EMAIL US</p>
                      <p className="text-lg">contact@jacobirobotics.com</p>
                    </div>
                  </div>
                  <div className="h-px bg-white/10 w-full max-w-xs mt-5 lg:hidden"></div>
                </div>

                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center space-x-6 w-full max-w-xs">
                    <div className="bg-white/10 p-3 rounded-full">
                      <img 
                        src={phoneIcon} 
                        alt="Phone" 
                        className="h-6 w-6 [filter:brightness(0)_invert(1)]"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">PHONE NUMBER</p>
                      <p className="text-lg">+1-222-555-2222</p>
                    </div>
                  </div>
                  <div className="h-px bg-white/10 w-full max-w-xs mt-5 lg:hidden"></div>
                </div>

                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center space-x-6 w-full max-w-xs">
                    <div className="bg-white/10 p-3 rounded-full">
                      <img 
                        src={locationIcon} 
                        alt="Location" 
                        className="h-6 w-6 [filter:brightness(0)_invert(1)]"
                      />
                    </div>
                    <div>
                      <p className="text-lg">4071 Emery St<br />Emeryville, CA 94608.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="w-full max-w-xs">
                  <p className="lg:mt-16 text-sm text-gray-400 mb-4 text-center lg:text-left">Connect With Us</p>
                  <div className="flex items-center justify-center lg:justify-start space-x-4">
                    <a
                      href="#"
                      className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors"
                    >
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors"
                    >
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors"
                    >
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors"
                    >
                      <svg
                        className="h-5 w-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-16 rounded-b-[32px] lg:rounded-r-[32px] lg:rounded-bl-none shadow-lg w-full">
              <form className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold lg:font-normal mb-2">First name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md p-2.5"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold lg:font-normal mb-2">Last name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md p-2.5"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold lg:font-normal mb-2">Company name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md p-2.5"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold lg:font-normal mb-2">Work email</label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-md p-2.5"
                      placeholder="Work email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold lg:font-normal mb-2">Country</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2.5"
                    placeholder="Country"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold lg:font-normal mb-2">Phone Number</label>
                  <div className="flex">
                    <select
                      className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-500 focus:outline-none focus:ring-0 focus:border-gray-300"
                      defaultValue="+1"
                    >
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+86">+86</option>
                      <option value="+81">+81</option>
                      <option value="+82">+82</option>
                      <option value="+91">+91</option>
                      <option value="+61">+61</option>
                      <option value="+49">+49</option>
                      <option value="+33">+33</option>
                      <option value="+7">+7</option>
                    </select>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 rounded-r-md p-2.5"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold lg:font-normal mb-2">
                    Describe the project you need help with
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-md p-2.5"
                    placeholder="Please tell us how we can help..."
                    rows={1}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full lg:w-auto font-bold bg-jacobi-navy text-white px-4 py-2.5 rounded-md"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
}
