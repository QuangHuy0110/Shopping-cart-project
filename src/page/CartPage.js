import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { countTotalPrice } from "../service/index";
import CartItem from "../components/cart/CartItem";
import Form from "../components/form/Form";
import { cartActions } from "../store/card-slice";
const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [totalPrice, setToTalPrice] = useState(0);

  useEffect(() => {
    setToTalPrice(countTotalPrice(cartItems));
  }, [cartItems]);
  const navigate = useNavigate();
  return (
    <>
      <div className="table-responsive container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="col-3 text-center">
                Products
              </th>
              <th scope="col" className="text-center">
                Quantity
              </th>
              <th scope="col" className="text-center">
                Price
              </th>
              <th scope="col" className="text-center">
                Total Price
              </th>
              <th scope="col" className="text-center">
                &nbsp;
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item) => {
              return <CartItem key={item.title} item={item} />;
            })}
          </tbody>
        </table>
      </div>
      <div className="container d-flex justify-content-between ">
        <button
          data-testid="btn-back"
          onClick={() => navigate("/products")}
          className="btn bg-grey"
        >
          Back to shopping
        </button>
        <div className="d-flex flex-column align-items-end">
          <h3>Total Amount: {totalAmount} (items)</h3>
          <h3>Total Price: ${totalPrice}</h3>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Check out
          </button>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Form registration
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartPage;
