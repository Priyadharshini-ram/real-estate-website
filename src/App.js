import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
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
import MapSection from "./pages/MapSection";
import Everything from "./pages/Everything";
import LandPlot from "./pages/LandPlot";
import ChatBot from "./pages/ChatBot";
import Shortlisted from "./pages/Shortlisted";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

// ✅ Function to check authentication status
const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

// ✅ Component for protecting routes
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

// ✅ Main Layout with Authentication Check
const MainContent = () => {
  const location = useLocation();

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Show Navbar only if user is logged in */}
      {isAuthenticated() && <NavigationBar />}

      {/* Main content */}
      <div className="flex-grow-1 position-relative">
        <Routes>
          {/* ✅ Redirect to Login if not authenticated */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* ✅ Protect all routes except login/signup */}
          <Route path="/" element={<ProtectedRoute element={<Banner />} />} />
          <Route path="/reviews" element={<ProtectedRoute element={<Reviews />} />} />
          <Route path="/activity" element={<ProtectedRoute element={<Activity />} />} />
          <Route path="/buy" element={<ProtectedRoute element={<Buy />} />} />
          <Route path="/sell" element={<ProtectedRoute element={<Sell />} />} />
          <Route path="/rent" element={<ProtectedRoute element={<Rent />} />} />
          <Route path="/transactions" element={<ProtectedRoute element={<Transactions />} />} />
          <Route path="/services" element={<ProtectedRoute element={<Services />} />} />
          <Route path="/about" element={<ProtectedRoute element={<About />} />} />
          <Route path="/contact" element={<ProtectedRoute element={<Contact />} />} />
          <Route path="/help-center" element={<ProtectedRoute element={<HelpCenter />} />} />
          <Route path="/report-fraud" element={<ProtectedRoute element={<ReportFraud />} />} />
          <Route path="/research" element={<ProtectedRoute element={<Research />} />} />
          <Route path="/map" element={<ProtectedRoute element={<MapSection />} />} />
          <Route path="/everything" element={<ProtectedRoute element={<Everything />} />} />
          <Route path="/land-plot" element={<ProtectedRoute element={<LandPlot />} />} />
          <Route path="/shortlisted" element={<ProtectedRoute element={<Shortlisted />} />} />
        </Routes>
      </div>

      {/* Show ChatBot only on Home page */}
      {location.pathname === "/" && isAuthenticated() && <ChatBot />}

      {/* Show Footer only if user is logged in */}
      {isAuthenticated() && <Footer />}
    </div>
  );
};

export default App;
