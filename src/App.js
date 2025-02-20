import React from "react"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Rent from "./pages/Rent";
import Transactions from "./pages/Transactions";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HelpCenter from "./pages/HelpCenter";
import ReportFraud from "./pages/ReportFraud";
import Research from "./pages/Research";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Banner from "./pages/Banner";
import Reviews from "./pages/Reviews";
import Activity from "./pages/Activity";
import NavigationBar from "./pages/Navbar"; // Navigation Bar
import Footer from "./components/Footer"; // Footer
import MapSection from "./pages/MapSection"; // Added MapSection
import Everything from "./pages/Everything";
import LandPlot from "./pages/LandPlot";
import ChatBot from "./pages/ChatBot"; // ✅ AI Chatbot Component
import Shortlisted from "./pages/Shortlisted"; // ✅ Import Shortlisted Page

function App() {
  return (
    <Router>
      <NavigationBar /> {/* Navbar at the top */}
      
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/report-fraud" element={<ReportFraud />} />
          <Route path="/research" element={<Research />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/map" element={<MapSection />} />
          <Route path="/everything" element={<Everything />} />
          <Route path="/land-plot" element={<LandPlot />} />
          <Route path="/shortlisted" element={<Shortlisted />} /> {/* ✅ New Route */}
        </Routes>
      </div>

      <ChatBot /> {/* ✅ AI Chatbot Component */}
      
      <Footer /> {/* Footer at the bottom */}
    </Router>
  );
}

export default App;
