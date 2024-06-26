import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";

import Dashboard from "../Pages/Dashboard";
import AddVehicles from "../Pages/AddVehicles";
import VerifyVehicles from "../Pages/VerifyVehicles";
import VehiclesLog from "../Pages/VehiclesLog";
import Navbar from "../components/section/Navbar";

export default function Routers() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addvehicles" element={<AddVehicles />} />
          <Route path="/verifyvehicles" element={<VerifyVehicles />} />
          <Route path="/vehicleslog" element={<VehiclesLog />} />
        </Routes>
      </Router>
    </div>
  );
}
