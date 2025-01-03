import React from 'react'
import { FaUserDoctor, FaRocketchat, FaHandHoldingHeart } from "react-icons/fa6";
import AppointmentBooking from './Appointmentbooking';

const Homepage = () => {

  return (
    <div className="2xl:container max-w-7xl mx-auto flex flex-col lg:flex-row bg-amber-50 ">
 
  <div className="flex-1 p-5 sm:p-10 lg:p-17 space-y-6">
    <div>
      <h1 className="text-blue-500 font-bold leading-tight text-2xl sm:text-3xl lg:text-4xl tracking-wide">
        Simplifying Surgery Experience in Delhi
      </h1>
    </div>
    <div>
      <p className="text-gray-600 mb-6 font-medium text-sm sm:text-md lg:text-lg">
        Book Free Appointment With Our Expert Doctors Near You
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 shadow-md divide-y md:divide-y-0 md:divide-x text-center py-5 rounded-xl border-gray-300 bg-white">
      <div className="text-gray-500 font-medium leading-tight text-sm p-4">
        <div className="flex justify-center text-blue-600 mb-2">
          <FaRocketchat size={30} />
        </div>
        Get consultation for 50+ diseases across India
      </div>
      <div className="text-gray-500 font-medium leading-tight text-sm p-4">
        <div className="flex justify-center text-blue-600 mb-2">
          <FaUserDoctor size={30} />
        </div>
        In-person and online consultation with experienced doctors
      </div>
      <div className="text-gray-500 font-medium leading-tight text-sm p-4">
        <div className="flex justify-center text-blue-600 mb-2">
          <FaHandHoldingHeart size={30} />
        </div>
        Extensive medical assistance throughout your treatment
      </div>
    </div>
    <div className="">
      <button className="bg-blue-600 px-6 sm:px-10 py-2 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition duration-300">
        Call Us: 8527-488-190
      </button>
    </div>
  </div>

  {/* Right Section */}
  {/* <div className="flex-1 p-5 sm:p-10 lg:p-20">
    <div className="max-w-full border-2 bg-blue-950 rounded-2xl px-4 py-8 w-full flex flex-col items-center shadow-lg">
      <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-bold text-center mb-4">
        Book FREE Doctor Appointment
      </h1>
      <form className="w-full flex flex-col items-center space-y-4">
        <div className="w-full sm:w-3/4 lg:w-2/3">
          <input
            type="text"
            className="w-full py-2 px-4 rounded-lg text-center border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Patient Name"
          />
        </div>
        <div className="w-full sm:w-3/4 lg:w-2/3">
          <input
            type="digit"
            className="w-full py-2 px-4 rounded-lg text-center border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Mobile Number"
          />
        </div>
        <div className="w-full sm:w-3/4 lg:w-2/3">
          <select className="w-full py-2 px-4 rounded-lg text-center border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>select disease</option>
            <option>Piles</option>
            <option>Cataract</option>
          </select>
        </div>
        <button className="bg-orange-500 w-full sm:w-3/4 lg:w-2/3 py-3 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300">
          Book Free Appointment
        </button>
      </form>
    </div>
  </div> */}
  <AppointmentBooking></AppointmentBooking>
</div>

  )
}

export default Homepage
