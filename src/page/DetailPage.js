import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/card-slice";
import Toast from "../components/toast/Toast";

const DetailPage = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [isAdd, setAdd] = useState(null);
  const dispatch = useDispatch();
  const apiProduct = useSelector((state) => state.api.apiList.products);
  const cartList = useSelector((state) => state.cart.items);

  useEffect(() => {
    apiProduct?.forEach((product) => {
      if (product.id === parseInt(id)) {
        setDetail(product);
      }
    });
  }, [id]);

  const addToCartHandler = () => {
    if (!cartList.find((item) => item.id === detail.id)) {
      dispatch(
        cartActions.addToCart({
          id: detail.id,
          title: detail.title,
          price: detail.price,
          image: detail.thumbnail,
        })
      );

      setAdd(true);
    } else {
      setAdd(false);
    }
    setTimeout(() => setAdd(null), 3000);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="toastItem">
          <Toast visible={isAdd} />
        </div>
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={detail.thumbnail}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-between align-items-center">
                <div className="small mb-1">Brand: {detail.brand}</div>
                <div className="small mb-1">Category: {detail.category}</div>
              </div>
              <h1 className="display-5 fw-bolder">{detail.title}</h1>
              <div className="fs-5 mb-1">
                <span>Price: ${detail.price}</span>
              </div>
              <p className="lead">Description: {detail.description}</p>
              <div className="d-flex">
                <div className="fs-7 mb-1">
                  <span>Rating: {detail.rating}</span>
                </div>
                <div className="fs-7 ms-3">
                  <span>Availabe: {detail.stock}</span>
                </div>
              </div>
              <div className="d-flex">
                <button
                  data-testid="btn-add-to-cart"
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  onClick={addToCartHandler}
                >
                  <i className="bi-cart-fill me-1" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="row justify-content-center gy-3">
            <ShowProducts />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
