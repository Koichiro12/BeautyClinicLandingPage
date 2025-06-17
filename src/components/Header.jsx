import React, { useState } from 'react'
import { MdMenu, MdOutlineClose } from 'react-icons/md';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!isMenuOpen)
    }

    const LinkMenu = [
        { href: '#home', label: 'Home' },
        {href : '#services' , label:'Services'},
        { href: '#about', label: 'About' },
        { href: '#specialist', label: 'Specialist' },
        {href : '#contact' , label:'Contact'},
    ]

   return (
      <>
        <header className="bg-gradient-to-l from-blue-100 to-purple-100 sticky top-0 z-50">
               <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                   <a href="/" className='flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600 rounded'>
                       <h1 className="text-2xl font-bold text-blue-600">Beauty Clinic</h1>
                   </a>
                   <nav aria-label='Primary Navigations'>
                       <ul className="hidden md:flex space-x-8">
                           {LinkMenu.map((link, index) => (
                               <li  key={index}>
                                    <a href={link.href} className='text-gray-700 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-blue-500 focus:rounded'>{ link.label}</a>
                               </li>
                              

                           ))}
                       </ul>
                   </nav>
                   <button aria-label='ToggleMenu' onClick={toggleMenu} aria-expanded={isMenuOpen} aria-controls='mobile-menu' className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-2xl text-blue-600 text-2xl">
                       {
                           isMenuOpen ? (
                            <MdOutlineClose/>
                           ) : (
                            <MdMenu/>
                           )
                           }
                   </button>
                   {
                       isMenuOpen && (
                           <aside
                               id='mobile-menu'
                           className='md:hidden absolute top-16 left-0 right-0 bg-gradient-to-l from-blue-100 to-purple-100 shadow-lg py-4 px-4'>
                               <nav aria-label='Mobile Navigations'>
                                   <ul className="flex flex-col space-y-4">
                                       {
                                           LinkMenu.map((link, index) => (
                                               <li key={index}>
                                                   <a href={link.href} className='block text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 px-2 focus:outline-none focus:ring-blue-600 focus:ring-2 focus:rounded'>{ link.label}</a> 
                                               </li>
                                               
                                           ))
                                       }
                                   </ul>
                               </nav>
                           </aside>
                       )
                   }
                   <nav className='hidden md:block' aria-label='Appointment'>
                        <a href="#appointment" className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-2xl transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'>Booking Now</a>                       
                   </nav>
            </div>
        </header>
      </>
  )
}

export default Header