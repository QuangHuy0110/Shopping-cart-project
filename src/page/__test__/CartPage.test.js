import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartPage from "../CartPage";
import { Provider } from "react-redux";
import { store } from "../../store/index";
import * as Redux from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
const mockCartList = [
  {
    id: 1,
    title: "abc",
    price: 100,
    quantity: 2,
    image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  },
  {
    id: 2,
    title: "def",
    price: 200,
    quantity: 1,
    image: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  },
];
describe("test cart page", () => {
  const useSelectorMock = jest.spyOn(Redux, "useSelector");
  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it("render cartpage", async () => {
    useSelectorMock
      .mockReturnValueOnce(mockCartList)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(mockCartList)
      .mockReturnValueOnce(2);
    render(
      <Provider store={store}>
        <Router>
          <CartPage />
        </Router>
      </Provider>
    );
    expect(screen.getByTestId("btn-back")).toBeInTheDocument();
    await fireEvent.click(screen.getByTestId("btn-back"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/products");
  });
});
