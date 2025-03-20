import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Project from "./assets/pages/Project";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { LottiePlayer } from "lottie-react";
import Lottie from 'lottie-react'

function App() {
  return (
    <>
      <Header />



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>




      <Footer />

    </>
  );
}

export default App;
