import React from "react";

export default function ClinicsList() {
  return (
    <div className="2xl:container mx-auto px-4 py-10">
      {/* Header */}
      <div className="">
        <h1 className="text-xl font-bold text-gray-700 md:text-3xl lg:text-2xl">
          Our Clinics in Delhi
        </h1>
      </div>

      {/* Main Layout */}
      <div className="mt-10 flex flex-col lg:flex-row gap-8">
        {/* Map Section */}
        <div className="flex-1">
          <div className="w-full h-[300px] lg:h-[500px] bg-gray-200 rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.86138746408!2d77.06889980438286!3d28.527280343468757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2cf457e678b%3A0x8a2f2dcab5baf40e!2sDelhi!5e0!3m2!1sen!2sin!4v1671671671012!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Clinics List Section */}
        <div className="flex-1">
          <div className="space-y-6 h-4/6 overflow-y-auto focus:overscroll-contain ">
            {/* Card Example */}
            {[
              {
                name: "Pristyn Care",
                address:
                  "H/56, Ground Floor, Sector 51, Near Diamond Crown Banquet Hall",
                type: "Medical centre",
                rating: 4.7,
                image: "https://via.placeholder.com/150",
              },
              {
                name: "Pristyn Care",
                address:
                  "No C 65 & 66, Nawada Housing Complex, Opposite Pillar No 795",
                type: "Medical centre",
                rating: 4.5,
                image: "https://via.placeholder.com/150",
              },
              {
                name: "Pristyn Care",
                address: "Other location in Delhi",
                type: "Medical centre",
                rating: 4.3,
                image: "https://via.placeholder.com/150",
              },
              {
                name: "Pristyn Care",
                address: "Other location in Delhi",
                type: "Medical centre",
                rating: 4.3,
                image: "https://via.placeholder.com/150",
              },
              {
                name: "Pristyn Care",
                address: "Other location in Delhi",
                type: "Medical centre",
                rating: 4.3,
                image: "https://via.placeholder.com/150",
              },
            ].map((clinic, index) => (
              <div
                key={index}
                className="flex items-start bg-white shadow-md rounded-lg p-4 border border-gray-300"
              >
                {/* Image */}
                <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={clinic.image}
                    alt={clinic.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-bold text-gray-700">
                    {clinic.name}
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">{clinic.address}</p>
                  <p className="text-sm text-gray-500 mt-1">{clinic.type}</p>
                  <p className="text-sm text-yellow-500 mt-2">
                    &#9733; {clinic.rating} / 5
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
