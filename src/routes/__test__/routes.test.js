import React from "react";
import RouteApp from "../index";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/index";
import * as ReactRouter from "react-router-dom";
import "@testing-library/jest-dom";

// jest.mock("../../page/HomePage", () => {
//   return <div data-testid="HomePage">HomePage</div>;
// });
jest.mock("../../page/HomePage", () => () => {
  const HomePage = () => <div data-testid="HomePage">HomePage</div>;
  return <HomePage />;
});
jest.mock("../../page/ProductPage", () => () => {
  const ProductPage = () => <div data-testid="ProductPage">ProductPage</div>;
  return <ProductPage />;
});
jest.mock("../../page/CartPage", () => () => {
  const CartPage = () => <div data-testid="CartPage">CartPage</div>;
  return <CartPage />;
});
jest.mock("../../page/DetailPage", () => () => {
  const DetailPage = () => <div data-testid="DetailPage">DetailPage</div>;
  return <DetailPage />;
});
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));
describe("test router", () => {
  afterEach(cleanup);
  test("WHEN user is in index route(/) THEN render HomePage component", () => {
    window.history.pushState({}, "", "/");
    render(
      <Provider store={store}>
        <RouteApp />
      </Provider>
    );
    expect(screen.getByTestId("HomePage")).toBeInTheDocument();
  });
  test("WHEN user is in index route(/products) THEN render ProductPage component", () => {
    window.history.pushState({}, "", "/products");
    render(
      <Provider store={store}>
        <RouteApp />
      </Provider>
    );
    expect(screen.getByTestId("ProductPage")).toBeInTheDocument();
  });
  test("WHEN user is in index route(/cart) THEN render CartPage component", () => {
    window.history.pushState({}, "", "/cart");
    render(
      <Provider store={store}>
        <RouteApp />
      </Provider>
    );
    expect(screen.getByTestId("CartPage")).toBeInTheDocument();
  });
  test("WHEN user is in index route(/detail/1) THEN render DetailPage component", () => {
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({ id: 1 });
    window.history.pushState({}, "", "/products/1");
    render(
      <Provider store={store}>
        <RouteApp />
      </Provider>
    );
    expect(screen.getByTestId("DetailPage")).toBeInTheDocument();
  });
});
