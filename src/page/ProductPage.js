import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/Shop/ProductItem";

const ProductPage = () => {
  const apiProduct = useSelector((state) => state.api.apiList.products);
  const [filter, setFilter] = useState(apiProduct);

  const filterProduct = (category) => {
    const updateProductList = apiProduct?.filter(
      (item) => item.category === category
    );
    setFilter(updateProductList);
  };
  const categoryList = ["smartphones", "laptops", "fragrances", "skincare"];

  return (
    <div className="container">
      <div className=" mb-5 py-5">
        <h1 className=" display-6 fw-bolder text-center">Latest Products</h1>
      </div>
      <div className="row ">
        <div className="d-flex justify-content-center">
          <buton
            data-testid="btn-all"
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(apiProduct)}
          >
            All
          </buton>
          {categoryList?.map((category) => (
            <button
              data-testid={`data-${category}`}
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="row">
          {filter?.map((item) => {
            return (
              <div className="col-12 col-md-6 col-lg-3 gy-3">
                <ProductItem key={item.title} item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
