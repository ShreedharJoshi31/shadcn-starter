import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";

import Dashboard from "../Pages/Dashboard";
import AddVehicles from "../Pages/AddVehicles";
import VehiclesLog from "../Pages/VehiclesLog";
import Navbar from "../components/section/Navbar";

export default function Routers() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addvehicles" element={<AddVehicles />} />
          <Route path="/vehicleslog" element={<VehiclesLog />} />
        </Routes>
      </Router>
    </div>
  );
}
