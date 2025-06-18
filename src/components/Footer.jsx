import React from "react";
import {
  FaClinicMedical,
  FaClock,
  FaCopy,
  FaCopyright,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLine,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const Sosmed = [
    { icon: <FaFacebook className="text-lg" />, label: "Facebook" },
    { icon: <FaInstagram className="text-lg" />, label: "Instagram" },
    { icon: <FaTwitter className="text-lg" />, label: "Twitter" },
    { icon: <FaLinkedin className="text-lg" />, label: "Linkedin" },
    { icon: <FaLine className="text-lg" />, label: "Line" },
  ];

  const quickLink = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Our Specialist",
      href: "#specialist",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];
  const contact = [
    {
        icon: <FaMapMarkerAlt className="text-blue-500 text-xl mr-4 mt-1 shrink-0" />,
  
        contect: (
          <p className="text-gray-500 not-italic">
            123 Beauty Clinic , Medical Distric <br />
            London
          </p>
        ),
      },
    {
      icon: <FaPhone className="text-blue-500 text-xl mr-4 mt-1 shrink-0" />,

      contect: (
        <p className="text-gray-500 not-italic">
          +62 XXXX XXXX XXX 
        </p>
      ),
    },
    {
        icon: <FaEnvelope className="text-blue-500 text-xl mr-4 mt-1 shrink-0" />,
  
        contect: (
          <p className="text-gray-500 not-italic">
            <a href="#" className="text-blue-500">
              beautyclinic@clinic.com
            </a>
            
          </p>
        ),
      },
   
   
   
  ];

  const legalLinks = [
    {
      label: "Privacy Policy",
      href: "#",
    },
    {
      label: "Term of Service",
      href: "#",
    },
    {
      label: "Sitemap",
      href: "#",
    },
  ];

  return (
    <>
      <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <section className="lg:col-span-2">
              <header className="flex items-center mb-6">
                <FaClinicMedical
                  className="text-3xl text-blue-500 mr-3"
                  aria-hidden="true"
                />
                <h2 className="text-2xl font-bold">BeautyClinic</h2>
              </header>
              <p className="text-gray-400 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <nav aria-label="Social Media Links">
                <ul className="flex space-x-4">
                    {
                        Sosmed.map((sosmed,index) => (
                            <li key={index}>
                                <a href="#" className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition" aria-label={sosmed.label}>{sosmed.icon}</a>
                            </li>
                        ))
                    }
                </ul>
              </nav>
            </section>
            <section>
                <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-500">
                    Quick Links
                </h3>
                <nav aria-label="Quick Links">
                    <ul className="space-y-3">
                        {
                            quickLink.map((ql,index) => (
                                <li key={index}>
                                    <a href={ql.href} className="text-gray-400 hover:text-blue-500 transition">{ql.label}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </section>
            <address>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-500">
                   Contact Us
                </h3>
                <nav aria-label="Contact Us">
                    <ul className="space-y-3">
                    {
                        contact.map((c,index) => (
                            <li key={index} className="flex items-start">
                                {c.icon}{c.contect}
                            </li>
                        ))
                    }
                    </ul>
                </nav>
            </address>
          </div>
          <hr />
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Beauty Clinic. All Right reserved
                </p>
                <nav aria-label="Legals Link">
                    <ul className="flex space-x-6">
                        {
                            legalLinks.map((ll,i) =>(
                                <li key={i}>
                                    <a href={ll.href} className="text-gray-500 hover:text-blue-500 text-sm transition">
                                        {ll.label}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
