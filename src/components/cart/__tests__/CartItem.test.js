/* eslint-disable testing-library/no-render-in-setup */
import CartItem from "../CartItem";
import {
  render,
  screen,
  act,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { cartActions } from "../../../store/card-slice";
import { Provider } from "react-redux";
import { store } from "../../../store/index";
import * as Redux from "react-redux";
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));
const mockData = [
  {
    id: 1,
    quantity: 1,
    title: "iPhone 9",
    price: 549,
    image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  },
  {
    id: 2,
    quantity: 1,
    title: "iPhone X",
    price: 6000,
    image: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  },
];
describe("CartItem", () => {
  const renderCartItem = () => {
    render(
      <Provider store={store}>
        {mockData.map((item) => (
          <CartItem key={item.title} item={item} />
        ))}
      </Provider>
    );
  };
  afterEach(cleanup);
  it("test click - button  dispatch decrementQuantity action", async () => {
    const mockDispatch = jest.spyOn(cartActions, "decrementQuantity");
    const mockUseDispatch = jest.spyOn(Redux, "useDispatch");
    mockUseDispatch.mockReturnValue(mockDispatch);
    renderCartItem();
    const buttonDecreasement = screen.getByTestId("btn-decrease-1");
    const quantity = screen.getByTestId("quantity-1");
    //action
    fireEvent.click(buttonDecreasement);

    //assert
    expect(quantity.textContent).toEqual("1");
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({
        type: "cart/decrementQuantity",
        payload: 1,
      });
    });
  });
  it("test click + button  dispatch incrementQuantity action", async () => {
    const mockDispatch = jest.spyOn(cartActions, "incrementQuantity");
    const mockUseDispatch = jest.spyOn(Redux, "useDispatch");
    mockUseDispatch.mockReturnValue(mockDispatch);
    renderCartItem();
    const buttonIncreasement = screen.getByTestId("btn-increase-1");
    const quantity = screen.getByTestId("quantity-1");
    //action
    fireEvent.click(buttonIncreasement);

    //assert
    expect(quantity.textContent).toEqual("1");
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({
        type: "cart/incrementQuantity",
        payload: 1,
      });
    });
  });

  it("test click x button dispatch removeItem action", async () => {
    const mockDispatch = jest.spyOn(cartActions, "removeItem");
    const mockUseDispatch = jest.spyOn(Redux, "useDispatch");
    mockUseDispatch.mockReturnValue(mockDispatch);
    renderCartItem();
    const buttonRemove = screen.getByTestId("btn-remove-1");
    //action
    fireEvent.click(buttonRemove);

    //assert
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({
        type: "cart/removeItem",
        payload: 1,
      });
    });
  });
});
