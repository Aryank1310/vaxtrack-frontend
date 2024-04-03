import React, { useState } from "react";
import axios from "axios";
import search from "../../assets/search.jpg";

const Search = () => {
  const [pincode, setPincode] = useState("");
  const [centers, setCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppointmentConfirmed, setIsAppointmentConfirmed] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/centers/search?pincode=${pincode}`
      );
      console.log(response.data);
      setCenters(response.data);
    } catch (error) {
      console.error("Error searching centers:", error);
    }
  };

  const handleSelectCenter = (center) => {
    setSelectedCenter(center);
    setIsModalOpen(true);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleConfirmAppointment = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8081/api/appointments/register`,
        {
          patientId: 7,
          centerId: selectedCenter.id,
          vaccineId: 4,
          appointmentDate: selectedDate
        }
      );
      console.log("Appointment confirmed:", response.data);
      setIsAppointmentConfirmed(true);
      // Reset states
      setSelectedCenter(null);
      setSelectedDate(null);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error confirming appointment:", error);
    }
  };



  return (
    <div className="mx-auto p-6 bg-white flex flex-col md:flex-row">
      <div className="md:w-2/3 px-16 py-4">
        <h1 className="text-2xl font-bold mb-4">
          Search Your Nearest Vaccination Center
        </h1>
        <p className="text-gray-600 mb-4">
          Get a preview list of the nearest centers and check availability of
          vaccination slots
        </p>
        <div className="flex items-center border-b border-gray-300 pb-4">
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="flex-1 appearance-none rounded-lg py-2 px-4 bg-gray-100 text-gray-700 leading-tight focus:outline-none"
            placeholder="Enter your pin"
          />
          <button
            onClick={handleSearch}
            className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Search
          </button>
        </div>
        {centers.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Search Results:</h2>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Center Name</th>
                  <th className="px-4 py-2">Address</th>
                  <th className="px-4 py-2">Contact No.</th>
                  <th className="px-4 py-2">District</th>
                  <th className="px-4 py-2">State</th>
                  <th className="px-4 py-2">Select</th>
                </tr>
              </thead>
              <tbody>
                {centers.map((center) => (
                  <tr key={center.id}>
                    <td className="border px-4 py-2">{center.name}</td>
                    <td className="border px-4 py-2">{center.address}</td>
                    <td className="border px-4 py-2">{center.phoneNumber}</td>
                    <td className="border px-4 py-2">{center.district}</td>
                    <td className="border px-4 py-2">{center.state}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => handleSelectCenter(center)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Book
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="md:w-1/3 p-4">
        <img src={search} alt="Vaccine Image" className="max-w-64 max-h-64" />
      </div>
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full grid grid-cols-2">
                    <div className="text-lg leading-6 font-medium text-gray-900">
                      <div>Selected Center:</div>
                      <div>Address:</div>
                      <div>Contact:</div>
                      <div>Appointment Date:</div>
                    </div>
                    <div>
                      <div>{selectedCenter ? selectedCenter.name : '-'}</div>
                      <div>{selectedCenter ? selectedCenter.address : '-'}</div>
                      <div>{selectedCenter ? selectedCenter.phoneNumber : '-'}</div>
                      <div>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => handleDateSelect(e.target.value)}
                          className="block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleConfirmAppointment}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Confirm Appointment
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
