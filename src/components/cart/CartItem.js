import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/card-slice";
import { countItemPrice } from "../../service/index";
const CartItem = ({ item }) => {
  const { id, image, title, price, quantity } = item;
  const dispatch = useDispatch();
  return (
    <>
      <tr>
        <td className=" align-middle">
          <div className="d-flex justify-content-between align-items-center">
            <img
              src={image}
              className="img-responsive rounded-3 w-25 h-25"
              alt="..."
            />
            <p className="mb-2">{title}</p>
          </div>
        </td>
        <td className="align-middle">
          <div className="d-flex align-items-center">
            <button
              data-testid={`btn-decrease-${id}`}
              className="btn btn-link px-2"
              onClick={() => {
                dispatch(cartActions.decrementQuantity(id));
              }}
            >
              <i className="fas fa-minus" />
            </button>
            <span data-testid={`quantity-${id}`}>{quantity}</span>
            <button
              data-testid={`btn-increase-${id}`}
              className="btn btn-link px-2"
              onClick={() => {
                dispatch(cartActions.incrementQuantity(id));
              }}
            >
              <i className="fas fa-plus" />
            </button>
          </div>
        </td>
        <td className="align-middle">
          <p className="mb-0" style={{ fontWeight: 500 }}>
            ${price}
          </p>
        </td>
        <td className="align-middle">
          <p className="mb-0 t" style={{ fontWeight: 500 }}>
            ${countItemPrice(quantity, price)}
          </p>
        </td>
        <td className="align-middle">
          <i
            style={{ cursor: "pointer" }}
            data-testid={`btn-remove-${id}`}
            className="fas fa-times"
            onClick={() => {
              dispatch(cartActions.removeItem(id));
            }}
          />
        </td>
      </tr>
    </>
  );
};

export default CartItem;
