import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../NavBar";
import { Provider } from "react-redux";
import { store } from "../../../store/index";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

const renderNav = () => {
  render(
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>
  );
};
test("UI navbar should be render", () => {
  render(renderNav());
  const navLogo = screen.getByRole("link", { name: "site icon guxxi" });
  expect(navLogo).toBeInTheDocument();

  const listItem = screen.getAllByRole("listitem");
  expect(listItem).toHaveLength(3);

  const cartIcon = screen.getByRole("link", { name: "0" });
  expect(cartIcon).toBeInTheDocument();
});

test("nav link should be nagigate correctly", () => {
  render(renderNav());

  const navLogo = screen.getByRole("link", { name: "site icon guxxi" });
  fireEvent.click(navLogo);
  expect(navLogo).toHaveAttribute("href", "/");

  const navHome = screen.getByRole("link", { name: /home/i });
  fireEvent.click(navHome);
  expect(navHome).toHaveAttribute("href", "/");

  const navProduct = screen.getByRole("link", { name: /product/i });
  fireEvent.click(navProduct);
  expect(navProduct.href).toBe("http://localhost/products");

  const navCartIcon = screen.getByRole("link", { name: "0" });
  fireEvent.click(navCartIcon);
  expect(navCartIcon.href).toBe("http://localhost/cart");
});
