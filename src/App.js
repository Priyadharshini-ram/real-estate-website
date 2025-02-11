import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./pages/Navbar";
import Banner from "./pages/Banner";
import BuyPage from "./pages/Buy";
import SellPage from "./pages/Sell";
import RentPage from "./pages/Rent";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Activity from "./pages/Activity";
import Reviews from "./pages/Reviews";
import ReportFraud from "./pages/Reportfraud";
import HelpCenter from "./pages/Helpcenter";
import Transactions from "./pages/Transactions";
import Research from "./pages/Research";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/report-fraud" element={<ReportFraud />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/research" element={<Research />} /> 





      </Routes>
    </Router>
  );
};

export default App;
