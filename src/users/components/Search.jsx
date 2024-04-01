import React, { useState } from "react";
import axios from "axios";
import search from "../../assets/search.jpg";

const Search = () => {
  const [pincode, setPincode] = useState("");
  const [centers, setCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/centers/search?pincode=${pincode}`
      );
      setCenters(response.data);
    } catch (error) {
      console.error("Error searching centers:", error);
    }
  };

  const handleSelectCenter = (center) => {
    setSelectedCenter(center);
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
                  <th className="px-4 py-2">Select</th>
                </tr>
              </thead>
              <tbody>
                {centers.map((center) => (
                  <tr key={center.id}>
                    <td className="border px-4 py-2">{center.name}</td>
                    <td className="border px-4 py-2">{center.address}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => handleSelectCenter(center)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Select
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {selectedCenter && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Selected Center:</h2>
            <p>Name: {selectedCenter.name}</p>
            <p>Address: {selectedCenter.address}</p>
            {/* Add more details as needed */}
          </div>
        )}
      </div>
      <div className="md:w-1/3 p-4">
        <img src={search} alt="Vaccine Image" className="max-w-64 max-h-64" />
      </div>
    </div>
  );
};

export default Search;
