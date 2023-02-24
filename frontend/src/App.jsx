import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Private from "./Components/Private/Private";
import PresentEmployee from "./pages/EmployeeList/PresentEmployee";
import Landing from "./pages/Landingpage/Landing";
import Login from "./pages/Login/Login";
import PunchIn from "./pages/PunchIn/PunchIn";

import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/attendance"
          element={
            <Private>
              <PunchIn />
            </Private>
          }
        />
        <Route
          path="/present"
          element={
            <Private>
              <PresentEmployee />
            </Private>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
