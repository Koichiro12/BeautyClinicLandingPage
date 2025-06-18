import React from "react";
import { FaClock, FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const contact = [
    {
      icon: <FaPhone className="text-blue-500 text-xl" />,
      title: "Our Contact",
      contect: (
        <p className="text-gray-500 not-italic">
          +62 XXXX XXXX XXX (Admin 1) <br />
          +62 XXXX XXXX XXX (Admin 2) <br />
          +62 XXXX XXXX XXX (Admin 3) <br />
        </p>
      ),
    },
    {
      icon: <FaMapMarkedAlt className="text-blue-500 text-xl" />,
      title: "Our Address",
      contect: (
        <p className="text-gray-500 not-italic">
          123 Beauty Clinic , Medical Distric <br />
          London
        </p>
      ),
    },
    {
      icon: <FaEnvelope className="text-blue-500 text-xl" />,
      title: "Email",
      contect: (
        <p className="text-gray-500 not-italic">
          <a href="#" className="text-blue-500">
            beautyclinic@clinic.com
          </a>
          <br />
          <a href="#" className="text-blue-500">
            info@beautyclinic.com
          </a>
        </p>
      ),
    },
    {
      icon: <FaClock className="text-blue-500 text-xl" />,
      title: "Working Hours",
      contect: (
        <p className="text-gray-500 not-italic">
          Sunday - Thursday : 09:00 AM - 09:00 PM, <br />
          Friday - Saturday : 09:00 AM - 04:00 PM <br />
        </p>
      ),
    },
  ];

  return (
    <>
      <section
        id="contact"
        className="bg-gradient-to-l from-blue-100 to-purple-100 py-14 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <header
            className="text-center mb-16 relative"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <span
              className="absolute -top-5 left-1/4 transform translate-x-1/2 w-30 h-30 rounded-full bg-blue-200 opacity-30 z-0"
              aria-hidden="true"
            ></span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10">
              Contact <span className="text-blue-600">Our Clinic</span>
            </h2>
            <p className="text-lg text-gray-600 mx-auto relative z-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </header>
          <main className="flex flex-col md:flex-row gap-12">
            <aside data-aos="fade-up" data-aos-delay="500" className="lg:w-2/5">
              <section className="bg-white rounded-2xl shadow-xl p-8 h-full">
                <h2 className="text-2xl font-bold text-gray-800">
                  Get in Touch
                </h2>
                <p className="text-xs text-gray-500 mb-6">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
                <address className="space-y-6">
                  {contact.map((c, index) => (
                    <article className="flex items-start" key={index}>
                      <figure className="bg-blue-100 p-3 rounded-full mr-4 shrink-0">
                        {c.icon}
                      </figure>
                      <div>
                        <h3 className="font-medium text-gray-800">{c.title}</h3>
                        {c.contect}
                      </div>
                    </article>
                  ))}
                </address>
                <p className="text-lg italic text-gray-400 text-center mt-6">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do Lorem ipsum dolor sit amet, consectetur adipiscing eli"</p>
              </section>
            </aside>
            <section
              data-aos="fade-up"
              data-aos-delay="500"
              className="lg:w-3/5"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                <h2 className="text-2xl font-bold text-gray-800">
                  Send us Message
                </h2>
                <p className="text-xs text-gray-500 mb-6">
                 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
                <form className="space-y-3">
                  <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        FirstName
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        placeholder="First name"
                        id="first_name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        id="last_name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </fieldset>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      cols={30}
                      rows={5}
                      type="text"
                      name="message"
                      placeholder="Message"
                      id="message"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <div>
                    <button aria-label="Submit Button" type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition shadow-lg w-full md:w-auto">
                        Send message 
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </main>
        </div>
      </section>
    </>
  );
};

export default Contact;
