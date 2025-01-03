"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [message, setMessage] = useState("");

  // Mock backend: Hardcoded booked dates
  const bookedDates = [
    new Date(2025, 0, 5), // January 5, 2025
    new Date(2025, 0, 10), // January 10, 2025
    new Date(2025, 0, 15), // January 15, 2025
  ];

  // Check if the selected date is booked
  const isBooked = (date) => {
    return bookedDates.some(
      (bookedDate) => bookedDate.toDateString() === date.toDateString()
    );
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);

    if (isBooked(date)) {
      setMessage("This date is unavailable. Please select another date.");
    } else {
      setMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedDate && !isBooked(selectedDate)) {
      alert(`Appointment booked successfully for ${selectedDate.toDateString()}`);
    } else {
      setMessage("Please select a valid date.");
    }
  };

  return (
    <div className="flex-1 p-5 sm:p-10 lg:p-20">
      <div className="max-w-full border-2 bg-blue-950 rounded-2xl px-4 py-8 w-full flex flex-col items-center shadow-lg">
        <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-bold text-center mb-4">
          Book FREE Doctor Appointment
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center space-y-4"
        >
          <div className="w-full sm:w-3/4 lg:w-2/3">
            <input
              type="text"
              className="w-full py-2 px-4 rounded-lg text-center border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Patient Name"
              required
            />
          </div>
          <div className="w-full sm:w-3/4 lg:w-2/3">
            <input
              type="tel"
              className="w-full py-2 px-4 rounded-lg text-center border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className="w-full sm:w-3/4 lg:w-2/3 ">
            <select
              className="w-full py-2 px-4 rounded-lg text-center border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select disease</option>
              <option value="Piles">Piles</option>
              <option value="Cataract">Cataract</option>
            </select>
          </div>
          <div className="w-full sm:w-3/4 lg:w-2/3 ">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              minDate={new Date()}
              filterDate={(date) => !isBooked(date)}
              placeholderText="Select appointment date"
              className="w-full py-2 px-16 rounded-lg text-center border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {message && (
            <p className="text-red-500 text-sm text-center">{message}</p>
          )}
          <button
            type="submit"
            className="bg-orange-500 w-full sm:w-3/4 lg:w-2/3 py-3 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Book Free Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentBooking;
