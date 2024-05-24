import React from "react";
import Home from "./HomePage";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Error404 from "./Error404";
import Header from "./Header";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Link to={"/"}>Home</Link>
        <Link to={"/about45456"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" Component={Contact} />
          <Route path="*" Component={Error404} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}