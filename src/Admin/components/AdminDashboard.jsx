import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [statistics, setStatistics] = useState({
    totalAppointments: 0,
    totalPatients: 0,
    totalVaccinationCenters: 0,
    totalVaccines: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appointmentsResponse = await axios.get(
          "http://localhost:8081/api/appointments"
        );
        const patientsResponse = await axios.get(
          "http://localhost:8081/api/patients"
        );
        const centersResponse = await axios.get(
          "http://localhost:8081/api/centers"
        );
        const vaccinesResponse = await axios.get(
          "http://localhost:8081/api/vaccines"
        );

        setStatistics({
          totalAppointments: appointmentsResponse.data.length,
          totalPatients: patientsResponse.data.length,
          totalVaccinationCenters: centersResponse.data.length,
          totalVaccines: vaccinesResponse.data.length,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-10 py-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Appointments</h3>
          <p>Total Appointments: {statistics.totalAppointments}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Patients</h3>
          <p>Total Patients: {statistics.totalPatients}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Vaccination Centers</h3>
          <p>Total Vaccination Centers: {statistics.totalVaccinationCenters}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Vaccines</h3>
          <p>Total Vaccines: {statistics.totalVaccines}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
