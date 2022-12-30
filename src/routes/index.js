import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "../page/DetailPage";
import HomePage from "../page/HomePage";
import CartPage from "../page/CartPage";
import ProductPage from "../page/ProductPage";
import Layout from "../components/Layout/Layout";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<DetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default RouteApp;
