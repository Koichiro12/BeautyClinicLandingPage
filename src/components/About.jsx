import React from 'react'
import aboutImage from '../assets/img/about.jpg'
import { FaAward, FaClinicMedical, FaHeart, FaUserMd } from 'react-icons/fa';

const About = () => {
    const stats = [
        { value: "2,500+", label: "Happy Customers", icon: <FaHeart className='text-blue-500' aria-hidden="true" /> },
        { value: "99+", label: "Doctors Specialist" , icon: <FaUserMd className='text-blue-500' aria-hidden="true" /> },
        {value : "99+" ,label:"Treatments", icon: <FaClinicMedical className='text-blue-500' aria-hidden="true" /> },
        {value : "10+" ,label:"Years Expreiences", icon: <FaAward className='text-blue-500' aria-hidden="true" /> },
    ];

    const approachItem = [
        {
            icon: <FaHeart className='text-blue-500' aria-hidden="true" />,
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
        },
        {
            icon: <FaUserMd className='text-blue-500' aria-hidden="true" />,
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
        },
        {
            icon: <FaClinicMedical className='text-blue-500' aria-hidden="true" />,
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
        },
        {
            icon: <FaAward className='text-blue-500' aria-hidden="true" />,
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
        },
    ];

  return (
      <>
          <section id='about' className='py-14 overflow-hidden bg-gradient-to-l from-blue-100 to-purple-100'>
              <div className="container mx-auto px-4">
                  <article data-aos="fade-up" data-aos-delay="500" className='flex flex-col lg:flex-row items-center gap-12'>
                      <figure className='lg:w-5/12 relative'>
                          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-md mx-auto">
                              <img src={aboutImage} alt="About Image" className='w-full h-auto object-cover aspect-[4/5]'
                                  loading='lazy' />
                              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" aria-hidden="true"></div>
                          </div>
                          <span className='hidden lg:block absolute -bottom-8 -left-8 w-80 h-80 rounded-full bg-blue-500 opacity-20 z-0' aria-hidden="true"></span>
                          <span className='hidden lg:block absolute -top-8 -right-8 w-60 h-60 rounded-full bg-blue-500 opacity-20 z-0' aria-hidden="true"></span>
                          <aside className='absolute bottom-1 -right-5 bg-white p-3 rounded-xl shadow-lg z-20'>
                              <strong className='text-2xl font-bold text-blue-600'>10+</strong>
                              <small className="block text-xs font-medium text-gray-600">Years Experiences</small>
                          </aside>
                      </figure>
                      <div className="lg:w-7/12" data-aos="fade-up" data-aos-delay="600">
                          <header>
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                  About <span className='text-blue-600'>Beauty Clinic</span>
                              </h2>
                              <p className='text-lg text-gray-600 mb-6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                              </p>
                          </header>
                          <section className="m-8">
                              <h3 className="text-2xl font-semibold">Our Approach</h3>
                              <ul className='space-x-3'>
                                  {
                                      approachItem.map((data, index) => (
                                          <li key={index} className='flex items-start'>
                                              <figure className='bg-blue-100 p-1 rounded-full mr-3'>
                                                  {data.icon}
                                              </figure>
                                              <p className='text-gray-700'>{ data.text}</p> 
                                          </li>
                                      ))
                                  }
                              </ul>
                          </section>
                          <section className="grid grid-cols-2 gap-4 mb-8">
                              {
                                  stats.map((s, index) => (
                                      <article key={index} className='bg-white p-4 rounded-lg shadow-sm flex items-center'>
                                          <figure className='mr-3 text-3xl'>
                                              {s.icon}
                                          </figure>
                                          <div>
                                              <strong className='text-2xl font-bold text-gray-700'>
                                                  {s.value}
                                              </strong>
                                              <p className='text-sm text-gray-500'>{ s.label}</p>
                                         </div>
                                      </article>
                                  ))
                              }
                          </section>
                          <nav>
                            <a href="#"
                            className='inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                                Meet our Specialist
                            </a>
                          </nav>
                      </div>
                </article>
                <aside className='mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden'>
                    <span className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500 opacity-40" aria-hidden="true"></span>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Missions</h3>
                        <blockquote className='text-lg text-gray-700 mb-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </blockquote>
                        <figure className='flex items-center'>
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                <FaUserMd className=' text-blue-500' aria-hidden="true"/>
                            </div>
                            <figcaption>
                                <cite className='font-semibold text-gray-800 not-italic'>Dr.Jhon Doe</cite>
                                <p className='text-gray-500'>Medical Director & Rector</p>
                            </figcaption>
                        </figure>
                    </div>
                </aside>
              </div>
      </section>
      </>
  )
}

export default About