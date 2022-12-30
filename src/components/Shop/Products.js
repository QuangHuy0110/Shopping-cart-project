import ProductItem from "./ProductItem";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./product.css";
import { apiActions } from "../../store/api-slice";
import { useDispatch } from "react-redux";

const Products = (props) => {
  const [products, setProduct] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const url = `https://dummyjson.com/products`;
    const getData = async () => {
      await axios.get(url).then((response) => {
        setProduct(response.data);
        dispatch(apiActions.addApiToStorage(response.data));
      });
    };
    getData();
  }, []);
  const relatedProducts = products.products?.slice(0, 8);
  return (
    <section className="container my-4">
      <h1 className="text-center">Latest Products</h1>
      <hr className="mx-auto text-dark" />
      <div className="row">
        {products &&
          relatedProducts?.map((item) => (
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-3 g-3"
              key={item.id}
            >
              <ProductItem key={item.id} item={item} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Products;
