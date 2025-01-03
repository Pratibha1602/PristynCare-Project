
import React from 'react'
import { FaLocationDot, FaLocationCrosshairs, FaSearchengin } from "react-icons/fa6";

import Image from 'next/image'

export default function Navbar() {
  return (
    <div >
      <div className="2xl:container mx-auto px-8 py-2 flex flex-col bg-blue-950 md:flex-row items-center justify-between">
        <div className='flex flex-1 justify-between px-8 py-2'>
          <div className="flex items-center space-x-4 ">
          <Image className='w-2/5 m-auto' src="/download.jpg" alt='img' height={5000} width={5000} />
            <div className='text-white font-medium'>Pristyn Care</div>
          </div>
          <div className="flex flex-col sm:flex-row items-center bg-white text-gray-700 rounded-lg px-4 py-2">
            
            <div className="flex items-center w-4/5 sm:w-auto mb-4 sm:mb-0">
              <span className="text-orange-500 mr-2">
                <FaLocationDot />
              </span>
              <select className="bg-transparent focus:outline-none w-full sm:w-auto">
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
              </select>
              <span className="text-orange-500 ml-2">
                <FaLocationCrosshairs />
              </span>
            </div>

            {/* Search Bar */}
            <div className="flex items-center w-full sm:w-auto flex-grow">
              <input
                type="text"
                placeholder="Search disease, doctors, treatment"
                className="w-full sm:w-48 px-4 py-1 text-sm  bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-l-lg"
              />
              <button className="text-orange-500 px-3 py-2 rounded-r-lg bg-white">
                <FaSearchengin />
              </button>
            </div>
          </div>



        </div>


        <div className="flex flex-1 items-center justify-between px-5 space-x-4 mt-4  md:mt-0">
          <a
            href="#"
            className="hidden lg:inline-block text-sm text-white hover:text-gray-200"
          >
            For Patients
          </a>
          <a
            href="#"
            className="hidden lg:inline-block text-sm  text-white hover:text-gray-200"
          >
            Our Company
          </a>
          <button className="border-orange-500 border-2 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600">
            Book Free Appointment
          </button>
          <a
            href="#"
            className="hidden lg:inline-block text-sm  text-white hover:text-gray-200"
          >
            <div className='flex text-lg justify-between'><FaLocationDot size={25} /> Delhi</div>
          </a>
        </div>
      </div>
    </div>
  )
}
