import React from "react";
import { TiShoppingBag } from "react-icons/ti";
import Image from 'next/image'


export default function DoctorsList() {
  return (
    <div className="2xl:container mx-auto px-4 py-10">
    
      <div className="">
        <h1 className="text-2xl font-bold text-gray-700 md:text-3xl lg:text-2xl">
          Our Doctors In Delhi
        </h1>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      
        {[
          {
            image:"/images.jpg",
            name: "Dr. D. K. Das",
            qualification: "MBBS, M.S.(Ortho), M.CH.(Ortho), FJRS (UK, Germany)",
            fee: "₹800 Consultation Fee",
            rating: "4.8/5",
            experience: "28 Years Experience",
            location: "Dr DK Das - Pristyn care Ortho & Joint Care Centre",
          },
          {
            image:"/images.jpg",
            name: "Dr. Santosh Kumar Tiwari",
            qualification: "MBBS, DNB-General Surgery, M.Ch-Vascular Surgeon",
            fee: "FREE Consultation",
            rating: "4.7/5",
            experience: "23 Years Experience",
            location: "Delhi",
          },
          {
            image:"/images.jpg",
            name: "Dr. Manu Bora",
            qualification: "MBBS, MS-Orthopedics",
            fee: "₹1500 Consultation Fee",
            rating: "4.7/5",
            experience: "18 Years Experience",
            location: "OrthoSport Clinic",
          },
          {
            image:"/images.jpg",
            name: "Dr. Ankit Kumar",
            qualification: "MBBS, MS-General Surgery, M.Ch-Urology",
            fee: "FREE Consultation",
            rating: "4.7/5",
            experience: "16 Years Experience",
            location: "Delhi",
          },
          {
            image:"/images.jpg",
            name: "Dr. Mohit Bhandari",
            qualification: "MBBS, MS, DMAS (France)",
            fee: "₹2000 Consultation Fee",
            rating: "4.9/5",
            experience: "24 Years Experience",
            location: "Delhi",
          },
          {
            image:"/images.jpg",
            name: "Dr. Nikhil Jain",
            qualification: "MBBS, DNB-ENT",
            fee: "₹700 Consultation Fee",
            rating: "4.8/5",
            experience: "15 Years Experience",
            location: "Delhi",
          },
        ].map((doctor, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200"

          >
            <div className="flex ">
           <div className="mr-5"><Image src={doctor.image} alt="" width="80" height="80"></Image></div> 
           <div>  <h2 className="text-lg font-bold text-gray-700">{doctor.name}</h2>
            <p className="text-sm text-gray-700 mt-2">{doctor.qualification}</p>
            <p className="text-sm text-green-600 font-semibold mt-2">
              {doctor.fee}
            </p></div></div>
            <div className="flex items-center justify-between mt-4 text-sm text-gray-700">
              <p>
                <span className="text-yellow-500">&#9733;</span> {doctor.rating}
              </p>
              <div className="flex"><div className="bg-blue-400 rounded-xl text-white"><TiShoppingBag size={20}/></div>{doctor.experience}</div>
            </div>
            <hr></hr>
            <p className="text-sm text-gray-700 mt-4">{doctor.location}</p>
            <div className="flex mt-4 gap-2">
              <button className="border-blue-500 border-2 text-blue-500 font-normal py-2 px-5 rounded-lg text-xs">
                Call Us 8527-488-190
              </button>
              <button className="bg-blue-500 text-white py-2 px-5 rounded-lg text-xs">
                Book Free Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <button className="bg-gray-200 py-2 px-4 rounded-md text-gray-700 font-semibold">
          View More
        </button>
      </div>
    </div>
  );
}
