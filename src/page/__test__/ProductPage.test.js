import React from "react";
import {
  render,
  screen,

  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductPage from "../ProductPage";
import { Provider } from "react-redux";
import { store } from "../../store/index";
import { BrowserRouter as Router } from "react-router-dom";
import * as Redux from "react-redux";

const mockData = [
  {
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
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    ],
  },
  {
    id: 6,
    title: "MacBook Pro",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
    brand: "APPle",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg",
    ],
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    discountPercentage: 10.23,
    rating: 4.43,
    stock: 68,
    brand: "Microsoft Surface",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/8/1.jpg",
      "https://i.dummyjson.com/data/products/8/2.jpg",
      "https://i.dummyjson.com/data/products/8/3.jpg",
      "https://i.dummyjson.com/data/products/8/4.jpg",
      "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    ],
  },
  {
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    images: [
      "https://i.dummyjson.com/data/products/10/1.jpg",
      "https://i.dummyjson.com/data/products/10/2.jpg",
      "https://i.dummyjson.com/data/products/10/3.jpg",
      "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    ],
  },
  {
    id: 15,
    title: "Eau De Perfume Spray",
    description:
      "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
    price: 30,
    discountPercentage: 10.99,
    rating: 4.7,
    stock: 105,
    brand: "Lord - Al-Rehab",
    category: "fragrances",
    thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/15/1.jpg",
      "https://i.dummyjson.com/data/products/15/2.jpg",
      "https://i.dummyjson.com/data/products/15/3.jpg",
      "https://i.dummyjson.com/data/products/15/4.jpg",
      "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
    ],
  },
  {
    id: 16,
    title: "Hyaluronic Acid Serum",
    description:
      "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    price: 19,
    discountPercentage: 13.31,
    rating: 4.83,
    stock: 110,
    brand: "L'Oreal Paris",
    category: "skincare",
    thumbnail: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/16/1.png",
      "https://i.dummyjson.com/data/products/16/2.webp",
      "https://i.dummyjson.com/data/products/16/3.jpg",
      "https://i.dummyjson.com/data/products/16/4.jpg",
      "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
    ],
  },
];

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));
const renderProductPage = () => {
  render(
    <Provider store={store}>
      <Router>
        <ProductPage />
      </Router>
    </Provider>
  );
};
describe("test ProductPage suite", () => {
  beforeEach(() => {
    jest.spyOn(Redux, "useSelector").mockReturnValue(mockData);
  });
  afterEach(() => {
    cleanup();
  });
  it("click button change the product item ", async () => {
    renderProductPage();

    // test render click button laptops change list item
    const buttonAll = screen.getByTestId("btn-all");
    fireEvent.click(buttonAll);
    await waitFor(() => {
      const productList = screen.getAllByTestId("product-item");
      expect(productList.length).toBe(7);
    });

    // test render click button smartphone change list item
    const buttonSmartPhone = screen.getByTestId("data-smartphones");
    fireEvent.click(buttonSmartPhone);
    await waitFor(() => {
      const productList = screen.getAllByTestId("product-item");
      expect(productList.length).toBe(2);
    });

    // test render click button laptops change list item
    const buttonLaptop = screen.getByTestId("data-laptops");
    fireEvent.click(buttonLaptop);
    await waitFor(() => {
      const productList = screen.getAllByTestId("product-item");
      expect(productList.length).toBe(3);
    });

    // test render click button fragrances change list item
    const buttonFragrances = screen.getByTestId("data-fragrances");
    fireEvent.click(buttonFragrances);
    await waitFor(() => {
      const productList = screen.getAllByTestId("product-item");
      expect(productList.length).toBe(1);
    });

    //test render click button Skincare change list item
    const buttonSkincare = screen.getByTestId("data-skincare");
    fireEvent.click(buttonSkincare);
    await waitFor(() => {
      const productList = screen.getAllByTestId("product-item");
      expect(productList.length).toBe(1);
    });
  });
  it("click product item navigate to detail page", () => {
    renderProductPage();
    fireEvent.click(screen.getByTestId("1"));
    expect(window.location.href).toBe("http://localhost/products/1");
  });
});
