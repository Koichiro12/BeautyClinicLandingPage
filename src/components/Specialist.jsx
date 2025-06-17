import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import specialistImage from "../assets/img/specialist.jpg";
const Specialist = () => {
  const specialist = [
    {
      id: 1,
      name: "Dr.Jhon Doe P.hd",
      role: "Plastic Surgery",
      image: specialistImage,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
      specialist: ["Facelifts", "Rhinoplasty", "Blueplastry"],
    },
    {
        id: 2,
        name: "Dr.Jane Doe P.hd",
        role: "RhinoPlasty Surgery",
        image: specialistImage,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rating: 5,
        specialist: [ "Rhinoplasty", "Blueplastry"],
      },
      {
        id: 3,
        name: "Dr.Alexia Jane P.hd",
        role: "Facelift Surgery",
        image: specialistImage,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rating: 5,
        specialist: [ "Facelifts", "Blueplastry"],
      },
      {
        id: 4,
        name: "Dr.Niko Alex P.hd",
        role: "Facelift Surgery",
        image: specialistImage,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rating: 5,
        specialist: [ "Facelifts"],
      },
  ];

  const renderStars = (rating) =>{
    return [...Array(5)].map((_,i)=>(
        i < rating ?
        <FaStar key={i} className=" text-yellow-400 inline" aria-hidden="true"/>
        :
        <FaRegStar key={i} className="text-yellow-400 inline" aria-hidden="true"/>
    ))
  }

  return (
  <>
    <section id="specialist" className="py-20 overflow-hidden bg-gradient-to-l from-blue-100 to-purple-100">
        <div className="container mx-auto px-4">
            <header className="text-center mb-16 relative" data-aos="fade-up" data-aos-delay="500">
                <span className="absolute -top-10 left-1/2 transform translate-x-1/2 w-20 h-20 rounded-full bg-blue-100 opacity-30 z-0" aria-hidden="true"></span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10">
                    Meet Our <span className="text-blue-600">Specialist</span>
                </h2>
                <p className="text-lg text-gray-600 mx-auto relative z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </header>
        </div>
    </section>
  </>);
};

export default Specialist;
