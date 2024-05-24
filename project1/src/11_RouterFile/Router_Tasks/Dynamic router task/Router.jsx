import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import ProductDetailPage from "./ProductDetailPage";
import Homefile from "./Homefile";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Homefile} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}