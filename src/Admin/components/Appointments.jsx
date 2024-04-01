import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/appointments"
        );
        setAppointments(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAppointments();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="px-10 py-4">
      <h2 className="text-2xl font-bold mb-4">Appointments</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-blue-008DDA">
              <TableCell sx={{ color: 'white' }}>Appointment ID</TableCell>
              <TableCell sx={{ color: 'white' }}>Patient ID</TableCell>
              <TableCell sx={{ color: 'white' }}>Center ID</TableCell>
              <TableCell sx={{ color: 'white' }}>Vaccine ID</TableCell>
              <TableCell sx={{ color: 'white' }}>Appointment Date</TableCell>
              <TableCell sx={{ color: 'white' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow
                key={appointment.appointmentId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{appointment.appointmentId}</TableCell>
                <TableCell align="left">{appointment.patientId}</TableCell>
                <TableCell align="left">{appointment.centerId}</TableCell>
                <TableCell align="left">{appointment.vaccineId}</TableCell>
                {/* Format date before displaying */}
                <TableCell align="left">
                  {new Date(appointment.appointmentDate).toLocaleDateString()}
                </TableCell>
                <TableCell align="left">{appointment.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appointments;
