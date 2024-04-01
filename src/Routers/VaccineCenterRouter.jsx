import React from "react";
import { Route, Routes } from "react-router-dom";
import VaccineCentersDashboard from "../VaccineCenter/VaccineCenterDashboard";

const VaccineCenterRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<VaccineCentersDashboard />}></Route>
      </Routes>
    </div>
  );
};

export default VaccineCenterRouter;
