import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const PatientsHeading = styled(Typography)({
  fontSize: "32px",
  fontWeight: "bold",
  marginBottom: "20px",
});

const FilterContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
});

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/patients");
        setPatients(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPatients();
  }, []);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div  className="px-10 py-4">
      <PatientsHeading variant="h2">Patients</PatientsHeading>
      <FilterContainer>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="filter-label">Filter</InputLabel>
          <br></br>
          <Select
            labelId="filter-label"
            id="filter-select"
            value={filter}
            onChange={handleChange}
          >
            <MenuItem value="all">All Patients</MenuItem>
            <MenuItem value="vaccinated">Vaccinated Patients</MenuItem>
            <MenuItem value="non-vaccinated">Non-vaccinated Patients</MenuItem>
          </Select>
        </FormControl>
      </FilterContainer>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-blue-008DDA">
              <TableCell sx={{ color: 'white' }}>Patient ID</TableCell>
              <TableCell sx={{ color: 'white' }}>First Name</TableCell>
              <TableCell sx={{ color: 'white' }}>Last Name</TableCell>
              <TableCell sx={{ color: 'white' }}>Date of Birth</TableCell>
              <TableCell sx={{ color: 'white' }}>Gender</TableCell>
              <TableCell sx={{ color: 'white' }}>Address</TableCell>
              <TableCell sx={{ color: 'white' }}>Email</TableCell>
              <TableCell sx={{ color: 'white' }}>Phone Number</TableCell>
              <TableCell sx={{ color: 'white' }}>Registration Date</TableCell>
              <TableCell sx={{ color: 'white' }}>Vaccination Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients
              .filter((patient) => {
                if (filter === "vaccinated") {
                  return patient.vaccinationStatus;
                } else if (filter === "non-vaccinated") {
                  return !patient.vaccinationStatus;
                }
                return true; // Show all patients if filter is "all"
              })
              .map((patient) => (
                <TableRow
                  key={patient.patientId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{patient.patientId}</TableCell>
                  <TableCell align="left">{patient.firstName}</TableCell>
                  <TableCell align="left">{patient.lastName}</TableCell>
                  <TableCell align="left">{patient.dob}</TableCell>
                  <TableCell align="left">{patient.gender}</TableCell>
                  <TableCell align="left">{patient.address}</TableCell>
                  <TableCell align="left">{patient.email}</TableCell>
                  <TableCell align="left">{patient.phoneNumber}</TableCell>
                  <TableCell align="left">{patient.registrationDate}</TableCell>
                  <TableCell align="left">
                    {patient.vaccinationStatus ? "Yes" : "No"}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Patients;
