import React from 'react'
import { FaClock, FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {

    const contact = [
        {
            icon: <FaPhone className='text-blue-500 text-xl' />,
            title: "Our Contact",
            contect: (
                <p className="text-gray-500">
                    +62 XXXX XXXX XXX (Admin 1) <br />
                    +62 XXXX XXXX XXX (Admin 2) <br />
                    +62 XXXX XXXX XXX (Admin 3) <br />
                </p>
            )
        },
        {
            icon: <FaMapMarkedAlt className='text-blue-500 text-xl' />,
            title: "Our Address",
            contect: (
                <p className="text-gray-500">
                    123 Beauty Clinic , Medical Distric <br />
                    London
                </p>
            )
        },
        {
            icon: <FaEnvelope className='text-blue-500 text-xl' />,
            title: "Email",
            contect: (
                <p className="text-gray-500">
                    <a href="#" className='text-blue-500'>beautyclinic@clinic.com</a>
                    <a href="#" className='text-blue-500'>info@beautyclinic.com</a>
                </p>
            )
        },
        {
            icon: <FaClock className='text-blue-500 text-xl' />,
            title: "Working Hours",
            contect: (
                <p className="text-gray-500">
                    Sunday - Thursday : 09:00 AM - 09:00 PM, <br />
                    Friday - Saturday : 09:00 AM - 04:00 PM <br />
                </p>
            )
        }
    ];

  return (
      <>
          <section id="contact" className='bg-gradient-to-l from-blue-100 to-purple-100 py-14 overflow-hidden'>
              <div className="container mx-auto px-4">
                  
              </div>
          </section>
      </>
  )
}

export default Contact