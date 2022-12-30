import {
  render,
  screen,
  act,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import DetaiPage from "../DetailPage";
import { Provider } from "react-redux";
import { store } from "../../store/index";
import * as Redux from "react-redux";
import * as React from "react";
import * as ReactRouter from "react-router-dom";

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
];
const mockData2 = [
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
];
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));
const renderDetaiPage = () => {
  render(
    <Provider store={store}>
      <DetaiPage />
    </Provider>
  );
};

describe("test detail page", () => {
  beforeEach(() => {
    const mockUseSelector = jest
      .fn(() => mockData2)
      .mockImplementationOnce(() => mockData)
      .mockImplementationOnce(() => mockData2);
    jest
      .spyOn(Redux, "useSelector")
      .mockImplementation(() => mockUseSelector());
  });

  it("dispatch action call when click add to cart", async () => {
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({ id: 1 });
    const useDispatchSpy = jest.spyOn(Redux, "useDispatch");
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);
    renderDetaiPage();

    const buttonAddToCart = screen.getByTestId("btn-add-to-cart");
    fireEvent.click(buttonAddToCart);
    await waitFor(() => {
      expect(mockDispatchFn).toHaveBeenCalledTimes(1);
    });
  });
  it("not dispatch action call when click btn twice", async () => {
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({ id: 2 });
    const useDispatchSpy = jest.spyOn(Redux, "useDispatch");
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);
    renderDetaiPage();
    const buttonAddToCart = screen.getByTestId("btn-add-to-cart");
    fireEvent.click(buttonAddToCart);
    await waitFor(() => {
      expect(mockDispatchFn).not.toBeCalled();
    });
  });
});
