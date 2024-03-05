
import {  Routes, Route } from "react-router-dom";
import Admin_Layout from "./admin/pages/Admin_Layout";
import Dashboard from "./admin/pages/Dashboard";
import Onlinedriver from "./admin/pages/Onlinedriver";
import Driver from "./admin/pages/Driver";
import DriverInfo from "./admin/components/driver/DriverInfo";
import Passengers from "./admin/pages/Passengers";
import Rating from "./admin/pages/Rating";
import Ride from "./admin/pages/Ride";
import Logout from "./admin/pages/Logout";
import RidesHistory from "./admin/components/RidesHistory/RidesHistory";
import { RideInfo } from "./admin/components/Rides/RideInfo";
import PageNotFound from "./shared/PageNotFound";

function AdminApp() {
  return (
    
      <Routes>
        <Route path="/*" element={<Admin_Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="onlinedriver" element={<Onlinedriver />} />
          <Route path="drivers" element={<Driver />} />
          <Route path="driverInfo" element={<DriverInfo />} />
          <Route path="passengers" element={<Passengers />} />
          <Route path="ratings" element={<Rating />} />
          <Route path="rides" element={<Ride />} />
          <Route path="rideInfo" element={<RideInfo />} />
          <Route path="rideshistory" element={<RidesHistory />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
  
  );
}

export default AdminApp;
