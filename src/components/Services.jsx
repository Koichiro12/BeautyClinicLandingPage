import React from 'react'
import { FaClinicMedical, FaRegSmile, FaSyringe, FaUserMd } from 'react-icons/fa';

const Services = () => {

    const services = [
        {
            icon: <FaClinicMedical className='text-4xl
             text-blue-600' aria-hidden="true" />,
            title: 'Facelift Procedure',
            desc: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            href:'#'
        },
        {
            icon: <FaUserMd className='text-4xl
             text-blue-600' aria-hidden="true" />,
            title: 'Bottom Filler',
            desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            href:'#'
        },
        {
            icon: <FaRegSmile className='text-4xl
             text-blue-600' aria-hidden="true" />,
            title: 'Laser Procedure',
            desc: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            href:'#'
        },
        {
            icon: <FaSyringe className='text-4xl
             text-blue-600' aria-hidden="true" />,
            title: 'Facelift Treatment',
            desc: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            href:'#'
        },
        
    ];

  return (
      <>
          <section id="services" className='py-20 overflow-hidden bg-gradient-to-l from-blue-100 to-purple-100 ' aria-labelledby='services-heading'>
              <div className="container mx-auto">
                  <header data-aos="fade-up" data-aos-delay="500" className='text-center mb-16'>
                      <h2 id="services-heading" className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
                        Our <span className='text-blue-600'>Services</span>
                      </h2>
                      <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      </p>
                  </header>
                  <ul data-aos="fade-up" data-aos-delay="500" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto'>
                      {
                          services.map((service, index) => (
                              <li key={index}>
                                  <article
                                  className='bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-200 hover:translate-y-[-5px] h-full flex flex-col'
                                  >
                                      <figure className='mb-6'>
                                          {service.icon}
                                      </figure>
                                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                                          {service.title}
                                      </h3>
                                      <p className='text-gray-600 mb-6 flex-grow'>
                                          { service.desc}
                                      </p>
                                      <a href={ service.href} className='text-blue-600 hover:text-blue-700 transition flex items-center mt-auto' aria-label={`Learn More About ${service.title}`}>Learn More</a>
                                  </article>
                              </li>
                          ))
                      }
                  </ul>
                  <footer data-aos="fade-up" data-aos-delay="500" className='mt-20 text-center'>
                      <h2 className="text-2xl font-bold text-gray-600 mb-6">
                          Ready to transform your look ?
                      </h2>
                      <a href="#appointment" className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-block transition shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2' aria-label='Book your Appointment'>Book your Consultations now !</a>
                  </footer>
              </div>              
          </section>
      </>
  )
}

export default Services