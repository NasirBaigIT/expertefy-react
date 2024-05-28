import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Experts from "./pages/Experts";
import SuccessStories from "./components/SuccessStoriesImage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen/SplashScreen";

const App = () => {
  // Initialize from localStorage
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <SplashScreen />
  ) : (
    <Router>
      <div className="flex flex-col bg-white shadow-xl px-30">
        <header>
          <Navbar />
          <div className="mt-3 w-full bg-indigo-500 shadow-xl min-h-[2px] max-md:max-w-full"></div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
