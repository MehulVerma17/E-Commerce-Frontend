import Footer from "@/customer/components/Footer/Footer";
import Navigation from "@/customer/components/Navigation/Navigation";
import Product from "@/customer/components/Product/Product";
import ProductDetails from "@/customer/components/ProductDetails/ProductDetails";
import HomePage from "@/customer/pages/HomePage/HomePage";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const CustomerRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <Navigation />

      {/* Page content - grow to fill available space */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />{" "}
          {/* Default route redirect */}
          {/* Route for products */}
          <Route path="/products" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          {/* Add more routes here */}
        </Routes>
      </div>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
};

export default CustomerRoutes;
