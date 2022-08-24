import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Work from "./pages/work/Work";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { AnimatePresence } from "framer-motion";
import LoadingPage from "./components/LoadingPage/LoadingPage";
// import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Navbar />
          <AnimatePresence mode="wait" presenceAffectsLayout>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/mywork" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;
