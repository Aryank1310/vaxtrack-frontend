import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Vaccines = () => {
  const [vaccines, setVaccines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVaccines = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/vaccines");
        setVaccines(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchVaccines();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="px-10 py-4">
      <h2 className="text-2xl font-bold mb-4">Vaccines</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-blue-008DDA">
              <TableCell sx={{ color: 'white' }}>Vaccine ID</TableCell>
              <TableCell sx={{ color: 'white' }}>Manufacturer</TableCell>
              <TableCell sx={{ color: 'white' }}>Date of Manufacture</TableCell>
              <TableCell sx={{ color: 'white' }}>Expiry Date</TableCell>
              <TableCell sx={{ color: 'white' }}>Assigned</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vaccines.map((vaccine) => (
              <TableRow
                key={vaccine.vaccineId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{vaccine.vaccineId}</TableCell>
                <TableCell align="left">{vaccine.manufacturer}</TableCell>
                <TableCell align="left">{vaccine.dateOfManufacture}</TableCell>
                <TableCell align="left">{vaccine.expiryDate}</TableCell>
                <TableCell align="left">
                  {vaccine.assigned ? "Yes" : "No"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Vaccines;
