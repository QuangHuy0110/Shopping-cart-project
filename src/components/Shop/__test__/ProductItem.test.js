import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { getDataFromApi } from "../../../service/index";
import ProductItem from "../ProductItem";

import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

const dataMock = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
};

describe("ProductItem test", () => {
  const renderProductItem = () => {
    render(
      <Router>
        <ProductItem item={dataMock} />;
      </Router>
    );
  };
  it("should render success", () => {
    renderProductItem();
    const productItem = screen.getByTestId("1");
    expect(productItem).toBeInTheDocument();
  });
  it("click item navigate to the item's detail page", () => {
    renderProductItem();
    const productItem = screen.getByTestId("1");
    fireEvent.click(productItem);
    expect(window.location.href).toBe("http://localhost/products/1");
  });
});
