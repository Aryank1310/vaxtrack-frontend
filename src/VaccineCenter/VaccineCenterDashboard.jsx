import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardContent,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

const VaccineCentersDashboard = () => {
  const [searchId, setSearchId] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [totalVaccines, setTotalVaccines] = useState(0);
  const [totalVaccinesToday, setTotalVaccinesToday] = useState(0);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/appointments/1"
        );
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  useEffect(() => {
    // Calculate total vaccines in stock
    const totalStock = appointments.reduce(
      (total, appointment) => total + appointment.vaccineStock,
      0
    );
    setTotalVaccines(totalStock);

    // Calculate total vaccines given today
    const today = new Date().toLocaleDateString();
    const totalToday = appointments.filter(
      (appointment) => new Date(appointment.appointmentDate).toLocaleDateString() === today
    ).length;
    setTotalVaccinesToday(totalToday);
  }, [appointments]);

  const handleSearch = () => {
    // Filter appointments based on the entered ID
    const filteredAppointments = appointments.filter(
      (appointment) => appointment.appointmentId.toString() === searchId
    );
    setAppointments(filteredAppointments);
  };

  const handleStatusChange = (appointmentId, status) => {
    // Update status in the backend
    axios.put(`http://localhost:8081/api/appointments/updateStatus/${appointmentId}`, { status })
      .then(() => {
        // Update status in the frontend
        const updatedAppointments = appointments.map((appointment) =>
          appointment.appointmentId === appointmentId ? { ...appointment, status } : appointment
        );
        setAppointments(updatedAppointments);
      })
      .catch(error => console.error("Error updating appointment status:", error));
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Vaccine Center</Typography>
        </Toolbar>
      </AppBar>
      <div className="flex flex-wrap justify-center">
        <Card className="w-[45%] m-4">
          <CardContent>
            <Typography variant="h5">Total Vaccines in Stock</Typography>
            <Typography variant="h4">{totalVaccines}</Typography>
          </CardContent>
        </Card>
        <Card className="w-[45%] m-4">
          <CardContent>
            <Typography variant="h5">Total Vaccines Given Today</Typography>
            <Typography variant="h4">{totalVaccinesToday}</Typography>
          </CardContent>
        </Card>
      </div>
      <Box className="text-center my-4">
        <TextField
          label="Search by Appointment ID"
          variant="outlined"
          size="small"
          style={{ width: "calc(100% - 100px)", maxWidth: "1200px", marginRight: "16px" }}
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "#1976D2", color: "white" }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient ID</TableCell>
              <TableCell>Vaccine ID</TableCell>
              <TableCell>Appointment ID</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.appointmentId}>
                <TableCell>{appointment.patientId}</TableCell>
                <TableCell>{appointment.vaccineId}</TableCell>
                <TableCell>{appointment.appointmentId}</TableCell>
                <TableCell>
                  <Select
                    value={appointment.status}
                    onChange={(e) => handleStatusChange(appointment.appointmentId, e.target.value)}
                  >
                    <MenuItem value="Scheduled">Scheduled</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                    <MenuItem value="Canceled">Canceled</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default VaccineCentersDashboard;
