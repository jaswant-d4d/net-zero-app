import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./assets/css/styles.css"
import General from "./pages/General";
import Homeform from "./pages/Homeform";
import ProtectedRoute from "./routes/ProtectedRoute";
import Travel from "./pages/Travel";
import FoodAndShopping from "./pages/FoodAndShopping";
import Financial from "./pages/Financial";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/general" element={<ProtectedRoute><General /></ProtectedRoute>} />
          <Route path="/home-form" element={<Homeform />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/food-shopping" element={<FoodAndShopping />} />
          <Route path="/financial" element={<Financial />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
